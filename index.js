exports.message = function(options) {

    const {  MessageEmbed } = require('discord.js');

    if ( options.color = null ) {
        color = '2C2F33'
    } else {
        color = options.color
    }

    const embeded = new MessageEmbed()
        .setTitle(options.content)
        .setDescription(options.description)
        .setColor(color)
        .setFooter(options.footer)
    return embeded
}
