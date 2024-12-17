class Player {
  constructor(positions, radius, colors, name) {
    this.position = positions;
    this.radius = radius;
    this.colors = colors;
    this.name = name;
    registerRenderer(this.render);
  }
  render = () => {
    this.clearMe();
    this.drawMe();
  };
  drawMe = () => {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.colors.backgroundColor; // Set player color
    ctx.strokeStyle = this.colors.borderColor; // Optional: Outline the player

    ctx.fill(); // Fill the circle
  };
  clearMe = () => {
    ctx.clearRect(
      this.position.x - this.radius,
      this.position.y - this.radius,
      this.radius * 2,
      this.radius * 2
    );
  };
}
