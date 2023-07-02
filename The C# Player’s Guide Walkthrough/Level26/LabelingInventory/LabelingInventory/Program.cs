Pack p1 = new Pack(10, 20, 30);

while (true) {
    Console.WriteLine(@"
    What to add?
    1 - Arrow
    2 - Bow
    3 - Rope
    4 - Water
    5 - Food
    6 - Sword
    ");

    int item = Convert.ToInt32(Console.ReadLine());

    InventoryItem newItem = item switch { 
        1 => new Arrow(),
        2 => new Bow(),
        3 => new Rope(),
        4 => new Water(),
        5 => new Food(),
        6 => new Sword()
    };

    if (p1.Add(newItem)) {
        Console.WriteLine("Item added.");
    } else {
        Console.WriteLine("Cannot add item.");
    }

    Console.WriteLine(p1.ToString());
}

class InventoryItem {
    public double Weight { get; set; }
    public double Volume { get; set; }

    public InventoryItem(double weight, double volume) {
        Weight = weight;
        Volume = volume;
    }
}

class Arrow : InventoryItem {
    public Arrow() : base(0.1, 0.05) { }

    public string ToString() => "Arrow";
}

class Bow : InventoryItem {
    public Bow() : base(1, 4) { }

    public string ToString() => "Bow";
}

class Rope : InventoryItem {
    public Rope() : base(1, 1.5) { }

    public string ToString() => "Rope";
}

class Water : InventoryItem {
    public Water() : base(2, 3) { }

    public string ToString() => "Water";
}

class Food : InventoryItem {
    public Food() : base(1, 0.5) { }

    public string ToString() => "Food";
}

class Sword : InventoryItem {
    public Sword() : base(5, 3) { }

    public string ToString() => "Sword";
}

class Pack {
    public int MaxItems { get; }
    public double MaxWeight { get; }
    public double MaxVolume{ get; }

    public int Items { get; private set; } = 0;
    public double Weight { get; private set; } = 0.0;
    public double Volume { get; private set; } = 0.0;

    private InventoryItem[] allItems;

    public Pack(int items, double weight, double volume) {
        MaxItems = items;
        MaxWeight = weight;
        MaxVolume = volume;
        allItems = new InventoryItem[items];
    }

    public bool Add(InventoryItem item) {
        if ((1 + Items) <= MaxItems && (item.Weight + Weight) < MaxWeight && (item.Volume + Volume) < MaxVolume) {
            Items++;
            Weight += item.Weight;
            Volume += item.Volume;
            allItems[Items] = item;
            return true;
        }
        return false;
    }

    public string ToString() {
        string list = "Pack containing";

        foreach(InventoryItem i in allItems) {
            list += $" {i}";
        }
        return list;
    }
}