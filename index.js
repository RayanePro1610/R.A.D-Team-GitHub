var Discord = require("discord.js");
var Client = new Discord.Client({intents: []});

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.login("ODUyMjc1MTQ1NTE5Mzk4OTky.YMEdFQ.QvGIcGwYKXZwrFyYanPo2vUoypM");
