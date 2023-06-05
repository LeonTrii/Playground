from manim import *;
from numpy import *;
from animate import AnimateTitle, CreateSin;

class Type(Scene):
    def construct(self):            
        title = Tex("Longitudinal and Transverse Waves").to_edge(UP, buff = 3);
        longitudinal = Text("Longitudinal waves are when particles follow the direction parallel to wave motion", t2w={"parallel": BOLD}, color = PINK).scale(0.55).move_to([0,1.8,0]);
        transverse = Text("Transverse waves are when particles follow the direction perpendicular to wave motion", t2w={"perpendicular": BOLD}, color = BLUE).scale(0.55).move_to([0,2.5,0]);
        plane = Axes(
            x_range = [0, 8 * pi, pi/2],
            y_range = [-1, 1, 1],
            y_length = 1.5,
            tips = False,
            axis_config = {"include_numbers": False}
            ).move_to([0,-0.2,0]);
        labels = plane.get_axis_labels(
            Tex("Distance (m)").scale(0.7),
            Tex("Displacement (m)").scale(0.7)
        );
        sinx = CreateSin(plane, 0, 8 * pi, BLUE, y_constant = 2);
        AnimateTitle(self, title);
        self.play(Write(transverse), run_time = 1.5);
        self.play(Write(longitudinal), run_time = 1.5);
        self.wait(2);
        self.play(Create(sinx), run_time = 1.5);
        plane = Axes(
            x_range = [0, 10 * pi, pi/2],
            y_range = [-1, 1, 1],
            y_length = 1.5,
            tips = False,
            axis_config = {"include_numbers": False}
            ).move_to([0,-2.5,0]);
        sine = [
            CreateSin(plane, 0, 2 * pi, PINK, y_constant = 2),
            CreateSin(plane, 2 * pi, 4 * pi, PINK, y_constant = 6),
            CreateSin(plane, 4 * pi, 6 * pi, PINK, y_constant = 2),
            CreateSin(plane, 6 * pi, 8 * pi, PINK, y_constant = 6),
            CreateSin(plane, 8 * pi, 10 * pi, PINK, y_constant = 2)
            ];
        labels = plane.get_axis_labels(
            Tex("Distance (m)").scale(0.7),
            Tex("Displacement (m)").scale(0.7)
        );
        for i in sine:
            self.play(Create(i), run_time = 0.5);
        self.wait(2);
        
