const {  exec } = require('child_process'); 
// suck my cock and balls 
module.exports = { 
    name: 'update', 
    run: async (client, message, args) => { 

        if(message.author.id !== '344954369285947392') return; 
         
        let commitm = args.join(' ')

        exec(`git add . && git commit -m "${commitm.toString()}" && git push`), (error, stdout) => {
            const outputType = error || stdout;
            let output = outputType;
            if (typeof outputType === 'object') {
                output = inspect(outputType);
            }
            output = (output.length > 1980 ? output.substr(0, 1977) + '...' : output);
            return message.channel.send(`Successfully pushed and commited to GitHub with the message ${commitm.toString()}`);
        };
    }
    }
