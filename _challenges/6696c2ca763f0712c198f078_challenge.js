// NAMEEN:
// NAMERU:Второе максимальное нечетное число из массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `secondMaxOddNumber`, которая принимает массив чисел и возвращает второе максимальное нечетное число из массива.

* Если массив пустой или в нем нет нечетных чисел, то функция должна вернуть `false`.
* Если в массиве нет второго максимального нечетного числа, то функция должна вернуть `false`.
* Второе максимальное число, не должно быть равно первому максимальному числу.


Примеры запуска функции:
```javascript
secondMaxOddNumber([1, 2, 3, 4, 5]);   // 3
secondMaxOddNumber([4, 3, -4, 2, -7]); // -7
secondMaxOddNumber([-2, 4, -10, 22]);  // false
secondMaxOddNumber([10, 10, 10]);      // false
secondMaxOddNumber([]);                // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function secondMaxOddNumber(arr){
  if(!arr.length) return false;
  let max = undefined;
  let secondMax = undefined;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2){
      if(max === undefined || arr[i] > max) max = arr[i];
    }
  }
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2){
      if((secondMax === undefined || arr[i] > secondMax) && arr[i] !== max) secondMax = arr[i];
    }
  }

  if(secondMax === undefined) return false;
  return secondMax;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function secondMaxOddNumber', () => {
  expect(secondMaxOddNumber).to.be.a('function');
});

it('Function secondMaxOddNumber does not include method sort', () => {
  expect(secondMaxOddNumber.toString()).to.not.include('sort');
});

it('Function secondMaxOddNumber does not include method Math.max', () => {
  expect(secondMaxOddNumber.toString()).to.not.include('Math.max');
});

it('secondMaxOddNumber([1, 2, 3, 4, 5]) should return 3', () => {
  expect(secondMaxOddNumber([1, 2, 3, 4, 5])).to.equal(3);
});

it('secondMaxOddNumber([1, 8, 6, -2, -4, -8, -9]) should return -9', () => {
  expect(secondMaxOddNumber([1, 8, 6, -2, -4, -8, -9])).to.equal(-9);
});

it('secondMaxOddNumber([20, 36, -45, -78, -22, -12, -6]) should return false', () => {
  expect(secondMaxOddNumber([20, 36, -45, -78, -22, -12, -6])).to.equal(false);
});

it('secondMaxOddNumber([-5, -3, -1, 1, 3, 5]) should return 3', () => {
  expect(secondMaxOddNumber([-5, -3, -1, 1, 3, 5])).to.equal(3);
});

it('secondMaxOddNumber([7, 7, 7]) should return false', () => {
  expect(secondMaxOddNumber([7, 7, 7])).to.equal(false);
});

it('secondMaxOddNumber([]) should return false', () => {
  expect(secondMaxOddNumber([])).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
