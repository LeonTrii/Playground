int AskForNumber(string text) {
    Console.Write($"{text} ");
    return Convert.ToInt32(Console.ReadLine());
}

int AskForNumberInRange(string text, int min, int max) {
    while (true) {
        int number = AskForNumber(text);
        if (number >= min && number <= max) {
            return number;
        }
    }
}

Console.Write(AskForNumber("hi"));