dict_of_kaomojis = {
    'joy': 'ヽ(>∀<☆)ノ',
    'love': '╰(*´︶`*)╯♡',
    'embarassed': '(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)',
    'dissatisfaction': '(」°ロ°)」',
    'anger': '(╬ Ò﹏Ó)',
    'sad': '｡･ﾟﾟ*(>д<)*ﾟﾟ･｡',
    'pain': '☆⌒(> _ <)',
    'scared': '＼(º □ º l|l)/',
    'shrug': '¯\_(ツ)_/¯'
};

def says(types, message):
    result = """
    ==
     --
    <  
     --
       \\
        \\
    """;

    length_of_message = len(message) + 4;
    lines = '';
    upper_lower_lines = '';

    for _ in range(length_of_message):
        lines += "-";

    for _ in range(length_of_message + 10):
        upper_lower_lines += "=";

    result = result.replace("--", lines);
    result = result.replace("<", "<  " + message + "  >");
    result = result.replace("==", upper_lower_lines)
    types = types.lower();

    try: 
        result += dict_of_kaomojis.get(types);
    except:
        print("Not a valid Kaomoji.");

    result += '\n    ' + upper_lower_lines;
    print(result)

