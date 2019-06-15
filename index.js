const Discord = require("discord.js");

const PRE = "P!";
var n = 0;
var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Bot en cours de création par Eban");
    console.log("Bot connected");
});

bot.on("message", function (message) { 
    if(message.content === 'Salut') {
    if(message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bonjour maître');
    message.reply('Bonjour')
    }
    if(message.content === 'P!sheets') {
    message.reply("Voici l'URL : https://docs.google.com/spreadsheets/d/1dLyP47y2vrVqWxMgKBA6lpN1v18QJ4xgWOSpSHWj0KQ/edit#gid=1860824155")
    }
    if(message.content === 'P!help') {
    message.reply("Voici la liste des commandes : ")
    message.reply("**P!sheet** : affiche la liste des coordonnées du pala")
    }
});
       
bot.login(process.env.TOKEN);
