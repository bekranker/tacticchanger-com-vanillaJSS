let DrawingShapes = false;
let DrawingRectangle = false;
let canDrawRectangle = false;
let reSize = false;
let currentRectangle = null;

const rectangles = [];

class RectangleComponent{
  constructor(positions, size, colors, name, startPosition){
    this.positions = positions;
    this.size = size;
    this.colors = colors;
    this.name = name;
    this.startPosition = startPosition;
  }
  renderMe = ()=>{
    this.drawMe();
    this.clearMe();
  }
  drawMe = ()=>{
    ctx.beginPath();
    ctx.rect(this.positions.x, this.positions.y, this.size.x, this.size.y);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  // call thart when you need to resize rectangle;
  reSizeMe = ()=>{
    if (!reSize) return;
    console.log("sa");
    
    this.size.x = e.x - this.startPosition.x;
    this.size.y = e.y - this.startPosition.y;
    this.renderMe();
  }
  clearMe = ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function startDrawingRectangle(e, rect){
  if(!DrawingShapes) return;
  if(!DrawingRectangle) return;
  canDrawRectangle = true;
  reSize = true;
  const mousePos = MousePos(e, rect);
  currentRectangle = new RectangleComponent(mousePos, {x: 1, y: 1}, "Rectangle");
  currentRectangle.startPosition = mousePos;
  currentRectangle.renderMe();
};
function drawingRectangle(e, rect){
  if(!canDrawRectangle) return;
  currentRectangle.reSizeMe(MousePos(e, rect));
}

function endDrawingRectangle(){
  if (!rectangles.includes(currentRectangle)) {
    rectangles.push(currentRectangle);
  }
  reSize = false;
  canDrawRectangle = false;
};
