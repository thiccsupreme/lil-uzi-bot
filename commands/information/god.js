const { RichEmbed } = require("discord.js");

module.exports = {
    name: "god",
    category: "info",
    description: "Returns imgur link with the pope",
    run: async (client, message, args) => {
        const embed = new RichEmbed()
        .setColor("E66CA5")
        .setAuthor("🌎☄️💕🌎☄️💕")
        .setThumbnail("https://pbs.twimg.com/media/ESb3Uu7XQAEjcfI?format=jpg&name=medium")
        .addField(" 🛸🛸👽🛸🛸", "[first i drop my top 🏎️](https://imgur.com/tCoOOgM)")
        .setFooter("a canadian goose died for this")
        message.channel.send(embed);

    }}