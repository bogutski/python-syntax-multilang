// NAMEEN:
// NAMERU:Найти второе минимальное число в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `secondMinNumber` принимает массив с числами и возвращает второе минимальное число из массива.

* Если массив пустой, то функция должна вернуть `false`.
* Если в массиве нет второго минимального числа, которое не равно минимальному числу, то функция должна вернуть строку `'There is no second min number'`.

Разберите каждую строчку функции и исправьте ошибки.

В функции 3 ошибки.

Постарайтесь переписать код самостоятельно.


Примеры запуска функции:
```javascript
secondMinNumber([-1, -4, -2, -4, 0, 5]);    // -2
secondMinNumber([225, 36, 45, 31, 71, 18]); // 31
secondMinNumber([1, 1, 1, 1, 1, 1]);        // 'There is no second min number'
secondMinNumber([]);                        // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function secondMinNumber(){
  if(arr.length = 0) false;
  let min = arr[0];
  let secondMin = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(arr[i] < min){
      secondMin = min;
      min = arr[i];
    } else if((secondMin === min || arr[i] < secondMin) && arr[i] !== min){
      secondMin = arr[i];
    }
  }

  if(secondMin === min) return 'There is no second min number';
  else return secondMin;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function secondMinNumber(arr){
  if(arr.length === 0) return false;
  let min = arr[0];
  let secondMin = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(arr[i] < min){
      secondMin = min;
      min = arr[i];
    } else if((secondMin === min || arr[i] < secondMin) && arr[i] !== min){
      secondMin = arr[i];
    }
  }

  if(secondMin === min) return 'There is no second min number';
  else return secondMin;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function secondMinNumber', () => {
  expect(secondMinNumber).to.be.a('function');
});

it('Function secondMinNumber does not include method sort', () => {
  expect(secondMinNumber.toString()).to.not.include('sort');
});

it('Function secondMinNumber does not include method Math.min', () => {
  expect(secondMinNumber.toString()).to.not.include('Math.min');
});

it('secondMinNumber([-1, -4, -2, -4, 0, 5]) should return -2', () => {
  expect(secondMinNumber([-1, -4, -2, -4, 0, 5])).to.be.equal(-2);
});

it('secondMinNumber([1, 1, 1, 1, 1, 1]) should return "There is no second min number"', () => {
  expect(secondMinNumber([1, 1, 1, 1, 1, 1])).to.be.equal('There is no second min number');
});

it('secondMinNumber([1, 2, 3, 4, 5, 6]) should return 2', () => {
  expect(secondMinNumber([1, 2, 3, 4, 5, 6])).to.be.equal(2);
});

it('secondMinNumber([99, 42, 32, 47, 55, 100]) should return 42', () => {
  expect(secondMinNumber([99, 42, 32, 47, 55, 100])).to.be.equal(42);
});

it('secondMinNumber([9, 4, 8, 3, 4, 7, 0]) should return 3', () => {
  expect(secondMinNumber([9, 4, 8, 3, 4, 7, 0])).to.be.equal(3);
});

it('secondMinNumber([]) should return false', () => {
  expect(secondMinNumber([])).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
