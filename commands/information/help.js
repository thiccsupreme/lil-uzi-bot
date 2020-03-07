const { RichEmbed } = require("discord.js");

module.exports = {
    name: "help",
    category: "info",
    description: "helps the imbeciles",
    run: async (client, message, args) => {
        const embed = new RichEmbed()
        .setColor("E66CA5")
        .setAuthor("🌎☄️💕Help for my baby ~~pluto~~🌎☄️💕")
        .addField("**__prefix__**", "**uzi**")
        .addField("**uzi albums**", "💕➡️😠✌️")
        .addField("**uzi atake**", "🌎☄️💕")
        .addField("**uzi beef**", "🔥🌟👽")
        .addField("**uzi god**", "🛸🛸👽🛸🛸")
        .addField("**uzi hello**", "👋🌊")
        .addField("**uzi xo**", "👧➡️👨🏿⛰️🧑‍🤝‍🧑🧑‍🤝‍🧑☠️")
        .setFooter("Why you 🚶so cool aye, thousand dollar 👞 aye")
        message.channel.send(embed);
    }}