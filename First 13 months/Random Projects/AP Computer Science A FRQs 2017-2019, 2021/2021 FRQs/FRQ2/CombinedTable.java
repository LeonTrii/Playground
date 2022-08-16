package FRQ2;

public class CombinedTable {
    private SingleTable tableOne;
    private SingleTable tableTwo;
    private int seats = 0;

    public CombinedTable(SingleTable tableOne, SingleTable tableTwo) {
        this.tableOne = tableOne;
        this.tableTwo = tableTwo;
        seats = tableOne.getNumSeats() + tableTwo.getNumSeats() - 2;
    }

    public boolean canSeat(int seats) {
        return this.seats >= seats;
    }

    public double getDesirability() {
        if (tableOne.getHeight() != tableTwo.getHeight()) {
            return (tableOne.getViewQuality() + tableTwo.getViewQuality()) / 2.0 - 10;
        }

        return (tableOne.getViewQuality() + tableTwo.getViewQuality()) / 2;
    }
}
