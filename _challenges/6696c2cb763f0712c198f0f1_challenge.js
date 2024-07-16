// NAMEEN:
// NAMERU:Найти числа и преобразовать в массив цифр

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `onlyNumbers`, которая принимает массив с разными типами данных.

Функция должна найти все числа с типом данных `number` и записать их в строку.

После выполнения первого цикла, добавьте второй цикл, который преобразует строку в новый массив `цифр` (0 - 9),
 преобразовав каждый элемент строки в числовой тип данных.

Если массив пустой или в нем нет чисел, то функция должна вернуть `false`.

Методы использовать нельзя.


Примеры запуска функции:
```javascript
onlyNumbers([0, 1, 2, 'a', '1', NaN, true]); // [0, 1, 2]
onlyNumbers([98745, 12547, 3000]);           // [9, 8, 7, 4, 5, 1, 2, 5, 4, 7, 3, 0, 0, 0]
onlyNumbers(['a', 'b', 'c']);                // false
onlyNumbers([]);                             // false
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
  if(!arr.length) return false;
  const newArr = [];
  let str = '';

  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number' && !isNaN(arr[i])) str += arr[i];
  }

  for(let i = 0; i < str.length; i++){
    newArr.push(+str[i]);
  }

  if(!str.length) return false;
  else return newArr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function onlyNumbers', () => {
  expect(onlyNumbers).to.be.a('function');
});

it("Function onlyNumbers does not include method split", () => {
  expect(onlyNumbers.toString()).to.not.include('split');
});

it("onlyNumbers([111, 22, 345, 'a', 'b', 'c', '1', NaN, true]) should return [1, 1, 1, 2, 2, 3, 4, 5]", () => {
  expect(onlyNumbers([111, 22, 345, 'a', 'b', 'c', '1', NaN, true])).to.deep.equal([1, 1, 1, 2, 2, 3, 4, 5]);
});

it("onlyNumbers(['123', 'text', 'a', null, 'c', 9870, NaN, false, 0]) should return [9, 8, 7, 0, 0]", () => {
  expect(onlyNumbers(['123', 'text', 'a', null, 'c', 9870, NaN, false, 0])).to.deep.equal([9, 8, 7, 0, 0]);
});

it("onlyNumbers([98745, 12547, 3000, 98741563]) should return [9, 8, 7, 4, 5, 1, 2, 5, 4, 7, 3, 0, 0, 0, 9, 8, 7, 4, 1, 5, 6, 3]", () => {
  expect(onlyNumbers([98745, 12547, 3000, 98741563])).to.deep.equal([9, 8, 7, 4, 5, 1, 2, 5, 4, 7, 3, 0, 0, 0, 9, 8, 7, 4, 1, 5, 6, 3]);
});

it("onlyNumbers(['no', 'numbers', 'in', 'array']) should return false", () => {
  expect(onlyNumbers(['no', 'numbers', 'in', 'array'])).to.be.false;
});

it("onlyNumbers([]) should return false", () => {
  expect(onlyNumbers([])).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
