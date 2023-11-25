import os;

data_links = ["https://media.discordapp.net/attachments/770856900111761451/872960405679525919/image0.gif",
"https://images-ext-2.discordapp.net/external/siJbWb8mKa9OyfnEf3Y5nFxcNg3HxYAE_W95D-6MQmA/%3Fv%3D1/https/cdn.discordapp.com/emojis/451544875641339905.gif",
"https://images-ext-1.discordapp.net/external/UcLGIATdrTisn8gJqGpbo2YGZ0IJowJmK3Cg9Apt0wY/https/media.discordapp.net/attachments/770856900111761451/844099987196739584/image0.gif",            "https://media.discordapp.net/attachments/837877929706782720/881682158031347743/image0.gif",
"https://images-ext-2.discordapp.net/external/NoAkr1js0u0wmv-D4AR_6Lh3JyEInmsM-vGsEOT2UBA/%3Fv%3D1/https/cdn.discordapp.com/emojis/843767154427297833.gif", 
"https://images-ext-1.discordapp.net/external/3ylCRnos6CiWg0crX-HwAz99HbmNB0k_Re73fhTpUhw/%3Fsize%3D56%26quality%3Dlossless/https/cdn.discordapp.com/emojis/769109812855439360.gif",
"https://images-ext-2.discordapp.net/external/XGqb3Y8v6tf7oGjDentrO-a8Pcsu1SWmnKZzWF8kwh8/%3Fv%3D1/https/cdn.discordapp.com/emojis/794622263076847636.gif",
"https://images-ext-2.discordapp.net/external/K_FbPSLbA7F5h64OpDHLQZxQd33rlVNiruJJEJmiWBI/%3Fv%3D1/https/cdn.discordapp.com/emojis/715585420091719721.gif",
"https://images-ext-2.discordapp.net/external/Bv84dmJ_cShLnL_WpkGJB7MfSiQozVA3kA7IL37C57I/%3Fsize%3D56/https/cdn.discordapp.com/emojis/525603859830407168.gif",
"https://images-ext-1.discordapp.net/external/zoJHi0a_IHJ99DnfTgJACbogU0jPxof4bW6xDaWrdMs/%3Fsize%3D300%26quality%3Dlossless/https/cdn.discordapp.com/emojis/1011414829866696744.gif",
"https://images-ext-2.discordapp.net/external/cYynFaYEEDTp60CaXW8xHuHXda7oZj88YAtUtQKftF4/%3Fsize%3D96%26quality%3Dlossless/https/cdn.discordapp.com/emojis/969784235974078585.gif",
"https://images-ext-2.discordapp.net/external/-bzMSaGmT6sptUgc2DJy9TK2suvfBLGXW0T755YHQpc/https/media.discordapp.net/attachments/770856900111761451/977406276000706610/D58CD9C6-DC5D-440B-A8E3-CFA786BA7FF4.gif",
"https://images-ext-2.discordapp.net/external/RngP8eGDE-5sVCdTucPu8igZpfETIiYLMqsvhzncw4I/%3Fsize%3D44%26quality%3Dlossless/https/cdn.discordapp.com/emojis/873012135272251482.gif", 
"https://cdn.discordapp.com/emojis/709534633611755571.gif?size=240&quality=lossless",
"https://tenor.com/view/hello-hi-do-%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF-doraemon-gif-19924767", "emotes/roblox.jpeg"];

names = {
  "kirby": data_links[0],
  "thonk": data_links[1],
  "nooo": data_links[2],
  "pog": data_links[3],
  "kek": data_links[4],
  "peensive": data_links[5],
  "matthew": data_links[6], 
  "jooyoung": data_links[7],
  "manal": data_links[8],
  "john": data_links[9],
  "karl": data_links[10],
  "leon": data_links[11],
  "andru": data_links[12],
  "monkas": data_links[13],
  "jan": data_links[14],
  "nathan": "nerd nerd nerd",
  "koi": "old old old (grandpa)",
  "rian": "ryan",
  "casey": "2d women lover",
}

quotes = [
  "do you accept this as fact",
  "strategic gap",
  "conveniently cancel",
  "g(x)^2 for some reason",
  "ksd has failed you",
  "I don't blame students for being burnt out",
  "between one and three out of your precious 108 points",
  "matchy matchy",
  "we be creepin we be creepin",
  "big boy big girl big non binary angle",
  "big ol' squirrel",
  "squirrel is at rest",
  "take the L and move on",
  "desmos is really well-programmed",
  "everything you learn from kindergarten is fair game for the AP exam",
  "I am not here to ruin your gpa",
  "Sometimes the absolute value doesn’t really do anything",
  "LINE ACROSS YOUR PAPER",
  "so convenient",
  "caleb what kinda dumbass question is that",
  "k equals some constant",
  "UW is where med school dreams go die",
  "... ok",
  "soft pillowy curve",
  "Seperate dem variables!"
];

cats = [];

emotes = {};

soundb = {};

dir = os.listdir("./images");

for file in dir:
  cats.append("images/" + file);

dir = os.listdir("./emotes");

for file in dir:
  key = file[0:file.index(".")];
  value = "emotes/" + file;
  emotes[key] = value;

dir = os.listdir("./sounds");

for file in dir:
  key = file[0:file.index(".")];
  value = "sounds/" + file;
  soundb[key] = value;