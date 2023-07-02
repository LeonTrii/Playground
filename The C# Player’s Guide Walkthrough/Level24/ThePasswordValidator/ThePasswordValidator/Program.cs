while (true) {
    Console.Write("Enter a password: ");
    PasswordValidator p1 = new PasswordValidator(Console.ReadLine());
}

class PasswordValidator {
    private string password { get; set; }

    private bool checkLength() => password.Length <= 13 && password.Length >= 6;

    private bool checkLetters() {
        bool isUpper = false;
        bool isLower = false;

        foreach(char letter in password) {
            if (char.IsUpper(letter)) {
                isUpper = true;
            } else if (char.IsLower(letter)) {
                isLower = true;
            }
        }
        return isUpper && isLower;
    }

    private bool checkNum() {
        foreach(char letter in password) {
            if (char.IsDigit(letter)) {
                return true;
            } 
        }
        return false;
    }

    private bool checkAmpersandsT() {
        foreach(char letter in password) {
            if (letter == 'T' || letter == '&') {
                return false;
            } 
        }
        return true;
    }

    public PasswordValidator(string password) {
        this.password = password;

        if (checkLength() && checkLetters() && checkNum() && checkAmpersandsT()) {
            Console.WriteLine("Valid password.");
        } else {
            Console.WriteLine("Invali password");
        }
    }

}