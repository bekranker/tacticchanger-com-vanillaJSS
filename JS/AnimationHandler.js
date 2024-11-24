import { addItem, getItem } from "./renderListener";


class Animation {
  
  constructor(startValue, endValue, duration) {
    this.duration = duration;
    this.endValue = endValue;
    this.startValue = startValue;
  }
  StartPoint(){
    addItem(this.Render());
  }
  Render(){
    
  }
}