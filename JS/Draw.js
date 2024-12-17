let marks = [];
let CanDraw = false;
let CanErase = false;
let StartPosition = { x: 0, y: 0 };
const offset = 50;

class DrawPenc {
  constructor(positions, radius, colors, name) {
    this.position = positions;
    this.radius = radius;
    this.colors = colors;
    this.name = name;
  }
  render = (e) => {
    this.drawMe(e, rect);
  };
  drawMe = (e) => {
    ctx.beginPath();
    const tempMousePosition = MousePos(e, rect);
    ctx.moveTo(StartPosition.x, StartPosition.y);
    ctx.lineTo(tempMousePosition.x, tempMousePosition.y);
    StartPosition = MousePos(e, rect);
    const startPosition = StartPosition;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke(); // Stroke the circle
  };
  clearMe = (e) => {
    const tempPos = mouse.mousePosition;
    ctx.clearRect(tempPos.x, tempPos.y, 20, 20);
  };
}

function DrawPencils(e) {
  if (!CanDraw) return;
  if (!startDrawing) return;

  const tempMark = new DrawPenc(
    MousePos(e, rect),
    1,
    { backgroundColor: "#000000", borderColor: "#ffffff" },
    `mark`
  );
  tempMark.render(e, rect);
  if (!marks.includes(tempMark)) {
    marks.push(tempMark);
  }
}
function erase(e) {
  if (!CanErase) return;
  if (!startDrawing) return;
  if (CanDraw) return;

  const tempMousePos = MousePos(e, rect);
  ctx.clearRect(tempMousePos.x, tempMousePos.y, 10, 10);
}

let startDrawing = false;

function StartDrawing(e) {
  StartPosition = MousePos(e, rect);
  startDrawing = true;
}
function StopDrawing() {
  startDrawing = false;
}
