function embed(options) {

    const {  MessageEmbed } = require('discord.js');

    const embed = new MessageEmbed()
        .setTitle(options.content)
        .setColor(options.color)

    return embed

}