const BG_GREEN = '../../Images/Background_Green.png';
function DrawCanvas(){
  
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext('2d');
  
  const canvasParent = document.getElementById("canvas-parent");
  
  
  canvas.width = 1200;
  canvas.height = 800;  
  canvas.classList.add("canvas");
  canvasParent.onload = canvasParent.appendChild(canvas);
}
document.getElementById("canvas-parent").onload = DrawCanvas();
