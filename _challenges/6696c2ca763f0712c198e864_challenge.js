// NAMEEN:
// NAMERU:Исправьте функцию 'deepCopyOfArray'

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте функцию `deepCopyOfArray`, чтобы она возвращала глубокую копию массива.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function deepCopyOfArray(arr) {
  return json.stringify(json.parse(arr))
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function deepCopyOfArray(arr) {
  return JSON.parse(JSON.stringify(arr))
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function deepCopyOfArray', () => {
  expect(deepCopyOfArray).to.be.a('function');
});

it("deepCopyOfArray([{name: 'Alice', age: 18}, {name: 'Bob', age: 20}, {name: 'John', age: 30}]) should return [{name: 'Alice', age: 18}, {name: 'Bob', age: 20}, {name: 'John', age: 30}]", () => {
  expect(deepCopyOfArray([{name: 'Alice', age: 18}, {name: 'Bob', age: 20}, {name: 'John', age: 30}])).to.deep.equal([{name: 'Alice', age: 18}, {name: 'Bob', age: 20}, {name: 'John', age: 30}]);
});

it("deepCopyOfArray([{car: 'BMW', year: 2018}]) should return [{car: 'BMW', year: 2018}]", () => {
  expect(deepCopyOfArray([{car: 'BMW', year: 2018}])).to.deep.equal([{car: 'BMW', year: 2018}]);
});

it("deepCopyOfArray([{car: 'Ford', year: 2021}]) should include JSON.stringify and JSON.parse()", () => {
  expect(deepCopyOfArray.toString()).to.include('JSON.parse(JSON.stringify(arr))');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
