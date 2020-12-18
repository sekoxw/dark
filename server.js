
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://darkstatnt.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();
const { Util } = require("discord.js");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api");
const moment = require("moment");
const ytdl = require("ytdl-core");
const jimp = require("jimp");
const ms = require("ms");
const Canvas = "canvas";
const fs = require("fs");
const youtube = new YouTube("AIzaSyB-_6mGq2y7_MFn8_m0IPHoFWiUZZOxdI0");
const getYoutubeID = require("get-youtube-id");
const queue = new Map();
const yt_api_key = "AIzaSyB-_6mGq2y7_MFn8_m0IPHoFWiUZZOxdI0";
const prefix = ",";
const math = require("math-expression-evaluator");
const figlet = require("figlet");
const m = require("ms");
const pretty = require("pretty-ms");
const Enmap = require("enmap");
const db = require("quick.db");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`,help | discord.gg/ds`, { type: "PLAYING" });
});


const pref = require("./setprefix.json");
client.on("message", async message => {
  let newPrefix = 2;
  let args = message.content.split(" ");
  let newprefix;
  let newprefix2;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = { prefix: prefix, lang: newPrefix };
    fs.writeFileSync("./setprefix.json", JSON.stringify(pref, null, 4));
    newprefix = prefix;
    newprefix2 = newPrefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    newprefix = pref[message.guild.id].prefix;
    newprefix2 = pref[message.guild.id].lang;
  }
  if (args[0] === newprefix + "setprefix") {
    let embed = new Discord.RichEmbed().setDescription(
      "Your Need Administrator"
    );
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
      return message.channel.send(embed);
    if (!args[1]) {
      if (newprefix2 == 1) {
      } else if (newprefix2 == 2) {
        let embed = new Discord.RichEmbed().setDescription(
          ">>> ```Please Write The New Bot Prefix\nExample : " +
            newprefix +
            "setprefix ! ```"
        );
        message.channel.send(embed);
      }
    } else {
      pref[message.guild.id].prefix = args[1];
      fs.writeFileSync("./setprefix.json", JSON.stringify(pref, null, 4));
      if (newprefix2 == 1) {
        let embed = new Discord.RichEmbed().setDescription(
          ">>> ```New Server Prefix : " + args[1] + " ```"
        );
        message.channel.send(embed);
      } else if (newprefix2 == 2) {
        let embed = new Discord.RichEmbed().setDescription(
          ">>> ```New Server Prefix : " + args[1] + " ```"
        );
        return await message.channel.send(embed);
      }
    }
  }
  if (message.isMentioned(client.user)) {
    let embed = new Discord.RichEmbed()
      .setColor("#0091fc");
    message.channel.send(embed);
  }
});




const developers = ["396777771273158668","585954433179844629"]

const blacklist = JSON.parse(fs.readFileSync('./blacklist.json', 'utf8'));
client.on('message',message=>{
let newPrefix = 2;  
let args = message.content.split(" ");
let newprefix;
let newprefix2;
if (message.channel.guild && !pref[message.guild.id]) {
pref[message.guild.id] = { prefix: prefix, lang: newPrefix };
fs.writeFileSync("./setprefix.json", JSON.stringify(pref, null, 4));
newprefix = prefix;newprefix2 = newPrefix;}
if (message.channel.guild && pref[message.guild.id]) {newprefix = pref[message.guild.id].prefix;newprefix2 = pref[message.guild.id].lang;}  

if(message.author.bot)return
if (!developers.includes(message.author.id)) return;
if(message.content.startsWith(newprefix + "blacklist add")) {
let args = message.content.split(" ")[2]
var user = client.users.get(args)
if(!user)return message.channel.send('**Please Tybe His ID :x:**')
if(user.id == message.author.id || user.id == client.user.id) return message.channel.send(`**You Can't Add this Member!**`)
if(blacklist[client.user.id+user.id]) return message.channel.send('**This Member Allready Blacklisted!**')
blacklist[client.user.id+user.id] = {};
message.channel.send("**Added " + `${user}` +" to The Blacklist ✅**")
saveblacklist() 
} else if(message.content.startsWith(newprefix + "blacklist remove all")){
client.users.forEach(m => {
  delete blacklist[client.user.id + m.id];
}) 
message.channel.send("**All Blacklist Has Been Removed**")
} else if(message.content.startsWith(newprefix + "blacklist remove")) {
  let user = message.content.split(" ")[2]
  if(!user) return message.channel.send("**Please Type His ID :x:**")
  if(!blacklist[client.user.id+user])return message.channel.send(`**I Can't Find This member In The Blacklist!\nplease Check the Member ID**`)
  delete blacklist[client.user.id+user];
message.channel.send("** Remove " + `<@${user}>` +" Form Blacklist**")
} else if(message.content == (prefix+'blacklist')){
const blacklistss = [];
client.users.forEach(m => {
if(!blacklist[client.user.id + m.id]) return
blacklistss.push(`<@${m.id}>`);
});
let MS = blacklistss.join("\n")
let embed = new Discord.RichEmbed()
.setAuthor(message.author.tag,message.author.avatarURL)
.setTitle('**⛔ This Is The Blacklist:**')
.setDescription(`${MS}`)
.setColor("#0091fc")
message.channel.send(embed) 
  }
  })

