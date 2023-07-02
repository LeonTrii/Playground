Arrowhead AskForArrowhead() {
    Console.Write("Provide an arrowhead (steel, obsidian, wood): ");
    string arrowhead = Console.ReadLine();

    return arrowhead switch {
        "steel" => Arrowhead.Steel,
        "obsidian" => Arrowhead.Obsidian,
        "wood" => Arrowhead.Wood
    };
}

Flecthing AskForFlecthing() {
    Console.Write("Provide flecthing (plastic, turkeyfeathers, goosefeathers): ");
    string flecthing = Console.ReadLine();

    return flecthing switch {
        "plastic" => Flecthing.Plastic,
        "turkeyfeathers" => Flecthing.TurkeyFeathers,
        "goosefeathers" => Flecthing.GooseFeathers
    };
}

float length;
Arrow myArrow;

Console.Write("Would you like a custom made arrow? (y/n) ");
string customMade = Console.ReadLine();

if (customMade == "y") {
    do {
        Console.Write("Provide length of arrow (60 <= length <= 100): ");
        length = (float)Convert.ToDouble(Console.ReadLine());
    } while (length <= 60 && length >= 100);

    myArrow = new Arrow(AskForArrowhead(), AskForFlecthing(), length);

} else {
    Console.Write("Which standard arrow would you like? (elite, beginner, marksman): ");
    string standardArrow = Console.ReadLine();
    myArrow = standardArrow switch {
        "elite" => Arrow.CreateEliteArrow(),
        "beginner" => Arrow.CreateBeginnerArrow(),
        "marksman" => Arrow.CreateMarksmanArrow()
    };
}

Console.WriteLine(myArrow.GetCost());
myArrow.Head = AskForArrowhead();
Console.WriteLine(myArrow.GetCost());

class Arrow {
    //steel 10g; obsidian 5g; wood 3g
    //plastic 10g; turkey 5g; goose 3g
    //0.05 gold per centimeter

    private Arrowhead head;
    private Flecthing fletch;
    private float length; //60 <= n <= 100

    public Arrow() : this(Arrowhead.Wood, Flecthing.GooseFeathers, 60) { }

    public Arrow(Arrowhead head, Flecthing fletch, float length) {
        this.head = head;
        this.fletch = fletch;
        this.length = length;
    }

    public Arrowhead Head {
        get => head;
        set => head = value;
    }

    public Flecthing Fletch {
        get => fletch;
        set => fletch = value;
    }

    public float Length {
        get => length;
        set => length = value;
    }

    private int GetArrowheadPrice() {
        return head switch {
            Arrowhead.Steel => 10,
            Arrowhead.Obsidian => 5,
            Arrowhead.Wood => 3,
        };
    }

    private int GetFlecthingPrice() {
        return fletch switch {
            Flecthing.Plastic => 10,
            Flecthing.TurkeyFeathers => 5,
            Flecthing.GooseFeathers => 3,
        };
    }

    public float GetCost() {
        return (float)(GetArrowheadPrice() + GetFlecthingPrice() + 0.05 * length);
    }

    public static Arrow CreateEliteArrow() => new Arrow(Arrowhead.Steel, Flecthing.Plastic, 95);
    public static Arrow CreateBeginnerArrow() => new Arrow(Arrowhead.Wood, Flecthing.GooseFeathers, 75);
    public static Arrow CreateMarksmanArrow() => new Arrow(Arrowhead.Steel, Flecthing.GooseFeathers, 65);
}

public enum Arrowhead { Steel, Wood, Obsidian };
public enum Flecthing { Plastic, TurkeyFeathers, GooseFeathers };