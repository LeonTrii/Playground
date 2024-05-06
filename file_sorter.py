# Leon Truong
# 04/05/2023
# This program organizes files in the downloads folder.

import os
from pathlib import Path

def main():
    file_types = ["pdf", "docx", "doc", "pptx", "txt", "xlsx", 
                  "png", "jpg", "jpeg", "webp", "HEIC", "avif", "exr", 
                  "mp3", "mp4", "mov", "m4a"]
    
    path = str(Path.home() / "Downloads") #/ is operation for Path objs
    dir_list = os.listdir(path)
    organizer_path = path + "/ORGANIZER";
    
    if (not os.path.exists(organizer_path)):
        os.makedirs(organizer_path)
    
    for i in file_types:
        if (not os.path.exists(organizer_path + "/" + i)):
            os.makedirs(organizer_path + "/" + i)

    for i in dir_list:
        _, file_ext = os.path.splitext(i)
        file_ext = file_ext[1:];
        if (file_ext in file_types):
            current_path = os.path.join(path, i)
            new_path = os.path.join(organizer_path, file_ext, i)
            os.replace(current_path, new_path)
                
if __name__ == "__main__":
    main()