let boxes = document.querySelectorAll(".editBox");
let wrapper = document.querySelector(".wrapper");
let popUpDiv;


import {postData} from './fetching.js';




boxes.forEach(x => x.addEventListener("dblclick", (e) => {
 let currentValue = e.target.innerText;
 let id = e.target.id;
  popUp(currentValue, e.target, id);



}));




function popUp(currentValue, parentDiv, id) {

  popUpDiv = document.createElement("div");
  let popUpForm = document.createElement("form");
  let popUpLabel1 = document.createElement("label");
  let popUpLabel = document.createElement("label");
  let popUpBtn = document.createElement("button");
  let popUpTA = document.createElement("textarea");
  let closeBtn = document.createElement("div");
  popUpLabel.innerText = "Current value:";
  popUpLabel1.innerText = currentValue;
  popUpTA.value = currentValue;
  popUpBtn.innerText = "Save changes";
  closeBtn.innerText = "x";
  popUpLabel1.classList.add("label1");
  closeBtn.classList.add("closeBtn");
  popUpDiv.classList.add("popUpDiv");




  document.body.appendChild(popUpDiv);
  popUpDiv.appendChild(closeBtn);
  popUpDiv.appendChild(popUpForm);
  popUpForm.appendChild(popUpLabel);
  popUpForm.appendChild(popUpLabel1);
  popUpForm.appendChild(popUpTA);
  popUpForm.appendChild(popUpBtn);

  closeBtn.addEventListener("click",() => {
    closeForm();
  });

  popUpBtn.addEventListener("click",(e) => {
    e.preventDefault();
    saveChanges(popUpTA.value, parentDiv, id);

  }, {once:true});

  wrapper.addEventListener("click",() => {
    closeForm();
  }, {once:true});



}


function closeForm(){
  document.body.removeChild(popUpDiv);


}

// TODO: preventDefault and sned to DB
function saveChanges (currentValue, parentDiv, id) {

  updateLive(currentValue, parentDiv);
  postData('/api/post', currentValue, id);
  closeForm();
}


//update on current page but not DB
function updateLive(currentValue, parentDiv) {
  parentDiv.innerText = currentValue;
}
