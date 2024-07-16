// NAMEEN:
// NAMERU:Удалить повторяющийся буквы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `removeDuplicates`, которая принимает строку.

Функция должна вернуть новую строку, в которой удалены повторяющиеся символы.

Пробелы между словами должны остаться.

Начинайте цикл с начала строки, например: строка `123 145 156` должна вернуть `123 45 6`.


Пример запуска функции:
```javascript
removeDuplicates('hello world'); // 'helo wrd'
removeDuplicates('a leg up'); // 'a leg up'
removeDuplicates('hands down'); // 'hands ow'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function removeDuplicates(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (newStr.indexOf(str[i]) === -1 || str[i] === ' ') {
      newStr += str[i];
    }
  }
  return newStr.trim();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function removeDuplicates', () => {
  expect(removeDuplicates).to.be.a('function');
});

it("removeDuplicates('hello world') should return 'helo wrd'", () => {
  expect(removeDuplicates('hello world')).to.equal('helo wrd')
});

it("removeDuplicates('a leg up') should return 'a leg up'", () => {
  expect(removeDuplicates('a leg up')).to.equal('a leg up')
});

it("removeDuplicates('what am i, chopped liver?') should return 'what m i, coped lvr?'", () => {
  expect(removeDuplicates('what am i, chopped liver?')).to.equal('what m i, coped lvr?')
});

it("removeDuplicates('hands down') should return 'hands ow'", () => {
  expect(removeDuplicates('hands down')).to.equal('hands ow')
});

it("removeDuplicates('jumping the gun') should return 'jumping the'", () => {
  expect(removeDuplicates('jumping the gun')).to.equal('jumping the')
});

it("removeDuplicates('a  b a  c  daa  a ') should return 'a  b   c  d'", () => {
  expect(removeDuplicates('a  b a  c  daa  a ')).to.equal('a  b   c  d')
});

it("removeDuplicates('123 145 156 ') should return '123 45 6'", () => {
  expect(removeDuplicates('123 145 156 ')).to.equal('123 45 6')
});

it("removeDuplicates(' ') should return ''", () => {
  expect(removeDuplicates(' ')).to.equal('')
});

it("removeDuplicates('') should return ''", () => {
  expect(removeDuplicates('')).to.equal('')
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
