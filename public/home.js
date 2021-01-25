// ARROW 

var arrow = document.querySelector(".shop");

arrow.addEventListener("mouseenter", function () {
  document.querySelector(".arrow").classList.add("arrow2");
});

arrow.addEventListener("mouseleave", function () {
  document.querySelector(".arrow").classList.remove("arrow2");
});



var navbar = document.querySelectorAll(".navbar-items");

for (let i = 0; i < navbar.length; i++) {
  navbar[i].addEventListener("mouseenter", function () {
    this.classList.add("borderLine");
  });

  navbar[i].addEventListener("mouseleave", function () {
    this.classList.remove("borderLine");
  });
}

// TEXT CHANGE

let myGreenText = document.querySelector("#green-title")

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

// LOADING PAGE

window.addEventListener("load", function(){
  const loader = document.querySelector(".loader")

  loader.className += " hidden"

})


// SCROLL TEXT

  AOS.init();
