// ARROW 

var arrow = document.querySelector(".shop");

arrow.addEventListener("mouseenter", function () {
  document.querySelector(".arrow").classList.add("arrow2");
});

arrow.addEventListener("mouseleave", function () {
  document.querySelector(".arrow").classList.remove("arrow2");
});

// NAVBAR 

var navbar = document.querySelectorAll(".navbar-items");

for (let i = 0; i < navbar.length; i++) {
  navbar[i].addEventListener("mouseenter", function () {
    this.classList.add("borderLine");
  });

  navbar[i].addEventListener("mouseleave", function () {
    this.classList.remove("borderLine");
  });
}

// TEXT CHANGE ON HOME TITLE

let myGreenText = document.querySelector("#green-title");

function changeText(){
  setTimeout(function(){ 
    myGreenText.innerHTML = "Explorez";
  setTimeout(function(){ 
      myGreenText.innerHTML = "Imaginez"
    }, 800);
  }, 800);
}

changeText()

/// BUTTON FOR SCROLL TOP

let buttonScrollTop = document.querySelector(".buttonScroll")
let rootElement = document.documentElement

function scrollTop (){
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

buttonScrollTop.addEventListener("click", scrollTop)

//  BUTTON APPEAR FOR SCROLL AT 90%

function handleScroll(){
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.50 ) {
    // Show button
    buttonScrollTop.classList.add("showBtn")
  } else {
    // Hide button
    buttonScrollTop.classList.remove("showBtn")
  }
}

document.addEventListener("scroll", handleScroll)


// LOADING PAGE WITH SETTIMEOUT

const loader = document.querySelector(".loader")
const titleLoader = document.querySelector(".title-loader")
const loaderGif = document.querySelector(".loader__gif")

function timeOut(){
  setTimeout(() => {
    loader.className += " hidden"
  }, 1000)
    setTimeout(() => {
      titleLoader.className += " hidden"
      // loaderGif.className += " hidden"
    },500);
};

timeOut()

// CARROUSEL
$(document).ready(function(){
    $('.card').slick({
      dots: false,
      infinite: true,
      speed: 3000,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
  autoplaySpeed: 6000,
    });
  });
