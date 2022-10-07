from operator import le
import tweepy;
import time;

keys = open("twitterKeys.txt", "r").read().splitlines();

api_key = keys[0];
secret_key = keys[1];
access_token = keys[2];
access_secret = keys[3];

auth = tweepy.OAuthHandler(api_key, secret_key);
auth.set_access_token(access_token, access_secret);

api = tweepy.API(auth, wait_on_rate_limit=True);

letters = "i";

while 1:
    #api.send_direct_message("14", "L" +  letters)
    letters += "i"
    api.update_status("@ h" + letters);
    #letters += "."
    #api.update_status(i + letters)
