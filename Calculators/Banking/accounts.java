import java.util.Scanner;

public class accounts {
    private Scanner kb = new Scanner(System.in);
    private String user;
    private String ID;
    private boolean valid = true;
    private boolean welcome = true;
    private int option;
    private int years;
    private double manipulator;
    private double balance;
    private double previous;
    private double interestRate;
    private double interest;

    public accounts(String u, String i) {
        if ((i.length() != 6)) {
            System.out.println("Please enter a valid ID!");
            valid = false;
        } else {
            for (int j = 0; j < i.length(); j++) {
                char c = i.charAt(j);
                if (!Character.isLetterOrDigit(c)) {
                    System.out.println("Please enter a valid ID!");
                    valid = false;
                }
            }
        }

        if (valid) {
            user = u;
            ID = i;
        }
    }

    public void setInterest(double in) {
        interestRate = in;
    }

    public void getID() {
        System.out.println(ID);
    }

    public void getUser() {
        System.out.println(user);
    }

    public void openPanel() {
        if (welcome) {
            System.out.println("\nWelcome, " + user + "!");
            System.out.println("Your ID is: " + ID + ".");
            welcome = false;
        }
        System.out.println("\nWhat would you like to do today?\n");
        System.out.println("1. Make a deposit\n2. Make a withdrawal\n3. Check balance\n4. View previous transaction\n5. Calculate the interest\n6. Exit\n");

        System.out.println("Enter an option:");
        option = kb.nextInt();

        switch(option) {
            case 1:
            deposit();
            break;
            case 2:
            withdraw();
            break;
            case 3:
            checkBalance();
            break;
            case 4: 
            viewPrevious();
            break;
            case 5:
            calcInterest();
            break;
            case 6:
            exit();
            break;
            default: 
            System.out.println("\nERROR: Invalid option!");
            openPanel();
        }
    }

    private void exit() {
        System.out.println("\n===========================");
        System.out.println("Thank you!\nHave a nice day!");
        System.out.println("===========================\n");
    }

    private void calcInterest() {
        if (balance != 0) {
            System.out.println("\nEnter the amount of years for the interest:");
        years = kb.nextInt();
        while (years < 0) {
            System.out.println("You cannot have negative years for your interest!");
            System.out.println("\nEnter the amount of years for the interest:");
            years = kb.nextInt();
        }

        interest = balance * years * (interestRate / 100) + balance;
        System.out.println("\n===========================");
        System.out.println("The interest rate is " + interestRate + ".");
        System.out.println("In " + years + " years, your balance will be " + interest + "!");
        System.out.println("===========================\n");
        openPanel();
        } else {
            System.out.println("\n===========================");
            System.out.println("Your balance is 0! Deposit some money first.");
            System.out.println("===========================\n");
            openPanel();
        }
    }

    private void viewPrevious() {
        if (previous < 0) {
            System.out.println("\n===========================");
            System.out.println("You withdrew: " + Math.abs(previous) + "!");
            System.out.println("===========================\n");
            openPanel();
        } else if (previous > 0) {
            System.out.println("\n===========================");
            System.out.println("You deposited " + previous + "!");
            System.out.println("===========================\n");
            openPanel();
        } else {
            System.out.println("\n===========================");
            System.out.println("You didn't make any changes.");
            System.out.println("===========================\n");
            openPanel();
        }
    }

    private void checkBalance() {
        System.out.println("\n===========================");
        System.out.println("Success: Your balance is $" + balance + "!");
        System.out.println("===========================\n");
        openPanel();
    }

    private void withdraw() {
        if (balance != 0) {
            System.out.println("\nEnter the amount you want to withdraw:");
        manipulator = kb.nextDouble();
        while (manipulator <= 0 || manipulator > balance) {
            if (manipulator < 0) {
                System.out.println("\nERROR: You cannot withdraw a negative amount!\n");
            } else if (manipulator == 0) {
                System.out.println("\nERROR: You cannot withdraw 0!\n");
            } else {
                System.out.println("\nERROR: You have insufficient funds to withdraw that ammount!\n");
            }
            System.out.println("\nEnter the amount you want to withdraw:");
            manipulator = kb.nextDouble();
        }

        balance -= manipulator;
        previous = -manipulator;
        manipulator = 0;
        System.out.println("\n===========================");
        System.out.println("Withdrawal successful: Your balance is now $" + balance + "!");
        System.out.println("===========================\n");
        openPanel();
        } else {
            System.out.println("\n===========================");
            System.out.println("Your balance is 0! Deposit some money first.");
            System.out.println("===========================\n");
            openPanel();
        }
    }

    private void deposit() {
        System.out.println("\nEnter the amount you want to deposit:");
        manipulator = kb.nextDouble();
        while (manipulator <= 0) {
            if (manipulator < 0) {
                System.out.println("\nERROR: You cannot deposit a negative amount!\n");
            } else {
                System.out.println("\nERROR: You cannot deposit 0!\n");
            }
            System.out.println("\nEnter the amount you want to deposit:");
            manipulator = kb.nextDouble();
        }

        balance += manipulator;
        previous = manipulator;
        manipulator = 0;
        System.out.println("\n===========================");
        System.out.println("Deposit successful: Your balance is now $" + balance + "!");
        System.out.println("===========================\n");
        openPanel();
    }
}