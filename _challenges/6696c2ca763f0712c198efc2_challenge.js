// NAMEEN:
// NAMERU:Сумма чисел массива, начинающихся на 5

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumOfNumbers`, которая принимает массив положительных чисел.

Функция должна вернуть сумму всех чисел, которые начинаются на `5`.

Например:
* числа `5, 51, 532, 5898, ...` - должны быть просуммированы
* числа `4, 15, 355, 754, 9555, ...` - не должны быть просуммированы

Если в массиве нет чисел, которые начинаются на `5`, функция должна вернуть `0`.


Примеры запуска функции:
```javascript
sumOfNumbers([5, 12, 55, 2, 5, 10, 7, 36, 254, 15]) // 65
sumOfNumbers([15, 55, 74, 4, 856, 5]) // 60
sumOfNumbers([90, 135, 655, 701]) // 0
sumOfNumbers([5, 50, 555]) // 610
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
    if(arr[i].toString()[0] === '5') sum += arr[i];
  }
  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumOfNumbers', () => {
  expect(sumOfNumbers).to.be.a('function');
});

it('sumOfNumbers([5, 12, 55, 2, 5, 10, 7, 36, 254, 15]) should return 65', () => {
  expect(sumOfNumbers([5, 12, 55, 2, 5, 10, 7, 36, 254, 15])).to.equal(65);
});

it('sumOfNumbers([5, 50, 500, 5000, 50000]) should return 55555', () => {
  expect(sumOfNumbers([5, 50, 500, 5000, 50000])).to.equal(55555);
});

it('sumOfNumbers([1, 2, 3, 46, 78, 90, 135, 655, 701]) should return 0', () => {
  expect(sumOfNumbers([1, 2, 3, 46, 78, 90, 135, 655, 701])).to.equal(0);
});

it('sumOfNumbers([15, 255, 3555, 45555, 555555]) should return 555555', () => {
  expect(sumOfNumbers([15, 255, 3555, 45555, 555555])).to.equal(555555);
});

it('sumOfNumbers([0, 51, 523, 564, 5789]) should return 6927', () => {
  expect(sumOfNumbers([0, 51, 523, 564, 5789])).to.equal(6927);
});

it('sumOfNumbers([]) should return 0', () => {
  expect(sumOfNumbers([])).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
