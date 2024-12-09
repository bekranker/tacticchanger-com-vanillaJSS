const BG_GREEN = '../../Images/Background_Green.png';
let ctx;
let rect;
let canvas;
// This is the main call for all render and create seccions;
function DrawCanvas(){
  canvas = document.createElement("canvas");
  ctx = canvas.getContext('2d');
  canvas.width = 1200;
  canvas.height = 800;
  canvas.classList.add("canvas");
  
  const canvasParent = document.getElementById("canvas-parent");
  canvasParent.appendChild(canvas);
  rect = canvas.getBoundingClientRect();

  
  drawPlayers();
  document.querySelector(".canvas").load = ()=>{console.log("canvas loaded");}

  canvas.onmousedown = (e) => {
    StartDrawing(e);
    startDrawingShape(e);
  }
  canvas.onmouseup = (e) => {
    StopDrawing(e);
    endDrawingShape();
  }
  canvas.onmousemove = (e)=>{
    drawingShape(e);
    DrawPencils(e);
    erase(e);
  };

  
}
function drawPlayers(){
  for (let i = 1; i <= 12; i++) {
    const newPlayer = new Player({x: i * 100, y: 10}, 10, {backgroundColor: "#000000", borderColor: "#ffffff"}, `Player ID${i}`);
  }
}
// @param imagePath is a string that reperesent the image path bc why not;
function changeBackground(imagePath) {
  const bgElement = document.getElementById('bg');
  bgElement.src = imagePath;
}