const marks = [];


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
}


function mousePos(e, rect){
  const tempPos = {x: 0, y: 0}
  tempPos.x = e.clientX - rect.left;
  tempPos.y = e.clientY - rect.top;
  return tempPos;
}
function DrawPencils(e, canvas){
  const tempMark = new DrawPenc(mousePos(e, canvas), 1, {backgroundColor: "#000000", borderColor: "#000000"}, `mark`);
  if (!marks.includes(tempMark)) {
    marks.push(tempMark);
  }
}
