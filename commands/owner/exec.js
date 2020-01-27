const {  exec } = require('child_process'); 
module.exports = { 
    name: 'exec', 
    aliases: ['ex'], 
    description: 'Does a console command.', 
    category: 'owner', 
    usage: '<command[s]>', 
    run: async (client, message, args) => { 

        if(message.author.id !== '344954369285947392') return; 
   
        exec(args.join(' '), (error, stdout) => {
            const outputType = error || stdout;
            let output = outputType;
            if (typeof outputType === 'object') {
                output = inspect(outputType);
            }
            output = (output.length > 1980 ? output.substr(0, 1977) + '...' : output);
            return message.channel.send('`\``' + output + '`\``');
        });
    }
    }
