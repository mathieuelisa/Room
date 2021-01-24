// SCROLL TEXT WITH SCROLL REVEAL

ScrollReveal().reveal('.pictures', {
  reset: true, delay: 700
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

// SCROLL TEXT

AOS.init();