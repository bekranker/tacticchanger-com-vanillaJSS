
/*
  Guess what, I dont even need delta Time :o;
*/

onmessage = (e)=>{
  //guess what this variable does o_o;
  const currentTime = Date.now();
  const startTime = e.data;
  const deltaTime = (currentTime - startTime) / 1000;
  postMessage(deltaTime);
}