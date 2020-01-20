module.exports = { 
    name: 'ping', 
    category: 'info',
    description: 'Pings the bot.',
    run: async (client, message, args) => { 
        let time = Date.now(); 
        let msg = await message.channel.send('Ping!'); 
        let now = Date.now(); 
        msg.edit(`Pong! \`${now - time}ms\``);
    
}
}