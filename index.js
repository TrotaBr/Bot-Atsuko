const botconfig = require("./botconfig.json");
const Discord = require('discord.js');
const config = require("./botconfig.json")
const bot = new Discord.Client();
const token = 'NzA1ODQ5MTEwMDAyOTI1Njk5.XqxtKA.URCpR9aVZt1lu1zYPOM9CSsa8Go';
const fs = require("fs");
let db = JSON.parse(fs.readFileSync("./database.json", "utf8"));
const getter = require('booru-getter')
const streamOptions = {seek: 0, volume: 1}





var prefix = 'r!';
var bansrick = 100;


// lig  r bot

bot.login(token);
bot.on ('ready', () => {
    console.log('pronto para ser usado')
    
})

bot.on('ready', () => {
    bot.user.setActivity('Use r!help', { type: 'PLAYING' });
 
})
//comandos


bot.on('message', msg => {
    if(msg.content === `${prefix}help`){
        const embed = {
            "title": "Comandos",
            "description": "r!help",
            "url": "https://discordapp.com",
            "color": 13632027,
            "timestamp": "2020-05-03T20:43:02.312Z",
            "footer": {
              "icon_url": "https://cdn.discordapp.com/attachments/694956580113874948/707282217373663332/unknown.png",
              "text": "Atsuko"
            },
            "author": {
              "name": "Atsuko Bot",
              "url": "https://discordapp.com",
              "icon_url": "https://cdn.discordapp.com/attachments/694956580113874948/707282217373663332/unknown.png"
            },
            "fields": [
              
            
              {
                "name": "r!rps",
                "value": "Use r!rps <rock,paper,scissors> to play rps"
              },
              {
                "name": "r!roulette",
                "value": "Use a!roleta to play Russian roulette"
              },
              {
                "name": "r!server-info",
                "value": "Use r!server-info to see server infos"
              },
              {
                "name": "r!user-info",
                "value": "Use r!user-info para ver as suas informaçoes no servidor"
              },
              {
                "name": "r!update",
                "value": "Use r!update para ver quanto a tempo o bot esta online"
              },
              {
                "name": "r!ban",
                "value": "Use r!ban <@usuario#0000> para banir alguem"
              },
            ]
          };
          msg.channel.send({ embed });
    }
})

bot.on('message', msg => {
    if(msg.content === `${prefix}bansrick`){
        msg.reply('quantas vezes o ricardo foi banido:')
        msg.channel.send(bansrick)
    }
})


bot.on('guildMemberAdd', async member => {

    let canal = bot.channels.cache.get("694956579870736411")
    let fonte = await jimp.loadFont(jimp.FONT_SANS_32_BLACK)
    let mask = await jimp.read('mascaraHEX.png')
    //let avatar = await jimp.read('Artwork_Middle.png')
    let fundo = await jimp.read('fundo.png')
    
    
    jimp.read(member.user.displayAvatarURL).then(avatar => {
        // muda a img
        avatar.resize(130, 130)
        mask.resize(130, 130)
        avatar.mask(mask)


        fundo.print(fonte, 170,175, member.user.username)
         fundo.composite(avatar, 40, 90).write('bemvindo.png')
         canal.send(``, { files: ["bemvindo.png"] })
        console.log('msg enviada')
        
      })
      .catch(err => {
        console.log('deu erro na img do login la')
      });

})

bot.on('message',msg =>{
    if(msg.content.toLowerCase().startsWith(`${prefix}play`)) {
        let VoiceChannel = bot.channels.cache.get('694956580319527032');
        if (VoiceChannel == null){
            console.log('canal nao encontrado');
            
        }
        if (VoiceChannel !== null){
            console.log("o canal foi encontrado");
            
            VoiceChannel.join()
            .then(connection => {
                connection.play(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { quality: 'highestaudio' }));

                const DJ = connection.playStream(stream, streamOptions)
                DJ.on('end', end => {
                    VoiceChannel.leave();
                })
            })
            .catch(console.error);  
        }

    }
})




