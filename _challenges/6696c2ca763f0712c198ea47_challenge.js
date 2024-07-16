// NAMEEN:
// NAMERU:Перевести строку, состоящей из цифр в массив

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `strToArray`  принимает строку состоящей из цифр. Строка не содержит пробелов.

Функция должна возвращать массив, состоящий из цифр этой строки, записанных в обратном порядке.

Для перевода чисел из типа `string` в тип `number` используйте унарный плюс `+`.

Примеры запуска функции:
```javascript
strToArray("123") // [3, 2, 1]
strToArray("1234") // [4, 3, 2, 1]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function strToArray(str) {
  let arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(+str[i]);
  }
  return arr;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function strToArray', () => {
  expect(strToArray).to.be.a('function');
});

it('strToArray("123") should return [3, 2, 1]', () => {
  expect(strToArray("123")).to.deep.equal([3, 2, 1]);
});

it('strToArray("1234") should return [4, 3, 2, 1]', () => {
  expect(strToArray("1234")).to.deep.equal([4, 3, 2, 1]);
});

it('strToArray("555") should return [5, 5, 5]', () => {
  expect(strToArray("555")).to.deep.equal([5, 5, 5]);
});

it('strToArray("123456789") should return [9, 8, 7, 6, 5, 4, 3, 2, 1]', () => {
  expect(strToArray("123456789")).to.deep.equal([9, 8, 7, 6, 5, 4, 3, 2, 1]);
});

it('strToArray("") should return []', () => {
    expect(strToArray("")).to.deep.equal([]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
