const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.on('ready', () => {
    console.log(`
    *******    ****     **  **        **  ****     **  ********
   **/////**  /**/**   /** /**       /** /**/**   /** /**///// 
  **     //** /**//**  /** /**       /** /**//**  /** /**      
 /**      /** /** //** /** /**       /** /** //** /** /******* 
 /**      /** /**  //**/** /**       /** /**  //**/** /**////  
 //**     **  /**   //**** /**       /** /**   //**** /**      
  //*******   /**    //*** /******** /** /**    //*** /********
   ///////    //      ///  ////////  //  //      ///  //////// 
 `)
    
//SET THE BOT'S PRESENCE
    
    client.user.setPresence({
        status: "online",
        activity: {
            name: "", //Set the bot's presence here
            type: "WATCHING"
        }
    })
})

//RELAY MESSAGES BACK TO YOU

client.on('message', msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
    if(msg.channel.id === 'ID') return; //Enter the channel ID for the messages to be sent to
   
    if(msg.channel.id === 'ID') { //Enter the channel ID for the messages to get from
          

    if (msg.length != 0) {
        let embed = new Discord.MessageEmbed()
        .setAuthor(`${msg.author.tag}`, `${msg.author.avatarURL()}`)
        .setDescription(`${msg.content}`)
        .setFooter(`${msg.guild.name} | SpyBot v1`)
        .setColor(0xFF0000)
        client.channels.cache.get('ID').send(embed) //Enter the channel ID for the messages to be sent to
    } else {
        let embed = new Discord.MessageEmbed()
        .setAuthor(`${msg.author.tag}`, `${msg.author.avatarURL()}`)
        .setDescription(`${msg.content}`)
        .setFooter(`${msg.guild.name} | SpyBot v1`)
        .setColor(0x33FF33)
        client.channels.cache.get('ID').send(embed) //Enter the channel ID for the messages to be sent to
    }
}
});

//SAY COMMAND

client.on('message', function(msg) {
    let message1 = msg.content.split(`${prefix}say`).join("");
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (msg.author.bot) return;
    if(msg.channel.id === 'ID') return; //Enter the channel you want to send messages too

    if (command == "say") //Make it detect that you said something after
    return client.channels.cache.get("ID").send(message1) //Enter the channel you want to send messages too
    else {
        msg.reply("You did not specify your message to send!").then(msg => msg.delete({timeout: 3000}));
    }
});

client.login('Token'); // Enter your token here
