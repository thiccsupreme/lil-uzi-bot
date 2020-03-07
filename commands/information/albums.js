const { RichEmbed } = require("discord.js");


module.exports = {
    name: "albums",
    category: "info",
    description: "Returns list of all albums",
    run: async (client, message, args) => {
        const embed = new RichEmbed()
        .setColor("E66CA5")
        .addField(" Eternal Atake", "[👽🛸Click at your own risk🛸👽🛸](https://open.spotify.com/album/7IyoGB8J31fvQDwGtHAq9m?si=T9y58nlGRCmOjPx5OOalqw)")
        .addField(" Luv is Rage 2", "[💕➡️😠✌️Click at your own risk🛸💕➡️😠✌️](https://open.spotify.com/album/0zicd2mBV8HTzSubByj4vP?si=4nV4mHRSThS4EB7TohN4vA)")
        .addField(" Perfect Luv Tape", "[🤩💕📼Click at your own risk🛸🤩💕📼](https://open.spotify.com/album/6LX75kNicFqjjiAOeZgN67?si=q6Zpb01UQbmRdqMMiBRsiA)")
        .addField(" Lil Uzi Vert vs. The World", "[👨🏿🆚🌎Click at your own risk🛸👨🏿🆚🌎](https://open.spotify.com/album/7mgdTKTCdfnLoa1HXHvLYM?si=F1K03c8fT_SwAoMgND74CA)")
        .addField(" Luv is Rage", "[💕➡️😠Click at your own risk🛸💕➡️😠](https://open.spotify.com/album/5WrbKW1nRN4vSsu70uizxX?si=QF1lrGGwTQuMfklDxUVnrQ)")
        client.channels.get("685622412569477161").send(embed)}
    }