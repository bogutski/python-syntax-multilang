// NAMEEN:
// NAMERU:Использование массива с заготовленными словами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте функция `numToWordWithArray`, которая принимает строку, состоящую из цифр.

Функция должна возвращать строку, в которой каждая цифра заменена на слово, соответствующее этой цифре. Слова разделяются запятыми и пробелами.

Разберитесь в коде и постарайтесь переписать его самостоятельно.

В функции три ошибки. Цикл `for` без ошибок.


P.S. В этом задании мы используем унарный плюс `+` для преобразования строки в число.
Подробней о нём можно прочитать в разделе:
JavaScript Syntax -> Section 4 -> Операторы -> Унарные и бинарные операторы


Примеры запуска функции:
```javascript
numToWordWithArray('') // ''
numToWordWithArray('123') // 'one, two, three'
numToWordWithArray('987') // 'nine, eight, seven'
numToWordWithArray('1234567890') // 'one, two, three, four, five, six, seven, eight, nine, zero'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function numToWordWithArray(str){
  let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'five', 'six', 'seven', 'eight', 'nine'];
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += arr[+str[i]];
    if(i !== str.length - 1) {
      newStr += ', ';
    }
  }
  Return arr;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numToWordWithArray(str){
  let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += arr[+str[i]];
    if(i !== str.length - 1) newStr += ', ';
  }
  return newStr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function numToWordWithArray', () => {
  expect(numToWordWithArray).to.be.a('function');
});

it("numToWordWithArray('0123') returns 'zero, one, two, three'", () => {
  expect(numToWordWithArray('0123')).to.equal('zero, one, two, three');
});

it("numToWordWithArray('98765') returns 'nine, eight, seven, six, five'", () => {
  expect(numToWordWithArray('98765')).to.equal('nine, eight, seven, six, five');
});

it("numToWordWithArray('1234567890') returns 'one, two, three, four, five, six, seven, eight, nine, zero'", () => {
  expect(numToWordWithArray('1234567890')).to.equal('one, two, three, four, five, six, seven, eight, nine, zero');
});

it("numToWordWithArray('115599') returns 'one, one, five, five, nine, nine'", () => {
  expect(numToWordWithArray('115599')).to.equal('one, one, five, five, nine, nine');
});

it("numToWordWithArray('') returns ''", () => {
  expect(numToWordWithArray('')).to.equal('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
