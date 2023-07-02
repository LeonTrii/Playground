package FRQ4;

public class ArrayTester {
    public static int[] getColumn(int[][] arr2D, int c) {
        int[] arr = new int[arr2D.length];

        for (int i = 0; i < arr2D.length; i++) {
            arr[i] = arr2D[i][c];
        }
        return arr;
    }

    public static boolean hasAllValues(int[] arr1, int[] arr2) {
        int count = 0;

        for (int i = 0; i < arr1.length; i++) {
            boolean execute = true;
            for (int j = 0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j] && execute) {
                    count++;
                    execute = false;
                }
            }
        }

        if (count == arr1.length) {
            return true;
        }
        return false;
    }

    public static boolean containsDuplicates(int[] arr) {
        for (int i: arr) {
            boolean execute = false;
            for (int j: arr) {
                if (i == j) {
                    if (execute) {
                        return true;
                    }
                    execute = true;
                }
            }
        }
        return false;
    }

    public static boolean isLatin(int[][] square) {
        if (!containsDuplicates(square[0])) {
            for (int i = 0; i < square.length - 1; i++) {
                if (!hasAllValues(square[i], square[i + 1])) {
                    return false;
                }
            }

            for (int j = 0; j < square[0].length - 1; j++) {
                if (!hasAllValues(getColumn(square, j), getColumn(square, j + 1))) {
                    return false;
                }
            }

        } else {
            return false;
        }
        return true;
    }
}
