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

// SCROLL TEXT AND PICS WITH AOS 
<<<<<<< HEAD

AOS.init();

=======
>>>>>>> ddbf18ede9402c914fde2a2c06f513c71d4ffbaf

