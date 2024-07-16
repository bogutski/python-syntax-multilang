// NAMEEN:
// NAMERU:Перевернуть массив строк

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseArrayOfStrings`, которая принимает массив строк.

Функция должна вернуть новый массив, в котором массив перевернут в обратном порядке, и каждая строка внутри массива
 перевернута в обратном порядке.

Например: `['abc', '123', 'false']` => `['eslaf', '321', 'cba']`

Если массив пустой, то вернуть строку `'Array is empty'`.

Метод `reverse` использовать нельзя.


Пример запуска функции:
```javascript
reverseArrayOfStrings(['123', 'test', 'abc']); // ['cba', 'tset', '321']
reverseArrayOfStrings(['12345']);              // ['54321']
reverseArrayOfStrings(['dlrow', 'olleh']);     // ['hello', 'world']
reverseArrayOfStrings([]);                     // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseArrayOfStrings(arr){
  if(!arr.length) return 'Array is empty';
  let newArr = [];

  for(let i = arr.length - 1; i >= 0 ; i--){
    let chunk = '';
    for(let j = 0; j < arr[i].length; j++){
      chunk = arr[i][j] + chunk;
    }
    newArr.push(chunk);
  }

  return newArr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseArrayOfStrings', () => {
  expect(reverseArrayOfStrings).to.be.a('function');
});

it("Function reverseArrayOfStrings does not include '.reverse' method", () => {
  expect(reverseArrayOfStrings.toString()).to.not.include('.reverse');
});

it("reverseArrayOfStrings(['hello', 'world', 'test']) should return ['tset', 'dlrow', 'olleh']", () => {
  expect(reverseArrayOfStrings(['hello', 'world', 'test'])).to.eql(['tset', 'dlrow', 'olleh']);
});

it("reverseArrayOfStrings(['abc', '12345', 'true', '67890']) should return ['09876', 'eurt', '54321', 'cba']", () => {
  expect(reverseArrayOfStrings(['abc', '12345', 'true', '67890'])).to.eql(['09876', 'eurt', '54321', 'cba']);
});

it("reverseArrayOfStrings(['avaJ olleH', 'nohtyP olleH', 'tpircSavaJ olleH']) should return ['Hello JavaScript', 'Hello Python', 'Hello Java']", () => {
  expect(reverseArrayOfStrings(['avaJ olleH', 'nohtyP olleH', 'tpircSavaJ olleH'])).to.eql(['Hello JavaScript', 'Hello Python', 'Hello Java']);
});

it("reverseArrayOfStrings(['gnimmargorp SJ olleH']) should return ['Hello JS programming']", () => {
  expect(reverseArrayOfStrings(['gnimmargorp SJ olleH'])).to.eql(['Hello JS programming']);
});

it("reverseArrayOfStrings([]) should return 'Array is empty'", () => {
  expect(reverseArrayOfStrings([])).to.eql('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
