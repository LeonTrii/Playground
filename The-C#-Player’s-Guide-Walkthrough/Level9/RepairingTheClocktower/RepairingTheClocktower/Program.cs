Console.Write("Enter the number flow of the clock: ");
int numberFlow = Convert.ToInt32(Console.ReadLine());
int tickTock = numberFlow % 2;

if (tickTock == 0) {
    Console.Write("Tick");
} else {
     Console.Write("Tock");
}