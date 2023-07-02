Color c1 = new Color(0, 0, 10);
c1.blue = 100;
c1.green = 23;
c1.red = 90;

Console.WriteLine($"({c1.red}, {c1.green}, {c1.blue})");

Color c2 = Color.Purple();
Console.WriteLine($"({c2.red}, {c2.green}, {c2.blue})");

class Color {
    //0 <= n <= 255; rgb(n, n, n)
    public int red { get; set; }
    public int green { get; set; }
    public int blue { get; set; }

    public Color(int red, int green, int blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    public Color() : this(0, 0, 0) {}

    public static Color White() => new Color(255, 255, 255);
    public static Color Black() => new Color(0, 0, 0);
    public static Color Red() => new Color(255, 0, 0);
    public static Color Orange() => new Color(255, 165, 0);
    public static Color Yellow() => new Color(255, 255, 0);
    public static Color Green() => new Color(0, 128, 0);
    public static Color Blue() => new Color(0, 0, 255);
    public static Color Purple() => new Color(128, 0, 128);
}