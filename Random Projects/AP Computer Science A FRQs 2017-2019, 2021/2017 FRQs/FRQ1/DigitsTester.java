package FRQ1;

public class DigitsTester {
    public static void main(String[] args) {
        Digits d1 = new Digits(15704);
        for (int i = 0; i < d1.getDigitList().size(); i++) {
            System.out.println(d1.getDigitList().get(i));
        }
        System.out.println(d1.isStrictlyIncreasing());

        Digits d2 = new Digits(12345);
        System.out.println(d2.isStrictlyIncreasing());
    }
}
