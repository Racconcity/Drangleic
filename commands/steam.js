const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");
const fetch = require("node-fetch");
const dateFormat = require("dateformat");
const {stripIndents} = require("common-tags");

module.exports.run = async (client,message,args) => {
    const token = "steamToken"
    if(!args[0]) return message.channel.send("Introduce un nombre válido");
    const url = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${token}&vanityurl=${args.join(" ")}`;

    fetch(url).then(res => res.json()).then(body => {
        if(body.response.success === 42) return message.channel.send("No puedo encontrar un usuario con ese nombre");

        const id = body.response.steamid;
        const summaries = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${token}&steamids=${id}`;
        const bans = `http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=${token}&steamids=${id}`;
        const state = ["Offline", "Online", "Ocupado", "Ausente", "Buscando trato", "Buscando jugar"];

        fetch(summaries).then(res => res.json()).then(body => {
            if(!body.response) return message.channel.send("No puedo encontrar un usuario con ese nombre");
            const {personaname, avatarfull, realname, presonastate, loccountrycode, profileurl, timecreated} = body.response.players[0];

            fetch(bans).then(res => res.json()).then(body => {
                if(!body.players) return message.channel.send("No puedo encontrar un usuario con ese nombre");
                const {NumberOfVacBans, NumberOfGameBans} = body.players[0];

                const embed = new RichEmbed()
                    .setColor(Blue)
                    .setAuthor(`Steam | ${personaname}`, avatarfull)
                    .setThumbnail(avatarfull)
                    .setDescription(stripIndents`Nombre: ${realname}`)
                    .setTimestamp();

                    message.channel.send(embed)
            })
        })
    })
}

module.exports.config = {
    name: "steam",
    usage: "-steam",
    description: "",
    aliases: ["st", "steam", "steamdesc"]
}