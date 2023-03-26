let changing = false;
let openDiv = false;
let menuArrivedTop = false;
let imgLogoHide = false;
let loadSentenceOnce = false;
let slideIndex = 1;
let counter = 0;
sessionStorage.loaded;
sessionStorage.sentenceFinal;
sessionStorage.inputCursor;

function navigate(page) {
  window.location.href = page;
}

function turnOffMain() {
  noMain = true;
  let imgMenuTop = document.getElementById("logoMenuTop");
  let topmenu = document.getElementById("nav");
  if (document.body.clientWidth > 768) {
    menuArrivedTop = true;
    imgMenuTop.style.display = "flex";
    imgMenuTop.style.width = "60px";
    topmenu.style.justifyContent = "left";
  }
}

function writeSentence() {
  let newSentence = [];
  let sentence = document.getElementById("sentence");
  let textSentence = sentence.innerHTML;
  let sentenceSplit = textSentence.split(" ");
  for (let i = 0; i < sentenceSplit.length + 1; i++) {
    if (i < sentenceSplit.length) {
      if (sentenceSplit[i] != "") {
        let clearS = sentenceSplit[i].replace("\n", "");
        if (clearS != "") {
          newSentence.push(clearS);
        }
      }
    } else {
      for (let j = 0; j < newSentence.length; j++) {
        if (j == 0) {
          sessionStorage.inputCursor = newSentence[j];
        } else if (j == 1) {
          sessionStorage.sentenceFinal = newSentence[j];
        } else {
          sessionStorage.sentenceFinal =
            sessionStorage.sentenceFinal + " " + newSentence[j];
        }
      }
    }
  }
}

function load() {
  console.log(sessionStorage.loaded);
  showSlides(slideIndex);
  writeSentence();
  topNavigation();
  let initialScaleEarth = 1;
  let finalScaleEarth = 2;
  let scaleBackgroundEarth = 1;
  let factorGrow = 0.001;
  let timeOK = 100;
  let growScale = true;
  let backgroundEarth = document.getElementById("earth");
  factor = setInterval(setBackgroundEarth, timeOK);
  function setBackgroundEarth() {
    if (scaleBackgroundEarth < finalScaleEarth && growScale) {
      backgroundEarth.style.transform = "scale(" + scaleBackgroundEarth + ")";
      scaleBackgroundEarth = scaleBackgroundEarth + factorGrow;
    } else if (scaleBackgroundEarth > finalScaleEarth) {
      growScale = false;
      backgroundEarth.style.transform = "scale(" + scaleBackgroundEarth + ")";
      scaleBackgroundEarth = scaleBackgroundEarth - factorGrow;
    } else if (
      scaleBackgroundEarth < finalScaleEarth &&
      scaleBackgroundEarth > initialScaleEarth &&
      !growScale
    ) {
      backgroundEarth.style.transform = "scale(" + scaleBackgroundEarth + ")";
      scaleBackgroundEarth = scaleBackgroundEarth - factorGrow;
    } else if (scaleBackgroundEarth < initialScaleEarth && !growScale) {
      clearInterval(factor);
    }
  }
}

window.onscroll = function () {
  //Function to hide open menu
  hideOpenMenu();
  //Adjust navigation menu when reaching top
  topNavigation();
  loadSentence();
};

function loadSentence() {
  if (!sessionStorage.loaded) {
    let sentence = document.getElementById("sentence");
    if (
      sentence.getBoundingClientRect().y < window.innerHeight &&
      !loadSentenceOnce
    ) {
      loadSentenceOnce = true;
      //Here will run the code to load sentence.

      let initialCursor = -20;
      let initialTime = 50;
      let sentenceText = "";
      id = setInterval(loadWordsSentence, initialTime);
      function loadWordsSentence() {
        if (initialCursor > -1) {
          if (initialCursor < sessionStorage.sentenceFinal.length) {
            sentenceText =
              sentenceText + sessionStorage.sentenceFinal[initialCursor];
            sentence.innerHTML = sentenceText + sessionStorage.inputCursor;
          } else {
            clearInterval(id);
            sessionStorage.loaded = true;
          }
        } else {
          sentence.style.display = "inline-block";
          sentence.innerHTML = sessionStorage.inputCursor;
        }
        initialCursor++;
      }
    }
  } else {
    if (
      sentence.getBoundingClientRect().y < window.innerHeight &&
      !loadSentenceOnce
    ) {
      sentence.innerHTML =
        sessionStorage.sentenceFinal + sessionStorage.inputCursor;
      sentence.style.display = "inline-block";
    }
  }
}

function topNavigation() {
  let imgMenuTop = document.getElementById("logoMenuTop");
  let topmenu = document.getElementById("nav");
  if (
    topmenu.getBoundingClientRect().y == 0 &&
    document.body.clientWidth > 768 &&
    !menuArrivedTop
  ) {
    menuArrivedTop = true;
    imgMenuTop.style.display = "flex";
    imgMenuTop.style.width = "60px";
    topmenu.style.justifyContent = "left";
  } else if (
    topmenu.getBoundingClientRect().y > 0 &&
    document.body.clientWidth > 768 &&
    menuArrivedTop
  ) {
    menuArrivedTop = false;
    topmenu.style.justifyContent = "center";
    imgMenuTop.style.display = "none";
  } else if (
    topmenu.getBoundingClientRect().y > 0 &&
    document.body.clientWidth > 768 &&
    !menuArrivedTop &&
    !imgLogoHide
  ) {
    imgLogoHide = true;
    imgMenuTop.style.display = "none";
  }
}

function hideOpenMenu() {
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
    id1 = setInterval(decrease, 2);
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
};

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image control
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  let dots = document.getElementsByClassName("dot");

  if (n < 1) {
    slideIndex = slides.length;
  }

  if (n > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
