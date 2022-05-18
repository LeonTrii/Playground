import java.util.Scanner;

public class HangmanTester {
	
	public static void main(String[] args) {
		Scanner kb = new Scanner(System.in);
		System.out.println("Enter a word for a person to guess");
		String word = kb.nextLine();
		Hangman h1 = new Hangman(word);
		
		while (h1.getGuessesIncorrect() != 6) {
			try {
				String letter = kb.next();
				if (letter.length() > 1 || !letter.matches("[a-zA-Z]+")) {
					throw new Exception("Must enter a character");
				}
				
				char letterChar = letter.charAt(0);
				h1.guess(letterChar);
			} catch (Exception e) {
				System.out.println("Must enter a character");
			}
		}
	}
}
