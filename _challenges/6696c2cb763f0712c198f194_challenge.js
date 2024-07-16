// NAMEEN:
// NAMERU:Нахождение чисел и проверка на симметричность

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isArraySymmetrical`, которая принимает массив с разными типами данных.

Функция должно найти все числа в массиве и записать их в новый массив.

Проверка на симметричность должна происходить только по новому массиву, в котором хранятся числа.

* Функция должна вернуть `true`, если массив симметричный и `false` если не симметричный.

* Если массив пустой, то функция должна вернуть строку `Array is empty`.

* Если в массиве нет чисел, то функция должна вернуть строку `There are no numbers in the array`.


Примеры запуска функции:
```javascript
isArraySymmetrical(['a', 1, 2, 4, 'B', 3, 'C', 2, 'b', 1, 'A']); // => [1, 2, 4, 3, 2, 1] => false
isArraySymmetrical([23, 55, 'a', 74, 'b', 55, 23]);              // => [23, 55, 74, 55, 23] => true
isArraySymmetrical(['a', 'b', 'c', 'test', true, false]);        // There are no numbers in the array
isArraySymmetrical([]);                                          // 'Array is empty'
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
    if(typeof arr[i] === 'number') newArr.push(arr[i]);
  }

  if(!newArr.length) return 'There are no numbers in the array';

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

it("isArraySymmetrical([23, 5, 'a', 74, 'b', 5, 23]) should return true", () => {
  expect(isArraySymmetrical([23, 5, 'a', 74, 'b', 5, 23])).to.be.true;
});

it("isArraySymmetrical([2, 1, 0, 'test', 2, 'should', 6, 'BE', 0, 'FALSE', 2]) should return false", () => {
  expect(isArraySymmetrical([2, 1, 0, 'test', 2, 'should', 6, 'BE', 0, 'FALSE', 2])).to.be.false;
});

it("isArraySymmetrical([999, '1', 'JavaScript', 123, 'WORLD', 123, 'JAVASCRIPT', '1', 999]) should return true", () => {
  expect(isArraySymmetrical([999, '1', 'JavaScript', 123, 'WORLD', 123, 'JAVASCRIPT', '1', 999])).to.be.true;
});

it("isArraySymmetrical([10, 20, 30, true,40, 50, 40, false, 30, 20, true, 10]) should return true", () => {
  expect(isArraySymmetrical([10, 20, 30, true,40, 50, 40, false, 30, 20, true, 10])).to.be.true;
});

it("isArraySymmetrical(['A', 'b', 'C', 'E', 'b', 'A']) should return 'There are no numbers in the array'", () => {
  expect(isArraySymmetrical(['A', 'b', 'C', 'E', 'b', 'A'])).to.equal('There are no numbers in the array');
});

it("isArraySymmetrical([]) should return 'Array is empty'", () => {
  expect(isArraySymmetrical([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
