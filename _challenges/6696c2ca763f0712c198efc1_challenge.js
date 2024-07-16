// NAMEEN:
// NAMERU:Сумма трехзначных чисел из массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumOfNumbers`, которая принимает массив чисел.

Функция должна вернуть сумму всех отрицательных и положительных трехзначных чисел из массива.

Если таких чисел нет, функция должна вернуть 0.

Примеры запуска функции:
```javascript
sumOfNumbers([1, 10, 200, 3000]) // 200
sumOfNumbers([150, 300, 900, 1000]) // 1350
sumOfNumbers([-1205, -5000, 7800, 1000]) // 0
sumOfNumbers([]) // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumOfNumbers(arr){
  let sum = 0;

  for (let i = 0; i < arr.length; i++){
    if(arr[i] > 99 && arr[i] < 1000 ||
      arr[i] > -1000 && arr[i] < -99) sum += arr[i]
  }

  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumOfNumbers', () => {
  expect(sumOfNumbers).to.be.a('function');
});

it('sumOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) should return 0', () => {
  expect(sumOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).to.be.equal(0);
});

it('sumOfNumbers([1000, 100, -500, -1000]) should return -400', () => {
  expect(sumOfNumbers([1000, 100, -500, -1000])).to.be.equal(-400);
});

it('sumOfNumbers([-1000, -99, 99, 1000]) should return 0', () => {
  expect(sumOfNumbers([-1000, -99, 99, 1000])).to.be.equal(0);
});

it('sumOfNumbers([999, 100, -999, -100]) should return 0', () => {
  expect(sumOfNumbers([999, 100, -999, -100])).to.be.equal(0);
});

it('sumOfNumbers([]) should return 0', () => {
  expect(sumOfNumbers([])).to.be.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
