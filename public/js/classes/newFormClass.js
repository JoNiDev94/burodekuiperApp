

export class Form{
  popUp(currentValue, parentDiv){
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
    closeBtn.addEventListener("click",() => {
      closeForm();
    });

    closeBtn.addEventListener("click",() => {
      saveChanges(popUpTA.innerText);
    }, {once:true});

    wrapper.addEventListener("click",() => {
      closeForm();
    }, {once:true});
    document.body.appendChild(popUpDiv);
    popUpDiv.appendChild(closeBtn);
    popUpDiv.appendChild(popUpForm);
    popUpForm.appendChild(popUpLabel);
    popUpForm.appendChild(popUpLabel1);
    popUpForm.appendChild(popUpTA);
    popUpForm.appendChild(popUpBtn);
  }




  closeForm(){
    document.body.removeChild(popUpDiv);


  }



  saveChanges (currentValue) {

    console.log(currentValue);
    closeForm();
  }




}
