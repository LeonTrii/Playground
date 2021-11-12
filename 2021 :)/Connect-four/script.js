const playerOne = document.getElementById('playerOne');
const playerTwo = document.getElementById('playerTwo');
let array = [];
let redArray = [];
let yellowArray = [];
let win = [];
let execute = true;
let valueOne;
let valueTwo;
let valueThree;
let valueFour;

const winningArrays = [
    [2, 10, 18, 26],
    [1, 2, 3, 4],
    [42, 41, 40, 39],
    [8, 9, 10, 11],
    [35, 34, 33, 32],
    [15, 16, 17, 18],
    [28, 27, 26, 25],
    [22, 23, 24, 25],
    [21, 20, 19, 18],
    [29, 30, 31, 32],
    [14, 13, 12, 11],
    [36, 37, 38, 39],
    [7, 6, 5, 4],
    [1, 8, 15, 22],
    [42, 35, 28, 21],
    [2, 9, 16, 23],
    [41, 34, 27, 20],
    [3, 10, 17, 24],
    [40, 33, 26, 19],
    [4, 11, 18, 25],
    [39, 32, 25, 18],
    [5, 12, 19, 26],
    [38, 31, 24, 17],
    [6, 13, 20, 27],
    [37, 30, 23, 16],
    [7, 14, 21, 28],
    [36, 29, 22, 15],
    [1, 9, 17, 25],
    [42, 34, 26, 18],
    [8, 16, 24, 32],
    [35, 27, 19, 11],
    [15, 23, 31, 39],
    [28, 20, 12, 4],
    [36, 30, 24, 18],
    [7, 13, 19, 25],
    [29, 23, 17, 11],
    [14, 20, 26, 32],
    [22, 16, 10, 4],
    [21, 27, 33, 39],
    [37, 31, 25, 19],
    [6, 12, 18, 24],
    [38, 32, 26, 20],
    [5, 11, 17, 23],
    [3, 11, 19, 27],
    [40, 32, 24, 16],
    [1, 9, 17, 25],
    [41, 33, 25, 17],
    [10, 18, 26, 34],
    [9, 17, 25, 33],
    [12, 18, 24, 30],
    [13, 19, 25, 31],
    [2, 3, 4, 5],
    [6, 5, 4, 3],
    [9, 10, 11, 12],
    [13, 12, 11, 10],
    [16, 17, 18, 19],
    [20, 19, 18, 17],
    [23, 24, 25, 26],
    [27, 26, 25, 24],
    [30, 31, 32, 33],
    [34, 33, 32, 31],
    [37, 38, 39, 40],
    [41, 40, 39, 38],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [14, 21, 28, 35],
  ];

playerOne.classList.add('turn'); //adds turn to player one

$('#rowOne1').click(function(){ // for the first vertical row
    if ($('#playerOne').hasClass('turn')) { //this will only add a red maker if there is space. that is why there is indexof
        if (!$('#rowSeven1').hasClass('redMarker') && array.indexOf(1) == -1) {
            $('#rowSeven1').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(1); //pushes to the array so the values cannot be used anymore
            redArray.push(1);
        } else if (!$('#rowSix1').hasClass('redMarker') && array.indexOf(2) == -1) {
            $('#rowSix1').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(2);
            redArray.push(2);
        } else if (!$('#rowFive1').hasClass('redMarker') && array.indexOf(3) == -1) {
            $('#rowFive1').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(3);
            redArray.push(3);
        } else if (!$('#rowFour1').hasClass('redMarker') && array.indexOf(4) == -1) {
            $('#rowFour1').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(4);
            redArray.push(4);
        } else if (!$('#rowThree1').hasClass('redMarker') && array.indexOf(5) == -1) {
            $('#rowThree1').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(5);
            redArray.push(5);
        } else if (!$('#rowTwo1').hasClass('redMarker') && array.indexOf(6) == -1) {
            $('#rowTwo1').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(6);
            redArray.push(6);
        } else if (!$('#rowOne1').hasClass('redMarker') && array.indexOf(7) == -1) {
            $('#rowOne1').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(7);
            redArray.push(7);
        } 
        setInterval(function(){
            for (let i = 0; i < winningArrays.length; i++) {
                for (let k = 0; k < winningArrays[i].length; k++) {
                    for (let j = 0; j < redArray.length; j++) {
                        valueOne = winningArrays[i][0];
                        valueTwo = winningArrays[i][1];
                        valueThree = winningArrays[i][2];
                        valueFour = winningArrays[i][3];
                            if (redArray.indexOf(valueOne) !== -1 && redArray.indexOf(valueTwo) !== -1 && redArray.indexOf(valueThree) !== -1 && redArray.indexOf(valueFour) !== -1)  { //for player one
                                alert("Player one won!");
                                playerTwo.classList.remove('turn');
                                playerOne.classList.add('turn');
                                array = [];
                                win = [];
                                redArray = [];
                                yellowArray = [];
                                $('#rowSeven1').removeClass('redMarker');
                                $('#rowSeven2').removeClass('redMarker');
                                $('#rowSeven3').removeClass('redMarker');
                                $('#rowSeven4').removeClass('redMarker');
                                $('#rowSeven5').removeClass('redMarker');
                                $('#rowSeven6').removeClass('redMarker');
                                $('#rowSix1').removeClass('redMarker');
                                $('#rowSix2').removeClass('redMarker');
                                $('#rowSix3').removeClass('redMarker');
                                $('#rowSix4').removeClass('redMarker');
                                $('#rowSix5').removeClass('redMarker');
                                $('#rowSix6').removeClass('redMarker');
                                $('#rowFive1').removeClass('redMarker');
                                $('#rowFive2').removeClass('redMarker');
                                $('#rowFive3').removeClass('redMarker');
                                $('#rowFive4').removeClass('redMarker');
                                $('#rowFive5').removeClass('redMarker');
                                $('#rowFive6').removeClass('redMarker');
                                $('#rowFour1').removeClass('redMarker');
                                $('#rowFour2').removeClass('redMarker');
                                $('#rowFour3').removeClass('redMarker');
                                $('#rowFour4').removeClass('redMarker');
                                $('#rowFour5').removeClass('redMarker');
                                $('#rowFour6').removeClass('redMarker');
                                $('#rowThree1').removeClass('redMarker');
                                $('#rowThree2').removeClass('redMarker');
                                $('#rowThree3').removeClass('redMarker');
                                $('#rowThree4').removeClass('redMarker');
                                $('#rowThree5').removeClass('redMarker');
                                $('#rowThree6').removeClass('redMarker');
                                $('#rowTwo1').removeClass('redMarker');
                                $('#rowTwo2').removeClass('redMarker');
                                $('#rowTwo3').removeClass('redMarker');
                                $('#rowTwo4').removeClass('redMarker');
                                $('#rowTwo5').removeClass('redMarker');
                                $('#rowTwo6').removeClass('redMarker');
                                $('#rowOne1').removeClass('redMarker');
                                $('#rowOne2').removeClass('redMarker');
                                $('#rowOne3').removeClass('redMarker');
                                $('#rowOne4').removeClass('redMarker');
                                $('#rowOne5').removeClass('redMarker');
                                $('#rowOne6').removeClass('redMarker');
                                $('#rowSeven1').removeClass('yellowMarker');
                                $('#rowSeven2').removeClass('yellowMarker');
                                $('#rowSeven3').removeClass('yellowMarker');
                                $('#rowSeven4').removeClass('yellowMarker');
                                $('#rowSeven5').removeClass('yellowMarker');
                                $('#rowSeven6').removeClass('yellowMarker');
                                $('#rowSix1').removeClass('yellowMarker');
                                $('#rowSix2').removeClass('yellowMarker');
                                $('#rowSix3').removeClass('yellowMarker');
                                $('#rowSix4').removeClass('yellowMarker');
                                $('#rowSix5').removeClass('yellowMarker');
                                $('#rowSix6').removeClass('yellowMarker');
                                $('#rowFive1').removeClass('yellowMarker');
                                $('#rowFive2').removeClass('yellowMarker');
                                $('#rowFive3').removeClass('yellowMarker');
                                $('#rowFive4').removeClass('yellowMarker');
                                $('#rowFive5').removeClass('yellowMarker');
                                $('#rowFive6').removeClass('yellowMarker');
                                $('#rowFour1').removeClass('yellowMarker');
                                $('#rowFour2').removeClass('yellowMarker');
                                $('#rowFour3').removeClass('yellowMarker');
                                $('#rowFour4').removeClass('yellowMarker');
                                $('#rowFour5').removeClass('yellowMarker');
                                $('#rowFour6').removeClass('yellowMarker');
                                $('#rowThree1').removeClass('yellowMarker');
                                $('#rowThree2').removeClass('yellowMarker');
                                $('#rowThree3').removeClass('yellowMarker');
                                $('#rowThree4').removeClass('yellowMarker');
                                $('#rowThree5').removeClass('yellowMarker');
                                $('#rowThree6').removeClass('yellowMarker');
                                $('#rowTwo1').removeClass('yellowMarker');
                                $('#rowTwo2').removeClass('yellowMarker');
                                $('#rowTwo3').removeClass('yellowMarker');
                                $('#rowTwo4').removeClass('yellowMarker');
                                $('#rowTwo5').removeClass('yellowMarker');
                                $('#rowTwo6').removeClass('yellowMarker');
                                $('#rowOne1').removeClass('yellowMarker');
                                $('#rowOne2').removeClass('yellowMarker');
                                $('#rowOne3').removeClass('yellowMarker');
                                $('#rowOne4').removeClass('yellowMarker');
                                $('#rowOne5').removeClass('yellowMarker');
                                $('#rowOne6').removeClass('yellowMarker');
                            }
                      }
                }
            }    
        }, 300);
    } else if ($('#playerTwo').hasClass('turn')) { //yellow marker
        if (!$('#rowSeven1').hasClass('yellowMarker') && array.indexOf(1) == -1) {
            $('#rowSeven1').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(1);
            yellowArray.push(1);
        } else if (!$('#rowSix1').hasClass('yellowMarker') && array.indexOf(2) == -1) {
            $('#rowSix1').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(2);
            yellowArray.push(2);
        } else if (!$('#rowFive1').hasClass('yellowMarker') && array.indexOf(3) == -1) {
            $('#rowFive1').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(3);
            yellowArray.push(3);
        } else if (!$('#rowFour1').hasClass('yellowMarker') && array.indexOf(4) == -1) {
            $('#rowFour1').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(4);
            yellowArray.push(4);
        } else if (!$('#rowThree1').hasClass('yellowMarker') && array.indexOf(5) == -1) {
            $('#rowThree1').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(5);
            yellowArray.push(5);
        } else if (!$('#rowTwo1').hasClass('yellowMarker') && array.indexOf(6) == -1) {
            $('#rowTwo1').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(6);
            yellowArray.push(6);
        } else if (!$('#rowOne1').hasClass('yellowMarker') && array.indexOf(7) == -1) {
            $('#rowOne1').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(7);
            yellowArray.push(7);
        }

        setInterval(function(){
            for (let i = 0; i < winningArrays.length; i++) {
                for (let k = 0; k < winningArrays[i].length; k++) {
                    for (let j = 0; j < redArray.length; j++) {
                        valueOne = winningArrays[i][0];
                        valueTwo = winningArrays[i][1];
                        valueThree = winningArrays[i][2];
                        valueFour = winningArrays[i][3];
                            if (yellowArray.indexOf(valueOne) !== -1 && yellowArray.indexOf(valueTwo) !== -1 && yellowArray.indexOf(valueThree) !== -1 && yellowArray.indexOf(valueFour) !== -1)  { //for player one
                                alert("Player two won!");
                                playerTwo.classList.remove('turn');
                                playerOne.classList.add('turn');
                                array = [];
                                win = [];
                                redArray = [];
                                yellowArray = [];
                                $('#rowSeven1').removeClass('redMarker');
                                $('#rowSeven2').removeClass('redMarker');
                                $('#rowSeven3').removeClass('redMarker');
                                $('#rowSeven4').removeClass('redMarker');
                                $('#rowSeven5').removeClass('redMarker');
                                $('#rowSeven6').removeClass('redMarker');
                                $('#rowSix1').removeClass('redMarker');
                                $('#rowSix2').removeClass('redMarker');
                                $('#rowSix3').removeClass('redMarker');
                                $('#rowSix4').removeClass('redMarker');
                                $('#rowSix5').removeClass('redMarker');
                                $('#rowSix6').removeClass('redMarker');
                                $('#rowFive1').removeClass('redMarker');
                                $('#rowFive2').removeClass('redMarker');
                                $('#rowFive3').removeClass('redMarker');
                                $('#rowFive4').removeClass('redMarker');
                                $('#rowFive5').removeClass('redMarker');
                                $('#rowFive6').removeClass('redMarker');
                                $('#rowFour1').removeClass('redMarker');
                                $('#rowFour2').removeClass('redMarker');
                                $('#rowFour3').removeClass('redMarker');
                                $('#rowFour4').removeClass('redMarker');
                                $('#rowFour5').removeClass('redMarker');
                                $('#rowFour6').removeClass('redMarker');
                                $('#rowThree1').removeClass('redMarker');
                                $('#rowThree2').removeClass('redMarker');
                                $('#rowThree3').removeClass('redMarker');
                                $('#rowThree4').removeClass('redMarker');
                                $('#rowThree5').removeClass('redMarker');
                                $('#rowThree6').removeClass('redMarker');
                                $('#rowTwo1').removeClass('redMarker');
                                $('#rowTwo2').removeClass('redMarker');
                                $('#rowTwo3').removeClass('redMarker');
                                $('#rowTwo4').removeClass('redMarker');
                                $('#rowTwo5').removeClass('redMarker');
                                $('#rowTwo6').removeClass('redMarker');
                                $('#rowOne1').removeClass('redMarker');
                                $('#rowOne2').removeClass('redMarker');
                                $('#rowOne3').removeClass('redMarker');
                                $('#rowOne4').removeClass('redMarker');
                                $('#rowOne5').removeClass('redMarker');
                                $('#rowOne6').removeClass('redMarker');
                                $('#rowSeven1').removeClass('yellowMarker');
                                $('#rowSeven2').removeClass('yellowMarker');
                                $('#rowSeven3').removeClass('yellowMarker');
                                $('#rowSeven4').removeClass('yellowMarker');
                                $('#rowSeven5').removeClass('yellowMarker');
                                $('#rowSeven6').removeClass('yellowMarker');
                                $('#rowSix1').removeClass('yellowMarker');
                                $('#rowSix2').removeClass('yellowMarker');
                                $('#rowSix3').removeClass('yellowMarker');
                                $('#rowSix4').removeClass('yellowMarker');
                                $('#rowSix5').removeClass('yellowMarker');
                                $('#rowSix6').removeClass('yellowMarker');
                                $('#rowFive1').removeClass('yellowMarker');
                                $('#rowFive2').removeClass('yellowMarker');
                                $('#rowFive3').removeClass('yellowMarker');
                                $('#rowFive4').removeClass('yellowMarker');
                                $('#rowFive5').removeClass('yellowMarker');
                                $('#rowFive6').removeClass('yellowMarker');
                                $('#rowFour1').removeClass('yellowMarker');
                                $('#rowFour2').removeClass('yellowMarker');
                                $('#rowFour3').removeClass('yellowMarker');
                                $('#rowFour4').removeClass('yellowMarker');
                                $('#rowFour5').removeClass('yellowMarker');
                                $('#rowFour6').removeClass('yellowMarker');
                                $('#rowThree1').removeClass('yellowMarker');
                                $('#rowThree2').removeClass('yellowMarker');
                                $('#rowThree3').removeClass('yellowMarker');
                                $('#rowThree4').removeClass('yellowMarker');
                                $('#rowThree5').removeClass('yellowMarker');
                                $('#rowThree6').removeClass('yellowMarker');
                                $('#rowTwo1').removeClass('yellowMarker');
                                $('#rowTwo2').removeClass('yellowMarker');
                                $('#rowTwo3').removeClass('yellowMarker');
                                $('#rowTwo4').removeClass('yellowMarker');
                                $('#rowTwo5').removeClass('yellowMarker');
                                $('#rowTwo6').removeClass('yellowMarker');
                                $('#rowOne1').removeClass('yellowMarker');
                                $('#rowOne2').removeClass('yellowMarker');
                                $('#rowOne3').removeClass('yellowMarker');
                                $('#rowOne4').removeClass('yellowMarker');
                                $('#rowOne5').removeClass('yellowMarker');
                                $('#rowOne6').removeClass('yellowMarker');
                            }
                      }
                }
            }    
        }, 300);
    }
});

