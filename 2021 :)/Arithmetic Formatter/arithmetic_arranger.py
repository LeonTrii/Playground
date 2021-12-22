first_operand_list = [];
second_operand_list = [];
line_list = [];
result_list = [];
def arithmetic_arranger(problems, result = False):
    def format_answers():
        i = 2;
        j = 2;
        k = 1;
        while i < len(first_operand_list) and j < len(second_operand_list):
            for n in result_list[k]:
                if n == "-":
                    result_list[k - 1] = ' ';
                    break;
                else:
                    result_list[k - 1] = '  ';

                if len(first_operand_list[i]) == 4 and len(second_operand_list[j]) == 4:
                    result_list[k - 1] = '   ';

                if (len(result_list[k])) == 4:
                    for n in result_list[k]:
                        if n == '-':
                            result_list[k - 1] = '  ';
                            break
                        else:
                            result_list[k - 1] = ' ';
                            
        
            i += 3;
            j += 3;
            k += 3;


    def to_answer():
        i = 2;
        j = 2;
        while i < len(first_operand_list) and j < len(second_operand_list):
            for k in second_operand_list[j - 1]:
                if k == '-':
                    subtract = int(first_operand_list[i]) - int(second_operand_list[j]);
                    result_list.append('  ');
                    result_list.append(str(subtract));
                    result_list.append('    ');
                elif k == '+': 
                    add = int(first_operand_list[i]) + int(second_operand_list[j]);
                    result_list.append('  ');
                    result_list.append(str(add));
                    result_list.append('    ');
            i += 3;
            j += 3;
        format_answers();
        
    def to_third_row():
        i = 2;
        j = 2;
        while i < len(first_operand_list) and j < len(second_operand_list):
            if len(first_operand_list[i]) < len(second_operand_list[j]):
                lines = '';
                for k in range(0, len(second_operand_list[j]) + 2):
                    lines += '-';
                line_list.append(lines);
                line_list.append('    ');
            elif len(first_operand_list[i]) > len(second_operand_list[j]):
                lines = '';
                for k in range(0, len(first_operand_list[i]) + 2):
                    lines += '-';
                line_list.append(lines);
                line_list.append('    ');
            elif len(first_operand_list[i]) == len(second_operand_list[j]):
                lines = '';
                for k in range(0, len(first_operand_list[i]) + 2):
                    lines += '-';
                line_list.append(lines);
                line_list.append('    ');
            i += 3;
            j += 3;

        if result:
            to_answer();

    def format_spaces():
        i = 2;
        j = 2;
        while i < len(first_operand_list) and j < len(second_operand_list):
            if len(first_operand_list[i]) == 1:
                if len(second_operand_list[j]) == 1:
                    first_operand_list[i - 1] = '  ';
                elif len(second_operand_list[j]) == 2:
                    first_operand_list[i - 1] = '   ';
                elif len(second_operand_list[j]) == 3:
                    first_operand_list[i - 1] = '    ';
                elif len(second_operand_list[j]) == 4:
                    first_operand_list[i - 1] = '     ';
            elif len(first_operand_list[i]) == 2:
                if len(second_operand_list[j]) == 1:
                    first_operand_list[i - 1] = '  ';
                elif len(second_operand_list[j]) == 2:
                    first_operand_list[i - 1] = '  ';
                elif len(second_operand_list[j]) == 3:
                    first_operand_list[i - 1] = '   ';
                elif len(second_operand_list[j]) == 4:
                    first_operand_list[i - 1] = '    ';
            elif len(first_operand_list[i]) == 3:
                if len(second_operand_list[j]) == 1:
                    first_operand_list[i - 1] = '  ';
                elif len(second_operand_list[j]) == 2:
                    first_operand_list[i - 1] = '  ';
                elif len(second_operand_list[j]) == 3:
                    first_operand_list[i - 1] = '  ';
                elif len(second_operand_list[j]) == 4:
                    first_operand_list[i - 1] = '   ';
            elif len(first_operand_list[i]) == 4:
                if len(second_operand_list[j]) == 1:
                    first_operand_list[i - 1] = '  ';
                elif len(second_operand_list[j]) == 2:
                    first_operand_list[i - 1] = '  ';
                elif len(second_operand_list[j]) == 3:
                    first_operand_list[i - 1] = '  ';
                elif len(second_operand_list[j]) == 4:
                    first_operand_list[i - 1] = '  ';
            i += 3;
            j += 3;

        to_third_row();

    def format_operators():
        i = 2;
        j = 2;
        second_operand_list[0] = '';
        first_operand_list[0] = '';
        while i < len(first_operand_list) and j < len(second_operand_list):
            if (len(first_operand_list[i]) < len(second_operand_list[j])):
                second_operand_list[j - 1] = second_operand_list[j - 1] + ' ';
                
            elif (len(first_operand_list[i]) > len(second_operand_list[j])):
                larger_spaces = '';
                if (len(second_operand_list[j])) == 3:
                    second_operand_list[j - 1] = second_operand_list[j - 1] + '  ';
                elif (len(second_operand_list[j])) == 1:
                    for k in range(0, len(first_operand_list[i])):
                        larger_spaces += ' ';
                    first_operand_list[i - 1] = '    ';
                    second_operand_list[j - 1] = second_operand_list[j - 1] + larger_spaces;
                else:
                    for k in range(0, len(first_operand_list[i]) - 1):
                        larger_spaces += ' ';
                    first_operand_list[i - 1] = '    ';
                    second_operand_list[j - 1] = second_operand_list[j - 1] + larger_spaces;
            else:
                 second_operand_list[j - 1] = second_operand_list[j - 1] + ' ';
            i += 3;
            j += 3;
        
        format_spaces();

    def to_first_row(first_operand):
        first_operand_list.append('    ');
        first_operand_list.append(' ');
        first_operand_list.append(str(first_operand));
        if (len(first_operand_list) == len(problems) * 3) and (len(second_operand_list) == len(problems) * 3):
            format_operators();

    def to_second_row(second_operand, operator):
        second_operand_list.append('    ');
        second_operand_list.append(operator);
        second_operand_list.append(str(second_operand));
        if (len(first_operand_list) == len(problems) * 3) and (len(second_operand_list) == len(problems) * 3):
            format_operators();
        
    if len(problems) > 5:
        return 'Error: Too many problems.';

    try:
        for i in problems:
            for j in i:
                if j == '*' or j == '/':
                    return 'Error: Operator must be '+' or '-'.';
    except:
        return 'Error: Operator must be '+' or '-'.';

    for k in problems:
        k = k.split(' ');
        if len(k[0]) > 4 or len(k[2]) > 4 or len(k[1]) != 1:
            return 'Error: Numbers cannot be more than four digits.';
        else:
            try:
                first_operand = int(k[0]);
                operator = k[1];
                second_operand = int(k[2]);
                to_first_row(first_operand);
                to_second_row(second_operand, operator);
            except:
                return 'Error: Numbers must only contain digits.';

    if result:
        return "".join(first_operand_list) + '\n' + "".join(second_operand_list) + '\n' + "".join(line_list) + '\n' + "".join(result_list);
    else:
        return "".join(first_operand_list) + '\n' + "".join(second_operand_list) + '\n' + "".join(line_list);
    
print(arithmetic_arranger(["11 + 4", "3801 - 5999", "1 + 2", "123 + 49", "1 - 9380"], True));
   