public class MathTester {
    public static void main(String[] args) {
        double[] dataset = {1, 2, 3, 4, 5, 6};
        System.out.println(Math0.average(dataset));
        System.out.println(Math0.sampleVariance(dataset));
        System.out.println(Math0.sampleStandardDeviation(dataset));
        System.out.println(Math0.standardDeviation(dataset));
        System.out.println(Math0.simplifyRadical(332));
        System.out.println(Math0.pythagoreanTheoremHypotenuse(5, 10));
        System.out.println(Math0.pythagoreanTheoremSide(5, 10));
        System.out.println(Math0.rectangularPrismSpaceDiagonal(3, 3, 3));
        System.out.println(Math0.rectangularPrismSurfaceArea(2, 2, 2));
    }
}
