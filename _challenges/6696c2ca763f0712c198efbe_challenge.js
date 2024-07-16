// NAMEEN:
// NAMERU:Сумма чисел в массиве, включая числа в строковом формате

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumOfNumbers`, которая принимает массив и возвращает сумму всех чисел в массиве.

В массиве могут быть разные типы данных, включая числа в строковом формате, например `['1', '2', '3']`. Такие числа
 нужно приводить к числовому типу и тоже суммировать.

Если массив пустой, то верните строку `'Array is empty'`.

Hint: если не выходит решить задачу, попробуйте использовать следующие проверки:
* `typeof arr[i] !== 'boolean'`
* `!isNaN(arr[i])`


Примеры запуска функции:
```javascript
sumOfNumbers(['abc', true, {}, [], null, NaN, undefined]);            // 0
sumOfNumbers(['1',2,'3',4,'5',10, true, (8 < 44), 'bca']);            // 25
sumOfNumbers(['150', '250', '300']);                                  // 700
sumOfNumbers([true, false, true]);                                    // 0
sumOfNumbers([]);                                                     // 'Array is empty'
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
  if(!arr.length) return 'Array is empty';
  let sum = 0;

  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] !== 'boolean' && !isNaN(arr[i])) sum += +arr[i];
  }

  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumOfNumbers', () => {
  expect(sumOfNumbers).to.be.a('function');
});

it("sumOfNumbers(['1',2,'3',4,'5',10, true, false, (5 > 4), 'b', 'c']) should return 25", () => {
  expect(sumOfNumbers(['1',2,'3',4,'5',10, true, false, (5 > 4), 'b', 'c'])).to.equal(25);
});

it("sumOfNumbers(['100', '200', '300']) should return 600", () => {
  expect(sumOfNumbers(['100', '200', '300'])).to.equal(600);
});

it("sumOfNumbers([true, false, true]) should return 0", () => {
  expect(sumOfNumbers([true, false, true])).to.equal(0);
});

it("sumOfNumbers(['abc', true, {a: 1}, [], null, NaN, undefined]) should return 0", () => {
  expect(sumOfNumbers(['abc', true, {a: 1}, [], null, NaN, undefined])).to.equal(0);
});

it("sumOfNumbers([]) should return 'Array is empty'", () => {
  expect(sumOfNumbers([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