$('#rowOne2').click(function(){ // for the second vertical row
    if ($('#playerOne').hasClass('turn')) { //this will only add a red maker if there is space. that is why there is indexof
        if (!$('#rowSeven2').hasClass('redMarker') && array.indexOf(8) == -1) {
            $('#rowSeven2').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(8); //pushes to the array so the values cannot be used anymore
            redArray.push(8);
        } else if (!$('#rowSix2').hasClass('redMarker') && array.indexOf(9) == -1) {
            $('#rowSix2').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(9);
            redArray.push(9);
        } else if (!$('#rowFive2').hasClass('redMarker') && array.indexOf(10) == -1) {
            $('#rowFive2').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(10);
            redArray.push(10);
        } else if (!$('#rowFour2').hasClass('redMarker') && array.indexOf(11) == -1) {
            $('#rowFour2').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(11);
            redArray.push(11);
        } else if (!$('#rowThree2').hasClass('redMarker') && array.indexOf(12) == -1) {
            $('#rowThree2').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(12);
            redArray.push(12);
        } else if (!$('#rowTwo2').hasClass('redMarker') && array.indexOf(13) == -1) {
            $('#rowTwo2').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(13);
            redArray.push(13);
        } else if (!$('#rowOne2').hasClass('redMarker') && array.indexOf(14) == -1) {
            $('#rowOne2').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(14);
            redArray.push(14);
        } 

        setInterval(function(){
            for (let i = 0; i < winningArrays.length; i++) {
                for (let k = 0; k < winningArrays[i].length; k++) {
                    for (let j = 0; j < redArray.length; j++) {
                        valueOne = winningArrays[i][0];
                        valueTwo = winningArrays[i][1];
                        valueThree = winningArrays[i][2];
                        valueFour = winningArrays[i][3];
                            if (redArray.indexOf(valueOne) !== -1 && redArray.indexOf(valueTwo) !== -1 && redArray.indexOf(valueThree) !== -1 && redArray.indexOf(valueFour) !== -1)  { //for player one
                                alert("Player one won!");
                                playerTwo.classList.remove('turn');
                                playerOne.classList.add('turn');
                                array = [];
                                win = [];
                                redArray = [];
                                yellowArray = [];
                                $('#rowSeven1').removeClass('redMarker');
                                $('#rowSeven2').removeClass('redMarker');
                                $('#rowSeven3').removeClass('redMarker');
                                $('#rowSeven4').removeClass('redMarker');
                                $('#rowSeven5').removeClass('redMarker');
                                $('#rowSeven6').removeClass('redMarker');
                                $('#rowSix1').removeClass('redMarker');
                                $('#rowSix2').removeClass('redMarker');
                                $('#rowSix3').removeClass('redMarker');
                                $('#rowSix4').removeClass('redMarker');
                                $('#rowSix5').removeClass('redMarker');
                                $('#rowSix6').removeClass('redMarker');
                                $('#rowFive1').removeClass('redMarker');
                                $('#rowFive2').removeClass('redMarker');
                                $('#rowFive3').removeClass('redMarker');
                                $('#rowFive4').removeClass('redMarker');
                                $('#rowFive5').removeClass('redMarker');
                                $('#rowFive6').removeClass('redMarker');
                                $('#rowFour1').removeClass('redMarker');
                                $('#rowFour2').removeClass('redMarker');
                                $('#rowFour3').removeClass('redMarker');
                                $('#rowFour4').removeClass('redMarker');
                                $('#rowFour5').removeClass('redMarker');
                                $('#rowFour6').removeClass('redMarker');
                                $('#rowThree1').removeClass('redMarker');
                                $('#rowThree2').removeClass('redMarker');
                                $('#rowThree3').removeClass('redMarker');
                                $('#rowThree4').removeClass('redMarker');
                                $('#rowThree5').removeClass('redMarker');
                                $('#rowThree6').removeClass('redMarker');
                                $('#rowTwo1').removeClass('redMarker');
                                $('#rowTwo2').removeClass('redMarker');
                                $('#rowTwo3').removeClass('redMarker');
                                $('#rowTwo4').removeClass('redMarker');
                                $('#rowTwo5').removeClass('redMarker');
                                $('#rowTwo6').removeClass('redMarker');
                                $('#rowOne1').removeClass('redMarker');
                                $('#rowOne2').removeClass('redMarker');
                                $('#rowOne3').removeClass('redMarker');
                                $('#rowOne4').removeClass('redMarker');
                                $('#rowOne5').removeClass('redMarker');
                                $('#rowOne6').removeClass('redMarker');
                                $('#rowSeven1').removeClass('yellowMarker');
                                $('#rowSeven2').removeClass('yellowMarker');
                                $('#rowSeven3').removeClass('yellowMarker');
                                $('#rowSeven4').removeClass('yellowMarker');
                                $('#rowSeven5').removeClass('yellowMarker');
                                $('#rowSeven6').removeClass('yellowMarker');
                                $('#rowSix1').removeClass('yellowMarker');
                                $('#rowSix2').removeClass('yellowMarker');
                                $('#rowSix3').removeClass('yellowMarker');
                                $('#rowSix4').removeClass('yellowMarker');
                                $('#rowSix5').removeClass('yellowMarker');
                                $('#rowSix6').removeClass('yellowMarker');
                                $('#rowFive1').removeClass('yellowMarker');
                                $('#rowFive2').removeClass('yellowMarker');
                                $('#rowFive3').removeClass('yellowMarker');
                                $('#rowFive4').removeClass('yellowMarker');
                                $('#rowFive5').removeClass('yellowMarker');
                                $('#rowFive6').removeClass('yellowMarker');
                                $('#rowFour1').removeClass('yellowMarker');
                                $('#rowFour2').removeClass('yellowMarker');
                                $('#rowFour3').removeClass('yellowMarker');
                                $('#rowFour4').removeClass('yellowMarker');
                                $('#rowFour5').removeClass('yellowMarker');
                                $('#rowFour6').removeClass('yellowMarker');
                                $('#rowThree1').removeClass('yellowMarker');
                                $('#rowThree2').removeClass('yellowMarker');
                                $('#rowThree3').removeClass('yellowMarker');
                                $('#rowThree4').removeClass('yellowMarker');
                                $('#rowThree5').removeClass('yellowMarker');
                                $('#rowThree6').removeClass('yellowMarker');
                                $('#rowTwo1').removeClass('yellowMarker');
                                $('#rowTwo2').removeClass('yellowMarker');
                                $('#rowTwo3').removeClass('yellowMarker');
                                $('#rowTwo4').removeClass('yellowMarker');
                                $('#rowTwo5').removeClass('yellowMarker');
                                $('#rowTwo6').removeClass('yellowMarker');
                                $('#rowOne1').removeClass('yellowMarker');
                                $('#rowOne2').removeClass('yellowMarker');
                                $('#rowOne3').removeClass('yellowMarker');
                                $('#rowOne4').removeClass('yellowMarker');
                                $('#rowOne5').removeClass('yellowMarker');
                                $('#rowOne6').removeClass('yellowMarker');
                            }
                      }
                }
            }    
        }, 300);
        
        
    } else if ($('#playerTwo').hasClass('turn')) { //yellow marker
        if (!$('#rowSeven2').hasClass('yellowMarker') && array.indexOf(8) == -1) {
            $('#rowSeven2').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(8);
            yellowArray.push(8);
        } else if (!$('#rowSix2').hasClass('yellowMarker') && array.indexOf(9) == -1) {
            $('#rowSix2').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(9);
            yellowArray.push(9);
        } else if (!$('#rowFive2').hasClass('yellowMarker') && array.indexOf(10) == -1) {
            $('#rowFive2').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(10);
            yellowArray.push(10);
        } else if (!$('#rowFour2').hasClass('yellowMarker') && array.indexOf(11) == -1) {
            $('#rowFour2').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(11);
            yellowArray.push(11);
        } else if (!$('#rowThree2').hasClass('yellowMarker') && array.indexOf(12) == -1) {
            $('#rowThree2').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(12);
            yellowArray.push(12);
        } else if (!$('#rowTwo2').hasClass('yellowMarker') && array.indexOf(13) == -1) {
            $('#rowTwo2').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(13);
            yellowArray.push(13);
        } else if (!$('#rowOne2').hasClass('yellowMarker') && array.indexOf(14) == -1) {
            $('#rowOne2').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(14);
            yellowArray.push(14);
        } 

        setInterval(function(){
            for (let i = 0; i < winningArrays.length; i++) {
                for (let k = 0; k < winningArrays[i].length; k++) {
                    for (let j = 0; j < redArray.length; j++) {
                        valueOne = winningArrays[i][0];
                        valueTwo = winningArrays[i][1];
                        valueThree = winningArrays[i][2];
                        valueFour = winningArrays[i][3];
                            if (yellowArray.indexOf(valueOne) !== -1 && yellowArray.indexOf(valueTwo) !== -1 && yellowArray.indexOf(valueThree) !== -1 && yellowArray.indexOf(valueFour) !== -1)  { //for player one
                                alert("Player two won!");
                                playerTwo.classList.remove('turn');
                                playerOne.classList.add('turn');
                                array = [];
                                win = [];
                                redArray = [];
                                yellowArray = [];
                                $('#rowSeven1').removeClass('redMarker');
                                $('#rowSeven2').removeClass('redMarker');
                                $('#rowSeven3').removeClass('redMarker');
                                $('#rowSeven4').removeClass('redMarker');
                                $('#rowSeven5').removeClass('redMarker');
                                $('#rowSeven6').removeClass('redMarker');
                                $('#rowSix1').removeClass('redMarker');
                                $('#rowSix2').removeClass('redMarker');
                                $('#rowSix3').removeClass('redMarker');
                                $('#rowSix4').removeClass('redMarker');
                                $('#rowSix5').removeClass('redMarker');
                                $('#rowSix6').removeClass('redMarker');
                                $('#rowFive1').removeClass('redMarker');
                                $('#rowFive2').removeClass('redMarker');
                                $('#rowFive3').removeClass('redMarker');
                                $('#rowFive4').removeClass('redMarker');
                                $('#rowFive5').removeClass('redMarker');
                                $('#rowFive6').removeClass('redMarker');
                                $('#rowFour1').removeClass('redMarker');
                                $('#rowFour2').removeClass('redMarker');
                                $('#rowFour3').removeClass('redMarker');
                                $('#rowFour4').removeClass('redMarker');
                                $('#rowFour5').removeClass('redMarker');
                                $('#rowFour6').removeClass('redMarker');
                                $('#rowThree1').removeClass('redMarker');
                                $('#rowThree2').removeClass('redMarker');
                                $('#rowThree3').removeClass('redMarker');
                                $('#rowThree4').removeClass('redMarker');
                                $('#rowThree5').removeClass('redMarker');
                                $('#rowThree6').removeClass('redMarker');
                                $('#rowTwo1').removeClass('redMarker');
                                $('#rowTwo2').removeClass('redMarker');
                                $('#rowTwo3').removeClass('redMarker');
                                $('#rowTwo4').removeClass('redMarker');
                                $('#rowTwo5').removeClass('redMarker');
                                $('#rowTwo6').removeClass('redMarker');
                                $('#rowOne1').removeClass('redMarker');
                                $('#rowOne2').removeClass('redMarker');
                                $('#rowOne3').removeClass('redMarker');
                                $('#rowOne4').removeClass('redMarker');
                                $('#rowOne5').removeClass('redMarker');
                                $('#rowOne6').removeClass('redMarker');
                                $('#rowSeven1').removeClass('yellowMarker');
                                $('#rowSeven2').removeClass('yellowMarker');
                                $('#rowSeven3').removeClass('yellowMarker');
                                $('#rowSeven4').removeClass('yellowMarker');
                                $('#rowSeven5').removeClass('yellowMarker');
                                $('#rowSeven6').removeClass('yellowMarker');
                                $('#rowSix1').removeClass('yellowMarker');
                                $('#rowSix2').removeClass('yellowMarker');
                                $('#rowSix3').removeClass('yellowMarker');
                                $('#rowSix4').removeClass('yellowMarker');
                                $('#rowSix5').removeClass('yellowMarker');
                                $('#rowSix6').removeClass('yellowMarker');
                                $('#rowFive1').removeClass('yellowMarker');
                                $('#rowFive2').removeClass('yellowMarker');
                                $('#rowFive3').removeClass('yellowMarker');
                                $('#rowFive4').removeClass('yellowMarker');
                                $('#rowFive5').removeClass('yellowMarker');
                                $('#rowFive6').removeClass('yellowMarker');
                                $('#rowFour1').removeClass('yellowMarker');
                                $('#rowFour2').removeClass('yellowMarker');
                                $('#rowFour3').removeClass('yellowMarker');
                                $('#rowFour4').removeClass('yellowMarker');
                                $('#rowFour5').removeClass('yellowMarker');
                                $('#rowFour6').removeClass('yellowMarker');
                                $('#rowThree1').removeClass('yellowMarker');
                                $('#rowThree2').removeClass('yellowMarker');
                                $('#rowThree3').removeClass('yellowMarker');
                                $('#rowThree4').removeClass('yellowMarker');
                                $('#rowThree5').removeClass('yellowMarker');
                                $('#rowThree6').removeClass('yellowMarker');
                                $('#rowTwo1').removeClass('yellowMarker');
                                $('#rowTwo2').removeClass('yellowMarker');
                                $('#rowTwo3').removeClass('yellowMarker');
                                $('#rowTwo4').removeClass('yellowMarker');
                                $('#rowTwo5').removeClass('yellowMarker');
                                $('#rowTwo6').removeClass('yellowMarker');
                                $('#rowOne1').removeClass('yellowMarker');
                                $('#rowOne2').removeClass('yellowMarker');
                                $('#rowOne3').removeClass('yellowMarker');
                                $('#rowOne4').removeClass('yellowMarker');
                                $('#rowOne5').removeClass('yellowMarker');
                                $('#rowOne6').removeClass('yellowMarker');
                            }
                      }
                }
            }    
        }, 300);
    }
});

