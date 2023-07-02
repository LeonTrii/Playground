package FRQ1;

public class FrogSimulation {
    private int goalDistance;
    private int maxHops;

    public FrogSimulation(int dist, int numHops) {
        goalDistance = dist;
        maxHops = numHops;
    }

    /**
     * This method cannot be implemented given the data from the FRQ.
     * A tester class is pretty useless if a method cannot be created.
     * private int hopDistance() {
        
    }
     */

    public boolean simulate() {
        int distance = 0;
        for (int i = 0; i < maxHops; i++) {
            distance += hopDistance();

            if (distance >= goalDistance) {
                return true;
            }
        }
        return false;
        
    }

    public double runSimulations(int num) {
        double count = 0;

        for (int i = 0; i < num; i++) {
            if (simulate()) {
                count++;
            }
        }
        return count / num;
    }
    
}