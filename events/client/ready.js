const { RichEmbed } = require('discord.js');

module.exports = async (client, message) => {

console.log(`I am online as ${client.user.username}#${client.user.discriminator}`); 
client.user.setPresence({
 status: 'online', 
 game: { 
     name: 'users run e!help', 
     type: 'LISTENING'
 }
});


const embed = new RichEmbed()
.setAuthor('Ready', client.user.avatarURL)
.addField('Username', `${client.user.tag}`)
.addField('Guild Count', `${client.guilds.size}`)
.addField('User Count', `${client.users.size}`)
.addField('Time', `${new Date()}`)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.setColor('BLUE')

client.channels.get('668632838119358465').send(embed)

};