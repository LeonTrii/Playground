def add_time(start, duration, day = ''):
    day = day.upper();
    '''
    Sunday: 0
    Monday: 1
    Tuesday: 2
    Wednesday 3:
    Thursday 4:
    Friday 5:
    Saturday: 6
    '''

    index = start.index(':');
    duration_index = duration.index(':');

    def check_day(added_day):
        day_in_digits = -1;
        if day == 'SUNDAY':
            day_in_digits = 0;
        elif day == 'MONDAY':
            day_in_digits = 1;
        elif day == 'TUESDAY':
            day_in_digits = 2;
        elif day == 'WEDNESDAY':
            day_in_digits = 3;
        elif day == 'THURSDAY':
            day_in_digits = 4;
        elif day == 'FRIDAY':
            day_in_digits = 5;
        elif day == 'SATURDAY':
            day_in_digits = 6;

        added_day = (added_day + day_in_digits) % 7;
        if added_day == 0:
            return 'Sunday';
        elif added_day == 1:
            return 'Monday';
        elif added_day  == 2:
            return 'Tuesday';
        elif added_day == 3:
            return 'Wednesday';
        elif added_day == 4:
            return  'Thursday';
        elif added_day == 5:
            return 'Friday';
        elif added_day == 6:
            return 'Saturday';

    index = start.index(':');
    duration_index = duration.index(':');

    def to_pm():
        counting_days = 0;
        count = 0;
        if len(duration) > 4:
            count = len(duration) - 4;
        hours_to_be_added = '';
        minutes = '';
        minutes_to_be_added = '';
        index_of_pm = start.index('P');
        hours = start[0:index];
        if len(hours) == 2:
            hours_to_be_added = duration[0:duration_index];
            minutes_to_be_added = duration[index + count:];
        else:
            hours_to_be_added = duration[0:index + 1];
            minutes_to_be_added = duration[index + count + 1:];

        if len(duration) == 6:
            hours_to_be_added = duration[0:duration_index]

        minutes = start[index + 1:index_of_pm - 1];
        try:
            total_hours = int(hours) + int(hours_to_be_added);
        except: 
            hours_to_be_added = duration[0:index];
            total_hours = int(hours) + int(hours_to_be_added);
        total_minutes = int(minutes) + int(minutes_to_be_added);
        meridiem = "PM";
        if total_minutes >= 60:
            hours_from_minutes = total_minutes // 60;
            minutes_left = total_minutes % 60;
            total_minutes = minutes_left;
            total_hours += hours_from_minutes;
        if total_hours >= 12:
            days = total_hours // 12;
            total_hours = total_hours % 12;
            counting_days = days // 2;
            
            if days % 2 == 1:
                meridiem = 'AM';
                counting_days += 1;
            if total_hours == 0:
                total_hours = 12;
        if not day == '':
            time = str(total_hours) + ':' + str(total_minutes) + ' ' + meridiem;
            if total_minutes == 0:
                time = str(total_hours) + ':' + str(total_minutes) + '0 ' + meridiem;
            elif len(str(total_minutes)) == 1:
                time = str(total_hours) + ':' + '0' + str(total_minutes) + ' ' + meridiem;
            if counting_days == 0:
                    time += ', ' + day.capitalize();
            elif counting_days == 1:
                day_is = check_day(counting_days);
                time += ', ' + day_is + ' (next day)';
            else:
                day_is = check_day(counting_days);
                time += ', ' + day_is + ' (' + str(counting_days) + ' days later)'; 
        else:
            if total_minutes == 0:
                time = str(total_hours) + ':' + str(total_minutes) + '0' + ' ' + meridiem;
                if counting_days == 1:
                    time += ' ' + '(next day)';
                if counting_days > 1:
                    time += ' (' + str(counting_days) + ' days later)';
            if total_minutes == 1 or total_minutes == 2 or total_minutes == 3 or total_minutes == 4 or total_minutes == 5 or total_minutes == 6 or total_minutes == 7 or total_minutes == 8 or total_minutes == 9:
                time = str(total_hours) + ':' + '0' + str(total_minutes) + ' ' + meridiem;
                if counting_days == 1:
                    time += ' ' + '(next day)';
                if counting_days > 1:
                    time += ' (' + str(counting_days) + ' days later)';
            else:
                time = str(total_hours) + ':' + str(total_minutes) + ' ' + meridiem;
                if counting_days == 1:
                    time += ' ' + '(next day)';
                if counting_days > 1:
                    time += ' (' + str(counting_days) + ' days later)';
        return time;

    def to_am():
        counting_days = 0;
        count = 0;
        if len(duration) > 4:
            count = len(duration) - 4;
        hours_to_be_added = '';
        minutes = '';
        minutes_to_be_added = '';
        index_of_pm = start.index('A');
        hours = start[0:index];
        if len(hours) == 2:
            hours_to_be_added = duration[0:duration_index];
            minutes_to_be_added = duration[index + count:];
        else:
            hours_to_be_added = duration[0:index + 1];
            minutes_to_be_added = duration[index + count + 1:];

        if len(duration) == 6:
            hours_to_be_added = duration[0:duration_index]

        minutes = start[index + 1:index_of_pm - 1];
        try:
            total_hours = int(hours) + int(hours_to_be_added);
        except: 
            hours_to_be_added = duration[0:index];
            total_hours = int(hours) + int(hours_to_be_added);
        total_minutes = int(minutes) + int(minutes_to_be_added);
        meridiem = "AM";
        if total_minutes >= 60:
            hours_from_minutes = total_minutes // 60;
            minutes_left = total_minutes % 60;
            total_minutes = minutes_left;
            total_hours += hours_from_minutes;
        if total_hours >= 12:
            days = total_hours // 12;
            total_hours = total_hours % 12;
            if days % 2 == 1:
                meridiem = 'PM';
            if total_hours == 0:
                total_hours = 12;
            counting_days = days / 2;
        if not day == '':
            time = str(total_hours) + ':' + str(total_minutes) + ' ' + meridiem;
            if total_minutes == 0:
                time = str(total_hours) + ':' + str(total_minutes) + '0 ' + meridiem;
            elif len(str(total_minutes)) == 1:
                time = str(total_hours) + ':' + '0' + str(total_minutes) + ' ' + meridiem;
            if counting_days == 0:
                    time += ', ' + day.capitalize();
            elif counting_days == 1:
                day_is = check_day(counting_days);
                time += ', ' + day_is + ' (next day)';
            else:
                day_is = check_day(counting_days);
                time += ', ' + day_is + ' (' + str(counting_days) + ' days later)'; 
        else:        
            if total_minutes == 0:
                time = str(total_hours) + ':' + str(total_minutes) + '0' + ' ' + meridiem;
                if counting_days == 1:
                    time += ' ' + '(next day)';
                if counting_days > 1:
                    time += ' (' + str(counting_days) + ' days later)';
            if total_minutes == 1 or total_minutes == 2 or total_minutes == 3 or total_minutes == 4 or total_minutes == 5 or total_minutes == 6 or total_minutes == 7 or total_minutes == 8 or total_minutes == 9:
                time = str(total_hours) + ':' + '0' + str(total_minutes) + ' ' + meridiem;
                if counting_days == 1:
                    time += ' ' + '(next day)';
                if counting_days > 1:
                    time += ' (' + str(counting_days) + ' days later)';
            else:
                time = str(total_hours) + ':' + str(total_minutes) + ' ' + meridiem;
                if counting_days == 1:
                    time += ' ' + '(next day)';
                if counting_days > 1:
                    time += ' (' + str(counting_days) + ' days later)';
        return time;

    for i in start:
        if i == 'P':
            return to_pm();
        elif i == 'A':
            return to_am();

print(add_time("11:59 PM", "24:01", 'WeDnEsday'));