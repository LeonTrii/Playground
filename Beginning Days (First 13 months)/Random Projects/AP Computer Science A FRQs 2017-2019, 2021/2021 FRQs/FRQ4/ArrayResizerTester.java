package FRQ4;

public class ArrayResizerTester {
    public static void main(String[] args) {
        int[][] arr = {{2, 1, 0}, {1, 3, 2}, {0, 0, 0}, {4, 5, 6}};
        System.out.println(ArrayResizer.numNonZeroRows(arr));
        System.out.println(ArrayResizer.isNonZeroRow(arr, 2));
        arr = ArrayResizer.resize(arr);

        for (int i[]: arr) {
            for (int j: i) {
                System.out.println(j);
            }
        }
    }
}
