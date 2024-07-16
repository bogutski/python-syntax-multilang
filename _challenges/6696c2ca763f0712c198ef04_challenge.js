// NAMEEN:
// NAMERU:Перевернуть самую длинную строку

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseBiggerString`, которая принимает массив из двух строк.

Функция должна сравнить длину строк и перевернуть ту, которая длиннее.

Если строки одинаковой длины, то переверните первую строку.

Функция должна возвращать массив с `первой строкой`, `второй строкой` и `перевернутой строкой`.


Примеры запуска функции:
```js
reverseBiggerString(['Hello', 'World']) // => [ 'Hello', 'World', 'olleH' ]
reverseBiggerString(['blue', 'red'])    // => [ 'blue', 'red', 'eulb' ]
reverseBiggerString(['Hello', 'JS'])    // => [ 'Hello', 'JS', 'olleH' ]
reverseBiggerString(['', ''])           // => [ '', '', '' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function reverseBiggerString
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseBiggerString(arr){
  let string;
  let reversed = '';
  if(arr[0].length < arr[1].length) string = arr[1]
  else string = arr[0]
  for(let i = string.length - 1; i >= 0; i--){
    reversed += string[i];
  }
  arr.push(reversed)
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseBiggerString', () => {
  expect(reverseBiggerString).to.be.a('function');
});

it("reverseBiggerString(['Hello', 'World']) should return ['Hello', 'World', 'olleH']", () => {
  expect(reverseBiggerString(['Hello', 'World'])).to.deep.equal(['Hello', 'World', 'olleH']);
});

it("reverseBiggerString(['blue', 'red']) should return ['blue', 'red', 'eulb']", () => {
  expect(reverseBiggerString(['blue', 'red'])).to.deep.equal(['blue', 'red', 'eulb']);
});

it("reverseBiggerString(['Hello', 'JS']) should return ['Hello', 'JS', 'olleH']", () => {
  expect(reverseBiggerString(['Hello', 'JS'])).to.deep.equal(['Hello', 'JS', 'olleH']);
});

it("reverseBiggerString(['123', '12345']) should return ['123', '12345', '54321']", () => {
  expect(reverseBiggerString(['123', '12345'])).to.deep.equal(['123', '12345', '54321']);
});

it("reverseBiggerString(['', '']) should return ['', '', '']", () => {
  expect(reverseBiggerString(['', ''])).to.deep.equal(['', '', '']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
