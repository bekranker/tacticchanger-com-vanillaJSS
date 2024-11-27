
//you can select your fps value. just simply change the 60 to what ever you want to;
const FPS = 1000 / 60;
let DeltaTime;

window.onload = ()=>{
  //orders is important !!..!!..!!..!!;
  
  CreateNavigationBar();
  createOptions(); 
  DrawCanvas();
};

//main thread;
const onTickInterval = setInterval(()=>OnTick(), FPS);

const startTime = Date.now();

const worker = new Worker('../JS/Utilts/WorkerDeltaTime.js');

//our own mthrfckr deltaTime and Update methods. Who do fuck need react ?;
function OnTick(){
  
  //delta time cal. from the back thread;
  worker.postMessage(startTime);
  worker.onmessage = (e) =>{
    DeltaTime = e.data;
  }


}