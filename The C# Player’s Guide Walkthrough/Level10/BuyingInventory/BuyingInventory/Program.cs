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

string response;

response = item switch
{
    1 => "Ropes cost 10 gold.",
    2 => "Torches cost 15 gold.",
    3 => "Climbing Equipment cost 25 gold.",
    4 => "Clean Water cost 1 gold.",
    5 => "Machete cost 20 gold.",
    6 => "Canoe cost 200 gold.",
    7 => "Food Supplies cost 1 gold.",
    _ => "Item not found.",
};

Console.WriteLine(response);