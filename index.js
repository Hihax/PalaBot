const Discord = require("discord.js");

const PRE = "P!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Bot en cours de création par Eban");
    console.log("Bot connected");
});

bot.on("message", function (message) { 
    if(message.content === 'Salut') {
    if(message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bonjour maître');
    message.reply('Bonjour')
bot.on("message", function (message) { 
    if(message.content === 'Clear') {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Vous n'avez pas la permission d'executer cette commande');
    message.delete();
    }
});
       
bot.login(process.env.TOKEN);
