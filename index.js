exports.title = function(options) {

    const {  MessageEmbed } = require('discord.js');

    if ( options.color = null ) {
        color = '2C2F33'
    } else {
        color = options.color
    }

    const embeded = new MessageEmbed()
        .setTitle(options.content)
        .setColor(color)
    return embeded
}

exports.message = function(options) {

    const {  MessageEmbed } = require('discord.js');

    if ( options.color = null ) {
        color = '2C2F33'
    } else {
        color = options.color
    }

    const embeded = new MessageEmbed()
        .setDescription(options.content)
        .setColor(color)
    return embeded
}