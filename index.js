exports.message = function(options) {

    const {  MessageEmbed } = require('discord.js');

    if ( options.color = null ) {
        color = '2C2F33',
        content = options
    } else {
        color = options.color
        content = options.content
    }

    const embeded = new MessageEmbed()
        .setTitle(options.content)
        .setColor(color)
    return embeded
}
