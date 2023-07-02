Color[] colors = { Color.Red, Color.Blue, Color.Green, Color.Yellow };
Symbol[] symbols = { Symbol.Dollar, Symbol.Precentage, Symbol.Carrot, Symbol.Ampersand, Symbol.One, Symbol.Two, Symbol.Three, Symbol.Four, Symbol.Five, Symbol.Six, Symbol.Seven, Symbol.Eight, Symbol.Nine, Symbol.Ten };

foreach (Color color in colors) {
    foreach(Symbol symbol in symbols) {
        Card c1 = new Card(color, symbol);
        Console.WriteLine($"The {c1.color} {c1.symbol}");
    }
}

class Card {
    public Color color { get; set; }
    public Symbol symbol { get; set; }

    public Card(Color color, Symbol symbol) {
        this.color = color;
        this.symbol = symbol;
    }

    public bool IsSymbol() => symbol == Symbol.Dollar || symbol == Symbol.Precentage || symbol == Symbol.Carrot || symbol == Symbol.Ampersand;
    public bool IsNumber() => !IsSymbol();
}

enum Color {Red, Green, Blue, Yellow};
//$, %, ^, &
enum Symbol {Dollar, Precentage, Carrot, Ampersand, One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten};