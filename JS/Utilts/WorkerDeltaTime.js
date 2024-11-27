onmessage = function(e){
  e.currentTime = Date.now();
  /*
   * guess what this variable does o_o
  */
  const deltaTime = (e.currentTime - e.startTime) / 1000;
  this.postMessage(deltaTime);
}