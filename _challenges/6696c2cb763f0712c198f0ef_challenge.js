// NAMEEN:
// NAMERU:Найти все цифры в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `onlyNumbers`, которая принимает массив с разными типами данных.

Функция должна вернуть новый массив только c `цифрами` (от 0 до 9).

Менять типы данных не нужно.

Если массив пустой или в нем нет цифр, то верните пустой массив.


Примеры запуска функции:
```javascript
onlyNumbers([1, 2, 3, 44, 12, 336, 4, 78, 5]);        // [1, 2, 3, 4, 5]
onlyNumbers(['13', '3', '7', 0, 1, '55', 2, 8]);      // [0, 1, 2, 8]
onlyNumbers(['aaa', 'b', 'c1', 'd', 'e2', 'f', 'g']); // []
onlyNumbers([true, null, NaN, Infinity]);             // []
onlyNumbers([]);                                      // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function onlyNumbers(arr){
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const newArr = []
  for (let i = 0; i < arr.length; i++){
    if (numbers.includes(arr[i])){
      newArr.push(arr[i])
    }
  }
  return newArr
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function onlyNumbers', () => {
  expect(onlyNumbers).to.be.a('function');
});

it("onlyNumbers([1, 2, 3, 44, 12, 36, 5, 4, 78, 6]) should return [1, 2, 3, 5, 4, 6]", () => {
  expect(onlyNumbers([1, 2, 3, 44, 12, 36, 5, 4, 78, 6])).to.deep.equal([1, 2, 3, 5, 4, 6]);
});

it("onlyNumbers(['13', '3', '7', 0, '1', '55', '2', 8]) should return [0, 8]", () => {
  expect(onlyNumbers(['13', '3', '7', 0, '1', '55', '2', 8])).to.deep.equal([0, 8]);
});

it("onlyNumbers(['a', 'b', 'c', 'd', 'e', 'f', 'g']) should return []", () => {
  expect(onlyNumbers(['a', 'b', 'c', 'd', 'e', 'f', 'g'])).to.deep.equal([]);
});

it("onlyNumbers([true, false, undefined, null, NaN, Infinity]) should return []", () => {
  expect(onlyNumbers([true, false, undefined, null, NaN, Infinity])).to.deep.equal([]);
});

it("onlyNumbers([]) should return []", () => {
  expect(onlyNumbers([])).to.deep.equal([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
