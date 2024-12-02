const BG_GREEN = '../../Images/Background_Green.png';

let ctx;
// This is the main call for all render and create seccions;
function DrawCanvas(){
  const canvas = document.createElement("canvas");
  const rect = canvas.getBoundingClientRect();
  ctx = canvas.getContext('2d');

  const canvasParent = document.getElementById("canvas-parent");

  canvas.width = 1200;
  canvas.height = 800;
  canvas.classList.add("canvas");
  canvasParent.appendChild(canvas);
  drawPlayers();
  canvas.onclick = (e)=>{DrawPencils(e, rect);
    erase(e, rect);};

  
}
function drawPlayers(){
  for (let i = 1; i <= 1; i++) {
    const newPlayer = new Player({x: i * 100, y: 10}, 10, {backgroundColor: "#000000", borderColor: "#ffffff"}, `Player ID${i}`);
  }
}
// @param imagePath is a string that reperesent the image path bc why not;
function changeBackground(imagePath) {
  const bgElement = document.getElementById('bg');
  bgElement.src = imagePath;
}