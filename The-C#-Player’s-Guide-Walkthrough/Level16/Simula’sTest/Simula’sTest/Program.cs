Chest current = Chest.locked;

//unlock <=> open <=> close <=> lock
while (true) {
    Console.Write($"The chest is {current}. What do you want to do? ");
    string answer = Console.ReadLine();
    bool isLocked = current == Chest.locked;
    bool isUnlocked = current == Chest.unlocked;
    bool isOpen = current == Chest.open;

    if (answer == "unlock" && isLocked) {
        current = Chest.unlocked;
    } else if (answer == "open" && isUnlocked) {
        current = Chest.open;
    } else if (answer == "lock" && isUnlocked) {
        current = Chest.locked;
    } else if (answer == "close" && isOpen) {
        current = Chest.unlocked;
    }
}

enum Chest { locked, unlocked, open };

