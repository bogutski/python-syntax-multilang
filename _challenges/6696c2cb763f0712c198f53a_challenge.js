// NAMEEN:
// NAMERU:Заполнение массива повторяющимися значениями

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `fillArrayWithRepeats`, которая принимает два аргумента: значение для заполнения `value` и количество повторений `repeats`.

Функция должна создать и вернуть массив, содержащий значение `value`, повторенное `repeats` раз, используя метод `Array.prototype.fill()`.


Примеры запуска функции:
```javascript
fillArrayWithRepeats('a', 3); // ['a', 'a', 'a']
fillArrayWithRepeats(0, 5); // [0, 0, 0, 0, 0]
fillArrayWithRepeats(true, 2); // [true, true]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function fillArrayWithRepeats(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fillArrayWithRepeats(value, n) {
  return Array.from({length: n}).fill(value);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function fillArrayWithRepeats', () => {
  expect(fillArrayWithRepeats).to.be.a('function');
});

it('Function fillArrayWithRepeats should include method fill()', () => {
  const res = fillArrayWithRepeats.toString()
  expect(res).to.include('.fill(')
});

it("fillArrayWithRepeats('a', 3) should return ['a', 'a', 'a']", function() {
  expect(fillArrayWithRepeats('a', 3)).to.deep.equal(['a', 'a', 'a']);
});

it("fillArrayWithRepeats(0, 5) should return [0, 0, 0, 0, 0]", function() {
  expect(fillArrayWithRepeats(0, 5)).to.deep.equal([0, 0, 0, 0, 0]);
});

it("fillArrayWithRepeats(true, 2) should return [true, true]", function() {
  expect(fillArrayWithRepeats(true, 2)).to.deep.equal([true, true]);
});

it("fillArrayWithRepeats('empty', 0) should return an empty array", function() {
  expect(fillArrayWithRepeats('empty', 0)).to.deep.equal([]);
});

it("fillArrayWithRepeats('repeat', 1) should return an array with a single element 'repeat'", function() {
  expect(fillArrayWithRepeats('repeat', 1)).to.deep.equal(['repeat']);
});

it("fillArrayWithRepeats(null, 4) should return an array of four nulls", function() {
  expect(fillArrayWithRepeats(null, 4)).to.deep.equal([null, null, null, null]);
});

it("fillArrayWithRepeats(5, 3) should contain exactly 3 elements all equal to 5", function() {
  const array = fillArrayWithRepeats(5, 3);
  expect(array.length).to.equal(3);
  expect(array.every(element => element === 5)).to.be.true;
});

it("fillArrayWithRepeats(undefined, 2) should return an array of two undefined values", function() {
  expect(fillArrayWithRepeats(undefined, 2)).to.deep.equal([undefined, undefined]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
