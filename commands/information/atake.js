const { RichEmbed } = require("discord.js");

module.exports = {
    name: "atake",
    category: "info",
    description: "Returns eternal atake",
    run: async (client, message, args) => {
        const embed = new RichEmbed()
        .setColor("E66CA5")
        .addField(" 🌎☄️💕", "[👽🛸Click at your own risk🛸👽🛸](https://open.spotify.com/playlist/0c14jmmx6VEe3EgFnwsrZY?si=mXCysfI0SOufN_SGyuj9MA)")
        .setFooter("thiccsupeme is a hi roller")
        message.channel.send(embed);

    }}
