console.log('hello');
// let age = prompt('What is your age?');
// document.getElementById('text').innerHTML = age; 

let num = 0;

while (num < 100) {
    num++
    console.log(num);
}

for ( let i = 0; i <= 100; i++) {
    console.log(i);
}

let fruit = 'banana,orange,apple,grape';
let moreFruits = 'banana\napple\ngrape';
console.log(moreFruits);

console.log(fruit.length); 
console.log(fruit.indexOf('an'));
console.log(fruit.indexOf('1n'));
console.log(fruit.slice(2, 4));
console.log(fruit.slice(1));
console.log(fruit.replace('ban', 60));
console.log(fruit.toLowerCase());
console.log(fruit.toUpperCase());
console.log(fruit.charAt(5));
console.log(fruit[2]); //same thing as above
console.log(fruit.split(''));
console.log(fruit.split(' '));
console.log(fruit.split(','));

let shopping = ['bread', 'milk', 'cheese', 'veggie'];
let shop= new Array('bread', 'yourMom', 'lol');
console.log(shopping[2]);

shopping[3] = 'xd';
console.log(shopping);

for (i = 0; i < shopping.length; i++) {
    console.log(shopping);
}

for (i = 0; i < shopping.length; i++) {
    console.log(shopping[2]);
}

for (i = 0; i < shopping.length; i++) {
    console.log(shopping[i]);
}
console.log(shopping.join(' * '));
console.log(shopping.toString());
console.log(shopping.join(' * '));
console.log(fruit, shopping.pop(), fruit);
console.log(shopping.push('blackberry'), shopping);
console.log(shopping[3]);
shopping[4] = "Nice";
console.log(shopping);
shopping[shopping.length] = 'bruh'; //no based index
console.log(shopping);
shopping.shift();
console.log(shopping);
shopping.unshift('oranges') 
console.log(shopping);
let chair = ['legs', 'arms', 'backThing', 'wheels'];
let everything = shopping.concat(chair);
console.log(everything);
console.log(everything.slice(1, 4));
console.log(everything.reverse());
console.log(everything.sort()); //uppercase first

let numbers = [90, 98, 23, 2, 4, 5];
console.log(numbers.sort(function(a, b) {return a-b} ));
let empty = [];

for (let i = 0; i < 10; i++) {
    empty.push(i);

}
console.log(empty);

