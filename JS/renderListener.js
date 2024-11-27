

const FPS = 1000 / 60;


window.onload = ()=>{
  //orders is important !!..!!..!!..!!;
  
  CreateNavigationBar();
  createOptions(); 
  DrawCanvas();
};

//main thread. why it is not in the ;
const onTickInterval = setInterval(()=>OnTick(), FPS);

const startTime = Date.now();

const worker = new Worker('../JS/Utilts/WorkerDeltaTime.js');

//our own mthrfckr deltaTime and Update methods. Who do fuck need react ?;
function OnTick(){
  worker.postMessage(startTime);
  worker.onmessage = (e) =>{
    console.log(e.data);
  }
}