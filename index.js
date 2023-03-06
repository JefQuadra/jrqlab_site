window.onscroll = function () {
  myFunction();
};

function myFunction() {
  document.getElementById("hamburguer").className = "navbar-toggler collapsed";
  document.getElementById("hamburguer").ariaExpanded = false;
  document.getElementById("options-show").className =
    "navbar-collapse collapse";

  //if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
  //  console.log(document.getElementById("nav").scrollTop);
  //}
}

const showMenu = document.querySelector("[show-menu]");
showMenu.onclick = function (e) {
  if (document.getElementById("menu-options").className == "show-div") {
    let fontOpt = document.getElementsByClassName("menu-option");
    let initialSize = 16;
    id1 = setInterval(decrease, 15);
    function decrease() {
      if (initialSize == 0) {
        clearInterval(id1);
        document.getElementById("menu-options").className = "hidden-div";
      } else {
        for (let e of fontOpt) {
          e.style.fontSize = initialSize + "px";
        }
        initialSize = initialSize - 1;
      }
    }
  } else {
    document.getElementById("menu-options").className = "show-div";
    let fontOpt = document.getElementsByClassName("menu-option");
    let initialSize = 0;
    id2 = setInterval(grow, 15);
    function grow() {
      if (initialSize == 16) {
        clearInterval(id2);
      } else {
        for (let e of fontOpt) {
          e.style.fontSize = initialSize + "px";
        }
        initialSize = initialSize + 1;
      }
    }
  }
  //console.log(document.getElementsByClassName("menu-options").className);
};
