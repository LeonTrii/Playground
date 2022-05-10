import java.lang.Math;

public class Math0 {
    //ARRAY TOTAL

    public static int arrayTotal(int[] arr) {
        int result = 0;
        for (int i: arr) {
            result += i;
        }
        return result;
    }

    public static double arrayTotal(double[] arr) {
        double result = 0;
        for (double i: arr) {
            result += i;
        }
        return result;
    }

    public static long arrayTotal(long[] arr) {
        long result = 0;
        for (long i: arr) {
            result += i;
        }
        return result;
    }

    public static float arrayTotal(float[] arr) {
        float result = 0;
        for (float i: arr) {
            result += i;
        }
        return result;
    }

    //SQUARED

    public static int squared(int value) {
        return value * value;
    }

    public static double squared(double value) {
        return value * value;
    }

    public static long squared(long value) {
        return value * value;
    }

    public static float squared(float value) {
        return value * value;
    }

    public static String simplifyRadical(int radical) {
        boolean execute = true;
        int outsideNumber = 0;
        while (execute) {
            //Roots are up to 256
            if (radical % 256 == 0) {
                outsideNumber += 16;
                radical /= 256;
            } else if (radical % 225 == 0) {
                outsideNumber += 15;
                radical /= 225;
            } else if (radical % 196 == 0) {
                outsideNumber += 14;
                radical /= 196;
            } else if (radical % 169 == 0) {
                outsideNumber += 13;
                radical /= 169;
            } else if (radical % 144 == 0) {
                outsideNumber += 12;
                radical /= 144;
            } else if (radical % 121 == 0) {
                outsideNumber += 11;
                radical /= 121;
            } else if (radical % 100 == 0) {
                outsideNumber += 10;
                radical /= 100;
            } else if (radical % 81 == 0) {
                outsideNumber += 9;
                radical /= 81;
            } else if (radical % 64 == 0) {
                outsideNumber += 8;
                radical /= 64;
            } else if (radical % 49 == 0) {
                outsideNumber += 7;
                radical /= 49;
            } else if (radical % 36 == 0) {
                outsideNumber += 6;
                radical /= 36;
            } else if (radical % 25 == 0) {
                outsideNumber += 5;
                radical /= 25;
            } else if (radical % 16 == 0) {
                outsideNumber += 4;
                radical /= 16;
            } else if (radical % 9  == 0) {
                outsideNumber += 3;
                radical /= 9;
            } else if (radical % 4 == 0) {
                outsideNumber += 2;
                radical /= 4;
            } else {
                execute = false;
            }
        }
        if (radical == 1) {
            return outsideNumber + "";
        } else if (outsideNumber == 0) {
            return "√" + radical;
        }
        return outsideNumber + "√" + radical;
    }

    //AVERAGE

    public static double average(int[] dataset) {
        double result = 0;
        for (int i: dataset) {
            result += i;
        }
        return result / dataset.length;
    }

    public static double average(double[] dataset) {
        double result = 0;
        for (double i: dataset) {
            result += i;
        }
        return result / dataset.length;
    }

    public static double average(float[] dataset) {
        double result = 0;
        for (float i: dataset) {
            result += i;
        }
        return result / dataset.length;
    }

    public static double average(long[] dataset) {
        double result = 0;
        for (long i: dataset) {
            result += i;
        }
        return result / dataset.length;
    }

    //SAMPLE VARIANCE

    public static double sampleVariance(int[] dataset) {
        double result = 0;
        double average = average(dataset);
        for (int i: dataset) {
            result += squared(i - average);
        }

        return result / (dataset.length - 1);
    }

    public static double sampleVariance(double[] dataset) {
        double result = 0;
        double average = average(dataset);
        for (double i: dataset) {
            result += squared(i - average);
        }

        return result / (dataset.length - 1);
    }

    public static double sampleVariance(float[] dataset) {
        double result = 0;
        double average = average(dataset);
        for (float i: dataset) {
            result += squared(i - average);
        }

        return result / (dataset.length - 1);
    }

