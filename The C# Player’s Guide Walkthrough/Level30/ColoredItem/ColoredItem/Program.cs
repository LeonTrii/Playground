ColoredItem<Sword> s1 = new ColoredItem<Sword>(new Sword(), ConsoleColor.Blue);
s1.Display();

ColoredItem<Bow> b1 = new ColoredItem<Bow>(new Bow(), ConsoleColor.Red);
b1.Display();

ColoredItem<Axe> a1 = new ColoredItem<Axe>(new Axe(), ConsoleColor.Green);
a1.Display();

public class Sword { }
public class Bow { }
public class Axe { }

public class ColoredItem<T> {
    private ConsoleColor Color { get; set; }
    private T Item { get; set; }

    public ColoredItem(T item, ConsoleColor color) {
        Item = item;
        Color = color;
    }

    public void Display() {
        Console.BackgroundColor = Color;
        Console.WriteLine(this.ToString());
    }
}