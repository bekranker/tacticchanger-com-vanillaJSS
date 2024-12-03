let DrawingRectangle = false;
let canDrawRectangle = false;
let reSize = false;
let currentRectangle = null;

class RectangleComponent{
  constructor(positions, size, colors, name){
    this.positions = positions;
    this.size = size;
    this.colors = colors;
    this.name = name;
  }
  renderMe = (e, rect)=>{
    this.clearMe(e, rect);
    this.drawMe(e, rect);
  }
  drawMe = ()=>{
    ctx.beginPath();
    ctx.rect(this.positions.x, this.positions.y, this.size.x, this.size.y);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.lineWidth = this.size.x;
  }
  // call thart when you need to resize rectangle
  reSizeMe = (e)=>{
    if (!reSize) return;
    console.log("sa");
    this.size.x = Math.abs(this.positions.x - e.x);
    this.size.y = Math.abs(this.positions.y - e.y);
    this.renderMe(e, rect);
  }
  clearMe = (e, rect)=>{
    ctx.clearRect(this.positions.x, this.positions.y, this.size.x , this.size.y );
  }
}

function startDrawingRectangle(e){
  canDrawRectangle = true;
  reSize = true;
  currentRectangle = new RectangleComponent(MousePos(e, rect), {x: 1, y: 1}, "Rectangle");
  currentRectangle.drawMe(e, rect);
};
function drawingRectangle(e, rect){
  if(!canDrawRectangle) return;
  currentRectangle.reSizeMe(MousePos(e, rect));
}

function endDrawingRectangle(e){
  reSize = false;
  canDrawRectangle = false;
};
