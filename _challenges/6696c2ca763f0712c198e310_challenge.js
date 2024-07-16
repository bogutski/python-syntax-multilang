// NAMEEN:
// NAMERU:Найдите середину слова

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `findMiddle`.

Функция принимает строку, возвращает символ или символы, которые находятся в середине строки.

* Если длина строки четная, то возвращаются два символа, которые находятся в середине строки.

* Если длина строки нечетная, то возвращается один символ, который находится в середине строки.

* Если строка пустая, то возвращается пустая строка.

Примеры запуска функции:
```javascript
findMiddle('test') // 'es'
findMiddle('testing') // 't'
findMiddle('middle') // 'dd'
findMiddle('abc') // 'b'
findMiddle('A') // 'A'
findMiddle('of') // 'of'
findMiddle('') // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findMiddle(str) {
  if (str.length === 0) return '';
  const strLength = str.length;
  const middleIndex = Math.floor(strLength / 2);
  if (strLength % 2 === 0) {
    return str[middleIndex - 1] + str[middleIndex];
  }
  return str[middleIndex];
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function findMiddle', () => {
  expect(findMiddle).to.be.a('function');
});

it('findMiddle("test") should return "es"', () => {
  expect(findMiddle('test')).to.equal('es');
});

it('findMiddle("testing") should return "t"', () => {
  expect(findMiddle('testing')).to.equal('t');
});

it('findMiddle("middle") should return "dd"', () => {
  expect(findMiddle('middle')).to.equal('dd');
});

it('findMiddle("qwe") should return "w"', () => {
  expect(findMiddle('qwe')).to.equal('w');
});

it('findMiddle("R") should return "R"', () => {
  expect(findMiddle('R')).to.equal('R');
});

it('findMiddle("") should return ""', () => {
  expect(findMiddle('')).to.equal('');
});

it('findMiddle("of") should return "of"', () => {
  expect(findMiddle('of')).to.equal('of');
});

it('findMiddle("123") should return "2"', () => {
  expect(findMiddle('123')).to.equal('2');
});

it('findMiddle("0093900") should return "3"', () => {
  expect(findMiddle('0093900')).to.equal('3');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
