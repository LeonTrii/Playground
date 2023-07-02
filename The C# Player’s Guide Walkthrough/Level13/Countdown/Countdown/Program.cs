int Countdown(int count) {
    if (count == 1) {
        return 1;
    }
    Console.WriteLine(count);
    return Countdown(count - 1);
}

Console.WriteLine(Countdown(10));