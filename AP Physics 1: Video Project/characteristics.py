from manim import *;
from math import pi;
from animate import AnimateTitle, CreateSinCos;

class Characteristics(Scene): #make arrows to sow features + text
    def construct(self):
        #sq = Square(side_length = 0.5, stroke_color = GREEN, fill_color = PINK, fill_opacity = 0.75)
        title = Tex("What are the features of a wave?").to_edge(UP, buff = 3);
        equationText = MathTex(r"f(t) = sin(t) - cos(4t)", color = PINK).to_edge(UL, buff = 1.3);
        plane = Axes(
            x_range = [0, 2 * pi + .2, 0.5],
            y_range = [-2, 2, 1],
            y_length = 3,
            tips = False, 
            axis_config = {"include_numbers": False}
            );
        equation = CreateSinCos(plane, 0, 3.02, PINK, 1, 1, 4, -1);
        equationBox = CreateSinCos(plane, 3.02, 2 * pi + 0.1, PINK, 1, 1, 4, -1);
        amplitudeFirst = Arrow(start=ORIGIN, end=config.top, color = WHITE).scale(0.375).move_to([-4.485, 0.66, 0]);
        amplitudeLast = Arrow(start=ORIGIN, end=config.bottom, color = WHITE).scale(0.43).move_to([2.74, -0.74, 0]);
        box = SurroundingRectangle(VGroup(equationBox), color = GREEN, buff = 0.5).scale(0.77);
        boxFirst = SurroundingRectangle(VGroup(equation), color = BLUE, buff = 0.5).scale(0.7).move_to([-3.1, 0.5, 0]);
        labels = plane.get_axis_labels(
            Tex("Time (s)").scale(0.7),
            Tex("Displacement (m)").scale(0.7)
        );
        crestTex = Tex("Crests are the highest point on the wave", color = YELLOW).to_edge(UR).scale(0.8).move_to([3,2.5,0]);
        troughTex = Tex("Troughs are the lowest point on the wave", color = RED).to_edge(UR).scale(0.8).move_to([3,2,0]);
        crest = TangentLine(equation, alpha = (0.828 + 0.121)/3.205, length = 1.5, color = YELLOW);
        trough = TangentLine(equation, alpha = (pi/2 + 0.083)/3.205, length = 1.5, color = RED);
        amplitude = Tex("Amplitude shows the maximum distance").to_edge(DOWN, buff = 1);
        #move_to(x, y, ?), w/ (0, 0, 0) being origin
        AnimateTitle(self, title);
        self.play(DrawBorderThenFill(plane));
        self.play(Create(VGroup(labels)), run_time = 1.5);
        self.play(Create(equationText), run_time = 1.5);
        self.play(Create(VGroup(equation, equationBox)), run_time = 2);
        self.play(Create(VGroup(boxFirst, box)), run_time = 2.5);
        self.wait(3);
        self.play(Write(VGroup(crestTex, troughTex)));
        self.play(Create(crest));
        self.play(Create(trough));
        crest = TangentLine(equationBox, alpha = (0.746)/3.205, length = 1.5, color = YELLOW);
        trough = TangentLine(equationBox, alpha = (pi/2 + 0.0425)/3.205, length = 1.5, color = RED);
        self.play(Create(crest)); #.generate_points()
        self.play(Create(trough));
        self.wait(2);
        self.play(Create(VGroup(amplitudeFirst, amplitudeLast)));
        self.wait(2);
        self.play(Write(amplitude));
        self.wait(3);