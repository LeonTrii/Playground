int number;
int guessingNumber;

do {
    Console.Write("User 1, enter a number between 0 and 100: ");
    number = Convert.ToInt32(Console.ReadLine());
} while (number < 0 || number > 100);


Console.WriteLine("User 2, guess the number.");

do {
    Console.Write("What is your next guess? ");
    guessingNumber = Convert.ToInt32(Console.ReadLine());

    if (guessingNumber > number) {
        Console.WriteLine($"{guessingNumber} is too high.");
    } else if (guessingNumber < number) {
        Console.WriteLine($"{guessingNumber} is too low.");
    }
} while (guessingNumber != number);

Console.WriteLine("You guessed the number!");