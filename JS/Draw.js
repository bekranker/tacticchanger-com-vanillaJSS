let marks = [];
let CanDraw = false;
let CanErase = false;
const offset = 50;
class DrawPenc{
  constructor(positions,  radius, colors, name){
    this.position = positions;
    this.radius = radius;
    this.colors = colors;
    this.name = name;
    console.log(`X:${this.position.x}\n`);
    console.log(`Y:${this.position.y}\n`);
    registerRenderer(this.render);
  }
  render = ()=>{
    this.drawMe();
    console.log("I am in OnTick");
  }
  drawMe = () =>{
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.colors.backgroundColor; // Set player color
    ctx.fill(); // Fill the circle
    ctx.strokeStyle = this.colors.borderColor; // Optional: Outline the player
    ctx.lineWidth = 3;
    ctx.stroke(); // Stroke the circle
  }
  clearMe = () =>{
    console.log("clear me is working");
    this.colors.backgroundColor = '#cccccc';
    this.colors.borderColor = '#cccccc';
    this.drawMe();
    Delete(this);
  }
}


function mousePos(e, rect){
  const tempPos = {x: 0, y: 0}
  tempPos.x = e.clientX - rect.left - 10;
  tempPos.y = e.clientY - rect.top - 130;
  return tempPos;
}
function DrawPencils(e, canvas){
  if(!CanDraw) return;
  const tempMark = new DrawPenc(mousePos(e, canvas), 1, {backgroundColor: "#000000", borderColor: "#000000"}, `mark`);
  if (!marks.includes(tempMark)) {
    marks.push(tempMark);
  }
}
function erase(e, rect){
  if (!CanErase) return;
  const tempMousePos = mousePos(e, rect);
  marks.forEach((item, index)=>{
    if ((tempMousePos.x >= item.position.x -offset &&
      tempMousePos.x <= item.position.x +offset &&
      tempMousePos.y >= item.position.y -offset &&
      tempMousePos.y <= item.position.y +offset)) 
      {
        item.clearMe();
        marks.splice(index);
      }
  });

}
