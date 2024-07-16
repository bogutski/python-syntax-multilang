// NAMEEN:
// NAMERU:Перевернуть большую строку

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseBigger`, которая принимает массив из двух строк.

Определите какая из строк длиннее и переверните ее.

Если строки одинаковой длины, то переверните вторую строку.

Функция должна возвращать обновленный массив с `первой строкой`, `второй строкой` и `перевернутой строкой`.


Примеры запуска функции:
```js
reverseBigger(['Hello', 'World']) // => [ 'Hello', 'World', 'dlroW' ]
reverseBigger(['blue', 'red'])    // => [ 'blue', 'red', 'eulb' ]
reverseBigger(['Hello', 'JS'])    // => [ 'Hello', 'JS', 'olleH' ]
reverseBigger(['', ''])           // => [ '', '', '' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseBigger(arr){
  let string;
  let reversed = '';
  if(arr[0].length > arr[1].length) string = arr[0]
  else string = arr[1]
  for(let i = string.length - 1; i >= 0; i--){
    reversed += string[i];
  }
  arr.push(reversed)
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseBigger', () => {
  expect(reverseBigger).to.be.a('function');
});

it("reverseBigger(['Hello', 'World']) should return ['Hello', 'World', 'dlroW']", () => {
  expect(reverseBigger(['Hello', 'World'])).to.deep.equal(['Hello', 'World', 'dlroW']);
});

it("reverseBigger(['blue', 'red']) should return ['blue', 'red', 'eulb']", () => {
  expect(reverseBigger(['blue', 'red'])).to.deep.equal(['blue', 'red', 'eulb']);
});

it("reverseBigger(['Hello', 'JS']) should return ['Hello', 'JS', 'olleH']", () => {
  expect(reverseBigger(['Hello', 'JS'])).to.deep.equal(['Hello', 'JS', 'olleH']);
});

it("reverseBigger(['123', '12345']) should return ['123', '12345', '54321']", () => {
  expect(reverseBigger(['123', '12345'])).to.deep.equal(['123', '12345', '54321']);
});

it("reverseBigger(['', '']) should return ['', '', '']", () => {
  expect(reverseBigger(['', ''])).to.deep.equal(['', '', '']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
