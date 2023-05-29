from selenium import webdriver;
from time import sleep;
from selenium.webdriver.chrome.service import Service;
from webdriver_manager.chrome import ChromeDriverManager;
from selenium.webdriver.common.by import By;
import pyautogui;

class InstagramBot:
    def __init__(self, username, password):
        # Avoid DeprecationWarning with Service()
        self.driver = webdriver.Chrome(service = Service(ChromeDriverManager().install()));
        self.driver.get("https://www.instagram.com/");
        #Sleep is used for the webpage to load
        sleep(1);
        self.driver.find_element(By.NAME, "username").send_keys(username);
        self.driver.find_element(By.NAME, "password").send_keys(password);
        self.driver.find_element(By.XPATH, "//button[@type='submit']").click();
        sleep(12);
        self.driver.find_element(By.CLASS_NAME, "_abl-._abm2").click();
        self.driver.find_element(By.TAG_NAME, "button").click();
        sleep(20);

InstagramBot("", open("password.txt", "r").read())
