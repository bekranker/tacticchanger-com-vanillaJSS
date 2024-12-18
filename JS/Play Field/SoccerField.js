const BG_GREEN = "../../Images/Background_Green.png";
let ctx;
let rect;
let canvas;
let HoldingMouseButton = false;
let holdingPlayer;
const Players = [];
// This is the main call for all render and create seccions;
function DrawCanvas() {
  canvas = document.createElement("canvas");
  ctx = canvas.getContext("2d");

  canvas.width = 1200;
  canvas.height = 800;
  canvas.classList.add("canvas");

  const canvasParent = document.getElementById("canvas-parent");
  canvasParent.appendChild(canvas);
  rect = canvas.getBoundingClientRect();
  drawPlayers();
  document.querySelector(".canvas").onload = () => {
    console.log("canvas loaded");
  };

  canvas.onmousedown = (e) => {
    StartDrawing(e);
    startDrawingShape(e);
    HoldAnObject(e);
    HoldingMouseButton = true;
  };
  canvas.onmouseup = () => {
    StopDrawing();
    endDrawingShape();
    holdingPlayer = null;
    HoldingMouseButton = false;
  };
  canvas.onmousemove = (e) => {
    drawingShape(e);
    DrawPencils(e);
    movePlayer(e);
    erase(e);
  };
}
function drawPlayers() {
  for (let i = 1; i <= 12; i++) {
    const newPlayer = new Player(
      { x: i * 90, y: 30 },
      15,
      { backgroundColor: "#242834", borderColor: "#717485" },
      `Player ID${i}`
    );
    newPlayer.render();
    Players.push(newPlayer);
  }
}
// @param imagePath is a string that reperesent the image path bc why not;
function changeBackground(imagePath) {
  const bgElement = document.getElementById("bg");
  bgElement.src = imagePath;
}
function movePlayer(e) {
  if (
    holdingPlayer === null ||
    holdingPlayer === undefined ||
    !HoldingMouseButton
  )
    return;
  holdingPlayer.changePos(MousePos(e, rect));
}
