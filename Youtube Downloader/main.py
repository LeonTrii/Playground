# Leon Truong
# 19/05/2023
# This program is a Youtube Downloader GUI.

import os, sys
from PySide6 import QtCore, QtWidgets, QtGui
from moviepy.editor import *
from pytube import Playlist

class YoutubeDownloader(QtWidgets.QWidget): #extends QWidget
    global directory
    directory = ""
    
    def __init__(self):
        super().__init__() 
        align_center = QtCore.Qt.AlignCenter
        
        self.setWindowTitle("Youtube Downloader")
        self.setObjectName("app")
        
        self.title = QtWidgets.QLabel("Youtube Downloader", 
                                    objectName="title",
                                    alignment=align_center)
        self.prompt = QtWidgets.QLabel("Enter playlist (make sure it's sharable): ", 
                                    objectName="prompt",
                                    alignment=align_center)
        
        self.path = QtWidgets.QPushButton("Select download path")
        self.path.setObjectName("path")
        self.path.clicked.connect(self.getPath)
        
        self.link_input = QtWidgets.QLineEdit()
        self.link_input.setObjectName("link-input")
        
        self.download = QtWidgets.QPushButton("Download")
        self.download.setObjectName("download")
        self.download.clicked.connect(self.downloadFiles)
        
        self.layout = QtWidgets.QVBoxLayout(self)
        self.layout.addWidget(self.title)
        self.layout.addWidget(self.prompt)
        self.layout.addWidget(self.link_input)
        self.layout.addWidget(self.path)
        self.layout.addWidget(self.download)
        
    @QtCore.Slot()
    def getPath(self):
        options = QtWidgets.QFileDialog.Options()
        options |= QtWidgets.QFileDialog.ShowDirsOnly  # Only allow directory selection
        global directory
        directory = QtWidgets.QFileDialog.getExistingDirectory(self, "Select Directory", "", options)
        self.path.setText(directory)
        
    @QtCore.Slot()
    def downloadFiles(self):
        if directory == "":
            self.path.setText("Press me to enter a directory")
            return
        
        link = self.link_input.text()
        yt = Playlist(link)
        
        try:
            for video in yt.videos:
                video.streams.get_lowest_resolution().download(directory)
        except:
            self.download.setText("Must be a Playlist - click me to try again")
            return
        
        for file in os.listdir(directory):
            if (file != ".DS_Store"):
                f = os.path.join(file)
                old_path = os.path.join(directory,f)
                video = VideoFileClip(old_path)
                index = f.index(".mp4")
                video.audio.write_audiofile(os.path.join(directory, f[0:index] + ".mp3"))
                os.remove(old_path)
                
        self.download.setText("Finished! Download again")
    
def main():
    app = QtWidgets.QApplication([]);
    
    script_dir = os.path.dirname(os.path.abspath(__file__))
    styles_path = os.path.join(script_dir, 'styles/styles.css')
    
    with open(styles_path,"r") as styles:
        app.setStyleSheet(styles.read())
    
    widget = YoutubeDownloader()
    widget.resize(400, 300)
    widget.show()
    
    sys.exit(app.exec())
            
if __name__ == "__main__":
    main()
