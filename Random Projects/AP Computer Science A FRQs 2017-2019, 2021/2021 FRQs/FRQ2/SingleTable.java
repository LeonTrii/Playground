package FRQ2;

public class SingleTable {
    private int seats = 0;
    private int height = 0;
    private double viewQuality = 0;

    public SingleTable(int seats, int height, double viewQuality) {
        this.seats = seats;
        this.height = height;
        this.viewQuality = viewQuality;
    }

    public int getNumSeats() {
        return seats;
    }

    public int getHeight() {
        return height;
    }

    public double getViewQuality() {
        return viewQuality;
    }

    public void setViewQuality(double value) {
        this.viewQuality = value;
    }
    
}
