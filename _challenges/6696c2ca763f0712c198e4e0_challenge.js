// NAMEEN:
// NAMERU:Функция ищет индекс элемента в строке. Регистр не учитывается.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `searchIndex`, которая принимает два аргумента: строку и подстроку.

Функция должна возвращать индекс первого вхождения подстроки в строку.

Если подстрока не найдена, функция должна возвращать `-1`.

Поиск должен быть нечувствителен к регистру.

Примеры:
```javascript
searchIndex('HeLlo', 'll'); // 2
searchIndex('HeLlo', 'lL'); // 2
searchIndex('HeLlo', 'LL'); // 2
searchIndex('HeLlo', 'Ll'); // 2
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function searchIndex(str, subStr) {
  return str.toLowerCase()
    .indexOf(subStr.toLowerCase())
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function searchIndex', () => {
  expect(searchIndex).to.be.a('function');
});

it('searchIndex("HeLlo", "ll") should return 2', () => {
  expect(searchIndex("HeLlo", "ll")).to.equal(2);
} );

it('searchIndex("HeLlo", "lL") should return 2', () => {
  expect(searchIndex("HeLlo", "lL")).to.equal(2);
} );

it('searchIndex("HeLlo", "LL") should return 2', () => {
  expect(searchIndex("HeLlo", "LL")).to.equal(2);
} );

it('searchIndex("Llo", "Ll") should return 2', () => {
  expect(searchIndex("Llo", "Ll")).to.equal(0);
});

it('searchIndex("HeLlo", "A") should return -1', () => {
  expect(searchIndex("HeLlo", "A")).to.equal(-1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
