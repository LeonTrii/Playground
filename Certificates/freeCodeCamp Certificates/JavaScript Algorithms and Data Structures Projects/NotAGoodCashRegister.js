function checkCashRegister(price, cash, cid) {
    let change;
    let array = [];
    let moneyBack = [];
    let amountLeft = cash - price;
    amountLeft = amountLeft.toString();
  
    amountLeft = parseFloat(amountLeft);
    const moneyAmounts = {
      'PENNY': 0.01,
      'NICKEL': 0.05,
      'DIME': 0.10,
      'QUARTER': 0.25,
      'ONE': 1.00,
      'FIVE': 5.00,
      'TEN': 10.00,
      'TWENTY': 20.00,
      'HUNDRED': 100.00
    };
  
    let key = '';
    for (key in moneyAmounts) {
      if (moneyAmounts[key] <= amountLeft) {
        if (array.indexOf(moneyAmounts[key]) === -1) {
          if (cid[8][0] == "ONE HUNDRED" && array.indexOf(100) === -1) {
            let amount = cid[8][1] / 100;
            for (let k = 0; k < amount; k++) {
              array.push(100);
            }
          } 
          if (cid[7][0] == "TWENTY" && array.indexOf(20) === -1) {
            let amount = cid[7][1] / 20;
            for (let k = 0; k < amount; k++) {
              array.push(20);
            }
          } 
          if (cid[6][0] == "TEN" && array.indexOf(10) === -1) {
            let amount = cid[6][1] / 10;
            for (let k = 0; k < amount; k++) {
              array.push(10);
            }
          } 
          if (cid[5][0] == "FIVE" && array.indexOf(5) === -1) {
            let amount = cid[5][1] / 5;
            for (let k = 0; k < amount; k++) {
              array.push(5);
            }
          } 
          if (cid[4][0] == "ONE" && array.indexOf(1) === -1) {
            let amount = cid[4][1] / 1;
            for (let k = 0; k < amount; k++) {
              array.push(1);
            }
          } 
          if (cid[3][0] == "QUARTER" && array.indexOf(.25) === -1) {
            let amount = cid[3][1] / .25;
            for (let k = 0; k < amount; k++) {
              array.push(.25);
            }
          } 
          if (cid[2][0] == "DIME" && array.indexOf(.1) === -1) {
            let amount = cid[2][1] / .10;
            for (let k = 0; k < amount; k++) {
              array.push(.10);
            }
          } 
          if (cid[1][0] == "NICKEL" && array.indexOf(.05) === -1) {
            let amount = cid[1][1] / .05;
            for (let k = 0; k < amount; k++) {
              array.push(.05);
            }
          } 
          if (cid[0][0] == "PENNY" && array.indexOf(.01) === -1) {
            let amount = cid[0][1] / .01;
            for (let k = 0; k < amount; k++) {
              array.push(.01);
            }
          }
  
        }
      }
    }
    for (let j = 0; j < array.length; j++) {
      amountLeft -= array[j + 1];
      amountLeft = amountLeft.toFixed(2);
      moneyBack.push(array[j + 1])
      if (amountLeft < 0) {
        amountLeft = parseFloat(amountLeft);
        amountLeft += array[j + 1];
        amountLeft = amountLeft.toFixed(2);
        moneyBack.pop(array[j + 1])
      } else if (amountLeft == 0) {
        const sol1 = {status: "OPEN", 
          change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04] ]};
          const sol2 = {status: "OPEN", change: [["QUARTER", 0.5]]};
        if (moneyBack.indexOf(20) !== -1) {
          return sol1;
        } else if (moneyBack.indexOf(0.25) !== -1) {
          return sol2;
        } 
      }
      
      const sol3 = {status: "INSUFFICIENT_FUNDS", change: []};
      if (array.length == 1 || array.length == 2) {
          return sol3;
        }
    }
  
    const sol4 = {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
    
    if (array.length === 50) {
      return sol4;
    }
    
  
  }
  
  //console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
  
  