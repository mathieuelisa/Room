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

//////Cookies and Mentions//////////////////////////


app.get("/mentions", function(req,res){
    res.render("mentions")
})



app.post("/contact", function(req,res){
   var nom = req.body.nom
   var prenom =  req.body.prenom
   var tel = req.body.tel
   var mail = req.body.mail
   var message = req.body.comments

   console.log(nom,prenom,tel, mail, message)
})








app.listen(3000, function(){
    console.log("Your app is running on port 3000")
})

