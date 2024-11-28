class Component{
  // @param positon is an object include {x: any, y: any}
  // @param size is an object include {x: any, y: any}
  // @param colors is an object include {backgroundColor: RGBA, borderColor: RGBA}

  constructor(position, size, colors, name){
    this.position = position;
    this.size = size;
    this.colors = colors;
    this.name = name;
    registerRenderer(this.renderComponent);
  }
  render = (e)=>{
    console.log(`$Rendering: {name}`);
    e();
  }
}