Console.Write("Provide x coordinate: ");
int xCord = Convert.ToInt32(Console.ReadLine());

Console.Write("Provide y coordinate: ");
int yCord = Convert.ToInt32(Console.ReadLine());

string topBottom = "";
string leftRight = "";

if (xCord > 0) {
    leftRight = "east";
} else if (xCord < 0) {
    leftRight = "west";
}

if (yCord > 0) {
    topBottom = "north";
} else if (yCord < 0) {
    topBottom = "south";
}

if (yCord == 0 && xCord == 0) {
    Console.WriteLine("The enemy is here!");
} else {
    Console.WriteLine($"The enemy is {topBottom + leftRight}!");
}