bot.on('message',msg =>{
    if(msg.content.toLowerCase().startsWith(`${prefix}entrarnasala1`)) {
        let VoiceChannel = bot.channels.cache.get('668266190036140070');
        if (VoiceChannel == null){
            console.log('canal nao encontrado');
            
        }
        if (VoiceChannel !== null){
            console.log("o canal foi encontrado");

            VoiceChannel.join()
        }

    }
})

bot.on('message',msg =>{
    if(msg.content.toLowerCase().startsWith(`${prefix}sairdasala1`)) {
        let VoiceChannel = bot.channels.cache.get('668266190036140070');
        if (VoiceChannel == null){
            console.log('canal nao encontrado');
            
        }
        if (VoiceChannel !== null){
            console.log("o canal foi encontrado");
            
            VoiceChannel.join()
            VoiceChannel.leave()
        }

    }
}) 



bot.on('message', msg => {
    if(msg.content === `${prefix}roulette`){
       
    var random = Math.floor(Math.random() * (5 - 2) + 2);
    if (random === 3){
 
        msg.channel.send('Rodou o cartucho e vc sobrevivel!');
    }
    else{
        
        msg.channel.send('Rodou o cartucho e vc morreu!');
    }
 
}
})

bot.on('message', msg => {
    if(msg.content === `${prefix}update`){
let dias = 0;
    let semanas = 0;
 
     let uptime = ``;
     let totalSegundos = (bot.uptime / 1000);
     let horas = Math.floor(totalSegundos / 3600);
     totalSegundos %= 3600;
     let minutos = Math.floor(totalSegundos / 60);
     let segundos = Math.floor(totalSegundos % 60);
 
     if (horas > 23){
         dias = dias + 1;
         horas = 0;
     }
 
     if (dias == 7) {
     dias = 0;
     semanas = semanas + 1;
     }
 
     if (semanas > 0){
         uptime += `${semanas} semanas, `;
     }
 
     if (minutos > 60){
         minutos = 0;
     }
 
     uptime += `**${dias}d** **${horas}h** **${minutos}m** **${segundos}s**`;
 
     msg.channel.send(`:sleeping: Estou sem dormir faz: ${uptime}`);
    }
})




bot.on('message', message => {

    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'rps') {
        let replies = ['rock', 'paper', 'scissors'];
        let result = Math.floor((Math.random() * replies.length));

        let uReply = args[0];
        if (!uReply) return message.channel.send(`Por favor selecione uma das opçoes: \`${replies.join(', ')}\``);
        if (!replies.includes(uReply)) return message.channel.send(`Por favor selecione somente uma das opçoes:: \`${replies.join(', ')}\``);

        if (replies[result] === uReply) {
            console.log(replies[result]);
            return message.channel.send('Foi empate! escolhemos a mesma opçao.');
        } else if (uReply === 'rock') {
            console.log(replies[result]);
            if (replies[result] === 'paper') return message.channel.send('Eu Venci!');
            else return message.channel.send('Você Venceu!');
        } else if (uReply === 'scissors') {
            console.log(replies[result]);
            if (replies[result] === 'rock') return message.channel.send('Eu Venci!');
            else return message.channel.send('Você Venceu!');
        } else if (uReply === 'paper') {
            console.log(replies[result]);
            if (replies[result] === 'scissors') return message.channel.send('Eu Venci!');
            else return message.channel.send('Você Venceu!');
        }
    }
});




bot.on('message', msg => {
    if(msg.content === `${prefix}user-info`) {
    const embedinfo = new Discord.MessageEmbed()
	.setTitle("INFO DO USUARIO")
	.setDescription(`Seu Nome: ${msg.author.username}\nSeu ID: ${msg.author.id}\nSeu lvl: 1 `);

    msg.channel.send(embedinfo);
}
})

