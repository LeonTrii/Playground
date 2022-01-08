const pOne = document.getElementById('playerOne');
const pTwo = document.getElementById('playerTwo');
let xArray = [];
let oArray = [];

const win = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3],
  ];

pOne.classList.add('up');

for (let i = 1; i < 10; i++) {
  let word;
  switch (i) {
    case 1:
      word = 'one';
      break;
    case 2:
      word = 'two';
      break;
    case 3:
      word = 'three';
      break;
    case 4:
      word = 'four';
      break;
    case 5:
      word = 'five';
      break;
    case 6:
      word = 'six';
      break;
    case 7:
      word = 'seven';
      break;
    case 8:
      word = 'eight';
      break;
    case 9:
      word = 'nine';
      break;
  }
  $('#' + word).click(() => {
    if (pOne.classList.contains('up') && oArray.indexOf(i) == -1 && xArray.indexOf(i) == -1) {
      $('#' + word).html('X');
      pOne.classList.remove('up');
      pTwo.classList.add('up');
      xArray.push(i);
    } else if (pTwo.classList.contains('up') && xArray.indexOf(i) == -1 && oArray.indexOf(i) == -1) {
      $('#' + word).html('O');
      pOne.classList.add('up');
      pTwo.classList.remove('up');
      oArray.push(i);
    }
      for (let j = 0; j < win.length; j++) {
        let win1 = win[j][0];
        let win2 = win[j][1];
        let win3 = win[j][2];
        setTimeout(() => {
          if (xArray.indexOf(win1) != -1 && xArray.indexOf(win2) != -1 && xArray.indexOf(win3) != -1) {
            alert('Player one won :D');
            $('#one, #two, #three, #four, #five, #six, #seven, #eight, #nine').html('');
            oArray = [];
            xArray = [];
            pOne.classList.remove('up');
            pTwo.classList.add('up');
          } else if (oArray.indexOf(win1) != -1 && oArray.indexOf(win2) != -1 && oArray.indexOf(win3) != -1) {
            alert('Player two won :D');
            $('#one, #two, #three, #four, #five, #six, #seven, #eight, #nine').html('');
            oArray = [];
            xArray = [];
            pOne.classList.add('up');
            pTwo.classList.remove('up');
          } else if (oArray.concat(xArray).length == 9) {
            alert('Draw!');
            $('#one, #two, #three, #four, #five, #six, #seven, #eight, #nine').html('');
            oArray = [];
            xArray = [];
            num = Math.floor(Math.random() * 2)
            console.log(num)
            if (num == 0) {
              pOne.classList.add('up');
              pTwo.classList.remove('up');
            } else {
              pOne.classList.remove('up');
              pTwo.classList.add('up');
            }
          }
        }, 200);
}

  
  });
}

$('#reset').click(() => {
  $('#one, #two, #three, #four, #five, #six, #seven, #eight, #nine').html('');
    oArray = [];
    xArray = [];
    num = Math.floor(Math.random() * 2)
    if (num == 0) {
      pOne.classList.add('up');
      pTwo.classList.remove('up');
    } else {
      pOne.classList.remove('up');
      pTwo.classList.add('up');
    }
});  