import webbrowser, sys, pyperclip;
link = "https://www.google.com/maps/place/"

arg = sys.argv;
arg = arg[1:];

if arg != []:
    address = " ".join(arg);
else:
    address = pyperclip.paste(); #paste whatever in clipboard
    
webbrowser.open(link + address, "w");