$('#rowOne3').click(function(){ // for the third vertical row
    if ($('#playerOne').hasClass('turn')) { //this will only add a red maker if there is space. that is why there is indexof
        if (!$('#rowSeven3').hasClass('redMarker') && array.indexOf(15) == -1) {
            $('#rowSeven3').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(15); //pushes to the array so the values cannot be used anymore
            redArray.push(15);
        } else if (!$('#rowSix3').hasClass('redMarker') && array.indexOf(16) == -1) {
            $('#rowSix3').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(16);
            redArray.push(16);
        } else if (!$('#rowFive3').hasClass('redMarker') && array.indexOf(17) == -1) {
            $('#rowFive3').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(17);
            redArray.push(17);
        } else if (!$('#rowFour3').hasClass('redMarker') && array.indexOf(18) == -1) {
            $('#rowFour3').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(18);
            redArray.push(18);
        } else if (!$('#rowThree3').hasClass('redMarker') && array.indexOf(19) == -1) {
            $('#rowThree3').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(19);
            redArray.push(19);
        } else if (!$('#rowTwo3').hasClass('redMarker') && array.indexOf(20) == -1) {
            $('#rowTwo3').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(20);
            redArray.push(20);
        } else if (!$('#rowOne3').hasClass('redMarker') && array.indexOf(21) == -1) {
            $('#rowOne3').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(21);
            redArray.push(21);
        } 

        setInterval(function(){
            for (let i = 0; i < winningArrays.length; i++) {
                for (let k = 0; k < winningArrays[i].length; k++) {
                    for (let j = 0; j < redArray.length; j++) {
                        valueOne = winningArrays[i][0];
                        valueTwo = winningArrays[i][1];
                        valueThree = winningArrays[i][2];
                        valueFour = winningArrays[i][3];
                            if (redArray.indexOf(valueOne) !== -1 && redArray.indexOf(valueTwo) !== -1 && redArray.indexOf(valueThree) !== -1 && redArray.indexOf(valueFour) !== -1)  { //for player one
                                alert("Player one won!");
                                playerTwo.classList.remove('turn');
                                playerOne.classList.add('turn');
                                array = [];
                                win = [];
                                redArray = [];
                                yellowArray = [];
                                $('#rowSeven1').removeClass('redMarker');
                                $('#rowSeven2').removeClass('redMarker');
                                $('#rowSeven3').removeClass('redMarker');
                                $('#rowSeven4').removeClass('redMarker');
                                $('#rowSeven5').removeClass('redMarker');
                                $('#rowSeven6').removeClass('redMarker');
                                $('#rowSix1').removeClass('redMarker');
                                $('#rowSix2').removeClass('redMarker');
                                $('#rowSix3').removeClass('redMarker');
                                $('#rowSix4').removeClass('redMarker');
                                $('#rowSix5').removeClass('redMarker');
                                $('#rowSix6').removeClass('redMarker');
                                $('#rowFive1').removeClass('redMarker');
                                $('#rowFive2').removeClass('redMarker');
                                $('#rowFive3').removeClass('redMarker');
                                $('#rowFive4').removeClass('redMarker');
                                $('#rowFive5').removeClass('redMarker');
                                $('#rowFive6').removeClass('redMarker');
                                $('#rowFour1').removeClass('redMarker');
                                $('#rowFour2').removeClass('redMarker');
                                $('#rowFour3').removeClass('redMarker');
                                $('#rowFour4').removeClass('redMarker');
                                $('#rowFour5').removeClass('redMarker');
                                $('#rowFour6').removeClass('redMarker');
                                $('#rowThree1').removeClass('redMarker');
                                $('#rowThree2').removeClass('redMarker');
                                $('#rowThree3').removeClass('redMarker');
                                $('#rowThree4').removeClass('redMarker');
                                $('#rowThree5').removeClass('redMarker');
                                $('#rowThree6').removeClass('redMarker');
                                $('#rowTwo1').removeClass('redMarker');
                                $('#rowTwo2').removeClass('redMarker');
                                $('#rowTwo3').removeClass('redMarker');
                                $('#rowTwo4').removeClass('redMarker');
                                $('#rowTwo5').removeClass('redMarker');
                                $('#rowTwo6').removeClass('redMarker');
                                $('#rowOne1').removeClass('redMarker');
                                $('#rowOne2').removeClass('redMarker');
                                $('#rowOne3').removeClass('redMarker');
                                $('#rowOne4').removeClass('redMarker');
                                $('#rowOne5').removeClass('redMarker');
                                $('#rowOne6').removeClass('redMarker');
                                $('#rowSeven1').removeClass('yellowMarker');
                                $('#rowSeven2').removeClass('yellowMarker');
                                $('#rowSeven3').removeClass('yellowMarker');
                                $('#rowSeven4').removeClass('yellowMarker');
                                $('#rowSeven5').removeClass('yellowMarker');
                                $('#rowSeven6').removeClass('yellowMarker');
                                $('#rowSix1').removeClass('yellowMarker');
                                $('#rowSix2').removeClass('yellowMarker');
                                $('#rowSix3').removeClass('yellowMarker');
                                $('#rowSix4').removeClass('yellowMarker');
                                $('#rowSix5').removeClass('yellowMarker');
                                $('#rowSix6').removeClass('yellowMarker');
                                $('#rowFive1').removeClass('yellowMarker');
                                $('#rowFive2').removeClass('yellowMarker');
                                $('#rowFive3').removeClass('yellowMarker');
                                $('#rowFive4').removeClass('yellowMarker');
                                $('#rowFive5').removeClass('yellowMarker');
                                $('#rowFive6').removeClass('yellowMarker');
                                $('#rowFour1').removeClass('yellowMarker');
                                $('#rowFour2').removeClass('yellowMarker');
                                $('#rowFour3').removeClass('yellowMarker');
                                $('#rowFour4').removeClass('yellowMarker');
                                $('#rowFour5').removeClass('yellowMarker');
                                $('#rowFour6').removeClass('yellowMarker');
                                $('#rowThree1').removeClass('yellowMarker');
                                $('#rowThree2').removeClass('yellowMarker');
                                $('#rowThree3').removeClass('yellowMarker');
                                $('#rowThree4').removeClass('yellowMarker');
                                $('#rowThree5').removeClass('yellowMarker');
                                $('#rowThree6').removeClass('yellowMarker');
                                $('#rowTwo1').removeClass('yellowMarker');
                                $('#rowTwo2').removeClass('yellowMarker');
                                $('#rowTwo3').removeClass('yellowMarker');
                                $('#rowTwo4').removeClass('yellowMarker');
                                $('#rowTwo5').removeClass('yellowMarker');
                                $('#rowTwo6').removeClass('yellowMarker');
                                $('#rowOne1').removeClass('yellowMarker');
                                $('#rowOne2').removeClass('yellowMarker');
                                $('#rowOne3').removeClass('yellowMarker');
                                $('#rowOne4').removeClass('yellowMarker');
                                $('#rowOne5').removeClass('yellowMarker');
                                $('#rowOne6').removeClass('yellowMarker');
                            }
                      }
                }
            }    
        }, 300);
        
    } else if ($('#playerTwo').hasClass('turn')) { //yellow marker
        if (!$('#rowSeven3').hasClass('yellowMarker') && array.indexOf(15) == -1) {
            $('#rowSeven3').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(15);
            yellowArray.push(15);
        } else if (!$('#rowSix3').hasClass('yellowMarker') && array.indexOf(16) == -1) {
            $('#rowSix3').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(16);
            yellowArray.push(16);
        } else if (!$('#rowFive3').hasClass('yellowMarker') && array.indexOf(17) == -1) {
            $('#rowFive3').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(17);
            yellowArray.push(17);
        } else if (!$('#rowFour3').hasClass('yellowMarker') && array.indexOf(18) == -1) {
            $('#rowFour3').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(18);
            yellowArray.push(18);
        } else if (!$('#rowThree3').hasClass('yellowMarker') && array.indexOf(19) == -1) {
            $('#rowThree3').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(19);
            yellowArray.push(19);
        } else if (!$('#rowTwo3').hasClass('yellowMarker') && array.indexOf(20) == -1) {
            $('#rowTwo3').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(20);
            yellowArray.push(20);
        } else if (!$('#rowOne3').hasClass('yellowMarker') && array.indexOf(21) == -1) {
            $('#rowOne3').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(21);
            yellowArray.push(21);
        } 
        setInterval(function(){
            for (let i = 0; i < winningArrays.length; i++) {
                for (let k = 0; k < winningArrays[i].length; k++) {
                    for (let j = 0; j < redArray.length; j++) {
                        valueOne = winningArrays[i][0];
                        valueTwo = winningArrays[i][1];
                        valueThree = winningArrays[i][2];
                        valueFour = winningArrays[i][3];
                            if (yellowArray.indexOf(valueOne) !== -1 && yellowArray.indexOf(valueTwo) !== -1 && yellowArray.indexOf(valueThree) !== -1 && yellowArray.indexOf(valueFour) !== -1)  { //for player one
                                alert("Player two won!");
                                playerTwo.classList.remove('turn');
                                playerOne.classList.add('turn');
                                array = [];
                                win = [];
                                redArray = [];
                                yellowArray = [];
                                $('#rowSeven1').removeClass('redMarker');
                                $('#rowSeven2').removeClass('redMarker');
                                $('#rowSeven3').removeClass('redMarker');
                                $('#rowSeven4').removeClass('redMarker');
                                $('#rowSeven5').removeClass('redMarker');
                                $('#rowSeven6').removeClass('redMarker');
                                $('#rowSix1').removeClass('redMarker');
                                $('#rowSix2').removeClass('redMarker');
                                $('#rowSix3').removeClass('redMarker');
                                $('#rowSix4').removeClass('redMarker');
                                $('#rowSix5').removeClass('redMarker');
                                $('#rowSix6').removeClass('redMarker');
                                $('#rowFive1').removeClass('redMarker');
                                $('#rowFive2').removeClass('redMarker');
                                $('#rowFive3').removeClass('redMarker');
                                $('#rowFive4').removeClass('redMarker');
                                $('#rowFive5').removeClass('redMarker');
                                $('#rowFive6').removeClass('redMarker');
                                $('#rowFour1').removeClass('redMarker');
                                $('#rowFour2').removeClass('redMarker');
                                $('#rowFour3').removeClass('redMarker');
                                $('#rowFour4').removeClass('redMarker');
                                $('#rowFour5').removeClass('redMarker');
                                $('#rowFour6').removeClass('redMarker');
                                $('#rowThree1').removeClass('redMarker');
                                $('#rowThree2').removeClass('redMarker');
                                $('#rowThree3').removeClass('redMarker');
                                $('#rowThree4').removeClass('redMarker');
                                $('#rowThree5').removeClass('redMarker');
                                $('#rowThree6').removeClass('redMarker');
                                $('#rowTwo1').removeClass('redMarker');
                                $('#rowTwo2').removeClass('redMarker');
                                $('#rowTwo3').removeClass('redMarker');
                                $('#rowTwo4').removeClass('redMarker');
                                $('#rowTwo5').removeClass('redMarker');
                                $('#rowTwo6').removeClass('redMarker');
                                $('#rowOne1').removeClass('redMarker');
                                $('#rowOne2').removeClass('redMarker');
                                $('#rowOne3').removeClass('redMarker');
                                $('#rowOne4').removeClass('redMarker');
                                $('#rowOne5').removeClass('redMarker');
                                $('#rowOne6').removeClass('redMarker');
                                $('#rowSeven1').removeClass('yellowMarker');
                                $('#rowSeven2').removeClass('yellowMarker');
                                $('#rowSeven3').removeClass('yellowMarker');
                                $('#rowSeven4').removeClass('yellowMarker');
                                $('#rowSeven5').removeClass('yellowMarker');
                                $('#rowSeven6').removeClass('yellowMarker');
                                $('#rowSix1').removeClass('yellowMarker');
                                $('#rowSix2').removeClass('yellowMarker');
                                $('#rowSix3').removeClass('yellowMarker');
                                $('#rowSix4').removeClass('yellowMarker');
                                $('#rowSix5').removeClass('yellowMarker');
                                $('#rowSix6').removeClass('yellowMarker');
                                $('#rowFive1').removeClass('yellowMarker');
                                $('#rowFive2').removeClass('yellowMarker');
                                $('#rowFive3').removeClass('yellowMarker');
                                $('#rowFive4').removeClass('yellowMarker');
                                $('#rowFive5').removeClass('yellowMarker');
                                $('#rowFive6').removeClass('yellowMarker');
                                $('#rowFour1').removeClass('yellowMarker');
                                $('#rowFour2').removeClass('yellowMarker');
                                $('#rowFour3').removeClass('yellowMarker');
                                $('#rowFour4').removeClass('yellowMarker');
                                $('#rowFour5').removeClass('yellowMarker');
                                $('#rowFour6').removeClass('yellowMarker');
                                $('#rowThree1').removeClass('yellowMarker');
                                $('#rowThree2').removeClass('yellowMarker');
                                $('#rowThree3').removeClass('yellowMarker');
                                $('#rowThree4').removeClass('yellowMarker');
                                $('#rowThree5').removeClass('yellowMarker');
                                $('#rowThree6').removeClass('yellowMarker');
                                $('#rowTwo1').removeClass('yellowMarker');
                                $('#rowTwo2').removeClass('yellowMarker');
                                $('#rowTwo3').removeClass('yellowMarker');
                                $('#rowTwo4').removeClass('yellowMarker');
                                $('#rowTwo5').removeClass('yellowMarker');
                                $('#rowTwo6').removeClass('yellowMarker');
                                $('#rowOne1').removeClass('yellowMarker');
                                $('#rowOne2').removeClass('yellowMarker');
                                $('#rowOne3').removeClass('yellowMarker');
                                $('#rowOne4').removeClass('yellowMarker');
                                $('#rowOne5').removeClass('yellowMarker');
                                $('#rowOne6').removeClass('yellowMarker');
                            }
                      }
                }
            }    
        }, 300);
    }
});

