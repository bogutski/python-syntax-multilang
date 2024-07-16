// NAMEEN:
// NAMERU:Найти все числа в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `onlyNumbers`, которая принимает массив с разными типами данных.

Числа могут быть как в числовом типе, так и в строковом.

Функция должна найти все числа, включая числа в строковом типе, и вернуть их в виде массива.

Числа в строковом типе должны быть преобразованы в числовой тип, перед тем как добавить их в массив.

Если массив пустой или нет чисел, то функция должна вернуть пустой массив.


Примеры запуска функции:
```javascript
onlyNumbers([1, 'test', 42, false, '44', undefined, NaN]); // [1, 42, 44]
onlyNumbers([1, '2', 3, '4', 5]);                          // [1, 2, 3, 4, 5]
onlyNumbers([true, false, null]);                          // []
onlyNumbers([]);                                           // []
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
  const newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'number' && !isNaN(arr[i])) newArr.push(arr[i])
    else if(!isNaN(arr[i]) && arr[i] !== true && arr[i] !== false && arr[i] !== null && arr[i] !== '') newArr.push(+arr[i])
  }
  return newArr
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function onlyNumbers', () => {
  expect(onlyNumbers).to.be.a('function');
});

it("onlyNumbers([1, 42, false, 4, undefined, 'test']) should return [1, 42, 4]", () => {
  expect(onlyNumbers([1, 42, false, 4, undefined, 'test'])).to.deep.equal([1, 42, 4]);
});

it("onlyNumbers([1, '2', 3, '4', 5]) should return [1, 2, 3, 4, 5]", () => {
  expect(onlyNumbers([1, '2', 3, '4', 5])).to.deep.equal([1, 2, 3, 4, 5]);
});

it("onlyNumbers(['10', 20, '30', 40, '50', 100]) should return [10, 20, 30, 40, 50, 100]", () => {
  expect(onlyNumbers(['10', 20, '30', 40, '50', 100])).to.deep.equal([10, 20, 30, 40, 50, 100]);
});

it("onlyNumbers([NaN, 'test', undefined, false, true]) should return []", () => {
  expect(onlyNumbers([NaN, 'test', undefined, false, true])).to.deep.equal([]);
});

it("onlyNumbers([(5 > 2), true, NaN, '1256874', false, null, '']) should return [1256874]", () => {
  expect(onlyNumbers([(5 > 2), true, NaN, '1256874', false, null, ''])).to.deep.equal([1256874]);
});

it("onlyNumbers(['555']) should return [555]", () => {
  expect(onlyNumbers(['555'])).to.deep.equal([555]);
});

it("onlyNumbers([]) should return []", () => {
  expect(onlyNumbers([])).to.deep.equal([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
