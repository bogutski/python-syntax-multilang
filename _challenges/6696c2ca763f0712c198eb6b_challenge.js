// NAMEEN:
// NAMERU:Перевернуть строку в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseStrInArray`, которая принимает массив с одной строкой.

Функция должна вернуть массив, в котором первым элементом будет исходная строка, а вторым - перевернутая строка.

Например: `array = ['apple']`
* создать переменную и присвоить ей пустую строку
* цикл `for` будет обращаться к элементу с индексом `0` => `array[0]`
* записать в новую переменную перевернутую строку
* добавить в конец массива перевернутую строку
* вернуть обновленный массив => `[ 'apple', 'elppa' ]`


Пример запуска функции:
```js
reverseStrInArray(['apple']) // => [ 'apple', 'elppa' ]
reverseStrInArray(['hello']) // => [ 'hello', 'olleh' ]
reverseStrInArray(['123'])   // => [ '123', '321' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseStrInArray(arr) {
  let word = ''
  for (let i = arr[0].length - 1; i >= 0; i--) {
    word += arr[0][i]
  }
  arr.push(word)
  return arr
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseStrInArray', () => {
  expect(reverseStrInArray).to.be.a('function');
});

it("reverseStrInArray(['apple']) should return ['apple', 'elppa']", () => {
  expect(reverseStrInArray(['apple'])).to.deep.equal(['apple', 'elppa']);
});

it("reverseStrInArray(['banana']) should return ['banana', 'ananab']", () => {
  expect(reverseStrInArray(['banana'])).to.deep.equal(['banana', 'ananab']);
});

it("reverseStrInArray(['cherry']) should return ['cherry', 'yrrehc']", () => {
  expect(reverseStrInArray(['cherry'])).to.deep.equal(['cherry', 'yrrehc']);
});

it("reverseStrInArray(['Anna']) should return ['Anna', 'annA']", () => {
  expect(reverseStrInArray(['Anna'])).to.deep.equal(['Anna', 'annA']);
});

it("reverseStrInArray(['']) should return ['', '']", () => {
  expect(reverseStrInArray([''])).to.deep.equal(['', '']);
});

it("reverseStrInArray(['12345']) should return ['12345', '54321']", () => {
  expect(reverseStrInArray(['12345'])).to.deep.equal(['12345', '54321']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
