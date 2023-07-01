int[] anArray = new int[5];
int[] copiedArray = new int[5];

Console.WriteLine("What 5 values should be in an array?");

for (int i = 0; i < 5; i++) {
    Console.Write("Enter a value: ");
    int value = Convert.ToInt32(Console.ReadLine());
    anArray[i] = value;
}

for (int i = 0; i < 5; i++) {
    copiedArray[i] = anArray[i];
}

for (int i = 0; i < 5; i++) {
    Console.WriteLine($"Orginal array: {anArray[i]}; Copied array: {copiedArray[i]}");
}