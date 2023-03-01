window.onscroll = function () {
  myFunction();
};

function myFunction() {
  document.getElementById("hamburguer").className = "navbar-toggler collapsed";
  document.getElementById("hamburguer").ariaExpanded = false;
  document.getElementById("options-show").className =
    "navbar-collapse collapse";

  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    console.log(document.getElementById("nav").scrollTop);
  }
}
