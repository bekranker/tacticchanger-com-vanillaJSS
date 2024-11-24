const Elements = [
  {
    name: "Backgrounds",
    panelItems: 
    [
      {
        name: "Red",
        functionalty: ()=>{console.log("This is Red");}
      },
      {
        name: "Green",
        functionalty: ()=>{console.log("This is Green");}
      },
      {
        name: "Blue",
        functionalty: ()=>{console.log("This is Blue");}
      }
    ]
  },
  {
    name: "Pencil",
    panelItems: 
    [
      {
        name: "Pen",
        functionalty: ()=>{console.log("This is Red");}
      },
      {
        name: "Erase",
        functionalty: ()=>{console.log("This is Green");}
      },
    ]
  },
  {
    name: "Shapes",
    panelItems: 
    [
      {
        name: "Rectangle",
        functionalty: ()=>{console.log("This is Red");}
      },
      {
        name: "Circle",
        functionalty: ()=>{console.log("This is Green");}
      },
      {
        name: "Line",
        functionalty: ()=>{console.log("This is Blue");}
      }
    ]
  },
  {
    name: "Download",
    panelItems: 
    [
      {
        name: "JPEG",
        functionalty: ()=>{console.log("This is Red");}
      },
      {
        name: "PNG",
        functionalty: ()=>{console.log("This is Green");}
      },
    ]
  },
];



function CreateNavigationBar(){
  const parentNavDiv = document.querySelector(".navigation-bar");
  
  Elements.forEach((element)=>{
    const parentDivOfButtonAndPanel = document.createElement("div");
    parentDivOfButtonAndPanel.classList.add("nav-button-parent-div");
    parentNavDiv.appendChild(parentDivOfButtonAndPanel);

    const newButton = document.createElement("button");
    
    newButton.classList.add("nav-bar-button");
    
    newButton.innerHTML = `${element.name}`;
    parentDivOfButtonAndPanel.appendChild(newButton);

    createLists(parentDivOfButtonAndPanel, element);
  });
}
//element is the array that we take from buttons object props.
function createLists(Parent, element){
  let newUl = document.createElement("ul");
  newUl.style.listStyleType = "None";
  newUl.style.color = "#ffffff";
  newUl.style.position = "relative";
  for(let i = 0; i < element.panelItems.length; i++){
    let newLi = document.createElement("li");
    newLi.id = `${element.panelItems[i].name}-panel-item-${i}`;
    newLi.innerHTML = `${element.panelItems[i].name}`;
    newUl.appendChild(newLi);
  }
  Parent.appendChild(newUl);
}
function navBarEnter(){

}