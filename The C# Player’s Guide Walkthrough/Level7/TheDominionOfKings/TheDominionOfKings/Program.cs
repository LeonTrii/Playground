Console.WriteLine("How many provinces do you have?");
int provinces = Convert.ToInt32(Console.ReadLine());

Console.WriteLine("How many duchies do you have?");
int duchies = Convert.ToInt32(Console.ReadLine());

Console.WriteLine("How many estates do you have?");
int estates = Convert.ToInt32(Console.ReadLine());

int points = provinces * 6 + 3 * duchies + estates;
Console.WriteLine("You have " + points + "points");

