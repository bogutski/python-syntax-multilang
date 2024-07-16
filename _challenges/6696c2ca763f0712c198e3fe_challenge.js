// NAMEEN:
// NAMERU:Вернуть указанный индекс из строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `getByIndex`, которая принимает строку и индекс и возвращает символ, который находится в этой строке по указанному индексу.

Примеры запуска функции:
```javascript
getByIndex('abc', 0); // 'a'
getByIndex('JS', 1); // 'S'
getByIndex('JS', 0); // 'J'
```


Похожий пример:
```javascript
const i = 2;
const str = 'abc';
console.log(str[i]); // 'c'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getByIndex(str, index) {
  return str[index];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getByIndex', () => {
  expect(getByIndex).to.be.a('function');
});

it('getByIndex("abc", 0) should return "a"', () => {
  expect(getByIndex('abc', 0)).to.equal('a');
});

it('getByIndex("JS", 1) should return "S"', () => {
  expect(getByIndex('JS', 1)).to.equal('S');
});

it('getByIndex("JS", 0) should return "J"', () => {
  expect(getByIndex('JS', 0)).to.equal('J');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
