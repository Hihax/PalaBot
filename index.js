const Discord = require("discord.js");

const PRE = "P!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Bot en cours de création par Eban");
    console.log("Bot connected");
});

bot.on("message", function(message) {
    if(message.content === 'Salut') {
        message.reply('Bonjour')
    }
});
       
bot.login(process.env.TOKEN);
