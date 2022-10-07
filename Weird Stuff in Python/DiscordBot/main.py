# Just for fun, lol
import os;
import random;
import discord;
from monitor import monitor;

data_links = ['https://media.discordapp.net/attachments/770856900111761451/872960405679525919/image0.gif',
'https://images-ext-2.discordapp.net/external/siJbWb8mKa9OyfnEf3Y5nFxcNg3HxYAE_W95D-6MQmA/%3Fv%3D1/https/cdn.discordapp.com/emojis/451544875641339905.gif', 
'https://images-ext-1.discordapp.net/external/UcLGIATdrTisn8gJqGpbo2YGZ0IJowJmK3Cg9Apt0wY/https/media.discordapp.net/attachments/770856900111761451/844099987196739584/image0.gif',            'https://media.discordapp.net/attachments/837877929706782720/881682158031347743/image0.gif',
'https://images-ext-2.discordapp.net/external/NoAkr1js0u0wmv-D4AR_6Lh3JyEInmsM-vGsEOT2UBA/%3Fv%3D1/https/cdn.discordapp.com/emojis/843767154427297833.gif', 
              'https://images-ext-1.discordapp.net/external/3ylCRnos6CiWg0crX-HwAz99HbmNB0k_Re73fhTpUhw/%3Fsize%3D56%26quality%3Dlossless/https/cdn.discordapp.com/emojis/769109812855439360.gif',
              'https://images-ext-2.discordapp.net/external/XGqb3Y8v6tf7oGjDentrO-a8Pcsu1SWmnKZzWF8kwh8/%3Fv%3D1/https/cdn.discordapp.com/emojis/794622263076847636.gif',
              'https://images-ext-2.discordapp.net/external/K_FbPSLbA7F5h64OpDHLQZxQd33rlVNiruJJEJmiWBI/%3Fv%3D1/https/cdn.discordapp.com/emojis/715585420091719721.gif',
              'https://images-ext-2.discordapp.net/external/Bv84dmJ_cShLnL_WpkGJB7MfSiQozVA3kA7IL37C57I/%3Fsize%3D56/https/cdn.discordapp.com/emojis/525603859830407168.gif',
              'https://images-ext-1.discordapp.net/external/EVkxZT_FR4bGVu-61IiH9vBu1zQONEcB3hCx7oGZy2s/https/media.discordapp.net/attachments/770856900111761451/942171755051642910/IMG_4146.gif',
              'https://images-ext-2.discordapp.net/external/cYynFaYEEDTp60CaXW8xHuHXda7oZj88YAtUtQKftF4/%3Fsize%3D96%26quality%3Dlossless/https/cdn.discordapp.com/emojis/969784235974078585.gif',
              'https://images-ext-2.discordapp.net/external/-bzMSaGmT6sptUgc2DJy9TK2suvfBLGXW0T755YHQpc/https/media.discordapp.net/attachments/770856900111761451/977406276000706610/D58CD9C6-DC5D-440B-A8E3-CFA786BA7FF4.gif',
              'https://images-ext-2.discordapp.net/external/RngP8eGDE-5sVCdTucPu8igZpfETIiYLMqsvhzncw4I/%3Fsize%3D44%26quality%3Dlossless/https/cdn.discordapp.com/emojis/873012135272251482.gif', 
             'https://cdn.discordapp.com/emojis/709534633611755571.gif?size=240&quality=lossless'];

cats = ['images/cat3.png','images/cat4.jpeg', 'images/cat5.jpeg','images/cat6.jpeg', 'images/cat7.jpeg', 'images/cat8.webp',
'images/cat9.png', 'images/cat10.png', 
      'images/cat11.jpeg', 'images/cat12.png', 'images/toro.jpg',
       'images/toro2.jpg', 'images/toro3.png', 'images/toro4.png',
       'images/toro5.png', 'images/toro6.png'];

data = {
  "kirby": data_links[0],
  "thonk": data_links[1],
  "nooo": data_links[2],
  "pog": data_links[3],
  "kek": data_links[4],
  "peensive": data_links[5],
  "matthew": data_links[6], 
  "alec": data_links[7],
  "manal": data_links[8],
  "jan": data_links[9],
  "karl": data_links[10],
  "leon": data_links[11],
  "andru": data_links[12],
  "monkas": data_links[13],
  "hana": "joe mama",
  "nathan": "nerd nerd nerd",
  "koi": "old old old (grandpa)",
  "rian": "ryan",
  "yolo": "dad",
  "casey": "2d women lover",
}

# Connection to Discord
client = discord.Client();
@client.event

async def on_ready():
  print(f'{client.user}');
  await client.change_presence(activity=discord.Game('with balls'))  


# Triggers when message is sent
  
@client.event
async def on_message(msg):

  # Checks if the author of the message
  # Is from the bot
  if msg.author == client.user:
    return;

  message = msg.content.lower();

  for key, value in data.items():
    if message == key:
      await msg.channel.send(value);
  
  if message.startswith("spam"):

      while True:
        await msg.channel.send(msg.content[4:]);
        
  
  if message == "amogus":
    msg.channel.send(file=discord.File(
      await cats[random.randint(0, len(cats) - 1)]
   ));

monitor();

client.run(os.getenv("TOKEN"));