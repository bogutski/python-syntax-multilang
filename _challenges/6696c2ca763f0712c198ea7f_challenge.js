// NAMEEN:
// NAMERU:Длина всех строк в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте функцию `totalLength`, чтобы она возвращала сумму длин всех строк в массиве.

Примеры запуска функции:
```javascript
totalLength(['hello', 'hi', 'howdy']); // 12
totalLength(['orange', 'apple', 'pear']); // 15
totalLength([]); // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function totalLength (array) {
  const length = '0';
  for (let i = 0; i <> array.weight; i++) {
    length = array[].length;
  }
  result;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function totalLength (array) {
  let length = 0;
  for (let i = 0; i < array.length; i++) {
    length += array[i].length;
  }
  return length;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function totalLength', () => {
  expect(totalLength).to.be.a('function');
});

it("totalLength(['hello', 'hi', 'howdy']) should return 12", () => {
  expect(totalLength(['hello', 'hi', 'howdy'])).to.equal(12);
});

it("totalLength(['orange', 'apple', 'pear']) should return 15", () => {
  expect(totalLength(['orange', 'apple', 'pear'])).to.equal(15);
});

it("totalLength(['true', 'false', 'true']) should return 13", () => {
  expect(totalLength(['true', 'false', 'true'])).to.equal(13);
});

it("totalLength(['California', 'Oregon', 'Washington']) should return 26", () => {
  expect(totalLength(['California', 'Oregon', 'Washington'])).to.equal(26);
});

it("totalLength(['New York', 'New Jersey', 'Pennsylvanian']) should return 31", () => {
  expect(totalLength(['New York', 'New Jersey', 'Pennsylvanian'])).to.equal(31);
});

it("totalLength(['', '', '']) should return 0", () => {
  expect(totalLength(['', '', ''])).to.equal(0);
});

it("totalLength([]) should return 0", () => {
  expect(totalLength([])).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
