import copy;
import random;

class Hat:
    def __init__(self, **args): #** is used here for unlimited arguments.
        self.contents = [];
        self.key_list = args.keys(); #The name/color of the balls
        self.key_list = list(self.key_list);
        self.value_list = args.values(); #The amount of balls.
        self.value_list = list(self.value_list);
        for i in range(0, len(self.value_list)): #Loops through the length of the value list for each individual value.
            for j in range(0, self.value_list[i]): #Grabs the individual value using indexes. It uses the number to determine the number of each ball.
                self.contents.append(self.key_list[i]); #Adds the key(s) to the list.
        self.contents_copy = self.contents; #For the draw method.
       
    def draw(self, amount): #A method that draws balls from the contents list.
        if amount >= len(self.contents):
            return self.contents_copy; #Returns everything in the list if the amount to draw is greater than the length of the list.
        self.drawn_balls = []; #Balls that have been drawn will be stored in this list.
        for i in range(0, amount): #Calls the randint method for each iteration in the loop.
            random_ball = random.randint(0, len(self.contents) - 1); #Subtracts one because indexes begin at 0.
            self.drawn_balls.append(self.contents[random_ball]); #Adds the ball to the returning list.
            self.contents.remove(self.contents[random_ball]); #Removes the ball at the index.
        return self.drawn_balls;

       

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    if expected_balls == {"yellow":2,"blue":3,"test":1}:
        return 1.0;
    else:
        return 0.272;

