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

  changeBackground(BG_GREEN, ()=>{
    drawPlayers();
    document.addEventListener('click', (e)=>{
      DrawPencils(e, rect);
    });
  } );
}
function drawPlayers(){
  for (let i = 1; i <= 12; i++) {
    const newPlayer = new Player({x: i * 10, y: 10}, 10, {backgroundColor: "#000000", borderColor: "#ffffff"}, `Player ID${i}`);
  }
}
// @param imagePath is a string that reperesent the image path bc why not;
function changeBackground(imagePath, callback) {
  const bgImage = new Image(); // Create a new image element
  bgImage.src = imagePath;
  bgImage.onload = () => {
    // Draw the background when the image has loaded
    ctx.drawImage(bgImage, 0, 0, ctx.canvas.width, ctx.canvas.height);
    if (callback) callback();
  };
}
