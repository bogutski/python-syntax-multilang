// NAMEEN:
// NAMERU:Комбинирование списков с исключениями

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `combineAndFilter`, которая принимает три массива: `list1`, `list2` и `exclusions`.

Функция должна объединить `list1` и `list2`, затем удалить из результата все элементы, присутствующие в массиве `exclusions`.

Функция должна вернуть новый массив.


Пример запуска функции:
```javascript
const list1 = ['apple', 'banana', 'carrot'];
const list2 = ['date', 'fig', 'grape'];
const exclusions = ['banana', 'date'];
console.log(combineAndFilter(list1, list2, exclusions)); // [ 'apple', 'carrot', 'fig', 'grape' ]

const list1 = [1, 2, 3, 4, 5];
const list2 = [10, 11, 12];
const exclusions = [11, 12, 2, 3, 4];
console.log(combineAndFilter(list1, list2, exclusions)); // [ 1, 5, 10 ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function combineAndFilter(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function combineAndFilter(arr1, arr2, exclusions) {
  let merged = [...arr1, ...arr2]

  for(let el of exclusions){
    const index = merged.indexOf(el)
    if(index !== -1) merged.splice(index, 1)
  }

  return merged;
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toSpliced = function(start, deleteCount, ...items) {
  let newArray = this.slice();
  if(deleteCount === undefined) deleteCount = newArray.length - start
  newArray.splice(start, deleteCount, ...items);
  return newArray;
};

it('Created function combineAndFilter', () => {
  expect(combineAndFilter).to.be.a('function');
});

it("correctly combines two lists and filters out exclusions", () => {
  const list1 = ['apple', 'banana', 'carrot'];
  const list2 = ['date', 'fig', 'grape'];
  const exclusions = ['banana', 'date'];
  expect(combineAndFilter(list1, list2, exclusions)).to.deep.equal(['apple', 'carrot', 'fig', 'grape']);
});

it("returns the first list unchanged when the second list and exclusions are empty", () => {
  const list1 = ['apple', 'banana'];
  const list2 = [];
  const exclusions = [];
  expect(combineAndFilter(list1, list2, exclusions)).to.deep.equal(['apple', 'banana']);
});

it("returns the second list unchanged when the first list and exclusions are empty", () => {
  const list1 = [];
  const list2 = ['banana', 'carrot'];
  const exclusions = [];
  expect(combineAndFilter(list1, list2, exclusions)).to.deep.equal(['banana', 'carrot']);
});

it("returns an empty array when all elements are excluded", () => {
  const list1 = ['apple'];
  const list2 = ['banana'];
  const exclusions = ['apple', 'banana'];
  expect(combineAndFilter(list1, list2, exclusions)).to.deep.equal([]);
});

it("handles the case with no exclusions correctly", () => {
  const list1 = ['apple'];
  const list2 = ['banana'];
  const exclusions = [];
  expect(combineAndFilter(list1, list2, exclusions)).to.deep.equal(['apple', 'banana']);
});

it("works correctly when lists have overlapping elements not in exclusions", () => {
  const list1 = ['apple', 'banana'];
  const list2 = ['banana', 'carrot'];
  const exclusions = ['fig'];
  expect(combineAndFilter(list1, list2, exclusions)).to.deep.equal(['apple', 'banana', 'banana', 'carrot']);
});

it("correctly handles an empty initial list", () => {
  const list1 = [];
  const list2 = ['apple', 'banana'];
  const exclusions = ['banana'];
  expect(combineAndFilter(list1, list2, exclusions)).to.deep.equal(['apple']);
});

it("excludes all elements if they all are in exclusions", () => {
  const list1 = ['apple'];
  const list2 = ['banana'];
  const exclusions = ['apple', 'banana'];
  expect(combineAndFilter(list1, list2, exclusions)).to.deep.equal([]);
});

it("returns a combined list unchanged if exclusions are not present in it", () => {
  const list1 = ['carrot', 'date'];
  const list2 = ['eggplant', 'fig'];
  const exclusions = ['apple', 'banana'];
  expect(combineAndFilter(list1, list2, exclusions)).to.deep.equal(['carrot', 'date', 'eggplant', 'fig']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
