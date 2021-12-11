/**
 * home
 */
import java.util.Scanner;
public class home {
    static int count = 0;
    public static void roll() {
        Scanner kb = new Scanner(System.in);
        if (count == 0) {
            System.out.println("\nWelcome to my Random Number Generator!\n");
            System.out.println("This program will print ten random numbers with your inputs.\n");
            count++;
        } 
        
        System.out.println("Enter the minimum value.");
        int min = kb.nextInt();
        System.out.println("Enter the maximum value.");
        int max = kb.nextInt();
        System.out.println(' ');

        while (min > max || min == max || min < 0) {
            if (min == max) {
                System.out.println("\nYour minimum and maximum values are the same!");
            } else if (min > max) {
                System.out.println("\nYour minimum value is greater than the maximum value!");
            } else {
                System.out.println("\nYour minimum value is a negative number!");
            }

            System.out.println("Please enter different values!");
            System.out.println("Enter the minimum value.");
            min = kb.nextInt();
            System.out.println("Enter the maximum value");
            max = kb.nextInt();
            System.out.println(' ');
        }

        
        for (int i = 0; i < 10; i++) {
            System.out.println((int)(Math.random() * max + 1) + min);
        }
        System.out.println(" ");
        
        roll();
        kb.close();
    }
    public static void main(String[] args) {
        roll();
    }
}