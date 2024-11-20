let isOpen = false;
let interval;
let labelAnim;


function TaktikSelectionLabel(){  
  isOpen = !isOpen;
  
  const label = document.querySelector(".openedLabel");
  
  if (interval !== null | undefined) {
    clearInterval(interval);
  }
  
  renderAnim(label);
}
function renderAnim(label){
  labelAnim = new FadeInOutAnim(label);

  interval = setInterval(()=>{
    labelAnim.render();
  }, 20);
}
function FadeInOutAnim(label){
  this.startValue = 0;
  this.endValue = 0;
  this.dir = 0;
  if (isOpen) {
    this.startValue = 1;
    this.endValue = 0;
    this.dir = -.1;
  }
  else{
    this.dir = .1;
    this.endValue = 1;
    this.startValue = 0;
  }
  label.style.opacity = this.startValue;
  this.render = ()=>{
    label.style.opacity = this.startValue;
    if(label.style.opacity !== this.endValue)
      this.startValue += this.dir;
  }
}