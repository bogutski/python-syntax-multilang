// NAMEEN:
// NAMERU:Создание шаблона звездочек

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Разработайте функцию `createStarPattern`, которая принимает один аргумент `n`, представляющий размер стороны квадрата.

Функция должна возвращать массив строк, где каждая строка содержит звездочки ('*'), формирующие квадратный узор размером `n x n`, используя метод `Array.prototype.fill()`.


Примеры Запуска Функции:
```javascript
createStarPattern(2);
// [
//   '**',
//   '**'
// ]

createStarPattern(3);
// [
//   '***',
//   '***',
//   '***'
// ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function createStarPattern(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function createStarPattern(n) {
  return new Array(n).fill('*'.repeat(n));
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function createStarPattern', () => {
  expect(createStarPattern).to.be.a('function');
});

it('Function createStarPattern should include method fill()', () => {
  const res = createStarPattern.toString()
  expect(res).to.include('.fill(')
});

it("createStarPattern(2) should return an array with 2 strings of '**'", function() {
  expect(createStarPattern(2)).to.deep.equal(['**', '**']);
});

it("createStarPattern(3) should return an array with 3 strings of '***'", function() {
  expect(createStarPattern(3)).to.deep.equal(['***', '***', '***']);
});

it("createStarPattern(1) should return ['*']", function() {
  expect(createStarPattern(1)).to.deep.equal(['*']);
});

it("createStarPattern(0) should return an empty array", function() {
  expect(createStarPattern(0)).to.deep.equal([]);
});

it("createStarPattern(4) should return an array where each element is '****'", function() {
  const pattern = createStarPattern(4);
  const expected = ['****', '****', '****', '****'];
  expect(pattern).to.deep.equal(expected);
  expect(pattern.every(line => line === '****')).to.be.true;
});

it("createStarPattern(5) should return an array of 5 elements", function() {
  const result = createStarPattern(5);
  expect(result.length).to.equal(5);
});

it("createStarPattern(3) each string should have a length of 3", function() {
  const result = createStarPattern(3);
  expect(result.every(str => str.length === 3)).to.be.true;
});

it("createStarPattern(6) should match the pattern of 6x6 stars", function() {
  const sixBySixPattern = Array(6).fill('******');
  expect(createStarPattern(6)).to.deep.equal(sixBySixPattern);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
