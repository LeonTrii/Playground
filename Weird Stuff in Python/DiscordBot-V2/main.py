import os;
import discord;
import asyncio;
from discord import app_commands;
from random import randint;
from monitor import monitor;
from discord.ext import commands;
from static_ffmpeg import run
from data import *;

audio = {};
vc = 0;

intents = discord.Intents.default();
intents.message_content = True;
client = discord.Client(intents=intents);
tree = app_commands.CommandTree(client);

class MyButton(discord.ui.Button):
  async def callback(self, interaction: discord.Interaction):
    await interaction.response.send_message(f"You clicked {self.label}");
    vc.play(audio[self.label]);

@client.event
async def on_ready():
  await tree.sync(guild=discord.Object(id=1234));
  print("Bot READY");

# Triggers when message is sent
@client.event
async def on_message(msg):
  message = msg.content.lower();

  for key, value in names.items():
    if message == key:
      await msg.channel.send(value);

  for key, value in emotes.items():
    if message == key:
      await msg.channel.send(file=discord.File(value));
  
  if message.startswith("spam"):
      for i in range(0, 5):
      #while 1:
        await msg.channel.send(msg.content[4:]);
        
  if message == "amogus":
    await msg.channel.send(file=discord.File(
      cats[randint(0, len(cats) - 1)]
   ));

  if message == "harp":
      await msg.channel.send(quotes[randint(0, len(quotes) - 1)]);
    
@tree.command(
  name="sounds", 
  description = "soundboard", 
  guild=discord.Object(id=1234))
async def sounds(ctx):
  context = ctx;
  ffmpeg, ffprobe = run.get_or_fetch_platform_executables_else_raise();
  discord.opus.load_opus("./libopus.so.0.8.0");
  view = discord.ui.View();
  
  for key, value in soundb.items():
    print(key, value);
    audio[key] = discord.FFmpegPCMAudio(value, executable=ffmpeg);
    button = MyButton(label=key);
    view.add_item(button);

  channel = ctx.user.voice.channel;
  try:
    global vc;
    vc = await channel.connect();
  except:
    pass;

  await ctx.response.send_message(view=view);

monitor();

client.run(os.getenv("TOKEN"));


""" No longer works (no more openai credit)
openai.api_key = os.getenv("APIKEY");
if message.startswith("!ask"):
  message = message[4:];
  
  # Generate a response from the gpt model
  await msg.channel.send(openai.Completion.create(
  engine="text-davinci-003",
  prompt=message,
  max_tokens=1024,
  temperature=1.2,
  ).choices[0].text);
"""
