# DJS-SIMPLE-EMBED

Usage:

```
const embed = require ('@dave4547/djs-simple-embed') // package
const Discord = require('discord.js'); // discord.js

const client = new Discord.Client(); // create discord client

// commands
client.on("message", (message) => {
    
    if (message.content == 'embed') {
        message.channel.send(embed.title( {content: 'this is an embeded message' } ))
    }

    if (message.content == 'embed2') {
        message.channel.send(embed.message( {content: 'this is an embeded message'} ))
    }

});

client.login('NzI4NjExMDk0MDkxOTIzNDk4.XwtEBw.oycpRDJ-6u2CtOZDGQw7c_oiZ4A');

```