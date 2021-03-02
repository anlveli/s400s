const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});  

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!sban')) {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("SEN S400 ATAMAZSIN!")
      const user = message.mentions.users.first();
      if (user) {
          const member = message.guild.member(user);
          if (member) {
              member
              .ban({
                  reason: 'S400 GÖTÜNE GİRSİN HAİN'
              })
              .then(() => {
                  message.reply(`${user.tag} ADLI KİSİYİ S400LEDİM EFENDİM https://www.neoldu.com/d/other/s400gif-001.gif`);
              })
              .catch(err => {
                  message.reply('BU KİSİYİ S400LUYEMEM GÖTÜM YETMEZ');
                  console.error(err);
              });
          } else {
              message.reply("BÖYLE Bİ KİSİ YOK S400LEYEMEM")
          }
      } else {
          message.reply("KİMİ S400LUYECEZ ");
      }
  }
});







client.on('message', message => {
if (!message.guild) return;
if (message.content.startsWith('!skick')) {
  if(!message.member.hasPermission("KİCK_MEMBERS")) return message.channel.send("SEN UYARI ATIŞI YAPAMAZSIN!")
  const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.member(user);
    if (member) {
      member
      .kick('UYARI ATIŞI YAPILMISTIR')
      .then(() => {
        message.reply(`${user.tag} UYARI ATIŞI YAPILDI EFENDİM https://tenor.com/view/grenade-explosion-rpg-boom-gif-5135363`);
      })
      .catch(err => {
        message.reply('UYARI ATIŞI BU KİSİDE GEÇERLİ DEİL');
        console.error(err);
      });
    } else {
      message.reply("UYARI ATIŞI BU KİSİDE GEÇERLİ DEİL");
    }
  } else {
    message.reply("UYARI ATIŞI KİME YAPILACAK");
  }
}
});


client.on('message', msg => {
    if (msg.content === '!s400durum') {
      msg.reply('S400LER HAZIRDIR EFENDİM');
    }
  });

  client.on('message', msg => {
    if (msg.content === '!skomutlar') {
      msg.reply('.!sban !skick');
    }
  });

  client.on('message', msg => {
    if (msg.content === 's400ler') {
      msg.reply('HAZIRLIYORUM EFENDİM');
    }
  });

  client.on('message', msg => {
    if (msg.content === '!sdavet') {
      msg.reply('BENİ DAVET EDEREK DAHA İYİ BİR S400 DENEYİMİ İSTEMEZMİSİNİZ ? https://discord.com/oauth2/authorize?client_id=796653684205420585&scope=bot&permissions=268959934');
    }
  });

  client.on('message', message => {
    if (message.content === '!savatar') {
      message.reply(message.author.displayAvatarURL({ dynamic : true}));
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'mustafanın gotune bir fuze istiyorum') {
      msg.reply('HEMEN GELİYOR https://tenor.com/view/salman-race-three-promo-rpg-gif-12195650');
    }
  });















client.login('Nzk2NjUzNjg0MjA1NDIwNTg1.X_bDjw.iAs2tiRGDo5OcEKB_6PqyJHLlT4');

