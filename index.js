exports.embed = function(options) {

    const {  MessageEmbed } = require('discord.js');

    const embededMessage = new MessageEmbed()
        .setTitle(options.content)
        .setColor(options.color)

}
