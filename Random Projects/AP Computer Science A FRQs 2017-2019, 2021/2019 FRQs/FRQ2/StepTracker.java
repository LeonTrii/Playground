public class StepTracker {
    private int activeDays = 0;
    private int activeStepsRequirement = 0;
    private int totalSteps = 0;
    private int days = 0;

    public StepTracker(int activeStepsRequirement) {
        this.activeStepsRequirement = activeStepsRequirement;
    }

    public void addDailySteps(int steps) {
        totalSteps += steps;
        days++;
        if (steps >= activeStepsRequirement) {
            activeDays++;
        }
    }

    public double averageSteps() {
        if (days == 0) {
            return 0.0;
        }
        return (double) totalSteps / days;
    }

    public int activeDays() {
        return activeDays;
    }
}
