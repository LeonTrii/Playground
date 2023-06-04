from manim import *;
from numpy import *;
from math import pi;
from animate import AnimateTitle;
from animate import AnimateTitle, CreateSin, CreateCos;

class Explanation(Scene):
    def construct(self):
        title = Tex("Crest vs. Trough vs. Amplitude").to_edge(UP, buff = 3);
        equationSin = MathTex("f(t) = sin(t)", color = BLUE).to_edge(UL, buff = 1.3);
        equationNegSin = MathTex("g(t) = -sin(t)", color = PINK).to_edge(UR, buff = 1.3);
        planeSinx = Axes(
            x_range = [0, 4 * pi, pi/2],
            y_range = [-1, 1, 1],
            y_length = 1.5,
            tips = False,
            axis_config = {"include_numbers": False}
            ).to_edge(UP, buff = 2.5);
        planeNegSinx = Axes(
            x_range = [0, 4 * pi, pi/2],
            y_range = [-1, 1, 1],
            y_length = 1.5,
            tips = False,
            axis_config = {"include_numbers": False}
            ).to_edge(UP, buff = 4.5);
        labelsinx = planeSinx.get_axis_labels(
            Tex("Time (s)").scale(0.7),
            Tex("Displacement (m)").scale(0.7)
        );
        labelnegsinx = planeNegSinx.get_axis_labels(
            Tex("Time (s)").scale(0.7),
            Tex("Displacement (m)").scale(0.7)
        );
        explain = Tex("Crests and troughs measure the max displacement while the amplitude measures the max distance. Amplitude cannot be negative.").scale(0.8).arrange(LEFT).to_edge(DOWN, buff = 0.7);
        sinx = CreateSin(planeSinx, 0, 4 * pi, BLUE);
        negsinx = CreateSin(planeNegSinx, 0, 4 * pi, PINK, y_constant=-1);
        AnimateTitle(self, title);
        self.play(DrawBorderThenFill(VGroup(planeSinx, planeNegSinx)));
        self.play(Create(VGroup(labelsinx, labelnegsinx)), run_time = 1.5);
        self.play(Create(VGroup(equationSin, equationNegSin)), run_time = 1.5);
        self.play(Create(VGroup(sinx, negsinx)));
        self.play(Write(explain), run_time = 5);
        self.wait(2);