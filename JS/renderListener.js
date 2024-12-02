
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
let rendererList = [];
//our own mthrfckr deltaTime and Update methods. Who do fuck need react ?;
function OnTick(){
  
  //delta time cal. from the back thread;
  worker.postMessage(startTime);
  worker.onmessage = (e) =>{
    DeltaTime = e.data;
  }
  rendererList.forEach((item)=>{
    item();
  });
}

//add some objects to each frame for rendering
function registerRenderer(arr){
  //if its not in the renderer already dont register it again. 
  if(!rendererList.includes(arr))
    rendererList.push(arr);
}

function Delete(value){
  rendererList = rendererList.filter((item, _)=>(item !== value));
  console.log(value);
}