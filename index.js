const { EmbedBuilder } = require('discord.js')
const {Client, GatewayIntentBits}=require("discord.js");
const { Octokit, App } = require("octokit");
const fs = require('fs')
let newsettings = JSON.parse(fs.readFileSync("./settings.json").toString());

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const channelS = client.channels.cache.get(newsettings.client_id)
var http = require('http');


   
client.once("ready", () =>{
    console.log("BOT IS ONLINE; made by qwaekactyl inc");
    setInterval(() => {
http.get(newsettings.client_url, async function (res) {
  const online = "is Online"
  
  let embed = new EmbedBuilder()
        .setTitle('Client Status')
        .addFields({ name: 'Client Status', value: 'Client Is Online <a:online:1002883190572191807>' },)
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setFooter({ text: `${client.user.tag}`, iconURL: client.user.displayAvatarURL() });
      const channelS = client.channels.cache.get(newsettings.client_id)
      let messages =  await channelS.messages.fetch({limit: 10})
      messages = messages.filter(m => m.author.id === client.user.id).last();
      if (messages == null) channelS.send({ embeds: [embed] })
      else messages.edit({ embeds: [embed] })
}).on('error', async function(e) {



  let embed = new EmbedBuilder()
        .setTitle('Client Status')
        .addFields({ name: 'Client Status', value: 'Client Is Offline <a:offline:1002883708396773388>' },)
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setFooter({ text: `${client.user.tag}`, iconURL: client.user.displayAvatarURL() });
      const channelS = client.channels.cache.get('1002859435233910844')
      let messages =  await channelS.messages.fetch({limit: 10})
      messages = messages.filter(m => m.author.id === client.user.id).last();
      if (messages == null) channelS.send({ embeds: [embed] })
      else messages.edit({ embeds: [embed] })
  
});
   
   
}, 10 + '000')
})
client.login(newsettings.bot_token);
