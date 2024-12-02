const marks = [];
let index = 0;

class DrawPenc{
  constructor(positions,  radius, colors, name){
    this.position = positions;
    this.radius = radius;
    this.colors = colors;
    this.name = name;
    console.log(`${this.position.x}`);
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
function DrawPencils(e){
  index++;
  const tempMark = new DrawPenc({x: e.x, y: e.y}, 1, {backgroundColor: "#000000", borderColor: "#000000"}, `mark`);
  if (!marks.includes(tempMark)) {
    marks.push(tempMark);
  }
}

const StartPoint={
  X:


};

