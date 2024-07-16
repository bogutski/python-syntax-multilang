// NAMEEN:
// NAMERU:Найдено или нет

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isContains`, которая принимает два параметра: строку и подстроку.

Функция должна возвращать `true`, если подстрока найдена в строке, и `false` в противном случае.

Поиск должен быть нечувствителен к регистру.

Примеры:
```javascript
isContains('Hello', 'll'); // true
isContains('Hello', 'lL'); // true
isContains('Hello', 'LL'); // true
isContains('Example', 'ex'); // true
isContains('Example', 'Ex'); // true
isContains('MOUSE', 'mou'); // true
isContains('MOUSE', 'mOu'); // true
isContains('MOUSE', 'mU'); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isContains(string, subString) {
  return string.toLowerCase().indexOf(subString.toLowerCase()) !== -1;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isContains', () => {
  expect(isContains).to.be.a('function');
});

it('isContains("Hello", "ll") should return true', () => {
  expect(isContains('Hello', 'll')).to.equal(true);
});

it('isContains("Hello", "lL") should return true', () => {
  expect(isContains('Hello', 'lL')).to.equal(true);
});

it('isContains("Hello", "LL") should return true', () => {
  expect(isContains('Hello', 'LL')).to.equal(true);
});

it('isContains("Example", "ex") should return true', () => {
  expect(isContains('Example', 'ex')).to.equal(true);
});

it('isContains("World", "world") should return true', () => {
  expect(isContains('World', 'world')).to.equal(true);
});

it('isContains("Cursor", "cu rs") should return false', () => {
  expect(isContains('Cursor', 'cu rs')).to.equal(false);
});

it('isContains("Mouse", "mu") should return false', () => {
  expect(isContains('Mouse', 'mu')).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
