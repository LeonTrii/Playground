package FRQ1;
public class WordMatch {
    /*The secret string*/
    private String secret;

    public WordMatch(String word) {
        this.secret = word;
    }

    public int scoreGuess(String guess) {
        int occurances = 0;

        for (int i = 0; i <= secret.length() - guess.length(); i++) {
            if (secret.substring(i, i + guess.length()).equals(guess)) {
                occurances++;
            }
        }

        return occurances * guess.length() * guess.length();
    }

    public String findBetterGuess(String guess1, String guess2) {
        int score1 = scoreGuess(guess1);
        int score2 = scoreGuess(guess2);

        if (score1 > score2) 
            return guess1;

        if (score1 < score2) 
            return guess2;

        if (guess2.compareTo(guess1) < 0)
            return guess2;
        
        return guess1;
    }
}
