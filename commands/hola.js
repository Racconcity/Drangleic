const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");

module.exports.run = async (client,message,args) => {
    return message.channel.send("Si tienes tiempo de hablarme también de estudiar programación");
}

module.exports.config = {
    name: "hola",
    usage: "-hola",
    aliases: ["hol", "holadesc"]
}