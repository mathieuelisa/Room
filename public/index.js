//////////////////////// Highlighting navbar ///////////////////////////////////////

var navbar = document.querySelectorAll(".navbar-items")

for (let i = 0; i < navbar.length; i++) {
   navbar[i].addEventListener("mouseenter", function(){
       this.classList.add("borderLine")
   });

   navbar[i].addEventListener("mouseleave", function(){
    this.classList.remove("borderLine")
});
};

////////////////////// Highlighting ShopNow ////////////////////////////////////


// var shopNow = document.querySelectorAll("#shopnow")

// for (let i = 0; i < shopNow.length; i++) {
//    shopNow[i].addEventListener("mouseenter", function(){
//        this.classList.add("borderLine2")
//    });

//    shopNow[i].addEventListener("mouseleave", function(){
//     this.classList.remove("borderLine2")
// });
// };

///////////////////// Movement cursor Shopnow /////////////////////////////////////

var arrow = document.querySelector(".shop")

arrow.addEventListener("mouseenter", function(){
    document.querySelector(".arrow").classList.add("arrow2")
})

arrow.addEventListener("mouseleave", function(){
    document.querySelector(".arrow").classList.remove("arrow2")
})