const Discord = require("discord.js");

const chiffres_channel_id = "774236898851029002";
const mess_channel_id = "832389710654472232";

const bot = new Discord.Client();
bot.login("ODMyMzc2MDc2NDQ5NzQyODk5.YHi4oQ.bai2ylaZzdmxxNi706Cc12aFmXI");

bot.on("message", async (message) => {
    if (message.channel.id != chiffres_channel_id)
        return;
    let chiffre;
    chiffre = parseInt(message.content);
    if (Number.isNaN(chiffre)) {
        message.react("❌");
        bot.channels.cache.get(mess_channel_id).send(`<@!${message.author.id}> *${message.content}* n'est pas un chiffre\n${message.url}`);
    }
    let chiffreAvant;
    let messageAvant = (await message.channel.messages.fetch()).array()[1];
    chiffreAvant = parseInt(messageAvant.content);
    if (Number.isNaN(chiffreAvant)) {
        messageAvant.react("❌");
        bot.channels.cache.get(mess_channel_id).send(`<@!${messageAvant.author.id}> *${messageAvant.content}* n'est pas un chiffre\n${messageAvant.url}`);
    }

    if (Number.isNaN(chiffre) || Number.isNaN(chiffreAvant)) return;

    if (chiffreAvant + 1 !== chiffre) {
        message.react("❌");
        bot.channels.cache.get(mess_channel_id).send(`<@!${message.author.id}> *${message.content}* n'est pas le bon chiffre\n${message.url}`);
    }
});
