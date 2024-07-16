// NAMEEN:
// NAMERU:Найти последнее вхождение подстроки в строку

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastIndexOf`, которая принимает два параметра: строку и подстроку.

Функция должна возвращать индекс последнего вхождения подстроки в строку.

Если подстрока не найдена, функция должна возвращать `-1`.

Поиск должен быть нечувствителен к регистру.

Примеры:
```javascript
findLastIndexOf('HeLlo', 'll'); // 2
findLastIndexOf('HeLlo new heLLo', 'lL'); // 12
findLastIndexOf('HeLlo heLLo', 'll'); // 8
findLastIndexOf('HeLlo heLLo', 'LL'); // 8
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastIndexOf(str, subStr) {
  return str.toLowerCase().lastIndexOf(subStr.toLowerCase());
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastIndexOf', () => {
  expect(findLastIndexOf).to.be.a('function');
});

it('findLastIndexOf("HeLlo", "ll") should return 2', () => {
  expect(findLastIndexOf('HeLlo', 'll')).to.equal(2);
});

it('findLastIndexOf("HeLlo new heLLo", "lL") should return 12', () => {
  expect(findLastIndexOf('HeLlo new heLLo', 'lL')).to.equal(12);
});

it('findLastIndexOf("HeLlo heLLo", "ll") should return 8', () => {
  expect(findLastIndexOf('HeLlo heLLo', 'll')).to.equal(8);
});

it('findLastIndexOf("HeLlo heLLo", "LL") should return 8', () => {
  expect(findLastIndexOf('HeLlo heLLo', 'LL')).to.equal(8);
});

it('findLastIndexOf("HeLlo heLLo", "LL") should return 9', () => {
  expect(findLastIndexOf('HeLlo heLLo', 'LL')).to.equal(8);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
