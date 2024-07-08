// task 1

//"use strict";
//
//function factorial(a) {
//  if (a == 0 || a == 1){
//   return 1;
//   } else {
//  return a * factorial(a - 1);
//}
//}
//alert(factorial(5));

// task 2

//'use strict'
//
//function testScope() {
//  if (true) {
//    var xVar = 'visible as var';
//    let xLet = 'visible as let';
//    const xConst = 'visible as const';
//  }
//
//
////xVar доступна вне блока if, но внутри функции testScope
//
//alert(xVar); //
//
//// остальные вне доступа блока if

// task 3

//function areObjectsEqual(obj1, obj2) {
//
//  const keys1 = Object.keys(obj1);
//  const keys2 = Object.keys(obj2);
//
//  if (keys1.length !== keys2.length) {
//    return false;
//  }
//
//  for (let key of keys1) {
//    if (obj1[key] !== obj2[key]) {
//      return false;
//    }
//  }
//
//  return true;
//}
//
//
//const object1 = { a: 1, b: 2, c: 3 };
//const object2 = { a: 1, b: 2, c: 3 };
//const object3 = { a: 1, b: 2, c: '3' };
//
//alert(areObjectsEqual(object1, object2)); // True
//alert(areObjectsEqual(object1, object3)); // False

////task 4
//function array(number){
//return number.map(number => number * 1.1);
//}
//
//const number = [10, 20, 30]; // пример
//alert(array(number)); // [11,22, 33]

//task 5

//function repeatOperation(interval, operation) {
//  const intervalId = setInterval(operation, interval);
//
//  function stop() {
//    clearInterval(intervalId);
//  }
//
//  return stop;
//}
//
//
//const stopRepeat = repeatOperation(1000, () => {
//  console.log('Эта операция выполняется каждую секунду');
//});
//
//
//setTimeout(() => {
//  stopRepeat();
//}, 5000);

// task 6

//class Human {
//  constructor(name, age, country) {
//    this.name = name;
//    this.age = age;
//    this.country = country;
//  }
//
//  displayDetails() {
//    console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
//  }
//}
//
//
//let person1 = Human("Alexey", 30, "Russia");
//let person2 = new Human("Maria", 25, "Russia");
//
//
//person1.displayDetails();
//person2.displayDetails();

//task 7


//function checkIfInteger(number) {
//  if (!Number.isInteger(number)) {
//    throw new Error('Переданное число не является целым числом');
//  }
//  console.log('Число является целым');
//}
//
//
//try {
//  checkIfInteger(4.5);
//} catch (error) {
//  console.error(error.message);
//}
//
//try {
//  checkIfInteger(3);
//} catch (error) {
//  console.error(error.message);
//}


// task 8
//function asyncOperation(value) {
//  return new Promise((resolve, reject) => {
//    setTimeout(() => {
//      if (value) {
//        resolve(`Обработанное значение: ${value}`);
//      } else {
//        reject('Ошибка: передано недопустимое значение');
//      }
//    }, 1000);
//  });
//}
//
//function performSeriesOfAsyncOperations() {
//  asyncOperation('Первая операция')
//    .then(result => {
//      console.log(result);
//      return asyncOperation('Вторая операция');
//    })
//    .then(result => {
//      console.log(result);
//      return asyncOperation('Третья операция');
//    })
//    .then(result => {
//      console.log(result);
//    })
//    .catch(error => {
//      console.error(error);
//    });
//}
//
//performSeriesOfAsyncOperations();


// task 9
//async function fetchDataFromServer(url) {
//  try {
//    let response = await fetch(url);
//    if (!response.ok) {
//      throw new Error(`HTTP error! status: ${response.status}`);
//    }
//    let data = await response.json();
//    return data;
//  } catch (error) {
//    console.error('Возникла проблема с получением данных:', error);
//  }
//}
//
//
//(async () => {
//  const url = 'https://example.com/api/data';
//  const data = await fetchDataFromServer(url);
//  console.log(data);
//})();

// task 10

//function executeCallbackAfterDelay(callback) {
//  setTimeout(() => {
//    callback();
//  }, 2000);
//}
//
//
//executeCallbackAfterDelay(() => {
//  console.log('Callback функция вызвана после 2 секунд');
//});
