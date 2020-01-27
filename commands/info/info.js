const { RichEmbed } = require('discord.js'); 
const {  version } = require('../../package.json'); 

module.exports = { 
    name: 'info', 
    description: 'Shows information on Eva.', 
    aliases: ['botinfo'], 
    category: 'info', 
    run: async (client, message, args) => { 

        let rawuptime = client.uptime; 
        let sseconds = (Math.round(rawuptime / 1000)); 
        let days = Math.floor(Math.round(sseconds / 86400)); 
        let hours = Math.floor(Math.round(sseconds / 3600)); 
        sseconds %= 3600; 
        let minutes = Math.floor(Math.round(sseconds / 60)); 
        let seconds = sseconds % 60; 

        let embed = new RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL) 
        .setColor('BLUE')
        .setFooter(`${client.user.username} uptime: ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`, client.user.avatarURL)
        .setTimestamp()
        .addField('Developer', '<@344954369285947392>', true)
        .addField('Library', 'discord.js', true)
        .addField('Version', `${version}`, true)
        .addField('Servers', client.guilds.size, true)
        .addField('Users', client.users.size, true)
        .addField('Support Server', '[Click here](https://discord.gg/XZh4JEy)', true)
        .addField('Invite Link', `[Click here](https://discordapp.com/api/oauth2/authorize?client_id=659605081238536192&permissions=8&scope=bot)`, true)
        message.channel.send(embed)
    }
}