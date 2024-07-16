// NAMEEN:
// NAMERU:Перевернуть элементы массива строк

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseArrayOfStrings`, которая принимает массив строк.

Функция должна вернуть новый массив, в котором элементы строк перевернуты.

Если в строке есть цифры, то эта строка должна остаться без изменений.

Смешанных строк (символы и цифры) в массиве не будет.

Например: `['123', 'hello', 'false']` => `['123', 'olleh', 'eslaf']`

Если массив пустой, то вернуть строку `'Array is empty'`.

Метод `reverse` использовать нельзя.


Пример запуска функции:
```javascript
reverseArrayOfStrings(['123', 'test', 'abc']); // ['123', 'tset', 'cba']
reverseArrayOfStrings(['12345']);             // ['12345']
reverseArrayOfStrings(['dlrow', 'olleh']);    // ['world', 'hello']
reverseArrayOfStrings([]);                    // 'Array is empty'
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
  const numbers = '0123456789';
  let newArr = [];

  for(let i = 0; i < arr.length; i++){
    let chunk = '';
    for(let j = 0; j < arr[i].length; j++){
      if(!numbers.includes(arr[i][j])) chunk = arr[i][j] + chunk;
      else chunk += arr[i][j];
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

it("reverseArrayOfStrings(['hello', 'world', 'test']) should return ['olleh', 'dlrow', 'tset']", () => {
  expect(reverseArrayOfStrings(['hello', 'world', 'test'])).to.eql(['olleh', 'dlrow', 'tset']);
});

it("reverseArrayOfStrings(['abc', '12345', 'true', '67890']) should return ['cba', '12345', 'eurt', '67890']", () => {
  expect(reverseArrayOfStrings(['abc', '12345', 'true', '67890'])).to.eql(['cba', '12345', 'eurt', '67890']);
});

it("reverseArrayOfStrings(['12345', '012', '987', '456']) should return ['12345', '012', '987', '456']", () => {
  expect(reverseArrayOfStrings(['12345', '012', '987', '456'])).to.eql(['12345', '012', '987', '456']);
});

it("reverseArrayOfStrings(['avaJ olleH', 'nohtyP olleH', 'tpircSavaJ olleH']) should return ['Hello Java', 'Hello Python', 'Hello JavaScript']", () => {
  expect(reverseArrayOfStrings(['avaJ olleH', 'nohtyP olleH', 'tpircSavaJ olleH'])).to.eql(['Hello Java', 'Hello Python', 'Hello JavaScript']);
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
