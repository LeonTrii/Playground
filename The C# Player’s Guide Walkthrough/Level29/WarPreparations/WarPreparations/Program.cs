Sword s1 = new Sword(Material.Iron, Gemstone.None, 10, 2);
Sword s2 = s1 with { gemstone = Gemstone.Amber };
Sword s3 = s1 with { gemstone = Gemstone.Amber, length = 20 };

Console.WriteLine(s1);
Console.WriteLine(s2);
Console.WriteLine(s3);

public record Sword(Material material, Gemstone gemstone, double length, double width);

public enum Material { Wood, Bronze, Iron, Steel, Binarium };
public enum Gemstone { None, Emerald, Amber, Sapphire, Diamond, Bitstone };