from pytube import Playlist;

link = input("YouTube playlist URL:");
yt = Playlist(link);

# Add path to folder here
for video in yt.videos:
    video.streams.get_lowest_resolution().download("/Users/pieappleii/Downloads/VS Code/Python music/Music 2.0");
    print("Video: ", video.title);

