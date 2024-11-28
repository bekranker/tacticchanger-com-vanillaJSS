class Player extends Component{
  constructor(positions,  radius, colors, name){
    super(positions);
    super(radius);
    super(colors);
    super(name);
    super(this.renderComponent);
  }
  render = (e)=>{
    this.drawMe();
  }
  drawMe = () =>{
    ctx.beginPath();
    ctx.arc(tihs.positions.x, this.position.y, this.radius, 0, 2 * Math.PI); // Draw a circle
    ctx.fillStyle = this.colors.backgroundColor; // Set player color
    ctx.fill(); // Fill the circle
    ctx.strokeStyle = this.colors.borderColor; // Optional: Outline the player
    ctx.lineWidth = 3;
    ctx.stroke(); // Stroke the circle
  }
}