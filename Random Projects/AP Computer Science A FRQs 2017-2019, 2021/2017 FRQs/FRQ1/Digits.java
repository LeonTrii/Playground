package FRQ1;

import java.util.ArrayList;

public class Digits {
    private ArrayList<Integer> digitList;
    
    public Digits(int num) {
        digitList = new ArrayList<Integer>();
        String numString = "" + num;
        int lengthOfNum = numString.length();
        for (int i = 0; i < lengthOfNum; i++) {
            digitList.add(0, num % 10);
            num /= 10;
        }
    }

    public ArrayList<Integer> getDigitList() {
        //For testing my code
        return digitList;
    }

    public boolean isStrictlyIncreasing() {
        for (int i = 0; i < digitList.size() - 1; i++) {
            if (digitList.get(i) > digitList.get(i + 1)) {
                return false;
            }
        }
        return true;
    }
}