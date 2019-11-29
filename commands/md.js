const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");

module.exports.run = async(client, message, args) => {
    let mensaje = args.join(" ");

    if (!mensaje) return message.channel.send(`Escriba un mensaje para enviarlo por privado;`);
    message.author.send(mensaje);
}

module.exports.config = {
    name: "md",
    usage: "-md",
    aliases: ["md", "mddesc"]
}