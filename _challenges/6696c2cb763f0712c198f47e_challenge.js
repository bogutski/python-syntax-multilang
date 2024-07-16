// NAMEEN:
// NAMERU:Нормализация строк

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `normalizeStrings`, которая принимает массив строк и возвращает новый массив, где каждая строка преобразована к нижнему регистру и все пробелы в начале и конце удалены.

Используйте метод `map()` для этой задачи.


Пример запуска функции:
```javascript
normalizeStrings([""]); // [ '' ]
normalizeStrings(["NUMBERS123", "123NUMBERS"]); // [ 'numbers123', '123numbers' ]
normalizeStrings(["  Hello", "World!  ", " TeSt  "]); // [ 'hello', 'world!', 'test' ]
normalizeStrings([" SOMETHING ", " ANOTHER THING ", "LaSt OnE"]); // [ 'something', 'another thing', 'last one' ]
normalizeStrings(["NoTrim", "  Space Before", "Space After   "]); // [ 'notrim', 'space before', 'space after' ]
normalizeStrings(["   Mixed CASE  ", "CapS LoCk DAY", "  Today IS nice  "]); // [ 'mixed case', 'caps lock day', 'today is nice' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function normalizeStrings(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function normalizeStrings(arr) {
  return arr.map(str => str.toLowerCase().trim());
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function normalizeStrings', () => {
  expect(normalizeStrings).to.be.a('function');
});

it('Function normalizeStrings should include method map()', () => {
  const res = normalizeStrings.toString()
  expect(res).to.include('.map(')
});

it("normalizeStrings(['  Hello', 'World!  ', ' TeSt  ']) should return ['hello', 'world!', 'test']", () => {
  expect(normalizeStrings(["  Hello", "World!  ", " TeSt  "])).to.deep.equal(["hello", "world!", "test"]);
});

it("normalizeStrings([' PYTHON ', 'jAVaScript ']) should return ['python', 'javascript']", () => {
  expect(normalizeStrings([" PYTHON ", "jAVaScript "])).to.deep.equal(["python", "javascript"]);
});

it("normalizeStrings(['']) should return ['']", () => {
  expect(normalizeStrings([''])).to.deep.equal(['']);
});

it("normalizeStrings(['  SPACES  ', ' NO SPACES']) should return ['spaces', 'no spaces']", () => {
  expect(normalizeStrings(["  SPACES  ", " NO SPACES"])).to.deep.equal(["spaces", "no spaces"]);
});

it("normalizeStrings(['MixedCase ', ' LoWeR ', 'UPPER']) should return ['mixedcase', 'lower', 'upper']", () => {
  expect(normalizeStrings(['MixedCase ', ' LoWeR ', 'UPPER'])).to.deep.equal(['mixedcase', 'lower', 'upper']);
});

it("normalizeStrings([' leading space', 'trailing space ']) should return ['leading space', 'trailing space']", () => {
  expect(normalizeStrings([' leading space', 'trailing space '])).to.deep.equal(['leading space', 'trailing space']);
});

it("normalizeStrings(['ALL CAPS']) should return ['all caps']", () => {
  expect(normalizeStrings(['ALL CAPS'])).to.deep.equal(['all caps']);
});

it("normalizeStrings(['  multiple   spaces  ']) should return ['multiple   spaces']", () => {
  expect(normalizeStrings(['  multiple   spaces  '])).to.deep.equal(['multiple   spaces']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
