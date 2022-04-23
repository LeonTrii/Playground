package FRQ1;
public class WordMatchTester {
    public static void main(String[] args) {
        WordMatch game = new WordMatch("mississipi");
        System.out.println(game.scoreGuess("i"));
        System.out.println(game.scoreGuess("iss"));
        System.out.println(game.findBetterGuess("is", "is"));
    }
}
