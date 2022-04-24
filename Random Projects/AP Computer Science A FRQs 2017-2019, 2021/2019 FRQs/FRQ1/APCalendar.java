import java.util.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;

public class APCalendar {
    private static boolean isLeapYear(int year) {
        return year % 4 == 0;
    }

    public static int numberOfLeapYears(int year1, int year2) {
        int leapYears = 0;
        for (int i = year1; i <= year2; i++) {
            if (isLeapYear(i)) {
                leapYears++;
            }
        }
        return leapYears;
    }

    private static int firstDayOfYear(int year) {
        Calendar cal = Calendar.getInstance();
        cal.set(Calendar.YEAR, year);
        cal.set(Calendar.DAY_OF_YEAR, 1);    
        Date start = cal.getTime();
        DateFormat dateFormat = new SimpleDateFormat("EEEE");  
        String strStart = dateFormat.format(start);  
        switch (strStart) {
            case "Sunday":
            return 0;
            case "Monday":
            return 1;
            case "Tuesday":
            return 2;
            case "Wednesday":
            return 3;
            case "Thursday":
            return 4;
            case "Friday":
            return 5;
        }
        return 6;
    }

    private static int dayOfYear(int month, int day, int year) {
        String stringMonth = "" + month;
        String stringDay = "" + day;
        if (month != 10 || month != 11 || month != 12) {
            stringMonth = "0" + month;
        }

        if (stringDay.length() == 1) {
            stringDay = "0" + day;
        } 
        String date = stringMonth + "-" + stringDay + "-" + year;
        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("MM-dd-yyyy");
        return LocalDate.parse(date, fmt).getDayOfYear();
    }

    public static int dayOfWeek(int month, int day, int year) {
        int firstDay = firstDayOfYear(year);
        int dayOfYear = dayOfYear(month, day, year);
        return (dayOfYear + firstDay - 1) % 7;
    }

}
