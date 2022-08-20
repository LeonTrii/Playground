function palindrome(str) {
    const regex = /[A-Z0-9]/gi;
    let backwards = [];
    let match = str.match(regex);
    match = match.join('');
    for (let i = match.length; i >= 0; i--) {
      backwards.push(match[i]);
    }
    backwards = backwards.join('');
    backwards = backwards.toLowerCase();
    match = match.toLowerCase();
    if (backwards == match) {
      return true;
    } else {
      return false;
    }
  }