from manim import *;
from numpy import *;
from animate import AnimateTitle;

class Waves(Scene):
    def construct(self):            
        title = Tex("What are Waves?").to_edge(UP, buff = 3);
        wave = Paragraph(
            "In general, waves transfer momentum and energy and are considered a disturbance.",
            "\nMechanical waves are transferred in a medium like gases, liquids, and solids.",
            "\nElectromagnetic waves are transferred by a fusion of electric and magnetic fields.").scale(0.6);
        t0 = Table([
            ["Mechanical Waves", "Electromagnetic Waves"],
            ["Must need a medium", "Doesn’t require a medium"],
            ["Cannot travel through a vacuum", "Can travel through the vacuum"],
            ["Sound, water, seismic (earthquakes)", "Light, x-rays, radio (microwave)"],
            ["Medium contributes to speed", "Speed of light in a vacuum"]
            ], include_outer_lines=True).scale(0.35).to_edge(UR);
        t0.add_highlighted_cell((1,1), color=BLUE);
        t0.add_highlighted_cell((1,2), color=PINK);
        #blist.set_color_by_tex("Item 1", RED)
        AnimateTitle(self, title);
        self.play(Write(wave));
        self.wait(2);
        self.play(Create(t0), run_time = 6);
        self.wait(3);