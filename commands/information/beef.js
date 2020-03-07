const { RichEmbed } = require("discord.js");

module.exports = {
    name: "beef",
    category: "info",
    description: "Returns quote",
    run: async (client, message, args) => {
        const embed = new RichEmbed()
        .setColor("E66CA5")
        .setAuthor("I don't really care 'cause I'm done")
        .addField(" 🔥🌟👽", "**Baby Pluto** *Told you this shit don’t stop* 🌊🛸")
        .setFooter("pocket got fatter she call me daddy!")
        message.channel.send(embed);

    }}