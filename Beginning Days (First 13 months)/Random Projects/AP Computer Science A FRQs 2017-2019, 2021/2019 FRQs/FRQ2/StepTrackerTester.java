public class StepTrackerTester {
    public static void main(String[] args) {
        StepTracker tr = new StepTracker(10000);
        System.out.println(tr.activeDays());
        System.out.println(tr.averageSteps());
        tr.addDailySteps(904534500);
        tr.addDailySteps(543433000);
        System.out.println(tr.activeDays());
        System.out.println(tr.averageSteps());
        tr.addDailySteps(1115000);
        System.err.println(tr.activeDays());
    }
}
