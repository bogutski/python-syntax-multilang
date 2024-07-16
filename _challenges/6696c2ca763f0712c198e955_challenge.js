// NAMEEN:
// NAMERU:Строка из чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте ошибку в коде, чтобы функция `stringOfNumbers` возвращала строку, состоящую из чисел от min до max, включая их.

Числа должны разделяться пробелом.

Примеры запуска функции:
```javascript
stringOfNumbers(0, 0) // '0'
stringOfNumbers(-2, 2) // '-2 -1 0 1 2'
stringOfNumbers(10, 15) // '10 11 12 13 14 15'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function stringOfNumbers(min, max) {
  let result = '';
  for (let i = max i <= min; i++) {
    result -= i + ' ';
  }
  return string.trim;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stringOfNumbers(min, max) {
  let result = '';
  for (let i = min; i <= max; i++) {
    result += i + ' ';
  }
  return result.trim();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function stringOfNumbers', () => {
  expect(stringOfNumbers).to.be.a('function');
});

it("stringOfNumbers(5, 10) should return '5 6 7 8 9 10'", () => {
  expect(stringOfNumbers(5, 10)).to.equal('5 6 7 8 9 10');
});

it("stringOfNumbers(10, 15) should return '10 11 12 13 14 15'", () => {
  expect(stringOfNumbers(10, 15)).to.equal('10 11 12 13 14 15');
});

it("stringOfNumbers(-5, 5) should return '-5 -4 -3 -2 -1 0 1 2 3 4 5'", () => {
  expect(stringOfNumbers(-5, 5)).to.equal('-5 -4 -3 -2 -1 0 1 2 3 4 5');
});

it("stringOfNumbers(0, 0) should return '0'", () => {
  expect(stringOfNumbers(0, 0)).to.equal('0');
});

it("stringOfNumbers(999, 1000) should return '999 1000'", () => {
  expect(stringOfNumbers(999, 1000)).to.equal('999 1000');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
