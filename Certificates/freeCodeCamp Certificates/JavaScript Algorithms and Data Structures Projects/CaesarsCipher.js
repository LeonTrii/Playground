function rot13(str) {
    const strLength = str.length;
    let split = str.split(' ');
    let newStr = '';
    for (let i = 0; i < split.length; i++) {
      for (let j = 0; j < split[i].length; j++) {
        switch (split[i][j]) {
          case 'A':
            newStr += 'N';
            break;
          case 'B':
            newStr += 'O';
            break;
          case 'C':
            newStr += 'P';
            break;
          case 'D':
            newStr += 'Q';
            break;
          case 'E':
            newStr += 'R';
            break;
          case 'F':
            newStr += 'S';
            break;
          case 'G':
            newStr += 'T';
            break;
          case 'H':
            newStr += 'U';
            break;
          case 'I':
            newStr += 'V';
            break;
          case 'J':
            newStr += 'W';
            break;
          case 'K':
            newStr += 'X';
            break;
          case 'L':
            newStr += 'Y';
            break;
          case 'M':
            newStr += 'Z';
            break;
          case 'N':
            newStr += 'A';
            break;
          case 'O':
            newStr += 'B';
            break;
          case 'P':
            newStr += 'C';
            break;
          case 'Q':
            newStr += 'D';
            break;
          case 'R':
            newStr += 'E';
            break;
          case 'S':
            newStr += 'F';
            break;
          case 'T':
            newStr += 'G';
            break;
          case 'U':
            newStr += 'H';
            break;
          case 'V':
            newStr += 'I';
            break;
          case 'W':
            newStr += 'J';
            break;
          case 'X':
            newStr += 'K';
            break;
          case 'Y':
            newStr += 'L';
            break;
          case 'Z':
            newStr += 'M';
            break;
          case '!':
            newStr += '!';
            break;
          case '?':
            newStr += '?';
            break;
          case '.':
            newStr += '.';
            break;
        }
  
        if (split[i].length - 1 == j) {
          newStr += ' ';
        }
      }
    }
    return newStr.trim();
  }
  
  console.log(rot13("SERR CVMMN!"));