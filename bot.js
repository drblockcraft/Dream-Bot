var Discord = require('discord.io');

var bot = new Discord.Client({
    token: "MzgzNDM1ODc5MTY0ODA1MTIx.DPk2zg.x7PdDrq3k7VluI0TimVoD89SYgk",
    autorun: true
});

bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "d!ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong!",
        });
    }
    if (message === "d!lenny"){
      bot.sendMessage({
        to: channelID,
        message: "( ͡° ͜ʖ ͡°)",
      });
    }
});

function len(){
  var a = Math.floor((Math.random()*1)+1);
  if(a===1){
    console.log("( ͡° ͜ʖ ͡°)");
  }
}