function saveblacklist() {
    fs.writeFileSync("./blacklist.json", JSON.stringify(blacklist, null, 4))
}




client.on("message", async message => {
  let newPrefix = 2;
  let args = message.content.split(" ");
  let newprefix;
  let newprefix2;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = { prefix: prefix, lang: newPrefix };
    fs.writeFileSync("./setprefix.json", JSON.stringify(pref, null, 4));
    newprefix = prefix;
    newprefix2 = newPrefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    newprefix = pref[message.guild.id].prefix;
    newprefix2 = pref[message.guild.id].lang;
  }

  if (message.content.toLowerCase().startsWith(newprefix + "help")) {
    let help = new Discord.RichEmbed()
      .setTitle("**Help**")
      .setColor("RANDOOM")
     
 .addField(
        "**tweet Commandes**",
        ",ct , كت,"
      )
   
      .addField(
        "**Prefix Commandes**",
        "setprefix , bot"
      )
   
 
.addField(
        "**Owners Commands**",
        " blacklist add , blacklist remove , blacklist remove all"
      )
    .addField(
        "**𝗣oems Dark Station ♔**",
        ` - [Dark Station](https://discord.gg/ds)`
      )
   
      .setFooter(`By ${message.author.username} `, message.author.avatarURL);
    message.channel.send(help);
  }
});

client.on("message", message => {
  let newPrefix = 2;
  let args = message.content.split(" ");
  let newprefix;
  let newprefix2;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = { prefix: prefix, lang: newPrefix };
    fs.writeFileSync("./setprefix.json", JSON.stringify(pref, null, 4));
    newprefix = prefix;
    newprefix2 = newPrefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    newprefix = pref[message.guild.id].prefix;
    newprefix2 = pref[message.guild.id].lang;
  }

  if (
    args[0].toLowerCase() == `${newprefix}info` ||
    args[0].toLowerCase() === `infoo`
  ) {
    function timeCon(time) {
      let days = Math.floor((time % 31536000) / 86400);
      let hours = Math.floor(((time % 31536000) % 86400) / 3600);
      let minutes = Math.floor((((time % 31536000) % 86400) % 3600) / 60);
      let seconds = Math.round((((time % 31536000) % 86400) % 3600) % 60);
      days = days > 9 ? days : "0" + days;
      hours = hours > 9 ? hours : "0" + hours;
      minutes = minutes > 9 ? minutes : "0" + minutes;
      seconds = seconds > 9 ? seconds : "0" + seconds;
      return `${days > 0 ? `${days}:` : ""}${
        (hours || days) > 0 ? `${hours}:` : ""
      } ${minutes}:${seconds}`;
    }
    const millis = new Date().getTime() - client.user.createdAt.getTime();
    const noww = new Date();
    dateFormat(noww, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    const createdAT = millis / 1000 / 60 / 60 / 24;
    let bot = new Discord.RichEmbed()
      .addField(
        "**Name**",
        `> ${client.user.username}  `,
        true
      )
      .addField(
        "**ID**",
        `  > ${client.user.id}  `,
        true
      )
      
     
      .setColor("RANDOOM")
      .addField(
        "**Bot Developer** :  ",
        `>  <@396777771273158668>`,
        true
      );
    message.channel.send(bot);
  }
});




client.on("message", message => {
  let newPrefix = 2;
  let args = message.content.split(" ");
  let newprefix;
  let newprefix2;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = { prefix: prefix, lang: newPrefix };
    fs.writeFileSync("./setprefix.json", JSON.stringify(pref, null, 4));
    newprefix = prefix;
    newprefix2 = newPrefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    newprefix = pref[message.guild.id].prefix;
    newprefix2 = pref[message.guild.id].lang;
  }

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (
    args[0].toLowerCase() == `${newprefix}ct` ||
    args[0].toLowerCase() === `${newprefix}كت`
  ) {

     if(blacklist[client.user.id + message.author.id]) return message.channel.send("You Can't Use This Command Because You Are Blacklisted")

    message.delete();
  
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return message.channel.send("مثال : ,ct الصدق عزَّ والباطل ذلِّ");
    let embed = new Discord.RichEmbed()
      .setTitle("<:DSTweet1:785124056876843043> 𝗣oems Dark Station ♔ ")
      .setThumbnail(message.author.avatarURL)
      .setColor("#fa763d")

      .setDescription(`> **${args}**`)
      .setFooter(`By ${message.author.username}`, message.author.avatarURL);
    message.channel.send(embed);
  }
});



client.login("Nzc5NDMxMDMyNjM4MTQ0NTgz.X7gbtw.J3Zc8voJ0twa5ga9Gh4q3_7o67g") 