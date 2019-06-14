const Discord = require("discord.js");

const PRE = "P!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Bot en cours de création par Eban");
    console.log("Bot connected");
});

bot.on("message", async function(message) {
       if (message.author.equals(bot.user)) return;
    
       if(!message.content.startWith(PRE)) return;
    
       var args = message.content.substring(PRE.lenght).split(" ");
    
       switch(args[0], toLowerCase()) {
           case "invite":
           message.channel.send('Test');
           break;
    }
});
       
bot.login(process.env.TOKEN);
