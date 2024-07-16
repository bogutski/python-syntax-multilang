// NAMEEN:
// NAMERU:Вернуть символ из строки по его порядковому номеру

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `getByPosition`, которая принимает строку и порядковый номер символа в этой строке и возвращает этот символ.

Примеры запуска функции:
```javascript
getByPosition('abc', 1); // 'a'
getByPosition('abc', 2); // 'b'
getByPosition('abc', 3); // 'c'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getByPosition(str, position) {
  return str[position - 1];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getByPosition', () => {
  expect(getByPosition).to.be.a('function');
});

it('getByPosition("abc", 1) should return "a"', () => {
  expect(getByPosition('abc', 1)).to.equal('a');
});

it('getByPosition("abc", 2) should return "b"', () => {
  expect(getByPosition('abc', 2)).to.equal('b');
});

it('getByPosition("abc", 3) should return "c"', () => {
  expect(getByPosition('abc', 3)).to.equal('c');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
