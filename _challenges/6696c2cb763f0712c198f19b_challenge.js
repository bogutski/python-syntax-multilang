// NAMEEN:
// NAMERU:Найти булевые и строковые значения в массиве и проверить массив на симметричность

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isArraySymmetrical`, которая принимает массив с разными типами данных.

Функция должна выбрать только `булевые` и `строковые` значения из массива и записать их в новый массив.

После чего проверить является ли новый массив симметричным (одинаковым с начала и с конца).

* Если в массиве нет `булевых` или `строковых` значений, то вернуть строку `'There are no boolean or string in the array'`.
* Если массив пустой, то вернуть строку `'Array is empty'`.


Примеры запуска функции:
```javascript
isArraySymmetrical([false, 123, 'test', 4784, false]);                // true
isArraySymmetrical([undefined, NaN, true, 'undefined']);              // false
isArraySymmetrical([10 > 5, 30, false, 40, 40, false, 30, 20, true]); // true
isArraySymmetrical([true, false, 'test', false, true]);               // true
isArraySymmetrical([undefined, NaN, null]);                           // 'There ara no boolean or string in the array'
isArraySymmetrical([]);                                               // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isArraySymmetrical(arr){
  if(!arr.length) return 'Array is empty';
  const newArr = [];

  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'boolean' || typeof arr[i] === 'string') newArr.push(arr[i]);
  }

  if(!newArr.length) return 'There are no boolean or string in the array';

  for(let i = 0; i < newArr.length / 2; i++){
    if(newArr[i] !== newArr[newArr.length - 1 - i]) return false
  }

  return true;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isArraySymmetrical', () => {
  expect(isArraySymmetrical).to.be.a('function');
});

it("Function isArraySymmetrical does not include 'reverse' method", () => {
  expect(isArraySymmetrical.toString()).to.not.include('reverse');
});

it("Function isArraySymmetrical does not include 'join' method", () => {
  expect(isArraySymmetrical.toString()).to.not.include('join');
});

it("isArraySymmetrical([true, false, 123, 'test', 123, false, true]) should return true", () => {
  expect(isArraySymmetrical([true, false, 123, 'test', 123, false, true])).to.be.true;
});

it("isArraySymmetrical([2, 1, 0, 'test', 2, 'should', 6, 'BE', 0, 'FALSE', 2]) should return false", () => {
  expect(isArraySymmetrical([2, 1, 0, 'test', 2, 'should', 6, 'BE', 0, 'FALSE', 2])).to.be.false;
});

it("isArraySymmetrical([undefined, NaN, true, 'undefined', NaN, true]) should return true", () => {
  expect(isArraySymmetrical([undefined, NaN, true, 'undefined', NaN, true])).to.be.true;
});

it("isArraySymmetrical(['10', 20 > 5, 30, true,40, 50, 40, false, 30, 20, true, 10 < 25, '10']) should return true", () => {
  expect(isArraySymmetrical(['10', 20 > 5, 30, true,40, 50, 40, false, 30, 20, true, 10 < 25, '10'])).to.be.true;
});

it("isArraySymmetrical([null, 123, undefined, NaN, 9, 0, 1]) should return 'There are no boolean or string in the array'", () => {
  expect(isArraySymmetrical([null, 123, undefined, NaN, 9, 0, 1])).to.equal('There are no boolean or string in the array');
});

it("isArraySymmetrical([]) should return 'Array is empty'", () => {
  expect(isArraySymmetrical([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
