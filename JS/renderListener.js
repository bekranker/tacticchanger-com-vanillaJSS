const _renderItems = [];
const _step = 60 / 1000;



export function addItem(newItem){
  if(_renderItems.includes(newItem)){
    console.log("It is all ready included");
    return;
  }
  _renderItems.push(newItem)
}
export function getItem(item){
  return _renderItems.find((value, index, array)=>{return value === item});
}