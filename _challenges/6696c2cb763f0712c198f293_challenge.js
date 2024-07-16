// NAMEEN:
// NAMERU:Количество булевых значений

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `areAllElementsBoolean`, которая принимает массив с различными типами данных.

Функция должна вернуть строку в зависимости от того, какие типы данных присутствуют в массиве:

* Если в массиве только булевы значения, то вернуть строку: `Yes, number of boolean <количество булевых значений>`.
* Если в массиве нет булевых значений, то вернуть строку: `There is no boolean`.
* Если в массиве есть булевы значения и другие типы данных, то вернуть строку: `No. Number of boolean <количество булевых значений>, other <количество остальных значений>`.
* Если массив пустой, то вернуть строку: `Array is empty`.

Внутри подмассивов проверять не нужно, если это объект или массив, то считать их за не булевые элементы.


Примеры запуска функции:
```javascript
areAllElementsBoolean([true, false, true, false, 5 > 10]);  // 'Yes, number of boolean 5'
areAllElementsBoolean([10, 0, 'test', 'true', [], {}]);     // 'There is no boolean'
areAllElementsBoolean([true, undefined, true, NaN, false]); // 'No. Number of boolean 3, other 2'
areAllElementsBoolean([ ]);                                 // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function areAllElementsBoolean(arr)
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function areAllElementsBoolean(arr){
  if(arr.length === 0) return 'Array is empty';
  let count = 0;

  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'boolean') count++;
  }

  if(count === arr.length) return `Yes, number of boolean ${count}`;
  else if(count === 0) return `There is no boolean`;
  else return `No. Number of boolean ${count}, other ${arr.length - count}`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function areAllElementsBoolean', () => {
  expect(areAllElementsBoolean).to.be.a('function');
});

it("areAllElementsBoolean([true, false, true, false, 5 > 3, 10 < 5]) should return 'Yes, number of boolean 6'", () => {
  expect(areAllElementsBoolean([true, false, true, false, 5 > 3, 10 < 5])).to.be.equal('Yes, number of boolean 6');
});

it("areAllElementsBoolean([12, 30, 'test', 'true', [], {}]) should return 'There is no boolean'", () => {
  expect(areAllElementsBoolean([12, 30, 'test', 'true', [], {}])).to.be.equal('There is no boolean');
});

it("areAllElementsBoolean([true, undefined, false, null, 'true', 5, 'test']) should return 'No. Number of boolean 2, other 5'", () => {
  expect(areAllElementsBoolean([true, undefined, false, null, 'true', 5, 'test'])).to.be.equal('No. Number of boolean 2, other 5');
});

it("areAllElementsBoolean(['a', 'b', [], NaN, 52, -963, false, true]) should return 'No. Number of boolean 2, other 6'", () => {
  expect(areAllElementsBoolean(['a', 'b', [], NaN, 52, -963, false, true])).to.be.equal('No. Number of boolean 2, other 6');
});

it("areAllElementsBoolean([150 + 200 === 350, 'true', 'test', 7, [null, 'null']]) should return 'No. Number of boolean 1, other 4'", () => {
  expect(areAllElementsBoolean([150 + 200 === 350, 'true', 'test', 7, [null, 'null']])).to.be.equal('No. Number of boolean 1, other 4');
});

it("areAllElementsBoolean([]) should return 'Array is empty'", () => {
  expect(areAllElementsBoolean([])).to.be.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
