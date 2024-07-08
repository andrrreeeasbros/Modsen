//7 kyu
//Valid Spacing

//function validSpacing(s) {
//
//    if (s.startsWith(' ') || s.endsWith(' ')) {
//        return false;
//    }
//
//    if (s.includes('  ')) {
//        return false;
//    }
//
//    return true;
//}
//
//
//console.log(validSpacing('Hello world'));
//console.log(validSpacing(' Hello world'));
//console.log(validSpacing('Hello world  '));
//console.log(validSpacing('Hello  world'));
//console.log(validSpacing('Hello'));
//console.log(validSpacing('Helloworld'));
//console.log(validSpacing('Helloworld '));
//console.log(validSpacing(' '));
//console.log(validSpacing(''));

//6 kyu
//Message Validator

//function isAValidMessage(message) {
//  if (message === '') return true;
//
//  const parts = message.match(/(\d+|[a-zA-Z]+)/g);
//  if (!parts) return false;
//
//  for (let i = 0; i < parts.length; i += 2) {
//
//    if (i + 1 >= parts.length) return false;
//
//
//    if (parts[i + 1].length !== parseInt(parts[i])) return false;
//  }
//
//
//  return true;
//}

//5 kyu
//Luck check

//function luckCheck(ticket) {
//  if (!ticket || !/^\d+$/.test(ticket)) {
//    throw new Error('Invalid input: Input should be a non-empty string of digits');
//  }
//
//  let leftSum = 0;
//  let rightSum = 0;
//  const len = ticket.length;
//  const halfLen = Math.floor(len / 2);
//
//  for (let i = 0; i < halfLen; i++) {
//    leftSum += parseInt(ticket[i], 10);
//  }
//
//  for (let i = len - 1; i >= len - halfLen; i--) {
//    rightSum += parseInt(ticket[i], 10);
//  }
//
//  return leftSum === rightSum;
//}
//
//// Tests
//const { assert } = require("chai");
//
//describe("Sample tests", function() {
//  it("should return the correct values", function() {
//    assert.strictEqual(luckCheck('683179'), true, "The function doesn't recognise a lucky ticket number");
//    assert.strictEqual(luckCheck('683000'), false, 'The function doesn\'t return true for a wrong number');
//  });
//  it("should throw an error for string with illegal characters", function() {
//    assert.throws(() => luckCheck('6F43E8'), undefined, undefined, "It should throw an error for invalid input");
//  });
//});


//6 kyu
//The latest clock

//function latestClock(d1, d2, d3, d4) {
//  function permute(arr) {
//    if (arr.length === 0) return [[]];
//    const firstElem = arr[0];
//    const restPerms = permute(arr.slice(1));
//    const allPerms = [];
//
//    restPerms.forEach(seq => {
//      for (let i = 0; i <= seq.length; i++) {
//        const newSeq = [...seq.slice(0, i), firstElem, ...seq.slice(i)];
//        allPerms.push(newSeq);
//      }
//    });
//    return allPerms;
//  }
//
//
//  function pad(num) {
//    return num < 10 ? `0${num}` : String(num);
//  }
//
//
//  const permutations = permute([d1, d2, d3, d4]);
//  let maxTime = -1;
//
//
//  permutations.forEach(p => {
//    const [hourTens, hourOnes, minuteTens, minuteOnes] = p;
//    const hours = hourTens * 10 + hourOnes;
//    const minutes = minuteTens * 10 + minuteOnes;
//
//
//    if (hours < 24 && minutes < 60) {
//      const totalMinutes = hours * 60 + minutes;
//      if (totalMinutes > maxTime) {
//        maxTime = totalMinutes;
//      }
//    }
//  });
//
//
//  if (maxTime !== -1) {
//    const maxHours = Math.floor(maxTime / 60);
//    const maxMinutes = maxTime % 60;
//    return `${pad(maxHours)}:${pad(maxMinutes)}`;
//  }
//
//  return null;
//}


//6 kyu
//Filter valid romans

//function validRomans(arr) {
//]
//  const romanRegex = /^(?=[MDCLXVI])(M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3}))$/;
//
//
//  return arr.filter(numeral => romanRegex.test(numeral));
//}
//
//
//console.log(validRomans(["I", "IIV", "IVI", "IX", "XII", "MCD"])); // ["I", "IX", "XII", "MCD"]
//console.log(validRomans(["MMMMCMXCIX", "MMDCXLIV", "MMCIX", "CLD", "LCD"])); // ["MMMMCMXCIX", "MMDCXLIV", "MMCIX"]

//6 kyu
//Shortest steps to a number

//function shortestStepsToNum(num) {
//  let steps = 0;
//  while (num > 1) {
//
//    num = num % 2 === 0 ? num / 2 : num - 1;
//    steps++;
//  }
//  return steps;
//}
//
//console.log(shortestStepsToNum(3));
//console.log(shortestStepsToNum(12));
//console.log(shortestStepsToNum(16));