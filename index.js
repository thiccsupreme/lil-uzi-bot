const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const { RichEmbed } = require("discord.js");

const client = new Client({
    disableEveryone: true
})

client.commands = new Collection();
client.aliases = new Collection();

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

client.on('guildMemberAdd', member => {
    if(member.guild.id !== serverStats.guildID) return;
    client.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`)
    client.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`)
    client.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => user.bot).size}`)
});

client.on('guildMemberRemove', member => {
    if(member.guild.id !== serverStats.guildID) return;
    client.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`)
    client.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`)
    client.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => user.bot).size}`)
});

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    client.user.setPresence({
        status: "online",
        game: {
            name: "🛸🌟👽🌎☄️💕",
            type: "LISTENING"
        }
    }); 
})



client.on("message", async message => {
    const prefix = "uzi";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
});



client.login(process.env.TOKEN);
