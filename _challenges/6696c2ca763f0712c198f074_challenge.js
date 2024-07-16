// NAMEEN:
// NAMERU:Найти второе максимальное число с помощью циклов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `secondMaxNumber`, которая принимает массив чисел и возвращает второе максимальное число из массива.

* Если массив пустой, то функция возвращает строку `'Array is empty'`.
* Если в массиве нет второго максимального числа, то функция возвращает строку `'There is no second max number'`.

Попробуйте использовать два цикла для решения этой задачи.


Примеры запуска функции:
```javascript
secondMinNumber([1, 2, 3, 4, 5]);    // 4
secondMinNumber([-5, 2, -1, 10, 4]); // 4
secondMinNumber([1, 1, 1, 1, 1]);    // 'There is no second max number'
secondMinNumber([1]);                // 'There is no second max number'
secondMinNumber([]);                 // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function secondMaxNumber(arr){
  if(arr.length === 0) return 'Array is empty';
  if(arr.length === 1) return 'There is no second max number';

  let max = arr[0];
  let secondMax = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(arr[i] > max) max = arr[i];
  }

  for(let i = 1; i < arr.length; i++){
    if((max === secondMax || arr[i] > secondMax) && arr[i] !== max) secondMax = arr[i];
  }

  if(secondMax === max) return 'There is no second max number';
  else return secondMax;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function secondMaxNumber', () => {
  expect(secondMaxNumber).to.be.a('function');
});

it('Function secondMaxNumber does not include method sort', () => {
  expect(secondMaxNumber.toString()).to.not.include('sort');
});

it('Function secondMaxNumber does not include method Math.max', () => {
  expect(secondMaxNumber.toString()).to.not.include('Math.max');
});

it('secondMaxNumber([5, 3, 4, 1, -5, -2, -10]) should return 4', () => {
  expect(secondMaxNumber([5, 3, 4, 1, -5, -2, -10])).to.equal(4);
});

it('secondMaxNumber([5, 7, 66, 12, 3, 6, 47, 85]) should return 66', () => {
  expect(secondMaxNumber([5, 7, 66, 12, 3, 6, 47, 85])).to.equal(66);
});

it('secondMaxNumber([-25, 36, -42, 62, 1, 0, -40]) should return 36', () => {
  expect(secondMaxNumber([-25, 36, -42, 62, 1, 0, -40])).to.equal(36);
});

it('secondMaxNumber([100, 125, 55, 35, Infinity, 120, 654]) should return 654', () => {
  expect(secondMaxNumber([100, 125, 55, 35, Infinity, 120, 654])).to.equal(654);
});

it('secondMaxNumber([Infinity, -50, 43, 2, -Infinity, 45, 12, 8, Infinity]) should return 45', () => {
  expect(secondMaxNumber([Infinity, -50, 43, 2, -Infinity, 45, 12, 8, Infinity])).to.equal(45);
});

it('secondMaxNumber([5, 5, 5]) should return "There is no second max number"', () => {
  expect(secondMaxNumber([5, 5, 5])).to.equal('There is no second max number');
});

it('secondMaxNumber([10]) should return "There is no second max number"', () => {
  expect(secondMaxNumber([10])).to.equal('There is no second max number');
});

it('secondMaxNumber([]) should return "Array is empty"', () => {
  expect(secondMaxNumber([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND