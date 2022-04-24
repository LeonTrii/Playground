package FRQ4;

public class ArrayResizer {
    public static boolean isNonZeroRow(int[][] array2D, int r) {
        for (int i = 0; i < array2D[0].length; i++) {
            if (array2D[r][i] == 0) {
                return false;
            }
        }
        return true;
    }

    public static int numNonZeroRows(int[][] array2D) {
        int count = 0;
        int zeroCount = 0;
        for (int i = 0; i < array2D.length; i++) {
            for (int j = 0; j < array2D[i].length; j++) {
                if (array2D[i][j] == 0) {
                    zeroCount++;
                }
            }
            if (zeroCount == 0) {
                count++;
            }
            zeroCount = 0;
        }
        return count;
    }

    public static int[][] resize(int[][] array2D) {
        int[][] arr = new int[numNonZeroRows(array2D)][array2D[0].length];
        int row = 0;
        for (int i = 0; i < array2D.length; i++) {
            if (isNonZeroRow(array2D, i)) {
                for (int k = 0; k < array2D[i].length; k++) {
                    arr[row][k] = array2D[i][k];
                }
                row++;
            }
        }
        return arr;
    }
}
