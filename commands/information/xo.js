const { RichEmbed } = require("discord.js");

module.exports = {
    name: "xo",
    category: "info",
    description: "Returns xo tour llif3 emojis",
    run: async (client, message, args) => {
        const embed = new RichEmbed()
        .setColor("E66CA5")
        .setAuthor("🌎☄️💕🌎☄️💕")
        .addField("👧➡️👨🏿⛰️🧑‍🤝‍🧑🧑‍🤝‍🧑☠️", "**You 👁️ me everywhere you look**, *no*, **you can't** *hide* or 🏃")
        .setFooter("break up with a text im not tryna flex")
        message.channel.send(embed);

    }}