// NAMEEN:
// NAMERU:Найти второе максимальное число в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `secondMaxNumber`, которая принимает массив с числами и возвращает второе максимальное число из массива.

* Если массив пустой, то функция должна вернуть `false`.
* Если в массиве нет второго максимального числа, которое не равно максимальному, то функция должна вернуть `There is no second max number`.


Примеры запуска функции:
```javascript
secondMaxNumber([-1, -42, -2, -4, 10, 5]); // 5
secondMaxNumber([22, 36, 45, 31, 71, 18]); // 45
secondMaxNumber([5, 5, 5]);                // 'There is no second max number'
secondMaxNumber([]);                       // false
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
  if(arr.length === 0) return false;
  let max = arr[0];
  let secondMax = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      secondMax = max;
      max = arr[i];
    } else if((secondMax === max || arr[i] > secondMax) && arr[i] !== max){
      secondMax = arr[i];
    }
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

it('secondMaxNumber([-1, -4, -2, -4, 0, 5]) should return 0', () => {
  expect(secondMaxNumber([-1, -4, -2, -4, 0, 5])).to.be.equal(0);
});

it('secondMaxNumber([1, 1, 1, 1, 1, 1]) should return "There is no second max number"', () => {
  expect(secondMaxNumber([1, 1, 1, 1, 1, 1])).to.be.equal('There is no second max number');
});

it('secondMaxNumber([1, 2, 3, 4, 5, 6]) should return 5', () => {
  expect(secondMaxNumber([1, 2, 3, 4, 5, 6])).to.be.equal(5);
});

it('secondMaxNumber([99, 42, 32, 47, 55, 100]) should return 99', () => {
  expect(secondMaxNumber([99, 42, 32, 47, 55, 100])).to.be.equal(99);
});

it('secondMaxNumber([9, 4, 8, 3, 4, 7, 0]) should return 8', () => {
  expect(secondMaxNumber([9, 4, 8, 3, 4, 7, 0])).to.be.equal(8);
});

it('secondMaxNumber([]) should return false', () => {
  expect(secondMaxNumber([])).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