    public static double sampleVariance(long[] dataset) {
        double result = 0;
        double average = average(dataset);
        for (long i: dataset) {
            result += squared(i - average);
        }

        return result / (dataset.length - 1);
    }

    //SAMPLE STANDARD DEVIATION

    public static double sampleStandardDeviation(int[] dataset) {
        double result = 0;
        result += sampleVariance(dataset);
        return Math.sqrt(result);
    }

    public static double sampleStandardDeviation(double[] dataset) {
        double result = 0;
        result += sampleVariance(dataset);
        return Math.sqrt(result);
    }

    public static double sampleStandardDeviation(long[] dataset) {
        double result = 0;
        result += sampleVariance(dataset);
        return Math.sqrt(result);
    }

    public static double sampleStandardDeviation(float[] dataset) {
        double result = 0;
        result += sampleVariance(dataset);
        return Math.sqrt(result);
    }

    //VARIANCE

    public static double variance(int[] dataset) {
        double result = 0;
        double average = average(dataset);
        for (int i: dataset) {
            result += squared(i - average);
        }

        return result / (dataset.length);
    }

    public static double variance(double[] dataset) {
        double result = 0;
        double average = average(dataset);
        for (double i: dataset) {
            result += squared(i - average);
        }

        return result / (dataset.length);
    }

    public static double variance(float[] dataset) {
        double result = 0;
        double average = average(dataset);
        for (float i: dataset) {
            result += squared(i - average);
        }

        return result / (dataset.length);
    }

    public static double variance(long[] dataset) {
        double result = 0;
        double average = average(dataset);
        for (long i: dataset) {
            result += squared(i - average);
        }

        return result / (dataset.length);
    }

    // STANDARD DEVIATION

    public static double standardDeviation(int[] dataset) {
        double result = 0;
        result += variance(dataset);
        return Math.sqrt(result);
    }

    public static double standardDeviation(double[] dataset) {
        double result = 0;
        result += variance(dataset);
        return Math.sqrt(result);
    }

    public static double standardDeviation(long[] dataset) {
        double result = 0;
        result += variance(dataset);
        return Math.sqrt(result);
    }

    public static double standardDeviation(float[] dataset) {
        double result = 0;
        result += variance(dataset);
        return Math.sqrt(result);
    }

    //PYTHAGOREAN THEOREM

    public static double pythagoreanTheoremHypotenuse(double a, double b) {
        return Math.sqrt(squared(a) + squared(b));
    }

    public static double pythagoreanTheoremSide(double a, double c) {
        return Math.sqrt(squared(c) - squared(a));
    }


    //CYLINDER METHODS

    public static double cylinderRadius(double height, double volume) {
        return Math.sqrt(volume / (3.14 * height));
    }

    public static double cylinderDiameter(double height, double volume) {
        return 2 * Math.sqrt(volume / (3.14 * height));
    }

    public static double cylinderHeight(double volume, double radius) {
        return volume / (3.14 * squared(radius));
    }

    public static double cylinderArea(double radius) {
        return 3.14 * (squared(radius));
    }

    public static double cylinderVolume(double height, double radius) {
        return 3.14 * squared(radius) * height;
    }

    public static double cylinderLateralSurface(double height, double radius) {
        return 2 * 3.14 * radius * height;
    }

    public static double cylinderSurfaceArea(double height, double radius) {
        return 2 * 3.14 * radius * height + 2 * 3.14 * squared(radius);
    }

    //RECTANGULAR PRISM METHODS

    public static double rectangularPrismLength(double height, double width, double volume) {
        return volume / (height * width);
    }

    public static double rectangularPrismWidth(double height, double length, double volume) {
        return volume / (height * length);
    }

    public static double rectangularPrismVolume(double height, double width, double length) {
        return width * height * length;
    }

    public static double rectangularPrismSpaceDiagonal(double height, double width, double length) {
        return Math.sqrt(squared(length) + squared(width) + squared(height));
    }

    public static double rectangularPrismSurfaceArea(double height, double width, double length) {
        return 2 * (width * length + height * length + height * width);
    }
}