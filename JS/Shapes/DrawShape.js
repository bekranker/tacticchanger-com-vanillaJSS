let DrawingShapes = false;
let reSize = false;
let currentShape = null;
let DrawingRectangle, DrawingCircle, DrawingLine, DrawingArrow, DrawingDashedRectangle, DrawingDashedCircle, DrawingDashedLine, DrawingDashedArrow;

const shapes = [];
let index = 0;

function startDrawingShape(e, rect){
  if(!DrawingShapes) return;

  reSize = true;
  const mousePos = MousePos(e, rect);
  currentShape = createComponent(mousePos);
  console.log(currentShape);
  
  currentShape.startPosition = mousePos;
  currentShape.drawMe();
};
function drawingShape(e, rect){
  if (!reSize) return;
  currentShape.reSizeMe(MousePos(e, rect));
}

function endDrawingShape(){
  if (!shapes.includes(currentShape)) {
    shapes.push(currentShape);
  }
  reSize = false;
  currentShape = null;
};

createComponent = (mousePos)=>{
  index++;
  if (DrawingRectangle) {
    return new RectangleComponent(mousePos, {x: 1, y: 1}, {backgroundColor: 'black', borderColor: 'black'}, `Shape-${index}`, mousePos);
  }
  else if (DrawingCircle) {
    return new CircleComponent(mousePos, {x: 1, y: 1}, {backgroundColor: 'black', borderColor: 'black'}, `Shape-${index}`, mousePos);
  }
}