class CircleComponent{
  constructor(positions, size, colors, name, startPosition){
    this.positions = positions;
    this.size = size;
    this.colors = colors;
    this.name = name;
    this.startPosition = startPosition;
  }
  renderMe = ()=>{
    this.clearMe();
    this.drawMe();
  }
  drawMe = ()=>{
    ctx.beginPath();
    ctx.arc(this.positions.x, this.positions.y, this.size.x, 0, 2 * Math.PI);
    ctx.strokeStyle = this.colors.borderColor;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  // call thart when you need to resize rectangle;
  reSizeMe = (e)=>{
    console.log("Circle is resizing");
    this.size.x = e.x - this.startPosition.x;
    this.renderMe();
  }
  clearMe = ()=>{
    ctx.clearRect(0,0, canvas.width, canvas.height);
  }
}
