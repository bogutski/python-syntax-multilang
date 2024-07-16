// NAMEEN:
// NAMERU:Перевернуть массивы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseArrays`, которая принимает два массива с разными типами данных.

Функция должна вернуть новый массив, в который входят все элементы из двух входных массивов, но в обратном порядке.

Например: `[1, 2, 3]` и `['a', 'b', 'c']` должны вернуть `[ 'c', 'b', 'a', 3, 2, 1 ]`.

Если оба массива пустые, то вернуть строку `'Both arrays are empty'`.

Метод `reverse` использовать нельзя.


Пример запуска функции:
```javascript
reverseArrays([1, 2, 3], [4, 5, 6]);         // [6, 5, 4, 3, 2, 1]
reverseArrays(['a', 'b', 'c'], []);          // ['c', 'b', 'a']
reverseArrays([], ['test', '123', 'false']); // ['false', '123', 'test']
reverseArrays([], []);                       // 'Both arrays are empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseArrays(arr1, arr2){
  if(!arr1.length && !arr2.length) return 'Both arrays are empty';
  const fullArr = [...arr1, ...arr2]
  const newArr = [];

  for(let i = 0; i < fullArr.length; i++){
    newArr.unshift(fullArr[i]);
  }

  return newArr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseArrays', () => {
  expect(reverseArrays).to.be.a('function');
});

it("Function reverseArrays does not include '.reverse' method", () => {
  expect(reverseArrays.toString()).to.not.include('.reverse');
});

it("reverseArrays([1, 2 3], [4, 5, 6]) should return [6, 5, 4, 3, 2, 1]", () => {
  expect(reverseArrays([1, 2, 3], [4, 5, 6])).to.eql([6, 5, 4, 3, 2, 1]);
});

it("reverseArrays([0, 9, 8, 7], ['a', 'b', 'c', 'd']) should return ['d', 'c', 'b', 'a', 7, 8, 9, 0]", () => {
  expect(reverseArrays([0, 9, 8, 7], ['a', 'b', 'c', 'd'])).to.eql(['d', 'c', 'b', 'a', 7, 8, 9, 0]);
});

it("reverseArrays([true, false], [22, 456, 100, 551, 27, 36]) should return [36, 27, 551, 100, 456, 22, false, true]", () => {
  expect(reverseArrays([true, false], [22, 456, 100, 551, 27, 36])).to.eql([36, 27, 551, 100, 456, 22, false, true]);
});

it("reverseArrays([0, 5, 10], []) should return [10, 5, 0]", () => {
  expect(reverseArrays([0, 5, 10], [])).to.eql([10, 5, 0]);
});

it("reverseArrays([], []) should return 'Both arrays are empty'", () => {
  expect(reverseArrays([], [])).to.eql('Both arrays are empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
