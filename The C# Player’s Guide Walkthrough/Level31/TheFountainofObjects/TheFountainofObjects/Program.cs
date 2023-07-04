// Base Game

World world = new World();

public class World {
    private int Row { get; set; } = 0;
    private int Column { get; set; } = 0;
    private bool FountainEnabled { get; set; } = false;

    private void Commands(string command) {
        if (command == "move north" && Row < 4) Row++;
        else if (command == "move south" && Row > -4) Row--;
        else if (command == "move east" && Column < 4) Column++;
        else if (command == "move west" && Column > -4) Column--;
        else if (command == "enable fountain" && Row == 0 && Column == 2) FountainEnabled = !FountainEnabled;
    }

    private string GenerateDialogue() {
        return (Row, Column, FountainEnabled) switch {
            (0, 0, false) => "You see light coming from the cavern entrance.",
            (0, 2, false) => "You hear water dripping in this room. The Fountain of Objects is here!",
            (0, 2, true) => "You hear the rushing waters from the Fountain of Objects. It has been reactivated!",
            _ => ""
        };
    }

    public World() {
        do {
            Console.WriteLine(@$"
            ----------------------------------------------------------
            You are in the room at (Row={Row}, Column={Column}).
            {GenerateDialogue()}");
            Console.Write("            What do you want to do? ");
            Commands(Console.ReadLine());
        } while ((Row == 0 ^ Column == 0) || !FountainEnabled);

        Console.WriteLine($@"
        ----------------------------------------------------------
        You are in the room at (Row=0, Column=0).
        The Fountain of Objects has been reactivated, and you have escaped with your life!
        You win!
        ");

    }
}