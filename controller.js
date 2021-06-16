const link = require("./links.json")


module.exports = {
    link: (req,res)=> {
        const linkName = req.params.name
        const foundLink = link.find((link) => link.name === linkName)
     
         if(foundLink){
             console.log(foundLink);
             res.render(foundLink.name)
         } else{
             res.status(404).render("notfound")
         } 
     },

     mypost: (req,res)=>{
        
        const Client = mongoose.model("User", clientRoomSchema);

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
             res.redirect("/room/home")
     
        console.log(`You have a new user: ${firstname} ${lastName}`)
     }
}