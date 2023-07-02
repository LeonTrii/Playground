function telephoneCheck(str) {
    const regex = /[0-9]/ig;
    let hypenArr = [];
    let paraArr = [];
    let space = str.substring(2, 3);
  
    if (space == ' ') {
      return false;
    }
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '-') {
        hypenArr.push('-');
      } else if (str[i] === '(' || str[i] === ')') {
        paraArr.push(1);
      } 
    }
    let match = str.match(regex);
    match = match.join('');
    if (paraArr > 2 || hypenArr > 2 || paraArr == 1 || (str.indexOf('(') == 0 && str.indexOf(')') == str.length - 1) || str.indexOf('?') !== -1) {
      return false;
    }
  
    if (match.length == 10 || (match.length == 11 && match.indexOf('1') === 0)) {
      return true;
    } else {
      return false;
    }
  }
  
  