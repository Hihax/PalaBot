const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Bot en cours de création par Eban");
    console.log("Bot connected");
});

bot.login("NTg4OTg2MDg1MjM3ODUwMTIy.XQOL0A.2wKs1_PegNzyZ7SQlHXERukiSwE");