let student = {
    first: 'Leon', 
    last: 'Truong', 
    age: 15,
    studentInfo: function() {
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

console.log(student.first);
console.log(student.last);

student.first = 'notLeon';
console.log(student.first);
student.age++;
console.log(student.age);

console.log(student.studentInfo());


let age = 19;

if ((age >= 18) && (age <= 35)) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}

let text = 7;

switch (text) {
    case 7:
    day = 'Sunday';
    break;
    case 6:
    day = "Saturday";
    break;
    case 5:
    day = 'Friday';
    break;
    case 4: 
    day = 'Thursday';
    break;
    case 3:
    day = 'Wednesday';
    break;
    case 2: 
    day = "Tuesday";
    break;
    case 1:
    day = 'Monday';
    break;
}

    console.log(day);

    let dad = {
        name: "Jason",
        age: 90,
        gender: "male",
        likesMusic: true,
    }

    let hisGender = dad.gender;

    console.log(hisGender);

    let hisAge = dad["age"];

    console.log(hisAge);

    console.log(typeof undefined); // we have left off the label for this message, but will include it for the rest
console.log('type of true:', typeof true);
console.log('type of false:', typeof false);
console.log('type of 9', typeof 9);
console.log('type of 4.0:', typeof 4.0);
console.log('type of "a string of characters":', typeof "a string of characters");
    console.log( typeof 1234);
    console.log( typeof [9, 9, 9])
    let abc = [2, 3, 4, 3]
    console.log(Array.isArray([9, 9, 9, 9]));

    function hostObject(user) {
        return user;
    }

    let username = {
        canBe: "10 letters long",
        cannotBe: "numbers",
    };
    let hi = hostObject(username);
    console.log(hostObject(username))
    console.log(hi);

    function bro(obj, key) {
        return obj[key];
    }
    let nameOfKey = 'canBe';
    let bro1 = bro(username, nameOfKey);
    console.log(bro1);
 
    function newObject() {
        let newObject = {1: 'a', 2: 'b'};
        return newObject;
    }

    let resultOfObject = newObject();
    console.log(resultOfObject);

    // let us write a function that returns the type of argument the function has been called with (assume the argument will be scalar - not a collection)
function getType(param) {
    return typeof param;
  }
  
  var numType = getType(56);
  console.log('numType:', numType);
  
  var stringType = getType('serial number');
  console.log('stringType:', stringType);
  
  var undefinedType = getType();
  console.log('undefinedType:', undefinedType); //think carefully about what is happening here

    function typeArg(scalar) {
        return typeof scalar;
    }
        let scalar1 = typeArg(2);

        console.log(scalar1);

        function typeArr(arr) {
           return Array.isArray(arr);
        }

    let newArr = typeArr([9, 8, 8, 8]);
    console.log(newArr);

    let notArr = typeArr('0ihugytcf');
    console.log(notArr);

    let yes = [9, 3, 3, 3];
    if (Array.isArray(yes)) {
        console.log("NICE");
    }
    else {
        console.log('NO');
    }

    var sense = true;
// to describe nonsense
var nonsense = !sense;
console.log('nonsense:', nonsense);

var notNonsense = !nonsense;
console.log('not nonsense:', notNonsense);

let gay = true;
let notGay = !gay;
console.log(notGay);

function opposite(boolean) {
    return !boolean;
  }

  let why = opposite(3);
  console.log(why);

  var haveACar = true;
var bussesAreRunning = true;

var willAttendEvent = haveACar || bussesAreRunning;
console.log("I will attend the event:", willAttendEvent);

var friendCanGo = true;
var iCanGo = false;

var weWillAttend = friendCanGo && iCanGo;
console.log("Both my friend and I will go:", weWillAttend);
    
for (i = 0; i < 69; i++) {
    console.log("Matthew is gay");
}
var storeIsOpen = true;
var isHungry = true;
var isThirsty = true;

var willGoToStore = storeIsOpen && (isHungry || isThirsty);
console.log(willGoToStore); // will log true
4

function combination(bool_1, bool_2, bool_3) {
    let result = bool_1 && (bool_2 || bool_3);
    return result;
}

var outputTrue = combination(true, true, false);
console.log('should be true:', outputTrue);

var outputFalse = combination(false, true, true);
console.log('should be false:', outputFalse);

function abs(num1, num2) {
    let re = Math.abs(num1 - num2);
    return re;
}

console.log(abs(3, 9));

function round(double) {
    if (double < 50) {
       let ceil = Math.ceil(double);
       return ceil;
    }
    else {
       let floor = Math.floor(double);
       return floor;
    }
}

console.log(round(90.33));
console.log(round(20.8));

function round1(double1) {
    let idk = Math.floor(double1);
    return idk;
}
console.log(round1(9.8));

function dec(lmao) {
   let you = lmao % 1 != 0;
   return you;
}

console.log(dec(7));
console.log(dec(9.2));

var randomBetween1And10 = Math.floor(Math.random() * 10) + 1;
console.log('randomBetween1And10:', randomBetween1And10);

function range(min, max) {
    let rng = Math.floor(Math.random() * (max - min) + min);
    return rng;
}
console.log(range(9, 10));

console.log( 9 > 6);

let job = "worker";

console.log(job);

job = "boss";
console.log(job);

let goo = "poop";
let goo1 = goo.length;
console.log(goo1);

let word = "hello";
let lastIndex = word.length - 1;
let lastC = word[lastIndex];
console.log(lastC);

let string = "lolololololol";
let subSetStr = string.substring(2, 5);
console.log(subSetStr);

let indexSub = "google google google google".indexOf('l', 6);
console.log(indexSub);

var DNAStrand = "ATGCGCTAACATCGCAGCTAGTTAAGCGATTGCAT";
var stopCodon = "TAA";
var indexOfFirstStopCodon = DNAStrand.indexOf(stopCodon);

var indexOfSecondStopCodon = DNAStrand.indexOf(stopCodon, indexOfFirstStopCodon + 1);

console.log('index where second stop codon is found with gene sequence:', indexOfSecondStopCodon);

var num6 = 17;
var stringNum = num6.toString();
console.log('stringNum:', stringNum);
console.log('type of stringNum:', typeof stringNum);

var bool = true;
var stringBool = bool.toString();
console.log('stringBool:', stringBool);
console.log('type of stringBool:', typeof stringBool);


function applyPush(array, element) {
    array.push(element);
    return array;
  }

var resultArray1 = applyPush([1, 17, 29], 34);
console.log('should log [1, 17, 29, 34]:', resultArray1);

var resultArray2 = applyPush(['abc', 'def'], 'ghi');
console.log('should log ["abc", "def", "ghi"]:', resultArray2);

var array = [1, 2, 4];
array.splice(2, 0, 3);
console.log('array with newly added element:', array);

var array = ['a', 'b', 'c', 'd', 'e'];

var sliceOfArray1 = array.slice(0, 2);
console.log('slicing a portion of the array from before index 0, to before index 2:', sliceOfArray1)

let oops = [2, 3, 2, 3, 2, 34, 4235, 324, 4];

let ops = oops.splice(2, 3);
console.log(ops);
console.log(oops);
let op1 = oops.splice(0, 2, 9022, 2342);
console.log(oops);

var array = ['a', 'b', 'c', 'd', 'e'];

var copyOfArray = array.slice();
console.log('copy of array:', copyOfArray);

function applyConcat(array1, array2) {
    let concattedArray = array1.concat(array2);
    return concattedArray;
  // create a concattedArray variable
  // assign it to the contents of both array1 and array2
  // return the concattedArray variable
}

var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f']
var resultConcat1 = applyConcat(array1, array2);
console.log('should log ["a", "b", "c", "d", "e", "f"]:', resultConcat1);

var array3 = [1, 2, 3];
var array4 = [4, 5, 6];
var resultConcat2 = applyConcat(array3, array4);
console.log('should log [1, 2, 3, 4, 5, 6]:', resultConcat2);

var joinedOnNothing = ["a", "b", "c"].join();
console.log('joined with no argument supplied:', joinedOnNothing);

var joinedOnEmptyString = ["a", "b", "c"].join("");
console.log('joined on an empty string:', joinedOnEmptyString);

var joinedOnAString = ["a", "b", "c"].join("-");
console.log('joined on a string:', joinedOnAString);

var splitOnNothing = "abc".split();
console.log('split with no argument supplied:', splitOnNothing);

var splitOnEmptyString = "abc".split("")
console.log('split on an empty string:', splitOnEmptyString);

var splitOnAString = "a-b-c".split("-");
console.log('split on a string:', splitOnAString);

var sentence = 'Approaching the end of operators and methods';
var separator = ' ';
var wordsInSentence = sentence.split(separator);
console.log('words in sentence:', wordsInSentence);

var person = {
    name: 'Nick',
    favoriteLanguage: 'Ruby',
    experienceInYears: 16
  };
  
  var personAlternate = {
    'name': 'Nick',
    'favoriteLanguage': 'Ruby',
    'experienceInYears': 16
  }
  
  console.log('person:', person);
  console.log('personAlternate:', personAlternate);

var myFriend = {
    name: "Ethan",
    age: 14,
    height: 172,
    favoriteFood: "Rice cakes",
};

var stor = myFriend.name;
console.log(stor);

var storage = myFriend['favoriteFood'];
console.log(storage);

let months = {
    One: "Jan",
    Two: "Feb",
    Three: "Mar",
    Four: "April",
    Five: "May",
    Six: "June",
    Seven: "July",
    Eight: "July",
    Nine: "Sept",
    Ten: "Oct",
    Eleven: "Nov",
    Twelve: "Dec",
};

months['Eight'] = "Aug";
console.log(months);

delete months['Four'];

var lunchOrders = {
    Jubal: 'Turkey Sandwich',
    Christof: 'Falafel',
    spec1: 'Processor Speed',
    Wali: 'Gyro'
  };
  var keyOfPropertyToBeRemoved = 'spec1';
  
  delete lunchOrders[keyOfPropertyToBeRemoved];
  console.log('list of lunch orders with incorrect property removed:', lunchOrders);

  var obj = {
    a: 1,
    b: 3,
    c: 5
  };
  console.log('value is an object and not an array:', typeof obj === "object" && !Array.isArray(obj));

  function isAnObject(input) {
    let isObject = typeof input === "object";
    let isNotAnArray = !Array.isArray(input);
    let isObjectAndNotAnArray = isObject && isNotAnArray;
    return isObjectAndNotAnArray;
  }
    var resultBoolean1 = isAnObject([1, 2, 3]);
console.log('should log false:', resultBoolean1);

var resultBoolean2 = isAnObject({name: 'Tom', friend: 'Jerry'});
console.log('should log true:', resultBoolean2);

var socialMediaColors = {
    twitter: "blue",
    yt: "red",
    insta: "pink orange?",
    discord: "darkish blue",
};

var lol = Object.keys(socialMediaColors);
var lmao = Object.values(socialMediaColors);
console.log(lol);
console.log(lmao);

var user = {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-555-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "corporate_tagline": "e-enable strategic applications"
    }
  };

  console.log(user['id']);
  console.log(user['name']);
  console.log(user['username']);
  console.log(user['email']);
  var addressObj = user.address;
  console.log(addressObj['street']);
  console.log(addressObj['suite']);
  console.log(addressObj['city']);
  console.log(addressObj['zipcode']);
  var geoObj = addressObj.geo;
  console.log(geoObj['lat']);
  console.log(geoObj['lng']);
  console.log(user['phone']);
  console.log(user['website']);
  var compObj = user['company'];
  console.log(compObj.name);
  console.log(compObj['catchPhrase']);
  console.log(compObj['corporate_tagline']);

  var numbersBro = [[1, 3],[4, 5, 6], [7, 8]];

  numbersBro[0].splice(1, 0, 2);
  console.log(numbersBro);
  numbersBro[2].push(9);
  console.log(numbersBro);

  let more = [1, 2, 3];
  let extra = [4, 5, 6];

  let guy = Array.isArray(more);
  console.log(guy);
  let supe = more.concat(extra);
  console.log(supe);
  console.log(more);

  var objArr = {
      oneToThree: [1, 2, 3],
      fourToSix: "4 5 6",
  };

  let ho = Array.isArray(objArr.oneToThree);
  console.log(ho);

  let fo = Array.isArray(objArr.fourToSix);
  console.log(fo);

  let nest = {
      tree: "A nice tree",
      insideOfTree: {
        bush: 3,
        sticks: 9,
        birds: 9,
      }
  }

  var theInside = Object.keys(nest.insideOfTree);
  console.log(theInside);

 
  let bushes = nest.insideOfTree;
  delete bushes['bush'];
  console.log(nest);

  var lunchOrders = [
    {
      Jubal: 'Turkey Sandwich',
      Christof: 'Falafel',
      spec1: 'Processor Speed',
      Wali: 'Gyro'
    },
    {
      Teddy: 'General Tso Chicken',
      Freddy: 'Pizza',
      Betty: 'Tuna Salad'
    }
  ];


  delete lunchOrders[0]['spec1'];
  console.log(lunchOrders);
  