$('#rowOne4').click(function(){ // for the fourth vertical row
    if ($('#playerOne').hasClass('turn')) { 
        if (!$('#rowSeven4').hasClass('redMarker') && array.indexOf(22) == -1) {
            $('#rowSeven4').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(22); 
            redArray.push(22);
        } else if (!$('#rowSix4').hasClass('redMarker') && array.indexOf(23) == -1) {
            $('#rowSix4').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(23);
            redArray.push(23);
        } else if (!$('#rowFive4').hasClass('redMarker') && array.indexOf(24) == -1) {
            $('#rowFive4').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(24);
            redArray.push(24);
        } else if (!$('#rowFour4').hasClass('redMarker') && array.indexOf(25) == -1) {
            $('#rowFour4').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(25);
            redArray.push(25);
        } else if (!$('#rowThree4').hasClass('redMarker') && array.indexOf(26) == -1) {
            $('#rowThree4').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(26);
            redArray.push(26);
        } else if (!$('#rowTwo4').hasClass('redMarker') && array.indexOf(27) == -1) {
            $('#rowTwo4').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(27);
            redArray.push(27);
        } else if (!$('#rowOne4').hasClass('redMarker') && array.indexOf(28) == -1) {
            $('#rowOne4').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(28);
            redArray.push(28);
        } 
        setInterval(function(){
            for (let i = 0; i < winningArrays.length; i++) {
                for (let k = 0; k < winningArrays[i].length; k++) {
                    for (let j = 0; j < redArray.length; j++) {
                        valueOne = winningArrays[i][0];
                        valueTwo = winningArrays[i][1];
                        valueThree = winningArrays[i][2];
                        valueFour = winningArrays[i][3];
                            if (redArray.indexOf(valueOne) !== -1 && redArray.indexOf(valueTwo) !== -1 && redArray.indexOf(valueThree) !== -1 && redArray.indexOf(valueFour) !== -1)  { //for player one
                                alert("Player one won!");
                                playerTwo.classList.remove('turn');
                                playerOne.classList.add('turn');
                                array = [];
                                win = [];
                                redArray = [];
                                yellowArray = [];
                                $('#rowSeven1').removeClass('redMarker');
                                $('#rowSeven2').removeClass('redMarker');
                                $('#rowSeven3').removeClass('redMarker');
                                $('#rowSeven4').removeClass('redMarker');
                                $('#rowSeven5').removeClass('redMarker');
                                $('#rowSeven6').removeClass('redMarker');
                                $('#rowSix1').removeClass('redMarker');
                                $('#rowSix2').removeClass('redMarker');
                                $('#rowSix3').removeClass('redMarker');
                                $('#rowSix4').removeClass('redMarker');
                                $('#rowSix5').removeClass('redMarker');
                                $('#rowSix6').removeClass('redMarker');
                                $('#rowFive1').removeClass('redMarker');
                                $('#rowFive2').removeClass('redMarker');
                                $('#rowFive3').removeClass('redMarker');
                                $('#rowFive4').removeClass('redMarker');
                                $('#rowFive5').removeClass('redMarker');
                                $('#rowFive6').removeClass('redMarker');
                                $('#rowFour1').removeClass('redMarker');
                                $('#rowFour2').removeClass('redMarker');
                                $('#rowFour3').removeClass('redMarker');
                                $('#rowFour4').removeClass('redMarker');
                                $('#rowFour5').removeClass('redMarker');
                                $('#rowFour6').removeClass('redMarker');
                                $('#rowThree1').removeClass('redMarker');
                                $('#rowThree2').removeClass('redMarker');
                                $('#rowThree3').removeClass('redMarker');
                                $('#rowThree4').removeClass('redMarker');
                                $('#rowThree5').removeClass('redMarker');
                                $('#rowThree6').removeClass('redMarker');
                                $('#rowTwo1').removeClass('redMarker');
                                $('#rowTwo2').removeClass('redMarker');
                                $('#rowTwo3').removeClass('redMarker');
                                $('#rowTwo4').removeClass('redMarker');
                                $('#rowTwo5').removeClass('redMarker');
                                $('#rowTwo6').removeClass('redMarker');
                                $('#rowOne1').removeClass('redMarker');
                                $('#rowOne2').removeClass('redMarker');
                                $('#rowOne3').removeClass('redMarker');
                                $('#rowOne4').removeClass('redMarker');
                                $('#rowOne5').removeClass('redMarker');
                                $('#rowOne6').removeClass('redMarker');
                                $('#rowSeven1').removeClass('yellowMarker');
                                $('#rowSeven2').removeClass('yellowMarker');
                                $('#rowSeven3').removeClass('yellowMarker');
                                $('#rowSeven4').removeClass('yellowMarker');
                                $('#rowSeven5').removeClass('yellowMarker');
                                $('#rowSeven6').removeClass('yellowMarker');
                                $('#rowSix1').removeClass('yellowMarker');
                                $('#rowSix2').removeClass('yellowMarker');
                                $('#rowSix3').removeClass('yellowMarker');
                                $('#rowSix4').removeClass('yellowMarker');
                                $('#rowSix5').removeClass('yellowMarker');
                                $('#rowSix6').removeClass('yellowMarker');
                                $('#rowFive1').removeClass('yellowMarker');
                                $('#rowFive2').removeClass('yellowMarker');
                                $('#rowFive3').removeClass('yellowMarker');
                                $('#rowFive4').removeClass('yellowMarker');
                                $('#rowFive5').removeClass('yellowMarker');
                                $('#rowFive6').removeClass('yellowMarker');
                                $('#rowFour1').removeClass('yellowMarker');
                                $('#rowFour2').removeClass('yellowMarker');
                                $('#rowFour3').removeClass('yellowMarker');
                                $('#rowFour4').removeClass('yellowMarker');
                                $('#rowFour5').removeClass('yellowMarker');
                                $('#rowFour6').removeClass('yellowMarker');
                                $('#rowThree1').removeClass('yellowMarker');
                                $('#rowThree2').removeClass('yellowMarker');
                                $('#rowThree3').removeClass('yellowMarker');
                                $('#rowThree4').removeClass('yellowMarker');
                                $('#rowThree5').removeClass('yellowMarker');
                                $('#rowThree6').removeClass('yellowMarker');
                                $('#rowTwo1').removeClass('yellowMarker');
                                $('#rowTwo2').removeClass('yellowMarker');
                                $('#rowTwo3').removeClass('yellowMarker');
                                $('#rowTwo4').removeClass('yellowMarker');
                                $('#rowTwo5').removeClass('yellowMarker');
                                $('#rowTwo6').removeClass('yellowMarker');
                                $('#rowOne1').removeClass('yellowMarker');
                                $('#rowOne2').removeClass('yellowMarker');
                                $('#rowOne3').removeClass('yellowMarker');
                                $('#rowOne4').removeClass('yellowMarker');
                                $('#rowOne5').removeClass('yellowMarker');
                                $('#rowOne6').removeClass('yellowMarker');
                            }
                      }
                }
            }    
        }, 300);
        
    } else if ($('#playerTwo').hasClass('turn')) { //yellow marker
        if (!$('#rowSeven4').hasClass('yellowMarker') && array.indexOf(22) == -1) {
            $('#rowSeven4').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(22);
            yellowArray.push(22);
        } else if (!$('#rowSix4').hasClass('yellowMarker') && array.indexOf(23) == -1) {
            $('#rowSix4').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(23);
            yellowArray.push(23);
        } else if (!$('#rowFive4').hasClass('yellowMarker') && array.indexOf(24) == -1) {
            $('#rowFive4').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(24);
            yellowArray.push(24);
        } else if (!$('#rowFour4').hasClass('yellowMarker') && array.indexOf(25) == -1) {
            $('#rowFour4').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(25);
            yellowArray.push(25);
        } else if (!$('#rowThree4').hasClass('yellowMarker') && array.indexOf(26) == -1) {
            $('#rowThree4').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(26);
            yellowArray.push(26);
        } else if (!$('#rowTwo4').hasClass('yellowMarker') && array.indexOf(27) == -1) {
            $('#rowTwo4').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(27);
            yellowArray.push(27);
        } else if (!$('#rowOne4').hasClass('yellowMarker') && array.indexOf(28) == -1) {
            $('#rowOne4').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(28);
            yellowArray.push(28);
        } 
        setInterval(function(){
            for (let i = 0; i < winningArrays.length; i++) {
                for (let k = 0; k < winningArrays[i].length; k++) {
                    for (let j = 0; j < redArray.length; j++) {
                        valueOne = winningArrays[i][0];
                        valueTwo = winningArrays[i][1];
                        valueThree = winningArrays[i][2];
                        valueFour = winningArrays[i][3];
                            if (yellowArray.indexOf(valueOne) !== -1 && yellowArray.indexOf(valueTwo) !== -1 && yellowArray.indexOf(valueThree) !== -1 && yellowArray.indexOf(valueFour) !== -1)  { //for player one
                                alert("Player two won!");
                                playerTwo.classList.remove('turn');
                                playerOne.classList.add('turn');
                                array = [];
                                win = [];
                                redArray = [];
                                yellowArray = [];
                                $('#rowSeven1').removeClass('redMarker');
                                $('#rowSeven2').removeClass('redMarker');
                                $('#rowSeven3').removeClass('redMarker');
                                $('#rowSeven4').removeClass('redMarker');
                                $('#rowSeven5').removeClass('redMarker');
                                $('#rowSeven6').removeClass('redMarker');
                                $('#rowSix1').removeClass('redMarker');
                                $('#rowSix2').removeClass('redMarker');
                                $('#rowSix3').removeClass('redMarker');
                                $('#rowSix4').removeClass('redMarker');
                                $('#rowSix5').removeClass('redMarker');
                                $('#rowSix6').removeClass('redMarker');
                                $('#rowFive1').removeClass('redMarker');
                                $('#rowFive2').removeClass('redMarker');
                                $('#rowFive3').removeClass('redMarker');
                                $('#rowFive4').removeClass('redMarker');
                                $('#rowFive5').removeClass('redMarker');
                                $('#rowFive6').removeClass('redMarker');
                                $('#rowFour1').removeClass('redMarker');
                                $('#rowFour2').removeClass('redMarker');
                                $('#rowFour3').removeClass('redMarker');
                                $('#rowFour4').removeClass('redMarker');
                                $('#rowFour5').removeClass('redMarker');
                                $('#rowFour6').removeClass('redMarker');
                                $('#rowThree1').removeClass('redMarker');
                                $('#rowThree2').removeClass('redMarker');
                                $('#rowThree3').removeClass('redMarker');
                                $('#rowThree4').removeClass('redMarker');
                                $('#rowThree5').removeClass('redMarker');
                                $('#rowThree6').removeClass('redMarker');
                                $('#rowTwo1').removeClass('redMarker');
                                $('#rowTwo2').removeClass('redMarker');
                                $('#rowTwo3').removeClass('redMarker');
                                $('#rowTwo4').removeClass('redMarker');
                                $('#rowTwo5').removeClass('redMarker');
                                $('#rowTwo6').removeClass('redMarker');
                                $('#rowOne1').removeClass('redMarker');
                                $('#rowOne2').removeClass('redMarker');
                                $('#rowOne3').removeClass('redMarker');
                                $('#rowOne4').removeClass('redMarker');
                                $('#rowOne5').removeClass('redMarker');
                                $('#rowOne6').removeClass('redMarker');
                                $('#rowSeven1').removeClass('yellowMarker');
                                $('#rowSeven2').removeClass('yellowMarker');
                                $('#rowSeven3').removeClass('yellowMarker');
                                $('#rowSeven4').removeClass('yellowMarker');
                                $('#rowSeven5').removeClass('yellowMarker');
                                $('#rowSeven6').removeClass('yellowMarker');
                                $('#rowSix1').removeClass('yellowMarker');
                                $('#rowSix2').removeClass('yellowMarker');
                                $('#rowSix3').removeClass('yellowMarker');
                                $('#rowSix4').removeClass('yellowMarker');
                                $('#rowSix5').removeClass('yellowMarker');
                                $('#rowSix6').removeClass('yellowMarker');
                                $('#rowFive1').removeClass('yellowMarker');
                                $('#rowFive2').removeClass('yellowMarker');
                                $('#rowFive3').removeClass('yellowMarker');
                                $('#rowFive4').removeClass('yellowMarker');
                                $('#rowFive5').removeClass('yellowMarker');
                                $('#rowFive6').removeClass('yellowMarker');
                                $('#rowFour1').removeClass('yellowMarker');
                                $('#rowFour2').removeClass('yellowMarker');
                                $('#rowFour3').removeClass('yellowMarker');
                                $('#rowFour4').removeClass('yellowMarker');
                                $('#rowFour5').removeClass('yellowMarker');
                                $('#rowFour6').removeClass('yellowMarker');
                                $('#rowThree1').removeClass('yellowMarker');
                                $('#rowThree2').removeClass('yellowMarker');
                                $('#rowThree3').removeClass('yellowMarker');
                                $('#rowThree4').removeClass('yellowMarker');
                                $('#rowThree5').removeClass('yellowMarker');
                                $('#rowThree6').removeClass('yellowMarker');
                                $('#rowTwo1').removeClass('yellowMarker');
                                $('#rowTwo2').removeClass('yellowMarker');
                                $('#rowTwo3').removeClass('yellowMarker');
                                $('#rowTwo4').removeClass('yellowMarker');
                                $('#rowTwo5').removeClass('yellowMarker');
                                $('#rowTwo6').removeClass('yellowMarker');
                                $('#rowOne1').removeClass('yellowMarker');
                                $('#rowOne2').removeClass('yellowMarker');
                                $('#rowOne3').removeClass('yellowMarker');
                                $('#rowOne4').removeClass('yellowMarker');
                                $('#rowOne5').removeClass('yellowMarker');
                                $('#rowOne6').removeClass('yellowMarker');
                            }
                      }
                }
            }    
        }, 300);
    }
});

