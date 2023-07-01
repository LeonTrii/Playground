for (int i = 1; i <= 100; i++) {
    string type = "Normal";

    if (i % 3 == 0 && i % 5 == 0) {
        type = "Electric and Fire";
        Console.ForegroundColor = ConsoleColor.Blue;
    } else if (i % 3 == 0) {
        type = "Fire";
        Console.ForegroundColor = ConsoleColor.Red;
    } else if (i % 5 == 0) {
        type = "Electric";
        Console.ForegroundColor = ConsoleColor.Yellow;
    } else {
        Console.ForegroundColor = ConsoleColor.White;
    }

    Console.WriteLine($"{i}: {type}");
}