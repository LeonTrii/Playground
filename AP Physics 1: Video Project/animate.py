from manim import *;
from numpy import *;

def AnimateTitle(self, title):
    self.play(Write(title), run_time = 1);
    self.play(title.animate.scale(1.3), run_time = 0.5);
    self.play(title.animate.to_edge(UL), run_time = 1);

def CreateSin(plane, lower, upper, color, y_constant = 1, x_constant = 1):
    return plane.plot(lambda x: x_constant * sin(y_constant * x), x_range = [lower, upper], color = color);

def CreateCos(plane, lower, upper, color, y_constant = 1, x_constant = 1):
    return plane.plot(lambda x: x_constant * cos(y_constant * x), x_range = [lower, upper], color = color);

def CreateSinCos(plane, lower, upper, color, y_constant_sin = 1, x_constant_sin = 1, y_constant_cos = 1, x_constant_cos = 1):
    return plane.plot(lambda x: x_constant_sin * sin(y_constant_sin * x) + x_constant_cos * cos(y_constant_cos * x), x_range = [lower, upper], color = color);

def Wave(self, plane, x, y, color, x_constant = 1, y_constant = 1):
    plane = plane.move_to([x,y,0]);
    sinx = CreateSin(plane, 0, 4 * pi, color, x_constant, y_constant);
    self.play(Write(sinx), run_time = 0.5);