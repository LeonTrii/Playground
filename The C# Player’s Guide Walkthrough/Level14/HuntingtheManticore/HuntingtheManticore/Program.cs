int manticorePosition;
int round = 1;
int cityHealth = 15;
int manticoreHealth = 10;
int damage = 1;

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

void StatusMessage() {
    Console.WriteLine($"STATUS: Round {round} City: {cityHealth}/15 Manticore: {manticoreHealth}/10");
}

void CannonDamage() {
    if (round % 3 == 0 && round % 5 == 0) {
        damage = 10;
        Console.ForegroundColor = ConsoleColor.Blue;
    } else if (round % 3 == 0 || round % 5 == 0) {
        damage = 3;
        Console.ForegroundColor = ConsoleColor.Red;
    } else {
        Console.ForegroundColor = ConsoleColor.White;
    }

    Console.WriteLine($"The cannon is expected to deal {damage} damage this round.");
}

void CannonRange() {
    Console.ForegroundColor = ConsoleColor.White;
    int cannonRange = AskForNumber("Enter desired cannon range:");

    if (manticorePosition > cannonRange) {
        Console.WriteLine("That round FELL SHORT of the target.");
    } else if (manticorePosition < cannonRange) {
        Console.WriteLine("That round OVERSHOT the target.");
    } else {
        Console.WriteLine("That round was a DIRECT HIT!");
        manticoreHealth -= damage;
    }
}
manticorePosition = AskForNumberInRange("How far away from the city do you want to station the Manticore?", 0, 100);

Console.Clear();

Console.WriteLine("Player 2, it is your turn.");

do {
    Console.WriteLine("-----------------------------------------------------------");
    StatusMessage();
    CannonDamage();
    CannonRange();
    cityHealth--;
    round++;
    if (cityHealth <= 0) {
        Console.WriteLine("RIP");
        break;
    } else if (manticoreHealth <= 0) {
        Console.WriteLine("The Manticore has been destroyed! The city of Consolas has been saved!");
        break;
    } else {
        Console.WriteLine("-----------------------------------------------------------");
    }
} while (true);