$('#rowOne5').click(function(){ // for the fourth vertical row
    if ($('#playerOne').hasClass('turn')) { 
        if (!$('#rowSeven5').hasClass('redMarker') && array.indexOf(29) == -1) {
            $('#rowSeven5').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(29); 
            redArray.push(29);
        } else if (!$('#rowSix5').hasClass('redMarker') && array.indexOf(30) == -1) {
            $('#rowSix5').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(30);
            redArray.push(30);
        } else if (!$('#rowFive5').hasClass('redMarker') && array.indexOf(31) == -1) {
            $('#rowFive5').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(31);
            redArray.push(31);
        } else if (!$('#rowFour5').hasClass('redMarker') && array.indexOf(32) == -1) {
            $('#rowFour5').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(32);
            redArray.push(32);
        } else if (!$('#rowThree5').hasClass('redMarker') && array.indexOf(33) == -1) {
            $('#rowThree5').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(33);
            redArray.push(33);
        } else if (!$('#rowTwo5').hasClass('redMarker') && array.indexOf(34) == -1) {
            $('#rowTwo5').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(34);
            redArray.push(34);
        } else if (!$('#rowOne5').hasClass('redMarker') && array.indexOf(35) == -1) {
            $('#rowOne5').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(35);
            redArray.push(35);
        } 
        setInterval(function(){
            for (let i = 0; i < winningArrays.length; i++) {
                for (let k = 0; k < winningArrays[i].length; k++) {
                    for (let j = 0; j < redArray.length; j++) {
                        valueOne = winningArrays[i][0];
                        valueTwo = winningArrays[i][1];
                        valueThree = winningArrays[i][2];
                        valueFour = winningArrays[i][3];
                            if (redArray.indexOf(valueOne) !== -1 && redArray.indexOf(valueTwo) !== -1 && redArray.indexOf(valueThree) !== -1 && redArray.indexOf(valueFour) !== -1)  { //for player one
                                alert("Player one won!");
                                playerTwo.classList.remove('turn');
                                playerOne.classList.add('turn');
                                array = [];
                                win = [];
                                redArray = [];
                                yellowArray = [];
                                $('#rowSeven1').removeClass('redMarker');
                                $('#rowSeven2').removeClass('redMarker');
                                $('#rowSeven3').removeClass('redMarker');
                                $('#rowSeven4').removeClass('redMarker');
                                $('#rowSeven5').removeClass('redMarker');
                                $('#rowSeven6').removeClass('redMarker');
                                $('#rowSix1').removeClass('redMarker');
                                $('#rowSix2').removeClass('redMarker');
                                $('#rowSix3').removeClass('redMarker');
                                $('#rowSix4').removeClass('redMarker');
                                $('#rowSix5').removeClass('redMarker');
                                $('#rowSix6').removeClass('redMarker');
                                $('#rowFive1').removeClass('redMarker');
                                $('#rowFive2').removeClass('redMarker');
                                $('#rowFive3').removeClass('redMarker');
                                $('#rowFive4').removeClass('redMarker');
                                $('#rowFive5').removeClass('redMarker');
                                $('#rowFive6').removeClass('redMarker');
                                $('#rowFour1').removeClass('redMarker');
                                $('#rowFour2').removeClass('redMarker');
                                $('#rowFour3').removeClass('redMarker');
                                $('#rowFour4').removeClass('redMarker');
                                $('#rowFour5').removeClass('redMarker');
                                $('#rowFour6').removeClass('redMarker');
                                $('#rowThree1').removeClass('redMarker');
                                $('#rowThree2').removeClass('redMarker');
                                $('#rowThree3').removeClass('redMarker');
                                $('#rowThree4').removeClass('redMarker');
                                $('#rowThree5').removeClass('redMarker');
                                $('#rowThree6').removeClass('redMarker');
                                $('#rowTwo1').removeClass('redMarker');
                                $('#rowTwo2').removeClass('redMarker');
                                $('#rowTwo3').removeClass('redMarker');
                                $('#rowTwo4').removeClass('redMarker');
                                $('#rowTwo5').removeClass('redMarker');
                                $('#rowTwo6').removeClass('redMarker');
                                $('#rowOne1').removeClass('redMarker');
                                $('#rowOne2').removeClass('redMarker');
                                $('#rowOne3').removeClass('redMarker');
                                $('#rowOne4').removeClass('redMarker');
                                $('#rowOne5').removeClass('redMarker');
                                $('#rowOne6').removeClass('redMarker');
                                $('#rowSeven1').removeClass('yellowMarker');
                                $('#rowSeven2').removeClass('yellowMarker');
                                $('#rowSeven3').removeClass('yellowMarker');
                                $('#rowSeven4').removeClass('yellowMarker');
                                $('#rowSeven5').removeClass('yellowMarker');
                                $('#rowSeven6').removeClass('yellowMarker');
                                $('#rowSix1').removeClass('yellowMarker');
                                $('#rowSix2').removeClass('yellowMarker');
                                $('#rowSix3').removeClass('yellowMarker');
                                $('#rowSix4').removeClass('yellowMarker');
                                $('#rowSix5').removeClass('yellowMarker');
                                $('#rowSix6').removeClass('yellowMarker');
                                $('#rowFive1').removeClass('yellowMarker');
                                $('#rowFive2').removeClass('yellowMarker');
                                $('#rowFive3').removeClass('yellowMarker');
                                $('#rowFive4').removeClass('yellowMarker');
                                $('#rowFive5').removeClass('yellowMarker');
                                $('#rowFive6').removeClass('yellowMarker');
                                $('#rowFour1').removeClass('yellowMarker');
                                $('#rowFour2').removeClass('yellowMarker');
                                $('#rowFour3').removeClass('yellowMarker');
                                $('#rowFour4').removeClass('yellowMarker');
                                $('#rowFour5').removeClass('yellowMarker');
                                $('#rowFour6').removeClass('yellowMarker');
                                $('#rowThree1').removeClass('yellowMarker');
                                $('#rowThree2').removeClass('yellowMarker');
                                $('#rowThree3').removeClass('yellowMarker');
                                $('#rowThree4').removeClass('yellowMarker');
                                $('#rowThree5').removeClass('yellowMarker');
                                $('#rowThree6').removeClass('yellowMarker');
                                $('#rowTwo1').removeClass('yellowMarker');
                                $('#rowTwo2').removeClass('yellowMarker');
                                $('#rowTwo3').removeClass('yellowMarker');
                                $('#rowTwo4').removeClass('yellowMarker');
                                $('#rowTwo5').removeClass('yellowMarker');
                                $('#rowTwo6').removeClass('yellowMarker');
                                $('#rowOne1').removeClass('yellowMarker');
                                $('#rowOne2').removeClass('yellowMarker');
                                $('#rowOne3').removeClass('yellowMarker');
                                $('#rowOne4').removeClass('yellowMarker');
                                $('#rowOne5').removeClass('yellowMarker');
                                $('#rowOne6').removeClass('yellowMarker');
                            }
                      }
                }
            }    
        }, 300);
        
    } else if ($('#playerTwo').hasClass('turn')) { //yellow marker
        if (!$('#rowSeven5').hasClass('yellowMarker') && array.indexOf(29) == -1) {
            $('#rowSeven5').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(29);
            yellowArray.push(29);
        } else if (!$('#rowSix5').hasClass('yellowMarker') && array.indexOf(30) == -1) {
            $('#rowSix5').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(30);
            yellowArray.push(30);
        } else if (!$('#rowFive5').hasClass('yellowMarker') && array.indexOf(31) == -1) {
            $('#rowFive5').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(31);
            yellowArray.push(31);
        } else if (!$('#rowFour5').hasClass('yellowMarker') && array.indexOf(32) == -1) {
            $('#rowFour5').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(32);
            yellowArray.push(32);
        } else if (!$('#rowThree5').hasClass('yellowMarker') && array.indexOf(33) == -1) {
            $('#rowThree5').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(33);
            yellowArray.push(33);
        } else if (!$('#rowTwo5').hasClass('yellowMarker') && array.indexOf(34) == -1) {
            $('#rowTwo5').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(34);
            yellowArray.push(34);
        } else if (!$('#rowOne5').hasClass('yellowMarker') && array.indexOf(35) == -1) {
            $('#rowOne5').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(35);
            yellowArray.push(35);
        } 
        setInterval(function(){
            for (let i = 0; i < winningArrays.length; i++) {
                for (let k = 0; k < winningArrays[i].length; k++) {
                    for (let j = 0; j < redArray.length; j++) {
                        valueOne = winningArrays[i][0];
                        valueTwo = winningArrays[i][1];
                        valueThree = winningArrays[i][2];
                        valueFour = winningArrays[i][3];
                            if (yellowArray.indexOf(valueOne) !== -1 && yellowArray.indexOf(valueTwo) !== -1 && yellowArray.indexOf(valueThree) !== -1 && yellowArray.indexOf(valueFour) !== -1)  { //for player one
                                alert("Player two won!");
                                playerTwo.classList.remove('turn');
                                playerOne.classList.add('turn');
                                array = [];
                                win = [];
                                redArray = [];
                                yellowArray = [];
                                $('#rowSeven1').removeClass('redMarker');
                                $('#rowSeven2').removeClass('redMarker');
                                $('#rowSeven3').removeClass('redMarker');
                                $('#rowSeven4').removeClass('redMarker');
                                $('#rowSeven5').removeClass('redMarker');
                                $('#rowSeven6').removeClass('redMarker');
                                $('#rowSix1').removeClass('redMarker');
                                $('#rowSix2').removeClass('redMarker');
                                $('#rowSix3').removeClass('redMarker');
                                $('#rowSix4').removeClass('redMarker');
                                $('#rowSix5').removeClass('redMarker');
                                $('#rowSix6').removeClass('redMarker');
                                $('#rowFive1').removeClass('redMarker');
                                $('#rowFive2').removeClass('redMarker');
                                $('#rowFive3').removeClass('redMarker');
                                $('#rowFive4').removeClass('redMarker');
                                $('#rowFive5').removeClass('redMarker');
                                $('#rowFive6').removeClass('redMarker');
                                $('#rowFour1').removeClass('redMarker');
                                $('#rowFour2').removeClass('redMarker');
                                $('#rowFour3').removeClass('redMarker');
                                $('#rowFour4').removeClass('redMarker');
                                $('#rowFour5').removeClass('redMarker');
                                $('#rowFour6').removeClass('redMarker');
                                $('#rowThree1').removeClass('redMarker');
                                $('#rowThree2').removeClass('redMarker');
                                $('#rowThree3').removeClass('redMarker');
                                $('#rowThree4').removeClass('redMarker');
                                $('#rowThree5').removeClass('redMarker');
                                $('#rowThree6').removeClass('redMarker');
                                $('#rowTwo1').removeClass('redMarker');
                                $('#rowTwo2').removeClass('redMarker');
                                $('#rowTwo3').removeClass('redMarker');
                                $('#rowTwo4').removeClass('redMarker');
                                $('#rowTwo5').removeClass('redMarker');
                                $('#rowTwo6').removeClass('redMarker');
                                $('#rowOne1').removeClass('redMarker');
                                $('#rowOne2').removeClass('redMarker');
                                $('#rowOne3').removeClass('redMarker');
                                $('#rowOne4').removeClass('redMarker');
                                $('#rowOne5').removeClass('redMarker');
                                $('#rowOne6').removeClass('redMarker');
                                $('#rowSeven1').removeClass('yellowMarker');
                                $('#rowSeven2').removeClass('yellowMarker');
                                $('#rowSeven3').removeClass('yellowMarker');
                                $('#rowSeven4').removeClass('yellowMarker');
                                $('#rowSeven5').removeClass('yellowMarker');
                                $('#rowSeven6').removeClass('yellowMarker');
                                $('#rowSix1').removeClass('yellowMarker');
                                $('#rowSix2').removeClass('yellowMarker');
                                $('#rowSix3').removeClass('yellowMarker');
                                $('#rowSix4').removeClass('yellowMarker');
                                $('#rowSix5').removeClass('yellowMarker');
                                $('#rowSix6').removeClass('yellowMarker');
                                $('#rowFive1').removeClass('yellowMarker');
                                $('#rowFive2').removeClass('yellowMarker');
                                $('#rowFive3').removeClass('yellowMarker');
                                $('#rowFive4').removeClass('yellowMarker');
                                $('#rowFive5').removeClass('yellowMarker');
                                $('#rowFive6').removeClass('yellowMarker');
                                $('#rowFour1').removeClass('yellowMarker');
                                $('#rowFour2').removeClass('yellowMarker');
                                $('#rowFour3').removeClass('yellowMarker');
                                $('#rowFour4').removeClass('yellowMarker');
                                $('#rowFour5').removeClass('yellowMarker');
                                $('#rowFour6').removeClass('yellowMarker');
                                $('#rowThree1').removeClass('yellowMarker');
                                $('#rowThree2').removeClass('yellowMarker');
                                $('#rowThree3').removeClass('yellowMarker');
                                $('#rowThree4').removeClass('yellowMarker');
                                $('#rowThree5').removeClass('yellowMarker');
                                $('#rowThree6').removeClass('yellowMarker');
                                $('#rowTwo1').removeClass('yellowMarker');
                                $('#rowTwo2').removeClass('yellowMarker');
                                $('#rowTwo3').removeClass('yellowMarker');
                                $('#rowTwo4').removeClass('yellowMarker');
                                $('#rowTwo5').removeClass('yellowMarker');
                                $('#rowTwo6').removeClass('yellowMarker');
                                $('#rowOne1').removeClass('yellowMarker');
                                $('#rowOne2').removeClass('yellowMarker');
                                $('#rowOne3').removeClass('yellowMarker');
                                $('#rowOne4').removeClass('yellowMarker');
                                $('#rowOne5').removeClass('yellowMarker');
                                $('#rowOne6').removeClass('yellowMarker');
                            }
                      }
                }
            }    
        }, 300);
    }
});

