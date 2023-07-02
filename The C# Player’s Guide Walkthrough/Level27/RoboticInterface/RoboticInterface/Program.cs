Robot r1 = new Robot();

for (int i = 0; i < 3; i++) {
    Console.Write("Enter a command: ");
    string command = Console.ReadLine();

    IRobotCommand c1 = command switch {
        "on" => new OnCommand(),
        "off" => new OffCommand(),
        "north" => new NorthCommand(),
        "south" => new SouthCommand(),
        "east" => new EastCommand(),
        "west" => new WestCommand(),
    };

    r1.Commands[i] = c1;
}

Console.WriteLine();
r1.Run();

public interface IRobotCommand {
    void Run(Robot robot);
}

public class OnCommand : IRobotCommand {
    public void Run(Robot robot) {
        robot.IsPowered = true;
    }
}

public class OffCommand : IRobotCommand {
    public void Run(Robot robot) {
        robot.IsPowered = false;
    }
}

public class NorthCommand : IRobotCommand {
    public void Run(Robot robot) {
        if (robot.IsPowered) {
            robot.Y += 1;
        }
    }
}

public class SouthCommand : IRobotCommand {
    public void Run(Robot robot) {
        if (robot.IsPowered) {
            robot.Y -= 1;
        }
    }
}

public class WestCommand : IRobotCommand {
    public void Run(Robot robot) {
        if (robot.IsPowered) {
            robot.X -= 1;
        }
    }
}

public class EastCommand : IRobotCommand {
    public void Run(Robot robot) {
        if (robot.IsPowered) {
            robot.X += 1;
        }
    }
}

public class Robot {
    public int X { get; set; }
    public int Y { get; set; }
    public bool IsPowered { get; set; }

    public IRobotCommand?[] Commands { get; } = new IRobotCommand?[3];

    public void Run() {
        foreach (IRobotCommand? command in Commands) {
            command?.Run(this);
            Console.WriteLine($"[{X} {Y} {IsPowered}]");
        }
    }
}