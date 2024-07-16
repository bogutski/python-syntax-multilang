// NAMEEN:
// NAMERU:Из массива в строку

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `arrayToString`, которая принимает массив.

Функция должна вернуть строку, состоящую из элементов массива.

Если массив пустой, то функция должна вернуть строку `'Array is empty'`.

Метод `join` использовать нельзя.


Примеры запуска функции:
```javascript
arrayToString(['a', 'b', 'c']) // 'abc'
arrayToString([1, 2, 3]) // '123'
arrayToString([]) // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function arrayToString(arr){
  if(!arr.length) return 'Array is empty';
  let result = '';
  for(let i = 0; i < arr.length; i++){
    result += arr[i];
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function arrayToString', () => {
  expect(arrayToString).to.be.a('function');
});

it("Function arrayToString doesn't include join method", () => {
  expect(arrayToString.toString()).to.not.include('join');
});

it("arrayToString(['a', 'b', 'c']) returns 'abc'", () => {
  expect(arrayToString(['a', 'b', 'c'])).to.equal('abc');
});

it("arrayToString(['a', 'bc', 'def', 'ghij']) returns 'abcdefghij'", () => {
  expect(arrayToString(['a', 'bc', 'def', 'ghij'])).to.equal('abcdefghij');
});

it("arrayToString([1, 2, 3, 4, 5]) returns '12345'", () => {
  expect(arrayToString([1, 2, 3, 4, 5])).to.equal('12345');
});

it("arrayToString(['a', 'b', 'c', 1, 2, 3]) returns 'abc123'", () => {
  expect(arrayToString(['a', 'b', 'c', 1, 2, 3])).to.equal('abc123');
});

it("arrayToString(['', '', '']) returns ''", () => {
  expect(arrayToString(['', '', ''])).to.equal('');
});

it("arrayToString([]) returns 'Array is empty'", () => {
  expect(arrayToString([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
