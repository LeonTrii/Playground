Console.WriteLine(@"The following items are available:
1 – Rope
2 – Torches
3 – Climbing Equipment
4 – Clean Water
5 – Machete
6 – Canoe
7 – Food Supplies");

Console.Write("What number do you want to see the price of? ");
int item = Convert.ToInt32(Console.ReadLine());
Console.Write("What is your name? ");
string name = Console.ReadLine();

string response = item switch
{
    1 => "Ropes",
    2 => "Torches",
    3 => "Climbing Equipment",
    4 => "Clean Water",
    5 => "Machete",
    6 => "Canoe",
    7 => "Food Supplies",
    _ => "Item not found",
};

double price = response switch
{
    "Rope" => 10,
    "Torches" => 15,
    "Climbing Equipment" => 25,
    "Clean Water" => 1,
    "Machete" => 20,
    "Canoe" => 200,
    "Food Supplies" => 1,
    _ => 0,
};

if (name == "Leon") {
    price /= 2.0;
}

Console.WriteLine($"{response} cost {price} gold.");