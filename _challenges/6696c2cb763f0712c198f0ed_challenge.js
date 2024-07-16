// NAMEEN:
// NAMERU:Удалить все элементы массива, кроме чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `onlyNumbers`, которая принимает массив с разными типами данных и возвращает массив только с числами.

Если массив пустой или нет чисел, то функция должна вернуть пустой массив.


Примеры запуска функции:
```javascript
onlyNumbers([1, 'test', 42, false, 4, undefined]); // [1, 42, 4]
onlyNumbers([1, 2, '3', 4, 5]);                    // [1, 2, 4, 5]
onlyNumbers([10]);                                 // [10]
onlyNumbers([]);                                   // []
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
    if (typeof arr[i] === 'number'){
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

it("onlyNumbers([1, 42, false, 4, undefined, 'test']) should return [1, 42, 4]", () => {
  expect(onlyNumbers([1, 42, false, 4, undefined, 'test'])).to.deep.equal([1, 42, 4]);
});

it("onlyNumbers([1, 2, 3, 4, 5]) should return [1, 2, 3, 4, 5]", () => {
  expect(onlyNumbers([1, 2, 3, 4, 5])).to.deep.equal([1, 2, 3, 4, 5]);
});

it("onlyNumbers(['10', 20, '30', 40, '50', 100]) should return [20, 40, 100]", () => {
  expect(onlyNumbers(['10', 20, '30', 40, '50', 100])).to.deep.equal([20, 40, 100]);
});

it("onlyNumbers([555]) should return [555]", () => {
  expect(onlyNumbers([555])).to.deep.equal([555]);
});

it("onlyNumbers([]) should return []", () => {
  expect(onlyNumbers([])).to.deep.equal([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
