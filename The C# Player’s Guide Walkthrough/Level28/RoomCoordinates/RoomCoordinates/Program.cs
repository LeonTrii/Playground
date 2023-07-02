Coordinate c1 = new Coordinate(1, 1);
Coordinate c2 = new Coordinate(2, 1);
Console.WriteLine(Coordinate.IsAdjacent(c1, c2));

public struct Coordinate {
    private readonly int row;
    private readonly int column;

    public Coordinate(int row, int column) {
        this.row = row;
        this.column = column;
    }

    public static bool IsAdjacent(Coordinate a, Coordinate b) {
        int rowChange = Math.Abs(a.row - b.row);
        int columnChange = Math.Abs(a.column - b.column);

        return (rowChange <= 1 && columnChange == 0) || (columnChange <= 1 && rowChange == 0);
    }
}