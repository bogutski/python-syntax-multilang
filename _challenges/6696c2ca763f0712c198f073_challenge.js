// NAMEEN:
// NAMERU:Найти второе минимальное число с помощью циклов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `secondMinNumber` принимает массив чисел и возвращает второе минимальное число из массива.

В этой задаче было использовано два цикла, первый цикл находит первое минимальное число в массиве, второй цикл находит
 второе минимальное число в массиве.

* Если массив пустой, то функция возвращает строку `'Array is empty'`.
* Если в массиве нет второго минимального числа, то функция возвращает строку `'There is no second min number'`.

Добавьте нужный код на место пропусков: `<code here...>`, чтобы функция работала правильно.

Разберите код и попробуйте переписать его самостоятельно.


Примеры запуска функции:
```javascript
secondMinNumber([1, 2, 3, 4, 5]);    // 2
secondMinNumber([-5, 2, -1, 10, 4]); // -1
secondMinNumber([1, 1, 1, 1, 1]);    // 'There is no second min number'
secondMinNumber([1]);                // 'There is no second min number'
secondMinNumber([]);                 // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function secondMinNumber(arr){
  if( <code here...> ) return 'Array is empty';
  if( <code here...> ) return 'There is no second min number';

  let min = arr[0];
  let secondMin = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(arr[i] < min) min = arr[i];
  }

  for(let i = 1; i < arr.length; i++){
    if((secondMin === min || arr[i] < secondMin) && arr[i] !== min) secondMin = arr[i];
  }

  if( <code here...> ) return 'There is no second min number';
  else <code here...>
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function secondMinNumber(arr){
  if(arr.length === 0) return 'Array is empty';
  if(arr.length === 1) return 'There is no second min number';

  let min = arr[0];
  let secondMin = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(arr[i] < min) min = arr[i];
  }

  for(let i = 1; i < arr.length; i++){
    if((secondMin === min || arr[i] < secondMin) && arr[i] !== min) secondMin = arr[i];
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

it('secondMinNumber([5, 3, 4, 1, -5, -2, -10]) should return -5', () => {
  expect(secondMinNumber([5, 3, 4, 1, -5, -2, -10])).to.equal(-5);
});

it('secondMinNumber([5, 7, 66, 12, 3, 6, 47, 85]) should return 5', () => {
  expect(secondMinNumber([5, 7, 66, 12, 3, 6, 47, 85])).to.equal(5);
});

it('secondMinNumber([-25, 36, -42, 62, 1, 0, -40]) should return -40', () => {
  expect(secondMinNumber([-25, 36, -42, 62, 1, 0, -40])).to.equal(-40);
});

it('secondMinNumber([-11, -Infinity, -5, 3, 14, -55]) should return -55', () => {
  expect(secondMinNumber([-11, -Infinity, -5, 3, 14, -55])).to.equal(-55);
});

it('secondMinNumber([-Infinity, 50, 13, 0, Infinity, -Infinity, Infinity, -12, 6]) should return -12', () => {
  expect(secondMinNumber([-Infinity, 50, 13, 0, Infinity, -Infinity, Infinity, -12, 6])).to.equal(-12);
});

it('secondMinNumber([100, 125, 55, 35, 120, 654]) should return 55', () => {
  expect(secondMinNumber([100, 125, 55, 35, 120, 654])).to.equal(55);
});

it('secondMinNumber([5, 5, 5]) should return "There is no second min number"', () => {
  expect(secondMinNumber([5, 5, 5])).to.equal('There is no second min number');
});

it('secondMinNumber([10]) should return "There is no second min number"', () => {
  expect(secondMinNumber([10])).to.equal('There is no second min number');
});

it('secondMinNumber([]) should return "Array is empty"', () => {
  expect(secondMinNumber([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