$('#rowOne6').click(function(){ // for the fourth vertical row
    if ($('#playerOne').hasClass('turn')) { 
        if (!$('#rowSeven6').hasClass('redMarker') && array.indexOf(36) == -1) {
            $('#rowSeven6').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(36); 
            redArray.push(36);
        } else if (!$('#rowSix6').hasClass('redMarker') && array.indexOf(37) == -1) {
            $('#rowSix6').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(37);
            redArray.push(37);
        } else if (!$('#rowFive6').hasClass('redMarker') && array.indexOf(38) == -1) {
            $('#rowFive6').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(38);
            redArray.push(38);
        } else if (!$('#rowFour6').hasClass('redMarker') && array.indexOf(39) == -1) {
            $('#rowFour6').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(39);
            redArray.push(39);
        } else if (!$('#rowThree6').hasClass('redMarker') && array.indexOf(40) == -1) {
            $('#rowThree6').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(40);
            redArray.push(40);
        } else if (!$('#rowTwo6').hasClass('redMarker') && array.indexOf(41) == -1) {
            $('#rowTwo6').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(41);
            redArray.push(41);
        } else if (!$('#rowOne6').hasClass('redMarker') && array.indexOf(42) == -1) {
            $('#rowOne6').addClass('redMarker');
            playerOne.classList.remove('turn');
            playerTwo.classList.add('turn');
            array.push(42);
            redArray.push(42);
        } 
        setInterval(function(){
            for (let i = 0; i < winningArrays.length; i++) {
                for (let k = 0; k < winningArrays[i].length; k++) {
                    for (let j = 0; j < redArray.length; j++) {
                        valueOne = winningArrays[i][0];
                        valueTwo = winningArrays[i][1];
                        valueThree = winningArrays[i][2];
                        valueFour = winningArrays[i][3];
                            if (redArray.indexOf(valueOne) !== -1 && redArray.indexOf(valueTwo) !== -1 && redArray.indexOf(valueThree) !== -1 && redArray.indexOf(valueFour) !== -1)  { //for player one
                                alert("Player one won!");
                                playerTwo.classList.remove('turn');
                                playerOne.classList.add('turn');
                                array = [];
                                win = [];
                                redArray = [];
                                yellowArray = [];
                                $('#rowSeven1').removeClass('redMarker');
                                $('#rowSeven2').removeClass('redMarker');
                                $('#rowSeven3').removeClass('redMarker');
                                $('#rowSeven4').removeClass('redMarker');
                                $('#rowSeven5').removeClass('redMarker');
                                $('#rowSeven6').removeClass('redMarker');
                                $('#rowSix1').removeClass('redMarker');
                                $('#rowSix2').removeClass('redMarker');
                                $('#rowSix3').removeClass('redMarker');
                                $('#rowSix4').removeClass('redMarker');
                                $('#rowSix5').removeClass('redMarker');
                                $('#rowSix6').removeClass('redMarker');
                                $('#rowFive1').removeClass('redMarker');
                                $('#rowFive2').removeClass('redMarker');
                                $('#rowFive3').removeClass('redMarker');
                                $('#rowFive4').removeClass('redMarker');
                                $('#rowFive5').removeClass('redMarker');
                                $('#rowFive6').removeClass('redMarker');
                                $('#rowFour1').removeClass('redMarker');
                                $('#rowFour2').removeClass('redMarker');
                                $('#rowFour3').removeClass('redMarker');
                                $('#rowFour4').removeClass('redMarker');
                                $('#rowFour5').removeClass('redMarker');
                                $('#rowFour6').removeClass('redMarker');
                                $('#rowThree1').removeClass('redMarker');
                                $('#rowThree2').removeClass('redMarker');
                                $('#rowThree3').removeClass('redMarker');
                                $('#rowThree4').removeClass('redMarker');
                                $('#rowThree5').removeClass('redMarker');
                                $('#rowThree6').removeClass('redMarker');
                                $('#rowTwo1').removeClass('redMarker');
                                $('#rowTwo2').removeClass('redMarker');
                                $('#rowTwo3').removeClass('redMarker');
                                $('#rowTwo4').removeClass('redMarker');
                                $('#rowTwo5').removeClass('redMarker');
                                $('#rowTwo6').removeClass('redMarker');
                                $('#rowOne1').removeClass('redMarker');
                                $('#rowOne2').removeClass('redMarker');
                                $('#rowOne3').removeClass('redMarker');
                                $('#rowOne4').removeClass('redMarker');
                                $('#rowOne5').removeClass('redMarker');
                                $('#rowOne6').removeClass('redMarker');
                                $('#rowSeven1').removeClass('yellowMarker');
                                $('#rowSeven2').removeClass('yellowMarker');
                                $('#rowSeven3').removeClass('yellowMarker');
                                $('#rowSeven4').removeClass('yellowMarker');
                                $('#rowSeven5').removeClass('yellowMarker');
                                $('#rowSeven6').removeClass('yellowMarker');
                                $('#rowSix1').removeClass('yellowMarker');
                                $('#rowSix2').removeClass('yellowMarker');
                                $('#rowSix3').removeClass('yellowMarker');
                                $('#rowSix4').removeClass('yellowMarker');
                                $('#rowSix5').removeClass('yellowMarker');
                                $('#rowSix6').removeClass('yellowMarker');
                                $('#rowFive1').removeClass('yellowMarker');
                                $('#rowFive2').removeClass('yellowMarker');
                                $('#rowFive3').removeClass('yellowMarker');
                                $('#rowFive4').removeClass('yellowMarker');
                                $('#rowFive5').removeClass('yellowMarker');
                                $('#rowFive6').removeClass('yellowMarker');
                                $('#rowFour1').removeClass('yellowMarker');
                                $('#rowFour2').removeClass('yellowMarker');
                                $('#rowFour3').removeClass('yellowMarker');
                                $('#rowFour4').removeClass('yellowMarker');
                                $('#rowFour5').removeClass('yellowMarker');
                                $('#rowFour6').removeClass('yellowMarker');
                                $('#rowThree1').removeClass('yellowMarker');
                                $('#rowThree2').removeClass('yellowMarker');
                                $('#rowThree3').removeClass('yellowMarker');
                                $('#rowThree4').removeClass('yellowMarker');
                                $('#rowThree5').removeClass('yellowMarker');
                                $('#rowThree6').removeClass('yellowMarker');
                                $('#rowTwo1').removeClass('yellowMarker');
                                $('#rowTwo2').removeClass('yellowMarker');
                                $('#rowTwo3').removeClass('yellowMarker');
                                $('#rowTwo4').removeClass('yellowMarker');
                                $('#rowTwo5').removeClass('yellowMarker');
                                $('#rowTwo6').removeClass('yellowMarker');
                                $('#rowOne1').removeClass('yellowMarker');
                                $('#rowOne2').removeClass('yellowMarker');
                                $('#rowOne3').removeClass('yellowMarker');
                                $('#rowOne4').removeClass('yellowMarker');
                                $('#rowOne5').removeClass('yellowMarker');
                                $('#rowOne6').removeClass('yellowMarker');
                            }
                      }
                }
            }    
        }, 300);
        
    } else if ($('#playerTwo').hasClass('turn')) { //yellow marker
        if (!$('#rowSeven6').hasClass('yellowMarker') && array.indexOf(36) == -1) {
            $('#rowSeven6').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(36);
            yellowArray.push(36);
        } else if (!$('#rowSix6').hasClass('yellowMarker') && array.indexOf(37) == -1) {
            $('#rowSix6').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(37);
            yellowArray.push(37);
        } else if (!$('#rowFive6').hasClass('yellowMarker') && array.indexOf(38) == -1) {
            $('#rowFive6').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(38);
            yellowArray.push(38);
        } else if (!$('#rowFour6').hasClass('yellowMarker') && array.indexOf(39) == -1) {
            $('#rowFour6').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(39);
            yellowArray.push(39);
        } else if (!$('#rowThree6').hasClass('yellowMarker') && array.indexOf(40) == -1) {
            $('#rowThree6').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(40);
            yellowArray.push(40);
        } else if (!$('#rowTwo6').hasClass('yellowMarker') && array.indexOf(41) == -1) {
            $('#rowTwo6').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(41);
            yellowArray.push(41);
        } else if (!$('#rowOne6').hasClass('yellowMarker') && array.indexOf(42) == -1) {
            $('#rowOne6').addClass('yellowMarker');
            playerTwo.classList.remove('turn');
            playerOne.classList.add('turn');
            array.push(42);
            yellowArray.push(42);
        } 
        setInterval(function(){
            for (let i = 0; i < winningArrays.length; i++) {
                for (let k = 0; k < winningArrays[i].length; k++) {
                    for (let j = 0; j < redArray.length; j++) {
                        valueOne = winningArrays[i][0];
                        valueTwo = winningArrays[i][1];
                        valueThree = winningArrays[i][2];
                        valueFour = winningArrays[i][3];
                            if (yellowArray.indexOf(valueOne) !== -1 && yellowArray.indexOf(valueTwo) !== -1 && yellowArray.indexOf(valueThree) !== -1 && yellowArray.indexOf(valueFour) !== -1)  { //for player one
                                alert("Player two won!");
                                playerTwo.classList.remove('turn');
                                playerOne.classList.add('turn');
                                array = [];
                                win = [];
                                redArray = [];
                                yellowArray = [];
                                $('#rowSeven1').removeClass('redMarker');
                                $('#rowSeven2').removeClass('redMarker');
                                $('#rowSeven3').removeClass('redMarker');
                                $('#rowSeven4').removeClass('redMarker');
                                $('#rowSeven5').removeClass('redMarker');
                                $('#rowSeven6').removeClass('redMarker');
                                $('#rowSix1').removeClass('redMarker');
                                $('#rowSix2').removeClass('redMarker');
                                $('#rowSix3').removeClass('redMarker');
                                $('#rowSix4').removeClass('redMarker');
                                $('#rowSix5').removeClass('redMarker');
                                $('#rowSix6').removeClass('redMarker');
                                $('#rowFive1').removeClass('redMarker');
                                $('#rowFive2').removeClass('redMarker');
                                $('#rowFive3').removeClass('redMarker');
                                $('#rowFive4').removeClass('redMarker');
                                $('#rowFive5').removeClass('redMarker');
                                $('#rowFive6').removeClass('redMarker');
                                $('#rowFour1').removeClass('redMarker');
                                $('#rowFour2').removeClass('redMarker');
                                $('#rowFour3').removeClass('redMarker');
                                $('#rowFour4').removeClass('redMarker');
                                $('#rowFour5').removeClass('redMarker');
                                $('#rowFour6').removeClass('redMarker');
                                $('#rowThree1').removeClass('redMarker');
                                $('#rowThree2').removeClass('redMarker');
                                $('#rowThree3').removeClass('redMarker');
                                $('#rowThree4').removeClass('redMarker');
                                $('#rowThree5').removeClass('redMarker');
                                $('#rowThree6').removeClass('redMarker');
                                $('#rowTwo1').removeClass('redMarker');
                                $('#rowTwo2').removeClass('redMarker');
                                $('#rowTwo3').removeClass('redMarker');
                                $('#rowTwo4').removeClass('redMarker');
                                $('#rowTwo5').removeClass('redMarker');
                                $('#rowTwo6').removeClass('redMarker');
                                $('#rowOne1').removeClass('redMarker');
                                $('#rowOne2').removeClass('redMarker');
                                $('#rowOne3').removeClass('redMarker');
                                $('#rowOne4').removeClass('redMarker');
                                $('#rowOne5').removeClass('redMarker');
                                $('#rowOne6').removeClass('redMarker');
                                $('#rowSeven1').removeClass('yellowMarker');
                                $('#rowSeven2').removeClass('yellowMarker');
                                $('#rowSeven3').removeClass('yellowMarker');
                                $('#rowSeven4').removeClass('yellowMarker');
                                $('#rowSeven5').removeClass('yellowMarker');
                                $('#rowSeven6').removeClass('yellowMarker');
                                $('#rowSix1').removeClass('yellowMarker');
                                $('#rowSix2').removeClass('yellowMarker');
                                $('#rowSix3').removeClass('yellowMarker');
                                $('#rowSix4').removeClass('yellowMarker');
                                $('#rowSix5').removeClass('yellowMarker');
                                $('#rowSix6').removeClass('yellowMarker');
                                $('#rowFive1').removeClass('yellowMarker');
                                $('#rowFive2').removeClass('yellowMarker');
                                $('#rowFive3').removeClass('yellowMarker');
                                $('#rowFive4').removeClass('yellowMarker');
                                $('#rowFive5').removeClass('yellowMarker');
                                $('#rowFive6').removeClass('yellowMarker');
                                $('#rowFour1').removeClass('yellowMarker');
                                $('#rowFour2').removeClass('yellowMarker');
                                $('#rowFour3').removeClass('yellowMarker');
                                $('#rowFour4').removeClass('yellowMarker');
                                $('#rowFour5').removeClass('yellowMarker');
                                $('#rowFour6').removeClass('yellowMarker');
                                $('#rowThree1').removeClass('yellowMarker');
                                $('#rowThree2').removeClass('yellowMarker');
                                $('#rowThree3').removeClass('yellowMarker');
                                $('#rowThree4').removeClass('yellowMarker');
                                $('#rowThree5').removeClass('yellowMarker');
                                $('#rowThree6').removeClass('yellowMarker');
                                $('#rowTwo1').removeClass('yellowMarker');
                                $('#rowTwo2').removeClass('yellowMarker');
                                $('#rowTwo3').removeClass('yellowMarker');
                                $('#rowTwo4').removeClass('yellowMarker');
                                $('#rowTwo5').removeClass('yellowMarker');
                                $('#rowTwo6').removeClass('yellowMarker');
                                $('#rowOne1').removeClass('yellowMarker');
                                $('#rowOne2').removeClass('yellowMarker');
                                $('#rowOne3').removeClass('yellowMarker');
                                $('#rowOne4').removeClass('yellowMarker');
                                $('#rowOne5').removeClass('yellowMarker');
                                $('#rowOne6').removeClass('yellowMarker');
                            }
                      }
                }
            }    
        }, 300);
    }
});

