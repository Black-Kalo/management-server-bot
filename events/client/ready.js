const { PREFIX, LAVA_HOST, LAVA_PASSWORD, LAVA_PORT  } = require('../../config');
const { MessageEmbed } = require("discord.js")

module.exports = async bot => {
    console.log(`${bot.user.username} is available now!`)
    console.log(`Support: https://discord.gg/YpEWbqWTsq`)
    console.log(`author : ManavvGarg [ https://github.com/ManavvGarg ]`)
    console.log(`add 24/7 author : Black-Kalo [ https://github.com/Black-Kalo ]`)
    var activities = [ `${bot.guilds.cache.size} servers`, `${bot.users.cache.size} users!` ], i = 0;
    setInterval(() => bot.user.setActivity(`${PREFIX}help | ${activities[i++ % activities.length]}`, { type: "WATCHING" }),5000)
    
};
