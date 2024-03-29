const link = require("../data/links.json");
const mongoose = require("mongoose");

const clientRoomSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  tel: Number,
  mail: String,
  message: String,
});

module.exports = {
  link: (req, res) => {
    const linkName = req.params.name;
    const foundLink = link.find((link) => link.name === linkName);

    if (foundLink) {
      res.render(foundLink.name);
    } else {
      res.status(404).render("notfound");
    }
  },

  mypost: (req, res) => {
    const Client = mongoose.model("User", clientRoomSchema);

    let firstName = req.body.nom;
    let lastName = req.body.prenom;
    let numberTel = req.body.tel;
    let mail = req.body.mail;
    let message = req.body.comments;

    const client = new Client({
      nom: firstName,
      prenom: lastName,
      tel: numberTel,
      mail: mail,
      message: message,
    });
    client.save();
    res.render("contact", { test: "coudou" });

    console.log(`You have a new user: ${firstName} ${lastName}`);
  },
};