$('#reset').click(function() {
    playerTwo.classList.remove('turn');
    playerOne.classList.add('turn');
    array = [];
    win = [];
    redArray = [];
    yellowArray = [];
    $('#rowSeven1').removeClass('redMarker');
    $('#rowSeven2').removeClass('redMarker');
    $('#rowSeven3').removeClass('redMarker');
    $('#rowSeven4').removeClass('redMarker');
    $('#rowSeven5').removeClass('redMarker');
    $('#rowSeven6').removeClass('redMarker');
    $('#rowSix1').removeClass('redMarker');
    $('#rowSix2').removeClass('redMarker');
    $('#rowSix3').removeClass('redMarker');
    $('#rowSix4').removeClass('redMarker');
    $('#rowSix5').removeClass('redMarker');
    $('#rowSix6').removeClass('redMarker');
    $('#rowFive1').removeClass('redMarker');
    $('#rowFive2').removeClass('redMarker');
    $('#rowFive3').removeClass('redMarker');
    $('#rowFive4').removeClass('redMarker');
    $('#rowFive5').removeClass('redMarker');
    $('#rowFive6').removeClass('redMarker');
    $('#rowFour1').removeClass('redMarker');
    $('#rowFour2').removeClass('redMarker');
    $('#rowFour3').removeClass('redMarker');
    $('#rowFour4').removeClass('redMarker');
    $('#rowFour5').removeClass('redMarker');
    $('#rowFour6').removeClass('redMarker');
    $('#rowThree1').removeClass('redMarker');
    $('#rowThree2').removeClass('redMarker');
    $('#rowThree3').removeClass('redMarker');
    $('#rowThree4').removeClass('redMarker');
    $('#rowThree5').removeClass('redMarker');
    $('#rowThree6').removeClass('redMarker');
    $('#rowTwo1').removeClass('redMarker');
    $('#rowTwo2').removeClass('redMarker');
    $('#rowTwo3').removeClass('redMarker');
    $('#rowTwo4').removeClass('redMarker');
    $('#rowTwo5').removeClass('redMarker');
    $('#rowTwo6').removeClass('redMarker');
    $('#rowOne1').removeClass('redMarker');
    $('#rowOne2').removeClass('redMarker');
    $('#rowOne3').removeClass('redMarker');
    $('#rowOne4').removeClass('redMarker');
    $('#rowOne5').removeClass('redMarker');
    $('#rowOne6').removeClass('redMarker');
    $('#rowSeven1').removeClass('yellowMarker');
    $('#rowSeven2').removeClass('yellowMarker');
    $('#rowSeven3').removeClass('yellowMarker');
    $('#rowSeven4').removeClass('yellowMarker');
    $('#rowSeven5').removeClass('yellowMarker');
    $('#rowSeven6').removeClass('yellowMarker');
    $('#rowSix1').removeClass('yellowMarker');
    $('#rowSix2').removeClass('yellowMarker');
    $('#rowSix3').removeClass('yellowMarker');
    $('#rowSix4').removeClass('yellowMarker');
    $('#rowSix5').removeClass('yellowMarker');
    $('#rowSix6').removeClass('yellowMarker');
    $('#rowFive1').removeClass('yellowMarker');
    $('#rowFive2').removeClass('yellowMarker');
    $('#rowFive3').removeClass('yellowMarker');
    $('#rowFive4').removeClass('yellowMarker');
    $('#rowFive5').removeClass('yellowMarker');
    $('#rowFive6').removeClass('yellowMarker');
    $('#rowFour1').removeClass('yellowMarker');
    $('#rowFour2').removeClass('yellowMarker');
    $('#rowFour3').removeClass('yellowMarker');
    $('#rowFour4').removeClass('yellowMarker');
    $('#rowFour5').removeClass('yellowMarker');
    $('#rowFour6').removeClass('yellowMarker');
    $('#rowThree1').removeClass('yellowMarker');
    $('#rowThree2').removeClass('yellowMarker');
    $('#rowThree3').removeClass('yellowMarker');
    $('#rowThree4').removeClass('yellowMarker');
    $('#rowThree5').removeClass('yellowMarker');
    $('#rowThree6').removeClass('yellowMarker');
    $('#rowTwo1').removeClass('yellowMarker');
    $('#rowTwo2').removeClass('yellowMarker');
    $('#rowTwo3').removeClass('yellowMarker');
    $('#rowTwo4').removeClass('yellowMarker');
    $('#rowTwo5').removeClass('yellowMarker');
    $('#rowTwo6').removeClass('yellowMarker');
    $('#rowOne1').removeClass('yellowMarker');
    $('#rowOne2').removeClass('yellowMarker');
    $('#rowOne3').removeClass('yellowMarker');
    $('#rowOne4').removeClass('yellowMarker');
    $('#rowOne5').removeClass('yellowMarker');
    $('#rowOne6').removeClass('yellowMarker');
});