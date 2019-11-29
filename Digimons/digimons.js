const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");
const window = require("window");
const randomFile = require('random-file');
const path = require('path');
const fs = require('fs');

module.exports.run = async(client, message, args) => {
    var randomimg = path.join(__dirname, './DrangleicBot/Digimons/');
    randomimg = [
        "Aegiochusmon Blue.jpg", "Aegiochusmon Dark.jpg", "Aegiochusmon Green.jpg", "Aegiochusmon Holy.jpg", "Aegiochusmon.jpg",
        "Aegisdramon.jpg", "AeroVeedramon.jpg", "Agumon (2006 anime).jpg", "Agumon Burst Mode.jpg", "Agumon Expert.jpg",
        "Agumon X.jpg", "Agumon.jpg", "Agunimon.jpg", "Aircraft Carrier Whamon.jpg", "Airdramon.jpg", "Akatorimon.jpg",
        "Aldamon.jpg", "Allomon.jpg", "Allomon X.jpg", "Alphamon.jpg", "Alphamon Ouryuken.jpg", "Amon.jpg", "AncientBeetlemon.jpg",
        "AncientGarurumon.jpg", "AncientGreymon.jpg", "AncientKazemon.jpg", "AncientMegatheriummon.jpg", "AncientMermaidmon.jpg",
        "AncientSphinxmon.jpg", "AncientTroiamon.jpg", "AncientVolcanomon.jpg", "AncientWisemon.jpg", "Andromon.jpg", "Angemon.jpg",
        "Angewomon X.jpg", "Angewomon.jpg", "Ankylomon.jpg", "Antylamon (Evil).jpg", "Antylamon (Good).jpg", "Anubismon.jpg",
        "Apemon.jpg", "Apocalymon.jpg", "Apokarimon (Creepy Mode).jpg", "Apollomon.jpg", "Apollomon Darkness Mode.jpg",
        "Apollomon Whispered.jpg", "Aquilamon.jpg", "Arbormon.jpg", "Arcadiamon (Champion).jpg", "Arcadiamon (In-Training).jpg",
        "Arcadiamon (Mega).jpg", "Arcadiamon (Rookie).jpg", "Arcadiamon (Ultimate).jpg", "Arcadiamon (Ultra).jpg", "Archelomon.jpg",
        "Argomon (Mega).jpg", "Argomon (Ultimate Worm Phase).jpg", "Argomon (Ultimate).jpg", "Armadillomon.jpg", "Armageddemon.jpg",
        "Armamon.jpg", "Armed MadLeomon.jpg", "Armormon.jpg", "Arresterdramon.jpg", "Arresterdramon Superior Mode.jpg",
        "Arukenimon (Human).jpg", "Arukenimon.jpg", "Aruraumon.jpg", "Astamon.jpg", "Asuramon.jpg", "Atamadekachimon.jpg",
        "AtlurBallistamon.jpg", "Aurumon.jpg", "AvengeKidmon.jpg", "AxeKnightmon.jpg", "AxeKnightmon (Blastmon).jpg",
        "AxeKnightmon (Duskmon).jpg", "AxeKnightmon (Gulfmon).jpg", "AxeKnightmon (Laylamon).jpg", "AxeKnightmon X.jpg", "Axemon.jpg",
        "Azulongmon.jpg", "Babamon.jpg", "Babydmon.jpg", "Bacchusmon.jpg", "Bacchusmon (Deisui Mode).jpg", "Bacomon.jpg",
        "Bagramon.jpg", "Baihumon.jpg", "Bakemon.jpg", "BalliBeastmon.jpg", "Ballistamon.jpg", "Ballistamon Mush Cottage.jpg",
        "Ballistamon Sextet Launcher.jpg", "BanchoGolemon.jpg", "BanchoLeomon.jpg", "BanchoLeomon Burst Mode.jpg",
        "BanchoLillymon.jpg", "BanchoMamemon.jpg", "BanchoStingmon.jpg", "BaoHuckmon.jpg", "Barbamon.jpg", "Barbamon X.jpg",
        "Baromon.jpg", "Batterymon.jpg", "Battle Armament Trailmon.jpg", "Bearmon.jpg", "Beastmon.jpg", "Beelzemon (Behemoth).jpg",
        "Beelzemon.jpg", "Beelzemon (2010 anime).jpg", "Beelzemon (Starmons).jpg", "Beelzemon Blast Mode.jpg", "Beelzemon X.jpg",
        "Beetlemon.jpg", "BelleStarmon.jpg", "BelleStarmon X.jpg", "Belphemon Rage Mode.jpg", "Belphemon Sleep Mode.jpg", "Belphemon X.jpg",
        "BeoWolfmon.jpg", "Betamon.jpg", "Betamon X.jpg", "Betsumon.jpg", "BigMamemon.jpg", "BioDarkdramon.jpg", "BioQuetzalmon.jpg",
        "BioRotosmon.jpg", "BioStegomon.jpg", "BioSupinomon.jpg", "BioThunderbirdmon.jpg", "Birdramon.jpg", "BishopChessmon (Black).jpg",
        "BishopChessmon (White).jpg", "Biyomon.jpg", "BlackAgumon.jpg", "BlackAgumon (2006 anime).jpg", "BlackAgumon X.jpg", "BlackGabumon.jpg",
        "BlackGaogamon.jpg", "BlackGargomon.jpg", "BlackGarurumon.jpg", "BlackGatomon.jpg", "BlackGreymon.jpg", "BlackGrowlmon.jpg", "BlackGuilmon.jpg",
        "BlackImperialdramon.jpg", "BlackKingNumemon.jpg", "BlackMachGaogamon.jpg", "BlackMegaGargomon.jpg", "BlackMetalGarurumon.jpg", "BlackRapidmon.jpg",
        "BlackSeraphimon.jpg", "BlackShoutmon X7.jpg", "BlackWarGreymon.jpg", "BlackWarGreymon X.jpg", "BlackWarGrowlmon.jpg", "BladeKuwagamon.jpg",
        "Blastmon.jpg", "Blimpmon.jpg", "BlitzGreymon.jpg", "Blossomon.jpg", "BlueMeramon.jpg", "Boarmon.jpg", "Bokomon.jpg", "Boltboutamon.jpg", "Boltmon.jpg",
        "BomberNanimon.jpg", "Bombmon.jpg", "Bommon.jpg", "Boogiemon.jpg", "Botamon.jpg", "Brachiomon.jpg", "Breakdramon.jpg", "BryweLudramon.jpg", "Bucchiemon.jpg",
        "Bucchiemon (Green).jpg", "Budmon.jpg", "Bukamon.jpg", "Bulbmon.jpg", "Bullmon.jpg", "Bulucomon.jpg", "Buraimon.jpg", "Burgermon.jpg",
        "Burgermon (Champion).jpg", "BurningGreymon.jpg", "Burpmon.jpg", "BushiAgumon.jpg", "Butenmon.jpg", "Butterflymon.jpg", "Callismon.jpg", "Calmaramon.jpg",
        "Calumon.jpg", "Candlemon.jpg", "CannonBeemon.jpg", "CannonBeemon (Aircraft Carrier).jpg", "Cannondramon.jpg", "CaptainHookmon.jpg", "Cardmon.jpg", 
        "CatchMamemon.jpg", "Caturamon.jpg", "Centarumon.jpg", "Cerberumon.jpg", "Cerberumon Werewolf Mode.jpg", "Cerberumon X.jpg", "Ceresmon.jpg",
        "Ceresmon Medium.jpg", "Chamelemon.jpg", "ChaosBlackWarGreymon.jpg", "Chaosdramon X.jpg", "Chaosdromon.jpg", "ChaosGallantmon.jpg", "ChaosGallantmon C.jpg",
        "ChaosGrimmon.jpg", "ChaosMetalSeadramon.jpg", "Chaosmon.jpg", "Chaosmon Valdur Arm.jpg", "ChaosPiedmon.jpg", "Chapmon.jpg", "Cherrymon.jpg",
        "Cherubimon (Evil).jpg", "Cherubimon (Evil) X.jpg", "Cherubimon (Good).jpg", "Cherubimon (Good) X.jpg","Chibickmon.jpg","ChibiKiwimon.jpg","Chibomon.jpg",
        "Chicchimon.jpg","Chikurimon.jpg","Chirinmon.jpg","Cho Hakkaimon.jpg","Chronomon Destroy Mode.jpg","Chronomon Holy Mode.jpg","Chrysalimon.jpg",
        "Chuumon.jpg","Citramon.jpg","ClavisAngemon.jpg","ClearAgumon.jpg","Clockmon (Fusion).jpg","Clockmon.jpg","Coelamon.jpg","Commandramon.jpg","Conomon.jpg",
        "Copymon.jpg","Coredramon (Blue).jpg","Coredramon (Green).jpg","Coronamon.jpg","Cotsucomon.jpg","Crabmon.jpg","Crabmon X.jpg","Craniamon.jpg",
        "Craniamon X.jpg","Crescemon.jpg","CresGarurumon.jpg","Crowmon.jpg","Crusadermon.jpg","Crusadermon X.jpg","CrysPaledramon.jpg","Cutemon.jpg","CuteShoutmon.jpg",
        "CyberDracomon.jpg","Cyberdramon.jpg","Cyberdramon (2010 anime).jpg","Cyberdramon X.jpg","Cyclonemon.jpg","Daemon.jpg","Daemon (Mantled).jpg",
        "Daemon (Ultra).jpg","Daemon X.jpg","Daipenmon.jpg","Damemon.jpg","Damemon (C'mon Digimon).jpg","Darcmon.jpg","Dark Trailmon.jpg",
        "Darkdramon.jpg","Darkest AxeKnightmon.jpg","DarkLizardmon.jpg","DarkSuperStarmon.jpg","DarkTyrannomon.jpg","DarkTyrannomon X.jpg","DarkVolumon.jpg",
        "Datamon.jpg","Datirimon.jpg","Death Airdramon.jpg","Death Devimon.jpg","Death Meramon.jpg","Death MetalGreymon.jpg","Death Tyranomon.jpg",
        "Deathmon.jpg","Deckerdramon.jpg","Deckerdramon Float Mode.jpg","DeckerGreymon.jpg","Deltamon.jpg","DemiDevimon.jpg","DemiMeramon.jpg","DemiVeemon.jpg",
        "Depthmon.jpg","Deputymon.jpg","Deramon.jpg","Destromon.jpg","Devidramon.jpg","Devimon.jpg","Devitamamon.jpg","DexDorugamon.jpg","DexDorugoramon.jpg",
        "DexDoruGreymon.jpg","Dexmon.jpg","Diaboromon.jpg","Diaboromon X.jpg","Dianamon.jpg","Diatrymon.jpg","Digitamamon.jpg","Digmon.jpg","Dinobeemon.jpg",
        "Dinohyumon.jpg","Dinorexmon.jpg","Dinotigermon.jpg","Divermon.jpg","Dobermon.jpg","Dobermon X.jpg","Dodomon.jpg","Doggymon.jpg","Dokugumon.jpg",
        "Dokunemon.jpg","Dolphmon.jpg","Dominimon.jpg","Dondokomon.jpg","DonShoutmon.jpg","Dorbickmon.jpg","Dorbickmon Darkness Mode (Flarerizamon).jpg",
        "Dorbickmon Darkness Mode One.jpg","Dorbickmon Darkness Mode Two.jpg","Dorimon.jpg","Dorugamon.jpg","Dorugoramon.jpg","DoruGreymon.jpg","Dorulumon.jpg",
        "Dorumon.jpg","Doumon.jpg","Dracmon.jpg","Dracomon.jpg","Dracomon X.jpg","Dragomon.jpg","Drimogemon.jpg","Duramon.jpg","Durandamon.jpg","Duskmon.jpg",
        "Dynasmon.jpg","Dynasmon X.jpg","Eaglemon.jpg","Ebemon.jpg","Ebemon X.jpg","EbiBurgamon.jpg","Ebidramon.jpg","Ebonwumon.jpg","Ekakimon.jpg",
        "ElDradimon.jpg","Elecmon.jpg","Elephantmon.jpg","EmperorGreymon.jpg","Etemon.jpg","Etemon (Chaos).jpg","Evil Grademon.jpg","Evilbeast Laylamon.jpg",
        "Examon.jpg","Examon X.jpg","ExoGrimmon.jpg","ExTyrannomon.jpg","ExVeemon.jpg","ExVeemon (Virus).jpg","Fake Agumon Expert.jpg","Falcomon.jpg","Falcomon (2006 anime).jpg",
        "FanBeemon.jpg","Fangmon.jpg","Filmon.jpg","Firamon.jpg","Flamedramon.jpg","Flamemon.jpg","FlameWizardmon.jpg","Flaremon.jpg","Flarerizamon.jpg","Floramon.jpg",
        "Flybeemon.jpg","Flymon.jpg","Footmon.jpg","Frigimon.jpg","Frimon.jpg","Frogmon.jpg","Fufumon.jpg","Fugamon.jpg","Fujinmon.jpg","Fujitsumon.jpg",
        "FusedAncientVolcanomon.jpg","Gabumon.jpg","Gabumon X.jpg","Gaiamon.jpg","Galacticmon.jpg","Gallantmon (Grani).jpg","Gallantmon.jpg","Gallantmon Chaos Mode.jpg",
        "Gallantmon Crimson Mode.jpg","Gallantmon X.jpg","Ganemon.jpg","Gankoomon.jpg","Gankoomon X.jpg","Gaogamon.jpg","Gaomon.jpg","Gaossmon.jpg","Garbagemon.jpg",
        "Gargomon.jpg","Gargoylemon.jpg","Garudamon.jpg","Garudamon X.jpg","Garurumon.jpg","Garurumon X.jpg"
    ]
    const img = randomimg[Math.floor(Math.random() * randomimg.length - 1 + 1)]
    message.channel.send("El digimon es: " + img.replace(/\.[^.$]+$/, ''))
    message.channel.send({ file: ["./Digimons/"] + img })
}

module.exports.config = {
    name: "digimons",
    usage: "-digimons",
    aliases: ["dig", "digimdesc"]
}