// NAMEEN:
// NAMERU:Заполнение массива альтернативными значениями

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `fillArrayAlternatingValues`, которая принимает три аргумента: размер массива `size`, значение для четных индексов `evenValue`, и значение для нечетных индексов `oddValue`.

Функция должна создать и вернуть массив размером `size`, где каждый элемент с четным индексом заполнен значением `evenValue`, а с нечетным индексом — `oddValue`, используя метод `Array.prototype.fill()` и `Array.prototype.map()`.


Примеры запуска функции:
```javascript
fillArrayAlternatingValues(5, 'even', 'odd'); // ['even', 'odd', 'even', 'odd', 'even']
fillArrayAlternatingValues(4, 0, 1); // [0, 1, 0, 1]
fillArrayAlternatingValues(3, true, false); // [true, false, true]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function fillArrayAlternatingValues(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fillArrayAlternatingValues(size, even, odd) {
  return new Array(size).fill(null).map((_, index) => index % 2 ? odd : even);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function fillArrayAlternatingValues', () => {
  expect(fillArrayAlternatingValues).to.be.a('function');
});

it('Function fillArrayAlternatingValues should include method map()', () => {
  const res = fillArrayAlternatingValues.toString()
  expect(res).to.include('.map(')
});

it("fillArrayAlternatingValues(5, 'even', 'odd') should return ['even', 'odd', 'even', 'odd', 'even']", function() {
  expect(fillArrayAlternatingValues(5, 'even', 'odd')).to.deep.equal(['even', 'odd', 'even', 'odd', 'even']);
});

it("fillArrayAlternatingValues(4, 0, 1) should return [0, 1, 0, 1]", function() {
  expect(fillArrayAlternatingValues(4, 0, 1)).to.deep.equal([0, 1, 0, 1]);
});

it("fillArrayAlternatingValues(3, true, false) should return [true, false, true]", function() {
  expect(fillArrayAlternatingValues(3, true, false)).to.deep.equal([true, false, true]);
});

it("fillArrayAlternatingValues(2, 'first', 'second') should return ['first', 'second']", function() {
  expect(fillArrayAlternatingValues(2, 'first', 'second')).to.deep.equal(['first', 'second']);
});

it("fillArrayAlternatingValues(1, 'only', 'none') should return ['only']", function() {
  expect(fillArrayAlternatingValues(1, 'only', 'none')).to.deep.equal(['only']);
});

it("fillArrayAlternatingValues(0, 'empty', 'void') should return an empty array", function() {
  expect(fillArrayAlternatingValues(0, 'empty', 'void')).to.deep.equal([]);
});

it("fillArrayAlternatingValues(6, 2, 3) should return [2, 3, 2, 3, 2, 3]", function() {
  expect(fillArrayAlternatingValues(6, 2, 3)).to.deep.equal([2, 3, 2, 3, 2, 3]);
});

it("fillArrayAlternatingValues(7, 'left', 'right') should end with 'left'", function() {
  const array = fillArrayAlternatingValues(7, 'left', 'right');
  expect(array[array.length - 1]).to.equal('left');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
