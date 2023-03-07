let changing = false;
let openDiv = false;

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  const showMenu = document.querySelector("[show-menu]");
  if (
    document.getElementById("menu-options").className == "show-div" &&
    changing == false &&
    openDiv == true
  ) {
    changing = true;
    let fontOpt = document.getElementsByClassName("menu-option");
    let initialSize = 16;
    let positionX = 0;
    id1 = setInterval(decrease, 5);
    function decrease() {
      if (initialSize == 0) {
        clearInterval(id1);
        document.getElementById("menu-options").className = "hidden-div";
        changing = false;
        openDiv = false;
      } else {
        for (let e of fontOpt) {
          e.style.fontSize = initialSize + "px";
          e.style.left = positionX + "px";
        }
        initialSize = initialSize - 1;
        positionX = positionX - 2;
      }
    }
  }
}

const showMenu = document.querySelector("[show-menu]");
showMenu.onclick = function (e) {
  //close div
  if (
    document.getElementById("menu-options").className == "show-div" &&
    changing == false &&
    openDiv == true
  ) {
    changing = true;
    let fontOpt = document.getElementsByClassName("menu-option");
    let initialSize = 17;
    let positionX = 0;
    id1 = setInterval(decrease, 5);
    function decrease() {
      if (initialSize == 0) {
        clearInterval(id1);
        document.getElementById("menu-options").className = "hidden-div";
        changing = false;
        openDiv = false;
      } else {
        for (let e of fontOpt) {
          e.style.fontSize = initialSize + "px";
          e.style.left = positionX + "px";
        }
        initialSize = initialSize - 1;
        positionX = positionX - 2;
      }
    }
    //open div
  } else if (
    document.getElementById("menu-options").className == "hidden-div" &&
    changing == false &&
    openDiv == false
  ) {
    changing = true;
    document.getElementById("menu-options").className = "show-div";
    let fontOpt = document.getElementsByClassName("menu-option");
    let initialSize = 0;
    let positionX = -30;
    id2 = setInterval(grow, 5);
    function grow() {
      if (initialSize == 17) {
        clearInterval(id2);
        changing = false;
        openDiv = true;
      } else {
        for (let e of fontOpt) {
          e.style.fontSize = initialSize + "px";
          e.style.left = positionX + "px";
        }
        initialSize = initialSize + 1;
        positionX = positionX + 2;
      }
    }
  }
  //console.log(document.getElementsByClassName("menu-options").className);
};
