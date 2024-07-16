// NAMEEN:
// NAMERU:Сумма чисел в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumOfNumbers`, которая принимает массив чисел и возвращает сумму всех чисел в массиве.

Если массив пустой, то функция должна вернуть 0.


Пример запуска функции:
```javascript
sumOfNumbers([1,2,3,4,5,10]);       // 25
sumOfNumbers([100, 200, 300]);      // 600
sumOfNumbers([-1, -2, -3, -4, -5]); // -15
sumOfNumbers([]);                   // 0
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
    sum += arr[i];
  }
  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumOfNumbers', () => {
  expect(sumOfNumbers).to.be.a('function');
});

it('sumOfNumbers([1,2,3,4,5,10]) should return 25', () => {
  expect(sumOfNumbers([1,2,3,4,5,10])).to.equal(25);
});

it('sumOfNumbers([100, -50, 0, 50, 100]) should return 200', () => {
  expect(sumOfNumbers([100, -50, 0, 50, 100])).to.equal(200);
});

it('sumOfNumbers([-1, -2, -3, -4, -5, -10]) should return -25', () => {
  expect(sumOfNumbers([-1, -2, -3, -4, -5, -10])).to.equal(-25);
});

it('sumOfNumbers([1,2,3,4,5,10, 100, -50, 0, 50, 100, -1, -2, -3, -4, -5, -10]) should return 200', () => {
  expect(sumOfNumbers([1,2,3,4,5,10, 100, -50, 0, 50, 100, -1, -2, -3, -4, -5, -10])).to.equal(200);
});

it('sumOfNumbers([]) should return 0', () => {
  expect(sumOfNumbers([])).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