var thisArray = [3, 5, 4, 3, 5, 5, 69];
  if (thisArray.indexOf(69) > -1) {
      console.log("234");
  }



  let show = [2, 2, 3, 4, 69];

function bruh(hi) {
  if (show.indexOf(hi) > -1) {
    return 'EHHH';
  }
}
let dfgh = bruh(69);
console.log(dfgh)


  function isItTruthy(param) {
    if (param) {
        return "Input is truthy";
    } else {
        return "Input is falsy";
    }
}
let notTrue = isItTruthy(0);

console.log(notTrue);

let isTrue = isItTruthy(1);

console.log(isTrue);
  
function measureRequiredFruit(fruitTotals) {
    let totalBananas = fruitTotals['bananas']
    let totalStrawberries = fruitTotals['strawberries']
    if (totalBananas > 3 && totalStrawberries > 10) {
        return 'We have enough fruit, with ' + totalBananas + ' bananas, and ' + totalStrawberries + ' strawberries';
    } else {
        return 'We do not have enough of both fruits';
    }
}
 
function verifyStock(recipeMinimums, stockTomatoes, stockOnions) {
    let recipeTomatoesRequired = recipeMinimums['tomatoes'];
    let recipeOnionsRequired = recipeMinimums['onions'];
    
    let excessTomatoes = stockTomatoes - recipeMinimums['tomatoes'];
    let excessOnions = stockOnions - recipeMinimums['onions'];

    if (stockTomatoes < recipeTomatoesRequired && stockOnions < recipeOnionsRequired) {
        return "We need more tomatoes and more onions.";
    } else if (stockTomatoes < recipeTomatoesRequired && stockOnions >= recipeOnionsRequired) {
        return "We have enough onions, but we need more tomatoes.";
    } else if (stockTomatoes >= recipeTomatoesRequired && stockOnions < recipeOnionsRequired) {
        return "We have enough tomatoes, but need more onions.";
    } else {
        return "We have enough tomatoes and onions. There will be " + excessTomatoes + " extra tomato, and " + excessOnions + " extra onion."
    }
}


