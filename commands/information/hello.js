module.exports = {
    name: "hello",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`🛸 Eternal Atake....`);

        msg.edit(`**🛸I WANT IT MY WAAAY 🌎☄️💕👽**`);
    }
}
