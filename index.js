const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is Online.')
})

client.on('message', msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
    if(msg.channel.id === 'Spy Channel') return; //Input which channel ID you want to receive the messages
   
    if(msg.channel.id === 'Main Channel') { //Input which channel ID you want to get the messages from
          

    if (msg.length != 0) {
        let embed = new Discord.MessageEmbed()
        .setAuthor(`${msg.author.tag}`, `${msg.author.avatarURL()}`)
        .setDescription(`${msg.content}`)
        .setFooter(`${msg.guild.name} | SpyBot v1`)
        .setColor(0xFF0000)
        client.channels.cache.get('821900375090135041').send(embed)
    } else {
        let embed = new Discord.MessageEmbed()
        .setAuthor(`${msg.author.tag}`, `${msg.author.avatarURL()}`)
        .setDescription(`${msg.content}`)
        .setFooter(`${msg.guild.name} | SpyBot v1`)
        .setColor(0x33FF33)
        client.channels.cache.get('821900375090135041').send(embed)
    }
}
})

client.login('Token'); //Input your own token