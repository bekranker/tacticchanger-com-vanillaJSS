class LineComponent{
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
    ctx.moveTo(this.startPosition.x, this.startPosition.y);
    ctx.lineTo(this.positions.x, this.positions.y);
    ctx.lineWidth = this.size.x;
    ctx.strokeStyle = this.colors.borderColor;
    ctx.stroke();
  }
  // call thart when you need to resize rectangle;
  reSizeMe = (e)=>{
    console.log("Line is resizing");
    this.positions = e;
    this.renderMe();
  }
  clearMe = ()=>{
    ctx.clearRect(0,0, canvas.width, canvas.height);
  }
}
