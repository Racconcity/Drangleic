const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");
const window = require("window");
const randomFile = require('random-file');
const path = require('path');
const fs = require('fs');

module.exports.run = async(client, message, args) => {
    const randomimg = [
        "./Digimons/Aegiochusmon Blue.jpg",
        "./Digimons/Aegiochusmon Dark.jpg",
        "./Digimons/Aegiochusmon Green.jpg",
        "./Digimons/Aegiochusmon Holy.jpg",
        "./Digimons/Aegiochusmon.jpg",
        "./Digimons/Aegisdramon.jpg",
        "./Digimons/AeroVeedramon.jpg",
        "./Digimons/Agumon (2006 anime).jpg",
        "./Digimons/Agumon Burst Mode.png",
        "./Digimons/Agumon Expert.jpg",
        "./Digimons/Agumon X.jpg",
        "./Digimons/Agumon.png",
        "./Digimons/Agunimon.jpg",
        "./Digimons/Aircraft Carrier Whamon.jpg",
        "./Digimons/Airdramon.jpg",
        "./Digimons/Akatorimon.jpg",
        "./Digimons/Aldamon.jpg",
        "./Digimons/Allomon.jpg",
        "./Digimons/Allomon X.jpg",
        "./Digimons/Alphamon.jpg",
        "./Digimons/Alphamon Ouryuken.jpg",
        "./Digimons/Amon.jpg",
        "./Digimons/AncientBeetlemon.jpg",
        "./Digimons/AncientGarurumon.jpg",
        "./Digimons/AncientGreymon.jpg",
        "./Digimons/AncientKazemon.jpg",
        "./Digimons/AncientMegatheriummon.jpg",
        "./Digimons/AncientMermaidmon.jpg",
        "./Digimons/AncientSphinxmon.jpg",
        "./Digimons/AncientTroiamon.jpg",
        "./Digimons/AncientVolcanomon.jpg",
        "./Digimons/AncientWisemon.jpg",
        "./Digimons/Andromon.jpg",
        "./Digimons/Angemon.jpg",
        "./Digimons/Angewomon X.jpg",
        "./Digimons/Angewomon.jpg"
    ]

    const img = randomimg[Math.floor(Math.random() * randomimg.length - 1 + 1)]
    message.channel.send({ file: img })
    message.channel.send("El digimon es: " +  img.replace(/\.[^.$]+$/, ''));
}

module.exports.config = {
    name: "digimon",
    usage: "-digimon",
    aliases: ["di", "digidesc"]
}