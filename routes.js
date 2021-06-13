const express = require("express");
const router = express.Router();

router.get("/home", function(req,res){
    res.render("home")
})

.get("/about", function(req,res){
    res.render("about")
})

.get("/contact", function(req,res){
    res.render("contact")
})

.get("/mentions", function(req,res){
    res.render("mentions")
})

.post("/contact", function(req,res){
   let firstName = req.body.nom
   let lastName =  req.body.prenom
   let numberTel = req.body.tel
   let mail = req.body.mail
   let message = req.body.comments

    const client = new Client ({
        nom: firstName,
        prenom: lastName,
        tel: numberTel,
        mail: mail,
        message: message
    })  
        client.save();
        res.redirect("home")

   console.log(`You have a new user: ${firstname} ${lastName}`)
})

module.exports = router;