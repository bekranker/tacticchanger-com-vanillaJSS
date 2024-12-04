const WHITE_BG_URL = '../Images/Background_White.png';
const GREEN_BG_URL = '../Images/Background_Green.png';



const Elements = [
  {
    name: "Backgrounds",
    panelItems: 
    [
      {
        name: "Green",
        functionalty: ()=>{changeBackground(GREEN_BG_URL)
          DrawingShapes = false;
        }
      },
      {
        name: "White",
        functionalty: ()=>{
          changeBackground(WHITE_BG_URL)
          DrawingShapes = false;
        }
      }
    ]
  },
  {
    name: "Pencil",
    panelItems: 
    [
      {
        name: "Pen",
        functionalty: ()=>{
          CanDraw = !CanDraw;
          CanErase = false;
          DrawingShapes = false;
        }
      },
      {
        name: "Erase",
        functionalty: ()=>{
          CanErase = !CanErase;
          CanDraw = false;
          DrawingShapes = false;
        }
      },
    ]
  },
  {
    name: "Shapes",
    panelItems: 
    [
      {
        name: "Rectangle",
        functionalty: ()=>{
          CanDraw = false;
          DrawingRectangle = !DrawingRectangle;
          DrawingShapes = DrawingRectangle ? true : false;
          DrawingCircle = false;
          DrawingLine = false;
          DrawingArrow = false;
          DrawingDashedRectangle = false;
          DrawingDashedCircle = false;
          DrawingDashedLine = false;
          DrawingDashedArrow = false;
        }
      },
      {
        name: "Circle",
        functionalty: ()=>{
          CanDraw = false;

          DrawingCircle = !DrawingCircle;
          DrawingShapes = DrawingCircle ? true : false;
          DrawingRectangle = false;
          DrawingLine = false;
          DrawingArrow = false;
          DrawingDashedRectangle = false;
          DrawingDashedCircle = false;
          DrawingDashedLine = false;
          DrawingDashedArrow = false;
        }
      },
      {
        name: "Arrow",
        functionalty: ()=>{
          CanDraw = false;

          DrawingArrow = !DrawingArrow;
          DrawingShapes = DrawingArrow ? true : false;
          DrawingRectangle = false;
          DrawingCircle = false;
          DrawingLine = false;
          DrawingDashedRectangle = false;
          DrawingDashedCircle = false;
          DrawingDashedLine = false;
          DrawingDashedArrow = false;
        }
      },
      {
        name: "Line",
        functionalty: ()=>{
          CanDraw = false;

          DrawingLine = !DrawingLine;
          DrawingShapes = DrawingLine ? true : false;
          DrawingRectangle = false;
          DrawingCircle = false;
          DrawingArrow = false;
          DrawingDashedRectangle = false;
          DrawingDashedCircle = false;
          DrawingDashedLine = false;
          DrawingDashedArrow = false;
        }
      }
    ]
  },
  {
    name: "Download",
    panelItems: 
    [
      {
        name: "JPEG",
        functionalty: ()=>{
          console.log("This is Red");
          DrawingShapes = false;
        }
      },
      {
        name: "PNG",
        functionalty: ()=>{
          console.log("This is Green");
          DrawingShapes = false;
        }
      },
    ]
  },
];

/* This lines of code just creating navigation buttons and panel's inside that buttons.
If you want to change some data (name, panel item's names etc.) check the @param Elements variable
*/
function CreateNavigationBar(){
  const parentNavDiv = document.querySelector(".navigation-bar");
  
  Elements.forEach((element)=>{

    
    const parentDivOfButtonAndPanel = document.createElement("div");
    parentDivOfButtonAndPanel.classList.add("nav-button-parent-div");
    parentNavDiv.appendChild(parentDivOfButtonAndPanel);

    //Navigation Element
    const newButton = document.createElement("button");
    
    newButton.classList.add("nav-bar-button");
    
    newButton.innerHTML = `${element.name}`;
    parentDivOfButtonAndPanel.appendChild(newButton);

    //we are initilaizng the inner panel for every navigation button.
    createLists(parentDivOfButtonAndPanel, element, parentDivOfButtonAndPanel);
  });
}
//element is the array that we take from buttons object props.
function createLists(parent, element, button){

  //we are creating the Panel UL
  let newUl = document.createElement("ul");
  //for styling with css
  newUl.classList.add("element-of-nav-bar-panel");

  //It's gonna take all items for every declared element (i.e panel items object like navigation button etc.)
  for(let i = 0; i < element.panelItems.length; i++){
    //creating the items in the panel
    let newLi = document.createElement("li");
    newLi.id = `${element.panelItems[i].name}-panel-item-${i}`;
    newLi.innerHTML = `${element.panelItems[i].name}`;
    newLi.onmousedown = ()=>{element.panelItems[i].functionalty();}
    newUl.appendChild(newLi);
  }
  button.onmouseenter = ()=>navBarEnter(newUl);
  button.onmouseleave = ()=>navBarExit(newUl);
  parent.appendChild(newUl);
}

// --------------------------------------------------------------------------------------------------------------------------
// ----------------------------Theese functions at the bellow are just simply for panel animation----------------------------
// --------------------------------------------------------------------------------------------------------------------------


//navigation element mouse enter function
function navBarEnter(panel){
  panel.style.display = "block";
}

//navigation element mouse exit function
function navBarExit(panel){
  panel.style.display = "none";
}
