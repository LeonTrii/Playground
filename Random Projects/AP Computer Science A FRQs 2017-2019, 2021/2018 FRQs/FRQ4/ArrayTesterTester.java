package FRQ4;

public class ArrayTesterTester {
    public static void main(String[] args) {
        int[][] arr2D = {{0, 1, 2}, {3, 4, 5}, {6, 7, 8}, {9, 5, 3}};
        int[] arr1 = {1, 2, 3, 4};
        int[] arr2 = {2, 3, 1, 4};
        int[] result = ArrayTester.getColumn(arr2D, 1);
        
        for (int i: result) {
            System.out.println(i);
        }

        System.out.println(ArrayTester.hasAllValues(arr1, arr2));
        int[] arr3 = {2, 3, 1, 4, 5};
        System.out.println(ArrayTester.containsDuplicates(arr3));
        System.out.println("_________________________________");
        int[][] latinSquare = {{1, 2, 3}, {2, 3, 1}, {3, 1, 2}};

        System.out.println(ArrayTester.isLatin(latinSquare));

        int[][] notLatinSquare = {{1, 2, 3}, {3, 2, 1}, {2, 3, 1}};
    }
}
