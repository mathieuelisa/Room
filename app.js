const express = require ("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")
const mongoose = require('mongoose');


const app = express()

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/clientsRoomDB', 
{useNewUrlParser: true, useUnifiedTopology: true});

const clientRoomSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    tel: Number,
    mail: String,
    message: String
})

const Client = mongoose.model("User", clientRoomSchema);

// const client = new Client ({
//     nom: req.body.nom,
//     prenom: req.body.prenom,
//     tel: req.body.tel,
//     mail:req.body.mail,
//     message:req.body.message
// })

// client.save();


app.get("/home", function(req,res){
    res.render("home")
});

app.get("/about", function(req,res){
    res.render("about")
})

app.get("/shop", function(req,res){
    res.render("shop")
})

app.get("/contact", function(req,res){
    res.render("contact")
})

//////Cookies and Mentions//////////////////////////


app.get("/mentions", function(req,res){
    res.render("mentions")
})



app.post("/contact", function(req,res){

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

   console.log("You have a new user: " + firstName + " " + lastName)
})








app.listen(3000, function(){
    console.log("Your app is running on port 3000")
})