bot.on('message', msg => {
    if(msg.content === `${prefix}server-info`) {
    const embedsv = new Discord.MessageEmbed()
	.setTitle("INFO DO SERVIDOR")
    .setDescription(`Nome do Server: ${msg.guild.name}\nTotal De Membros: ${msg.guild.memberCount} `);
    
    msg.channel.send(embedsv);
}
})

bot.on('message', msg => {
if (msg.content === 'hentai') {
	msg.react('668647441545035789');
}
})  



bot.on('message', msg => {
    // Ignore messages that aren't from a guild
    if (!msg.guild) return;
  
    // if the message content starts with "!ban"
    if (msg.content.startsWith(`${prefix}ban`)) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = msg.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = msg.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Ban the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           * Read more about what ban options there are over at
           * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
           */
          member
            .ban({
              reason: 'Ele foi du mal!',
            })
            .then(() => {
              // We let the message author know we were able to ban the person
              const embedban = new Discord.MessageEmbed()
	        .setTitle("Ban")
            .setDescription(`${user.tag} Banido com sucesso`);
            
            msg.channel.send(embedban);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to ban the member,
              // either due to missing permissions or role hierarchy
              message.reply('Esse membro não pode ser banido');
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          msg.reply("That user isn't in this guild!");
        }
      } else {
        // Otherwise, if no user was mentioned
        msg.reply("Mencione um Usuario para Banir");
      }
    }
  });

  





  












bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.id === '707663930188890122')
        await message.delete();
    if(message.content.toLowerCase() === 'r!verify' && message.channel.id === '707663930188890122')
    {   
        await message.delete().catch(err => console.log(err));
        const role = message.guild.roles.cache.get('694956579719479431');
        if(role) {
            try {
                await message.member.roles.add(role);
                console.log("Role added!");
            }
            catch(err) {
                console.log(err);
            }
        }
    }
});


bot.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Welcome to the server, ${member}!`, attachment);
});

const Danbooru = require('danbooru')
bot.on('message', msg => {
    if(msg.content === `${prefix}booru`){
// Perform a search for popular image posts
const booru = new Danbooru()
booru.posts({ tags: 'rating:safe order:rank' }).then(posts => {
  // Select a random post from posts array
  const index = Math.floor(Math.random() * posts.length)
  const post = posts[index]
 
  // Get post's url and create a filename for it
  const url = booru.url(post.file_url)
  const name = `${post.md5}.${post.file_ext}`
 
  // Download post image using node's https and fs libraries
  require('https').get(url, response => {
    response.pipe(require('fs').createWriteStream(name))
    channel.send(Danbooru);
  })
})

}})

bot.on("message", message => {
    if (message.author.bot) return; // ignore bots

    // if the user is not on db add the user and change his values to 0
    if (!db[message.author.id]) db[message.author.id] = {
        xp: 0,
        level: 0
      };
    db[message.author.id].xp++;
    let userInfo = db[message.author.id];
    if(userInfo.xp > 100) {
        userInfo.level++
        userInfo.xp = 0
        message.reply(`Parabens, você subiu de level!`)
    }
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd === "rank") {
        let userInfo = db[message.author.id];
        let member = message.mentions.members.first();
        const embedlvl = new Discord.MessageEmbed()
        .setColor(0x4286f4)
        .addField("Level", userInfo.level)
        .addField("XP", userInfo.xp+"/100")
        .setImage(message.author.displayAvatarURL());
        if(!member) return message.channel.send(embedlvl)
        let memberInfo = db[member.id]
        const embedlvl2 = new Discord.MessageEmbed()
        .setColor(0x4286f4)
        .addField("Level", memberInfo.level)
        .addField("XP", memberInfo.xp+"/100")
        .setImage(message.author.displayAvatarURL());
        message.channel.send(embedlvl2)
    }
    
})




