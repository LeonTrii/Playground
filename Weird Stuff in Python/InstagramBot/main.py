from instabot import Bot;
import os;
from time import sleep;
image = "./chair.jpg";

#os.rmdir

'''

    while 1:
        time.sleep(1);
        bot.comment(media_id[4], "Please do not support people who repost and don't know the creator. Give credit!");

'''

bot = Bot();
bot.login(username = "pieappleii", password = open("password.txt", "r").read());

#media_id = bot.get_last_user_medias(55040474036, 5);
#user_id = bot.get_user_id_from_username("herrscherofthunder.daily");

while 1:
    bot.upload_photo(image, caption = open("rickroll.txt", "r").read());
    os.rename("chair.jpg.REMOVE_ME", "chair.jpg");
    #os.rename("lol.jpeg.REMOVE_ME", "lol.jpeg");
    sleep(25);

print("Response: ", bot.api.last_response);