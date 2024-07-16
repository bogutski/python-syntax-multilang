// NAMEEN:
// NAMERU:Найти минимальное число в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findMinNumber`, которая принимает массив положительных и отрицательных чисел и возвращает минимальное число из массива.

Если массив пустой, то функция должна вернуть `undefined`.

Методы использовать нельзя.


Примеры запуска функции:
```javascript
findMinNumber([12, 21, 3, 0, 50, 6, 7, 8, 9, 10]); // 0
findMinNumber([25, 41, 25, 36, 456, 88, 25, 1]);   // 1
findMinNumber([52, 63, -2, -43, -5, -236, -41]);   // -236
findMinNumber([]); // undefined
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findMinNumber(arr){
  let min = arr[0];

  for (let i = 1; i < arr.length; i++){
    if (arr[i] < min) min = arr[i];
  }

  return min;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findMinNumber', () => {
  expect(findMinNumber).to.be.a('function');
});

it('Function findMinNumber should not include Math.min', () => {
  expect(findMinNumber.toString()).to.not.include('Math.min');
});

it('findMinNumber([1, 2, 3, 4, 50, 6, 7, 8, 9, 10, 0]) should return 0', () => {
  expect(findMinNumber([1, 2, 3, 4, 50, 6, 7, 8, 9, 10, 0])).to.equal(0);
});

it('findMinNumber([25, 41, 25, 36, 456, 88, 25, 100]) should return 25', () => {
  expect(findMinNumber([25, 41, 25, 36, 456, 88, 25, 100])).to.equal(25);
});

it('findMinNumber([-52, -63, -2, -43, -5,-235, -236, -41]) should return -236', () => {
  expect(findMinNumber([-52, -63, -2, -43, -5, -235, -236, -41])).to.equal(-236);
});

it('findMinNumber([-55, 15, 36, 98, -33, -42, -57, -65]) should return -65', () => {
  expect(findMinNumber([-55, 15, 36, 98, -33, -42, -57, -65])).to.equal(-65);
});

it('findMinNumber([5]) should return 5', () => {
  expect(findMinNumber([5])).to.equal(5);
});

it('findMinNumber([]) should return undefined', () => {
  expect(findMinNumber([])).to.equal(undefined);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
