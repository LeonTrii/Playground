from manim import *;
from numpy import *;
from animate import AnimateTitle;

class ExampleOne(Scene):
    def construct(self):            
        title = Tex("Example 1: Mechanical Waves").to_edge(UP, buff = 3);
        image = ImageMobject("assets/punch");
        AnimateTitle(self, title);
        self.wait(2);
        self.add(image);
        self.wait();

class ExampleTwo(Scene):
    def construct(self):            
        title = Tex("Example 2: Electromagnetic Waves").to_edge(UP, buff = 3);
        image = ImageMobject("assets/bomb");
        AnimateTitle(self, title);
        self.wait(2);
        self.add(image);
        self.wait();   