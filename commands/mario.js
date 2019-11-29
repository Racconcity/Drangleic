const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");

module.exports.run = async (client,message,args) => {
    let sEmbed = new Discord.RichEmbed()

        .setColor(colours.Red)
        .setTitle("Mario, no eres una leyenda como Omar")
        .addField("Cogedlo")
        .addField("Server", `${message.guild.name}`, true)
        .addField('Roles', message.member.roles.map(roles => `\`${roles.name}\``).join(', '))
    message.channel.send((sEmbed));
}

module.exports.config = {
    name: "mario",
    aliases: ["mar", "mariodesc"]
}