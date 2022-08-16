import java.util.ArrayList;

public class Delimiters {
    private String openDel;
    private String closeDel;

    public Delimiters(String open, String close) {
        openDel = open;
        closeDel = close;
    }

    public ArrayList<String> getDelimitersList(String[] tokens) {
        ArrayList<String> arr = new ArrayList<String>();
        for (int i = 0; i < tokens.length; i++) {
            if (tokens[i] == openDel) {
                arr.add(openDel);
            } else if (tokens[i] == closeDel) {
                arr.add(closeDel);
            }
        }
        return arr;
    }

    public boolean isBalanced(ArrayList<String> delimiters) {
        int openCount = 0;
        int closeCount = 0;
        int arrLength = delimiters.size();
        for (int i = 0; i < delimiters.size(); i++) {
            if (delimiters.get(i) == openDel) {
                openCount++;
            } else if (delimiters.get(i) == closeDel) {
                closeCount++;
            }
        }

        if (openCount == closeCount && delimiters.get(0) == openDel && delimiters.get(arrLength - 1) == closeDel) {
            return true;
        }
        return false;
    }
}
 