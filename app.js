const express = require ("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")

const app = express()

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));


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

app.post("/contact", function(req,res){
   var prenom =  req.body.prenom
   var nom = req.body.nom

   console.log(prenom,nom)
})


var prenom = "2C14C2172A6125181E9FCAC36A"







app.listen(3000, function(){
    console.log("Your app is running on port 3000")
})

