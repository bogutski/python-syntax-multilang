// NAMEEN:
// NAMERU:Найти максимальное число в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findMaxNumber`, которая принимает массив целых чисел и возвращает максимальное число из массива.

Если массив пустой, то функция должна вернуть `undefined`.

Методы использовать нельзя.


Примеры запуска функции:
```javascript
findMaxNumber([11, 220, 34, 4, 50, 64, 77, 88, 96, 100]); // 220
findMaxNumber([-25, 5, -35, -4, 54, 99]); // 99
findMaxNumber([]); // undefined
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findMaxNumber(arr){
  let max = arr[0];

  for (let i = 1; i < arr.length; i++){
    if (arr[i] > max) max = arr[i];
  }

  return max;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findMaxNumber', () => {
  expect(findMaxNumber).to.be.a('function');
});

it('Function findMaxNumber should not include Math.max', () => {
  expect(findMaxNumber.toString()).to.not.include('Math.max');
});

it('findMaxNumber([11, 22, 34, 4, 50, 64, 77, 88, 96, 100]) should return 100', () => {
  expect(findMaxNumber([11, 22, 34, 4, 50, 64, 77, 88, 96, 100])).to.equal(100);
});

it('findMaxNumber([-5, -50, -32, -41, -63, -442, -145, -555]) should return -5', () => {
  expect(findMaxNumber([-5, -50, -32, -41, -63, -442, -145, -555])).to.equal(-5);
});

it('findMaxNumber([-15, -5, 25, -6, 50, -64, 77, -88, 96, -100]) should return 96', () => {
  expect(findMaxNumber([-15, -5, 25, -6, 50, -64, 77, -88, 96, -100])).to.equal(96);
});

it('findMaxNumber([-2, -32, -14, -25, 0]) should return 0', () => {
  expect(findMaxNumber([-2, -32, -14, -25, 0])).to.equal(0);
});

it('findMaxNumber([-5]) should return -5', () => {
  expect(findMaxNumber([-5])).to.equal(-5);
});

it('findMaxNumber([]) should return undefined', () => {
  expect(findMaxNumber([])).to.equal(undefined);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
