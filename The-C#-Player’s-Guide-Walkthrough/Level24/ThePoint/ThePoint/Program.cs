Point p1 = new Point(2, 3);
Console.WriteLine($"({p1.X}, {p1.Y})");

p1.X = -4;
p1.Y = 0;

Console.WriteLine($"({p1.X}, {p1.Y})");

class Point {
    private int x;
    private int y;

    public Point() {
        x = 0;
        y = 0;
    }

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int X {
        get => x;
        set => x = value;
    }

    public int Y {
        get => y;
        set => y = value;
    }
}