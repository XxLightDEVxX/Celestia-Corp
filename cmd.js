const Discord = require("discord.js");
const fs = require("fs");
const botconfig = JSON.parse(fs.readFileSync("jsonstorage/botconfig.json", "utf8"));
const profilefile = JSON.parse(fs.readFileSync("jsonstorage/profile.json", "utf8"));

/////////////////////////////////
//////////BALANCE CMD////////////
/////////////////////////////////

module.exports.run = async (bot, message, args) => {

  /* Votre Code ici */

}

/////////////////////////////////
/////////////NOM CMD/////////////
/////////////////////////////////

module.exports.help = {
    name: "nomdelacommande"
}

