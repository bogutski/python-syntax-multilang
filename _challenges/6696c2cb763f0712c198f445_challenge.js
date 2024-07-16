// NAMEEN:
// NAMERU:Фильтрация и добавление элементов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterAndAppend`, которая принимает массив `arr`, массив нежелательных элементов `filterOut`, и массив элементов `toAdd`.

Функция должна сначала удалить все элементы из `arr`, которые присутствуют в `filterOut`, а затем добавить к концу массива все элементы из `toAdd`.

В переданном массиве могут быть дубликаты элементов. Убедитесь, что все дубликаты удалены, если они в списке на удаление.

Функция должна возвращать новый массив, переданный массив должен остаться не измененным.


Пример запуска функции:
```javascript
const originalArray = ['apple', 'banana', 'carrot', 'date', 'eggplant'];
const filterOut = ['banana', 'carrot'];
const toAdd = ['fig', 'grape'];

console.log(filterAndAppend(originalArray, filterOut, toAdd)); // [ 'apple', 'date', 'eggplant', 'fig', 'grape' ]

const originalArray = ['apple', 'banana', 'banana', 'carrot'];
const filterOut = ['banana'];
const toAdd = ['date'];

console.log(filterAndAppend(originalArray, filterOut, toAdd)) // [ 'apple', 'carrot', 'date' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterAndAppend(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterAndAppend(arr, filterOut, toAdd) {
  const copy = [...arr]

  for(let el of filterOut){
    let index = copy.indexOf(el)

    while(index !== -1){
      copy.splice(index, 1)
      index = copy.indexOf(el)
    }

  }

  return copy.toSpliced(copy.length, 0, ...toAdd);
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toSpliced = function(start, deleteCount, ...items) {
  let newArray = this.slice();
  if(deleteCount === undefined) deleteCount = newArray.length - start
  newArray.splice(start, deleteCount, ...items);
  return newArray;
};

it('Created function filterAndAppend', () => {
  expect(filterAndAppend).to.be.a('function');
});

it("correctly filters out specified elements and appends new ones", () => {
  const originalArray = ['apple', 'banana', 'carrot', 'date', 'eggplant'];
  const filterOut = ['banana', 'carrot'];
  const toAdd = ['fig', 'grape'];
  const resultArray = filterAndAppend(originalArray, filterOut, toAdd);
  expect(resultArray).to.deep.equal(['apple', 'date', 'eggplant', 'fig', 'grape']);
});

it("returns the original array when no elements are filtered out and nothing is added", () => {
  const originalArray = ['apple', 'banana'];
  const filterOut = [];
  const toAdd = [];
  const resultArray = filterAndAppend(originalArray, filterOut, toAdd);
  expect(resultArray).to.deep.equal(['apple', 'banana']);
});

it("works correctly with empty original array", () => {
  const originalArray = [];
  const filterOut = ['banana', 'carrot'];
  const toAdd = ['fig', 'grape'];
  const resultArray = filterAndAppend(originalArray, filterOut, toAdd);
  expect(resultArray).to.deep.equal(['fig', 'grape']);
});

it("correctly appends elements when no elements are filtered out", () => {
  const originalArray = ['apple', 'banana'];
  const filterOut = ['carrot'];
  const toAdd = ['date', 'eggplant'];
  expect(filterAndAppend(originalArray, filterOut, toAdd)).to.deep.equal(['apple', 'banana', 'date', 'eggplant']);
});

it("leaves the array unchanged when filterOut and toAdd are empty", () => {
  const originalArray = ['fig', 'grape'];
  expect(filterAndAppend(originalArray, [], [])).to.deep.equal(['fig', 'grape']);
});

it("removes all instances of filtered out elements", () => {
  const originalArray = ['apple', 'banana', 'banana', 'carrot'];
  const filterOut = ['banana'];
  const toAdd = ['date'];
  expect(filterAndAppend(originalArray, filterOut, toAdd)).to.deep.equal(['apple', 'carrot', 'date']);
});

it("handles filtering out non-existent elements gracefully", () => {
  const originalArray = ['fig', 'grape'];
  const filterOut = ['apple'];
  const toAdd = ['honeydew'];
  expect(filterAndAppend(originalArray, filterOut, toAdd)).to.deep.equal(['fig', 'grape', 'honeydew']);
});

it("correctly appends multiple copies of the same element", () => {
  const originalArray = ['apple', 'banana'];
  const filterOut = ['banana'];
  const toAdd = ['carrot', 'carrot'];
  expect(filterAndAppend(originalArray, filterOut, toAdd)).to.deep.equal(['apple', 'carrot', 'carrot']);
});

it("successfully filters out every element in the original array", () => {
  const originalArray = ['apple', 'banana', 'carrot'];
  const filterOut = ['apple', 'banana', 'carrot'];
  const toAdd = ['date'];
  expect(filterAndAppend(originalArray, filterOut, toAdd)).to.deep.equal(['date']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
