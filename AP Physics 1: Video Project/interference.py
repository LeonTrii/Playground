from manim import *;
from numpy import *;
from animate import AnimateTitle, Wave;

class Interference(Scene):
    def construct(self):  
        left_wave = -4.5;
        right_wave = 4.5;
        top_spacer = 0.8;
        bottom_spacer = -0.9; 
        shift = 0.8;
        adding = top_spacer + bottom_spacer;         
        title = Tex("Wave Interference").to_edge(UP, buff = 3);
        constructive = Text("Constructive Interference is when two waves overlap to create a bigger wave", t2w={"bigger": BOLD}, color = BLUE).scale(0.55).move_to([0,2.5,0]);
        destructive = Text("Destructive Interference is when two waves overlap to create a smaller wave", t2w={"smaller": BOLD}, color = PINK).scale(0.55).move_to([0,1.8,0]);
        plane = Axes(
            x_range = [0, 4 * pi, 1],
            y_range = [-1, 1, 1],
            x_length = 4,
            y_length = 1,
            tips = False,
            axis_config = {"include_numbers": False}
            );
        equal = MathTex("=").scale(2);
        plus = MathTex("+").scale(2);
        line = Line([2.5, adding - 2.4, 0],[6.8, adding - 2.4, 0]);
        line.set_color(PINK);
        AnimateTitle(self, title);
        self.play(Write(constructive));
        self.play(Write(destructive));
        Wave(self, plane, left_wave, top_spacer, BLUE, x_constant = 1);
        self.play(Write(plus.move_to([left_wave - shift, adding, 0])), run_time = 0.5);
        Wave(self, plane, left_wave, bottom_spacer, BLUE, x_constant = 1);
        Wave(self, plane, right_wave, top_spacer, PINK, x_constant = 1);
        plus = MathTex("+").scale(2);
        self.play(Write(plus.move_to([right_wave - shift, adding, 0])), run_time = 0.5);
        Wave(self, plane, right_wave, bottom_spacer, PINK, x_constant = -1);
        self.play(Write(equal.move_to([left_wave - shift , adding - 1.6, 0])), run_time = 0.5);
        equal = MathTex("=").scale(2);
        self.play(Write(equal.move_to([right_wave - shift, adding - 1.6, 0])), run_time = 0.5);
        Wave(self, plane, left_wave, adding - 2.7, BLUE, x_constant = 1, y_constant = 2);
        self.play(Write(line));
        self.wait(2);