public class LightBoard {
    private boolean[][] lights;

    public LightBoard(int numRows, int numCols) {
        lights = new boolean[numRows][numCols];
        for (int i = 0; i < lights.length; i++) {
            for (int j = 0; j < lights[i].length; j++) {
                int random = (int) (Math.random() + 1) * 10;

                if (random <= 4) {
                    lights[i][j] = true;
                } else {
                    lights[i][j] = false;
                }
            }
        }
    }

    public boolean evaluateLight(int row, int col) {
        boolean lightValue = lights[row][col];
        int lightCount = 0;
        for (int i = 0; i < lights.length; i++) {
            if (lights[i][col] == true) {
                lightCount++;
            }
        }

        if (lightCount % 2 == 0 && lightValue) {
            return false;
        }

        if (lightCount % 3 == 0 && !lightValue) {
            return true;
        }
        return lightValue;
    }
}
