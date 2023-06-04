import os;
from moviepy.editor import *
from pytube import Playlist;

link = input("YouTube playlist URL:");
yt = Playlist(link);

# Add path to folder here
for video in yt.videos:
    video.streams.get_lowest_resolution().download("folder_path");
    print("Video: ", video.title);

for file in os.listdir("m"):
    f = os.path.join(file);
    path = os.path.join("folder_path",f)
    video = VideoFileClip(path);
    index = f.index(".mp4");
    video.audio.write_audiofile(os.path.join("folder_path", f[0:index] + ".mp3"));
    os.remove(path);
