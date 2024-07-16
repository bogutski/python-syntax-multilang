// NAMEEN:
// NAMERU:Второе минимальное положительное число

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте функцию `secondMinPositive`, которая принимает массив положительных и отрицательных чисел.

Функция должна вернуть второе `минимальное положительное число` из массива.

* Если массив пустой, то функция должна вернуть строку `'Array is empty'`
* Если в массиве нет положительных чисел, то функция должна вернуть строку `'There is no positive numbers'`
* Если в массиве одно положительное число или все позитивные числа равны, то функция должна вернуть строку `'There is no second min positive number'`

В функции всего три ошибки, до цикла.

Разберитесь как работает код и перепишите его самостоятельно.


Примеры запуска функции:
```javascript
secondMinPositive([1, 2, 3]);                      // 2
secondMinPositive([11, 9, 8, 7, 6]);               // 7
secondMinPositive([2, 6, 4, 2, 3, 1, 4, 5, 0]);    // 2
secondMinPositive([-22, 150, 30, 10, -55, -1, 0]); // 30
secondMinPositive([-100, -10, -2, -4]);            // 'There is no positive numbers'
secondMinPositive([3, 3, 3]);                      // 'There is no second min positive number'
secondMinPositive([-1, -2, 10, -3, -4]);           // 'There is no second min positive number'
secondMinPositive([]);                             // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
Function secondMinPositive[arr]{
  if(arr.length !== 0) return 'Array is empty';
  let min;
  let secondMin;

  for(let i = 0; i < arr.length; i++){

    if(arr[i] > 0){
      if(min === undefined){
        min = arr[i];
      } else if(arr[i] < min) {
        secondMin = min;
        min = arr[i]
      } else if(secondMin === undefined && arr[i] !== min){
        secondMin = arr[i]
      } else if(arr[i] < secondMin && arr[i] !== min){
        secondMin = arr[i];
      }
    }

  }

  if(min === undefined) return 'There is no positive numbers';
  else if(secondMin === undefined) return 'There is no second min positive number';
  else return secondMin;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function secondMinPositive(arr){
  if(arr.length === 0) return 'Array is empty';
  let min;
  let secondMin;

  for(let i = 0; i < arr.length; i++){

    if(arr[i] > 0){
      if(min === undefined){
        min = arr[i];
      } else if(arr[i] < min) {
        secondMin = min;
        min = arr[i]
      } else if(secondMin === undefined && arr[i] !== min){
        secondMin = arr[i]
      } else if(arr[i] < secondMin && arr[i] !== min){
        secondMin = arr[i];
      }
    }

  }
  if(min === undefined) return 'There is no positive numbers';
  else if(secondMin === undefined) return 'There is no second min positive number';
  else return secondMin;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function secondMinPositive', () => {
  expect(secondMinPositive).to.be.a('function');
});

it('Function secondMinPositive does not include method sort', () => {
  expect(secondMinPositive.toString()).to.not.include('sort');
});

it('Function secondMinPositive does not include method Math.min', () => {
  expect(secondMinPositive.toString()).to.not.include('Math.min');
});

it('secondMinPositive([1, 2, 3, 4, 5]) should return 2', () => {
  expect(secondMinPositive([1, 2, 3, 4, 5])).to.equal(2);
});

it('secondMinPositive([10, 9, 8, 7, 6, 5]) should return 6', () => {
  expect(secondMinPositive([10, 9, 8, 7, 6, 5])).to.equal(6);
});

it('secondMinPositive([2, 3, 1, 4, 5]) should return 2', () => {
  expect(secondMinPositive([2, 3, 1, 4, 5])).to.equal(2);
});

it('secondMinPositive([-2, 100, 25, 10, -5, -14, 0]) should return 25', () => {
  expect(secondMinPositive([-2, 100, 25, 10, -5, -14, 0])).to.equal(25);
});

it('secondMinPositive([-5, -63, -14, -222, -2]) should return "There is no positive numbers"', () => {
  expect(secondMinPositive([-5, -63, -14, -222, -2])).to.equal('There is no positive numbers');
});

it('secondMinPositive([1, 1, 1, 1, 1]) should return "There is no second min positive number"', () => {
  expect(secondMinPositive([1, 1, 1, 1, 1])).to.equal('There is no second min positive number');
});

it('secondMinPositive([-1, -5, -6, 5, -6, -10]) should return "There is no second min positive number"', () => {
  expect(secondMinPositive([-1, -5, -6, 5, -6, -10])).to.equal('There is no second min positive number');
});

it('secondMinPositive([]) should return "Array is empty"', () => {
  expect(secondMinPositive([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