var result4 = verifyStock({tomatoes: 4, onions: 2}, 3, 4);
console.log('should log "We have enough onions, but need more tomatoes.":', result4);


function loopAnArray(array) {
    if (Array.isArray(array) === true) {
        let index = 0;
        while (index < array.length) {
            console.log(array[index]);
            index++;
        }
    } 
}

loopAnArray([2, 2, 3, 4, 2]);
loopAnArray(3);

function loopASequenceAgain(start, end) {
    for (i = start; start <= end; start++) {
        console.log(start);
    } 
  // create a loop which loops from start to end
    // log current value to console

}

let hg = loopASequenceAgain(2, 5);


function useContinue(array, index) {
    for (i = 0; i < array.length; i++) {
        if (i === index) {
            continue; 
        }
        console.log(array[i]);
    }
}

useContinue([1, 2, 3, 4], 2);

function anything(arraylol) {
    for (i = 0; i < arraylol.length; i++) {
        for (j = 0; j < arraylol[i].length; j++) {
            console.log(arraylol[i][j]);
        }
    }
}

anything([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

function everythinglol(someArray) {
    for (let key in someArray) {
        for (value in someArray[key]) {
            console.log(someArray[key][value])
        }
    }
}

everythinglol({
    'team1': {amy_jones: 34, davy_jones: 36, crazy_jones: 19},
    'team2': {jonas_ames: 43, joney_davids: 63, joney_craze: 91}
  })
  
function whatever(always) {
    for (i = 0; i < always.length; i++) {
        for (let key in always[i]) {
            console.log(always[i][key]);
        }
    }
}

whatever([
    {a: 1, b: 2, c: 3},
    {d: 4, e: 5, f: 6},
    {g: 7, h: 8, i: 9}
  ])
 
function fun(someArr) {
    for (i = 0; i < someArr.length; i++) {
        for (j = 0; j < someArr[i].length; j++) {
            console.log(someArr[i][j]);
        }
    }
}


function generateCombinations(array1, array2) {
    for (i = 0; i < array1.length; i++) {
        for (j = 0; j < array2.length; j++) {
            console.log(array1[i], array2[j]);
        }
        
    }

}


generateCombinations(['a', 'b', 'c'], ['d', 'e', 'f']);

generateCombinations([1, 2], ['buckle', 'my', 'shoe']);

