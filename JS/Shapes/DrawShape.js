//If we click any shape in panel;
let DrawingShapes = false;
let reSize = false;
//we need a global variable bc of resizing method;
let currentShape = null;

//I know It looks messy but I have to finish this tie bc I have 2 more project :((;
let componentName = "";

const shapes = [];

// for shape id;
let index = 0;

//starting draing shape, @param e is giving us reach to clientX and clientY variables;
function startDrawingShape(e) {
  if (!DrawingShapes) return;

  const mousePos = MousePos(e, rect);
  currentShape = createComponent(mousePos);

  reSize = currentShape != null;
  currentShape.startPosition = mousePos;
  currentShape.drawMe();
}

//This function calling every time on mouse move on the canvas, e still same;
function drawingShape(e) {
  if (!reSize) return;
  shapes.forEach((item) => {
    if (item !== null) item.clearMe();
  });
  currentShape.reSizeMe(MousePos(e, rect));
  marks.forEach((mark) => {
    if (mark !== null) mark.render(e);
  });
  shapes.forEach((item) => {
    if (item !== null) item.drawMe();
  });
}

//Finish drawing, e still same;
function endDrawingShape() {
  if (!shapes.includes(currentShape)) {
    shapes.push(currentShape);
  }
  ctx.save();
  reSize = false;
}

//creating shape;
createComponent = (mousePos) => {
  index++;
  if (componentName === "Rectangle") {
    return new RectangleComponent(
      mousePos,
      { x: 1, y: 1 },
      { backgroundColor: "black", borderColor: "black" },
      `Shape-${index}`,
      mousePos
    );
  } else if (componentName === "Circle") {
    return new CircleComponent(
      mousePos,
      { x: 1, y: 1 },
      { backgroundColor: "black", borderColor: "black" },
      `Shape-${index}`,
      mousePos
    );
  } else if (componentName === "Line") {
    return new LineComponent(
      mousePos,
      { x: 1, y: 1 },
      { backgroundColor: "black", borderColor: "black" },
      `Shape-${index}`,
      mousePos
    );
  }
};
