const Discord = require("discord.js");
const fs = require("fs");
const botconfig = JSON.parse(fs.readFileSync("jsonstorage/botconfig.json", "utf8"));
const coinfile = JSON.parse(fs.readFileSync("jsonstorage/money.json", "utf8"));

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

