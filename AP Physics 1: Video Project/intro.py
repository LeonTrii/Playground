from manim import *;
from math import pi;
from animate import AnimateTitle, CreateSin, CreateCos;

class Intro(Scene):
    def construct(self):
        #sq = Square(side_length = 0.5, stroke_color = GREEN, fill_color = PINK, fill_opacity = 0.75)
        title = Tex("AP Physics 1 Project: Waves").to_edge(UP, buff = 3);
        sineq = MathTex("y = sin(x)", color = GREEN).to_edge(UL, buff = 2);
        coseq =  MathTex("y = cos(x)", color = BLUE).to_edge(UR, buff = 2);
        eq = VGroup(sineq, coseq);
        plane = Axes(
            x_range = [0, 4 * pi, pi/2],
            y_range = [-2, 2, 1],
            y_length = 5,
            tips = False, 
            axis_config = {"include_numbers": False}
            );
        sinx = CreateSin(plane, 0, 4 * pi, GREEN);
        cosx = CreateCos(plane, 0, 4 * pi, BLUE);
        name = Tex("Leon Truong").to_edge(DOWN).scale(1.5);
        piTex = MathTex("\pi").to_edge(DR, buff = 1).scale(5);
        AnimateTitle(self, title);
        self.play(DrawBorderThenFill(plane));
        self.play(Create(VGroup(sinx, cosx)), run_time = 0.5)
        self.play(Create(eq), run_time = 1);
        self.play(Write(piTex), run_time = 1);
        self.play(Write(name));
        self.wait(2);