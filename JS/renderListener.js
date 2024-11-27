const FPS = 1000 / 60;


window.onload = ()=>{
  CreateNavigationBar(); createOptions(); DrawCanvas();
};
const onTickInterval = setInterval(()=>OnTick(), FPS);

const frameProp = {
  startTime: Date.now(),
  currentTime: 0,
}
let deltaTime = 0;

//our own mthrfckr deltaTime and Update methods. Who do fuck need react ?
function OnTick(){
  frameProp.currentTime = Date.now();
  deltaTime = (frameProp.currentTime - frameProp.startTime) / 1000;
  console.log(deltaTime);
}