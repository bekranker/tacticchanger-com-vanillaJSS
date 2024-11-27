const datas = [
  {
    name: "3-4-3",
    poses: [
      { pos: new Vector2(-565, 376) },
      { pos: new Vector2(-468, 240) },
      { pos: new Vector2(-468, 365) },
      { pos: new Vector2(-468, 520) },
      { pos: new Vector2(-80, 50) },
      { pos: new Vector2(-80, 280) },
      { pos: new Vector2(-80, 470) },
      { pos: new Vector2(-80, 707) },
      { pos: new Vector2(488, 296) },
      { pos: new Vector2(540, 388) },
      { pos: new Vector2(488, 482) },
    ],
  },
  {
    name: "4-2-2-2 DOS OOS POKY",
    poses: [
      { pos: new Vector2(-565, 376) },
      { pos: new Vector2(-463, 232) },
      { pos: new Vector2(-468, 520) },
      { pos: new Vector2(-292, 50) },
      { pos: new Vector2(-306, 685) },
      { pos: new Vector2(-285, 249) },
      { pos: new Vector2(-285, 446) },
      { pos: new Vector2(287, 230) },
      { pos: new Vector2(287, 482) },
      { pos: new Vector2(488, 296) },
      { pos: new Vector2(488, 482) },
    ],
  },
  {
    name: "4-2-3-1 DOS OOS WIDE",
    poses: [
      { pos: new Vector2(-579, 376) },
      { pos: new Vector2(-463, 232) },
      { pos: new Vector2(-468, 498) },
      { pos: new Vector2(-292, 50) },
      { pos: new Vector2(-306, 685) },
      { pos: new Vector2(-285, 249) },
      { pos: new Vector2(-284, 446) },
      { pos: new Vector2(278, 69) },
      { pos: new Vector2(308, 360) },
      { pos: new Vector2(289, 1080) },
      { pos: new Vector2(540, 368) },
    ],
  },
  {
    name: "4-2-4 DOS WIDE",
    poses: [
      { pos: new Vector2(-579, 376) },
      { pos: new Vector2(-463, 232) },
      { pos: new Vector2(-468, 498) },
      { pos: new Vector2(-292, 50) },
      { pos: new Vector2(-306, 685) },
      { pos: new Vector2(-285, 249) },
      { pos: new Vector2(-284, 446) },
      { pos: new Vector2(278, 69) },
      { pos: new Vector2(289, 673) },
      { pos: new Vector2(537, 329) },
      { pos: new Vector2(540, 416) },
    ],
  },
  {
    name: "4-3-2-1 DOS COS POKY",
    poses: [
      { pos: new Vector2(-579, 376) },
      { pos: new Vector2(-463, 232) },
      { pos: new Vector2(-468, 498) },
      { pos: new Vector2(-292, 50) },
      { pos: new Vector2(-306, 685) },
      { pos: new Vector2(-291, 356) },
      { pos: new Vector2(-81, 439) },
      { pos: new Vector2(-81, 262) },
      { pos: new Vector2(287, 230) },
      { pos: new Vector2(309, 504) },
      { pos: new Vector2(540, 368) },
    ],
  },
  {
    name: "4-3-3 DOS WIDE",
    poses: [
      { pos: new Vector2(-579, 376) },
      { pos: new Vector2(-463, 232) },
      { pos: new Vector2(-468, 498) },
      { pos: new Vector2(-292, 50) },
      { pos: new Vector2(-306, 685) },
      { pos: new Vector2(-291, 356) },
      { pos: new Vector2(-81, 439) },
      { pos: new Vector2(-81, 262) },
      { pos: new Vector2(278, 69) },
      { pos: new Vector2(289, 673) },
      { pos: new Vector2(540, 368) },
    ],
  },
  {
    name: "4-4-2",
    poses: [
      { pos: new Vector2(-579, 376) },
      { pos: new Vector2(-463, 232) },
      { pos: new Vector2(-468, 498) },
      { pos: new Vector2(-310, 50) },
      { pos: new Vector2(-302, 685) },
      { pos: new Vector2(-71, 687) },
      { pos: new Vector2(-82, 52) },
      { pos: new Vector2(-81, 439) },
      { pos: new Vector2(-81, 262) },
      { pos: new Vector2(537, 329) },
      { pos: new Vector2(540, 416) },
    ],
  },
  {
    name: "4-4-2 DIOMAND POKY",
    poses: [
      { pos: new Vector2(-579, 376) },
      { pos: new Vector2(-463, 232) },
      { pos: new Vector2(-468, 498) },
      { pos: new Vector2(-292, 50) },
      { pos: new Vector2(-306, 685) },
      { pos: new Vector2(-81, 439) },
      { pos: new Vector2(-81, 262) },
      { pos: new Vector2(-291, 356) },
      { pos: new Vector2(537, 329) },
      { pos: new Vector2(308, 360) },
      { pos: new Vector2(540, 416) },
    ],
  },
  {
    name: "5-2-1-2 DOS OOS",
    poses: [
      { pos: new Vector2(-579, 376) },
      { pos: new Vector2(-463, 232) },
      { pos: new Vector2(-468, 498) },
      { pos: new Vector2(-464, 343) },
      { pos: new Vector2(-292, 50) },
      { pos: new Vector2(-306, 685) },
      { pos: new Vector2(-285, 249) },
      { pos: new Vector2(-285, 446) },
      { pos: new Vector2(308, 360) },
      { pos: new Vector2(537, 329) },
      { pos: new Vector2(540, 416) },
    ],
  },
  {
    name: "5-2-2-1 DOS OOS",
    poses: [
      { pos: new Vector2(-579, 376) },
      { pos: new Vector2(-463, 232) },
      { pos: new Vector2(-468, 498) },
      { pos: new Vector2(-464, 343) },
      { pos: new Vector2(-292, 50) },
      { pos: new Vector2(-306, 685) },
      { pos: new Vector2(-285, 249) },
      { pos: new Vector2(-285, 446) },
      { pos: new Vector2(287, 230) },
      { pos: new Vector2(309, 504) },
      { pos: new Vector2(540, 368) },
    ],
  },
];




function createOptions(){
  const parent = document.querySelector(".input-select-tactic");
  
  datas.forEach(data => {
    let newOption = document.createElement("option");
    newOption.innerHTML = `${data.name}`;
    parent.appendChild(newOption);
  });
}