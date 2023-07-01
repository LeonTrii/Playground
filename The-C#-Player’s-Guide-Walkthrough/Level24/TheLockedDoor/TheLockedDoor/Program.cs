Console.Write("What is the starting passcode? ");

int passcode = Convert.ToInt32(Console.ReadLine());

Door d1 = new Door(passcode);

while (true) {
    Console.Write("\nWhat would you like to do? (open, close, lock, unlock, passcode) ");
    string input = Console.ReadLine();
    switch (input) {
        case "open":
            d1.openDoor();
            break;
        case "close":
            d1.closeDoor();
            break;
        case "lock":
            d1.lockDoor();
            break;
        case "unlock":
            Console.Write("Enter passcode: ");
            int code = Convert.ToInt32(Console.ReadLine());
            d1.unlockDoor(code);
            break;
        case "passcode":
            Console.Write("Enter passcode: ");
            int oldCode = Convert.ToInt32(Console.ReadLine());
            Console.Write("New passcode: ");
            int newCode = Convert.ToInt32(Console.ReadLine());
            d1.changePasscode(oldCode, newCode);
            break;
    }
}

class Door {
    private int Passcode { get; set; }

    public bool IsLocked { get; private set; }

    public bool IsOpen { get; private set; }

    public Door(int passcode) {
        Passcode = passcode;
        IsLocked = true;
        IsOpen = false;
    }

    public void changePasscode(int oldPasscode, int newPasscode) {
        if (oldPasscode == Passcode) {
            Console.WriteLine("Sucess. The passcode has changed.");
            Passcode = newPasscode;
        } else {
            Console.WriteLine("Error: Passcode incorrect");
        }
    }

    public void unlockDoor(int passcode) {
        if (Passcode == passcode) {
            Console.WriteLine("The passcode is correct. The door unlocked.");
            IsLocked = false;
        } else if (!IsLocked || IsOpen) {
            Console.WriteLine("The door is already unlocked.");
        } else {
            Console.WriteLine("The passcode is incorrect. Try again.");
        }
    }

    public void lockDoor() {
        if (!IsLocked && !IsOpen) {
            Console.WriteLine("The door is locked.");
            IsLocked = true;
        } else if (IsLocked) {
            Console.WriteLine("The door is already locked.");
        } else {
            Console.WriteLine("The door is open. Close it first.");
        }
    }

    public void openDoor() {
        if (!IsLocked && !IsOpen) {
            Console.WriteLine("The door is open.");
            IsOpen = true;
        } else if (IsLocked) {
            Console.WriteLine("The door is locked. Enter the passcode first.");
        } else {
            Console.WriteLine("The door is already open.");
        }
    }

    public void closeDoor() {
        if (IsOpen) {
            Console.WriteLine("The door is now closed.");
            IsOpen = false;
        } else if (IsLocked) {
            Console.WriteLine("The door is locked. Enter the pass code first.");
        } else {
            Console.WriteLine("The door is already closed.");
        }
    }
}