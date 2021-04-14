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


app.get("/home", function(req,res){
    res.render("home")
});

app.get("/about", function(req,res){
    res.render("about")
})

app.get("/contact", function(req,res){
    res.render("contact")
})

//COOKIES and MENTIONS

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

    res.redirect("home")

   console.log("You have a new user: " + firstName + " " + lastName)
})

// Get all the clients mail

// Client.find(function(err, clients){
//     if(err){
//         console.log(err);
//     } else {
//          clients.forEach(function(client) {
//             console.log(client.mail);
//         });
//     }
// })


app.listen(3000, function(){
    console.log("Your app is running on port 3000")
})

