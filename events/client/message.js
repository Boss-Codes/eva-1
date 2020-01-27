const { RichEmbed, WebhookClient } = require('discord.js');


module.exports = async (client, message) => { 
    
    if (message.author.bot) return; 
    if (!message.guild) return; 
    let prefix = 'e!'
    if (!message.content.startsWith(prefix)) return; 

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g); 
    const cmd = args.shift().toLowerCase(); 

    if (cmd.length === 0) return; 

    let command = client.commands.get(cmd); 
    if(!command) command = client.commands.get(client.aliases.get(cmd)); 

    if (!command) return; 

    if (command) { 
        console.log(`Command: ${command.name} was ran by: ${message.author.tag} (${message.author.id}) in guild: ${message.guild.name} (${message.guild.id})`)
        command.run(client, message, args)
    }
        const embed = new RichEmbed()
        .setColor('GREEN')
        .setThumbnail(client.user.avatarURL)
        .setAuthor('New Command Ran!')
        .addField('Command', command.name)
        .addField('Ran By', `${message.author.tag} (${message.author.id})`)
        .addField('Ran in Guild', `${message.guild.name} (${message.guild.id})`)
        .addField('Ran in Channel', `${message.channel.name} (${message.channel.id})`)
        .setTimestamp()
        client.channels.get('668633025696759808').send(embed);
};