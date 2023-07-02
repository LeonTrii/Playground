dollars = [100, 50, 20, 10, 5, 2, 1];
cents = [0.50, 0.25, 0.10, 0.05, 0.01];

# $100 to 1¢

money_drawer = {
    '$100': 0,
    '$50': 0,
    '$20': 0,
    '$10': 0,
    '$5': 0,
    '$2': 0,
    '$1': 0,
    '$0.50': 0,
    '$0.25': 0,
    '$0.10': 0,
    '$0.05': 0,
    '$0.01': 0
};

balance = 0.00;

print("Welcome to this Cash Register! You are a cashier.");

class Register:
    def __init__(self, value):
        try:
            value = int(value);
            if (value > 0 and value < 6):
                if value == 1:
                    Register.deposit();
                elif value == 2:
                    Register.balance();
                elif value == 3:
                    Register.calculate();
                elif value == 4:
                    print("=================================");
                    Register.checkDrawer();
                elif value == 5:
                    Register.exit();
            else:
                raise Exception("");
        except Exception as e:
            print(e);
            value = input(
                "Error: invalid input. Enter a number between 1-5.\n");
            Register.__init__(self, value);

    def start():
        value = input("""What would you like to do? Enter a number.
=================================
1. Deposit
2. Check balance
3. Calculate tax
4. Check Drawer
5. Close register
=================================
""");
        Register.__init__(Register, value);

    def checkZeroes(value):
        if len(value[value.index(".") + 1:]) == 1:
            value += "0";

        if len(value[value.index(".") + 1:]) == 0:
            value += "00";

        return value;

    def checkDecimals(value):
        try:
            value[0:value.index(".")];
            after_decimal = value[value.index(".") + 1:];
            while (len(str(after_decimal)) > 2):
                print("Must have only have up to two digits past the decimal.");
                value = input("How much would you like to deposit? ");
                after_decimal = value[value.index("."):];
        except:
            value += ".00";

        return value;

    def deposit():
        global balance;
        value = input("How much would you like to deposit? ");

        value = Register.checkDecimals(value);

        # Checking how many dollars go into the amount
        dollar_value = float(value[0:value.index(".")]);

        value = Register.checkZeroes(value);

        cent_value = float(value[value.index(".") + 1:]) / 100;
        value = float(value);

        balance += value;

        for i in range(len(dollars)):
            money_drawer["$" + str(dollars[i])] += int(dollar_value // dollars[i]);
            dollar_value -= dollar_value // dollars[i] * dollars[i];

        for j in range(7, len(cents) + 7):
            extra = "";

            if cents[j - 7] == 0.50 or cents[j - 7] == 0.10:
                extra = "0";
        
            cent_value = round(cent_value, 2);
            money_drawer["$" + str(cents[j - 7]) + extra] += int(cent_value // cents[j - 7]);
            cent_value -= cent_value // cents[j - 7] * cents[j - 7];

        print("=================================");
        print("Deposited successfully!");
        Register.checkDrawer();
        
    def balance():
        global balance;
        string_balance = str(balance);

        if len(string_balance[string_balance.index(".") + 1:]) == 1:
            string_balance += "0";
        
        print("Your balance is $" + string_balance + "!");
        Register.start();

    def calculate():
        value = 0;
        execute = True;
        while (execute):
            try:
                value = input("Enter amount: ");
                value = Register.checkDecimals(value);
                value = Register.checkZeroes(value);
                value = float(value);
                execute = False;
            except Exception as e:
                print(e)
                print("Enter a valid amount.");
        
        percent = 0;
        
        while not execute:
            try:
                percent = float(input("Enter tax percentage: ")) / 100;
                execute = True;
            except:
                print("Enter a valid percentage.");

        tax = str(round(percent * value, 2));

        print("=================================");
        print("Tax is: $" + tax);
        print("Total with tax: $" + str(float(tax) + value));
        print("=================================");
        Register.start();

    def checkDrawer():
        for key, value in money_drawer.items():
            print(key + ': ' + str(value));
        print("=================================");
        Register.start();

    def exit():
        print("Cash Register closed.");


Register.start();