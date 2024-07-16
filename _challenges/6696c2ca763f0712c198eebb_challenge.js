// NAMEEN:
// NAMERU:Замена цифр: '1, 2, 3, 4, 5' на слова.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `numFromOneToFive`, которая принимает строку с различными символами.

Функция должна вернуть строку, в которой цифры `1`, `2`, `3`, `4`, `5` заменены на `one`, `two`, `three`, `four`, `five` соответственно.

Все остальные символы должны быть проигнорированы.

После каждого слова должен быть пробел, кроме последнего слова.


Примеры запуска функции:
```javascript
numFromOneToFive('12345'); // 'one two three four five'
numFromOneToFive('3a2d1'); // 'three two one'
numFromOneToFive('555');   // 'five five five'
numFromOneToFive('abc');   // ''
numFromOneToFive('');      // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numFromOneToFive(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') newStr += 'one ';
    else if (str[i] === '2') newStr += 'two ';
    else if (str[i] === '3') newStr += 'three ';
    else if (str[i] === '4') newStr += 'four ';
    else if (str[i] === '5') newStr += 'five ';
  }
  return newStr.trim();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function numFromOneToFive', () => {
  expect(numFromOneToFive).to.be.a('function');
});

it("numFromOneToFive('12345') returns 'one two three four five'", () => {
  expect(numFromOneToFive('12345')).to.be.equal('one two three four five');
});

it("numFromOneToFive('1a 2d f3 g4 h5') returns 'one two three four five'", () => {
  expect(numFromOneToFive('1a 2d f3 g4 h5')).to.be.equal('one two three four five');
});

it("numFromOneToFive('5, 5, 5, 5, 5') returns 'five five five five five'", () => {
  expect(numFromOneToFive('55555')).to.be.equal('five five five five five');
});

it("numFromOneToFive('52413') returns 'five two four one three'", () => {
  expect(numFromOneToFive('52413')).to.be.equal('five two four one three');
});

it("numFromOneToFive('abcdef') returns ''", () => {
  expect(numFromOneToFive('abcdef')).to.be.equal('');
});

it("numFromOneToFive('') returns ''", () => {
  expect(numFromOneToFive('')).to.be.equal('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
