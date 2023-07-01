Console.WriteLine("How many eggs are there?");
int eggs = Convert.ToInt32(Console.ReadLine());

int eggsForEachSister = eggs / 4;
int eggsForDuckbear = eggs % 4;

Console.WriteLine("Eggs for each sister: " + eggsForEachSister);
Console.WriteLine("Eggs for Duckbear: " + eggsForDuckbear);
//The duckbear would get more eggs when eggs = 1, 2, 3