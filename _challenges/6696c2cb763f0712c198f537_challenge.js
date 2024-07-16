// NAMEEN:
// NAMERU:Инициализация массива нулями

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `initializeZeros`, которая принимает один аргумент: размер массива `size`.

Функция должна возвращать новый массив указанного размера, заполненный нулями, используя метод `fill()`.


Примеры Запуска Функции:
```javascript
initializeZeros(3); // [ 0, 0, 0 ]
initializeZeros(5); // [ 0, 0, 0, 0, 0 ]
initializeZeros(0); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function initializeZeros(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function initializeZeros(n) {
  return new Array(n).fill(0);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function initializeZeros', () => {
  expect(initializeZeros).to.be.a('function');
});

it('Function initializeZeros should include method fill()', () => {
  const res = initializeZeros.toString()
  expect(res).to.include('.fill(')
});

it("initializeZeros(3) should return [0, 0, 0]", function() {
  expect(initializeZeros(3)).to.deep.equal([0, 0, 0]);
});

it("initializeZeros(5) should return [0, 0, 0, 0, 0]", function() {
  expect(initializeZeros(5)).to.deep.equal([0, 0, 0, 0, 0]);
});

it("initializeZeros(1) should return [0]", function() {
  expect(initializeZeros(1)).to.deep.equal([0]);
});

it("initializeZeros(0) should return an empty array", function() {
  expect(initializeZeros(0)).to.deep.equal([]);
});

it("initializeZeros(4) should return an array of length 4", function() {
  const result = initializeZeros(4);
  expect(result.length).to.equal(4);
  expect(result.every(val => val === 0)).to.be.true;
});

it("initializeZeros(2) array elements should all be 0", function() {
  const result = initializeZeros(2);
  const allZeros = result.every(val => val === 0);
  expect(allZeros).to.be.true;
});

it("initializeZeros(7) should not contain any element other than 0", function() {
  expect(initializeZeros(7)).to.satisfy(arr => arr.every(num => num === 0));
});

it("initializeZeros(6) should be an array with all elements set to 0", function() {
  const zeros = initializeZeros(6);
  expect(zeros).to.deep.equal(new Array(6).fill(0));
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
