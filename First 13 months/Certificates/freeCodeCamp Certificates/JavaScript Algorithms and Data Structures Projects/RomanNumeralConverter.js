function convertToRoman(num) {
    let thousands;
    let hundreds;
    let tens;
    let ones;
    let result = '';
    num = num.toString();
    let numLength = num.length;
    if (num.length == 4) {
      thousands = num.substring(0, 1) + '000';
      hundreds = num.substring(1, 2) + '00';
      tens = num.substring(2, 3) + '0';
      ones = num.substring(3, 4);
      for (let i = 1; i < 9; i++) {
        if (thousands.indexOf(i) !== -1) {
        for (let j = 0; j < i; j++) {
          result += 'M';
        }
      } 
    } 
    } else if (num.length == 3) {
      hundreds = num.substring(0, 1) + '00';
      tens = num.substring(1, 2) + '0';
      ones = num.substring(2, 3);
    } else if (num.length == 2) {
      tens = num.substring(0, 1) + '0';
      ones = num.substring(1, 2);
    } else if (num.length == 1) {
      ones = num.substring(0, 1);
    }
  
    if (hundreds !== '000') {
      hundreds = parseInt(hundreds);
    if (hundreds == 900) {
        result += 'CM';
        hundreds -= 900;
      } else if (hundreds >= 500) {
        result += 'D';
        hundreds -= 500;
      } else if (hundreds == 400) {
        result += 'CD';
        hundreds -= 400;
      } 
    
    hundreds = hundreds.toString();
    for (let k = 1; k < 9; k++) {
      if (hundreds.indexOf(k) !== -1) {
        for (let l = 0; l < k; l++) {
          result += 'C';
        }
      }
    }
    }
  
    if (tens !== '00') {
      tens = parseInt(tens);
    if (tens == 90) {
        result += 'XC';
        tens -= 90;
      } else if (tens >= 50) {
        result += 'L';
        tens -= 50;
      } else if (tens == 40) {
        result += 'XL';
        tens -= 40;
      } 
    tens = tens.toString();
    for (let k = 1; k < 9; k++) {
      if (tens.indexOf(k) !== -1) {
        for (let l = 0; l < k; l++) {
          result += 'X';
        }
      }
    }
    }
  
    if (ones !== 0) {
    if (ones == 9) {
        result += 'IX';
        ones -= 9;
      } else if (ones >= 5) {
        result += 'V';
        ones -= 5;
      } else if (ones == 4) {
        result += 'IV';
        ones -= 4;
      } 
  
    ones = ones.toString();
    for (let p = 1; p < 9; p++) {
      if (ones.indexOf(p) !== -1) {
        for (let q = 0; q < p; q++) {
          result += 'I';
        }
      }
    }
    }
  
    return result;
  }
  
  console.log(convertToRoman(3));