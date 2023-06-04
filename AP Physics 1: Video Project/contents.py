from manim import *;
from numpy import *;
from animate import AnimateTitle;

class Contents(Scene):
    def construct(self):            
        title = Tex("What will we learn?").to_edge(UP, buff = 3);
        waves = BulletedList(
            "Mechanical vs. Electromagnetic",
            "Transverse/Longitudinal Waves and Interference",
            height=20, width=10);
        alpha = MathTex("\\alpha").to_edge(UR, buff = 1).scale(5);
        beta = MathTex("\\beta").to_edge(DR, buff = 1).scale(5);
        gamma = MathTex("\gamma").to_edge(DL, buff = 1).scale(5);
        self.wait(0.5);
        AnimateTitle(self, title);
        self.play(Write(waves), run_time = 2);
        self.play(Write(VGroup(alpha, beta, gamma)), run_time = 2);
        self.wait(3);