/*
  This js file is charge the draggin players and finding their datas from the current location.
*/
function HoldAnObject(e) {
  Players.forEach((player) => {
    if (
      MousePos(e, rect).x >= player.position.x &&
      MousePos(e, rect).x <= player.position.x + 30 &&
      MousePos(e, rect).y >= player.position.y &&
      MousePos(e, rect).y <= player.position.y + 30
    ) {
      holdingPlayer = player;
    }
  });
}
