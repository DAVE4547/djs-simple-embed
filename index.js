function message(options) {

    const {  MessageEmbed } = require('discord.js');

    const embeded = new MessageEmbed()
        .setTitle(options.content)
        .setColor(options.color)

    return embeded
}
