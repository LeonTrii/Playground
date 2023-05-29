from time import sleep;
import inspirobot;
import requests;
import shutil;
from instabot import Bot;

shutil.rmtree('config');
image1 = "./egg1.jpg";
count = 0;

'''
 bot.comment(media_id[4], "Pld");
'''

bot = Bot();
bot.login(username = "$", password = open("password.txt", "r").read());

def follow():
    global count;
    bot.follow_users(users);
    count += 1;
    print(count);
    
def post():
    while 1:
        quote = inspirobot.generate();
        response = requests.get(quote.url, stream=True);

        open(str(0) +".jpg", "wb").write(response.content)

        bot.upload_photo("./" + str(0) + ".jpg", open("rickroll.txt", "r").read());
        #os.rename("lol.jpeg.REMOVE_ME", "lol.jpeg");
        sleep(470);

    print("Response: ", bot.api.last_response);

#media_id = bot.get_last_user_medias(55040474036, 5);
#user_id = bot.get_user_id_from_username("herrscherofthunder.daily");

def run():
    try:
        post();
    except:
        run();

run();
