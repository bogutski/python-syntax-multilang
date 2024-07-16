// NAMEEN:
// NAMERU:Второе максимальное отрицательное число

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `secondMaxNegative`, которая принимает массив положительных и отрицательных чисел.

Функция должна вернуть второе `максимальное отрицательное число` из массива.

* Если массив пустой, то функция должна вернуть строку `'Array is empty'`
* Если в массиве нет отрицательных чисел, то функция должна вернуть строку `'There is no negative numbers'`
* Если в массиве одно отрицательное число или все отрицательные числа равны, то функция должна вернуть строку `'There is no second max negative number'`

Попробуйте решить задачу по примеру с прошлой задачи.


Примеры запуска функции:
```javascript
secondMaxNegative([-1, -2, -3]);               // -2
secondMaxNegative([ -7, -6, -5]);              // -6
secondMaxNegative([-3, 10, 2, 1, -5, -10, 0]); // -5
secondMaxNegative([0, 10, 15, 20, 25]);        // 'There is no negative numbers'
secondMaxNegative([-22, -22, -22]);            // 'There is no second max negative number'
secondMaxNegative([1, 2, 4, -3, 8, 11]);       // 'There is no second max negative number'
secondMaxNegative([]);                         // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function secondMaxNegative(arr){
  if(arr.length === 0) return 'Array is empty';
  let max;
  let secondMax;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      if(max === undefined){
        max = arr[i];
      } else if(arr[i] > max) {
        secondMax = max;
        max = arr[i]
      } else if(secondMax === undefined && arr[i] !== max){
        secondMax = arr[i]
      } else if(arr[i] > secondMax && arr[i] !== max){
        secondMax = arr[i];
      }
    }
  }

  if(max === undefined) return 'There is no negative numbers';
  else if(secondMax === undefined) return 'There is no second max negative number';
  else return secondMax;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function secondMaxNegative', () => {
  expect(secondMaxNegative).to.be.a('function');
});

it('Function secondMaxNegative does not include method sort', () => {
  expect(secondMaxNegative.toString()).to.not.include('sort');
});

it('Function secondMaxNegative does not include method Math.max', () => {
  expect(secondMaxNegative.toString()).to.not.include('Math.max');
});

it('secondMaxNegative([-1, -2, -3, -4, -5]) should return -2', () => {
  expect(secondMaxNegative([-1, -2, -3, -4, -5])).to.equal(-2);
});

it('secondMaxNegative([-10, -9, -8, -7, -6, -5]) should return -6', () => {
  expect(secondMaxNegative([-10, -9, -8, -7, -6, -5])).to.equal(-6);
});

it('secondMaxNegative([-2, -3, -1, -4, -5]) should return -2', () => {
  expect(secondMaxNegative([-2, -3, -1, -4, -5])).to.equal(-2);
});

it('secondMaxNegative([-2, 100, 25, 10, -5, -14, 0]) should return -5', () => {
  expect(secondMaxNegative([-2, 100, 25, 10, -5, -14, 0])).to.equal(-5);
});

it('secondMaxNegative([5, 63, 14, 22, 2]) should return "There is no negative numbers"', () => {
  expect(secondMaxNegative([5, 63, 14, 22, 22])).to.equal('There is no negative numbers');
});

it('secondMaxNegative([-2, -2, -2]) should return "There is no second max negative number"', () => {
  expect(secondMaxNegative([-2, -2, -2])).to.equal('There is no second max negative number');
});

it('secondMaxNegative([1, 5, 6, -5, 6, 10]) should return "There is no second max negative number"', () => {
  expect(secondMaxNegative([1, 5, 6, -5, 6, 10])).to.equal('There is no second max negative number');
});

it('secondMaxNegative([]) should return "Array is empty"', () => {
  expect(secondMaxNegative([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
