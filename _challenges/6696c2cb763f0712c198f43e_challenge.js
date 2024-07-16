// NAMEEN:
// NAMERU:Уникальное добавление элементов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `addUnique`, которая принимает два параметра: массив `arr` и произвольное количество элементов `newElements`.

Функция должна использовать метод `toSpliced()` для добавления новых элементов в копию массива.

Только уникальные элементы должны быть добавлены, это те, которых в оригинальном массиве еще нет.

Ваша функция должна возвращать новый массив с уникальными элементами.


Пример запуска функции:
```javascript
const originalArray = ['apple', 'banana', 'cherry'];
const newArray = addUnique(originalArray, 'banana', 'cherry', 'durian', 'elderberry');

console.log(originalArray); // Вывод: ['apple', 'banana', 'cherry']
console.log(newArray);      // Вывод: ['apple', 'banana', 'cherry', 'durian', 'elderberry']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function addUnique(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addUnique(arr, ...elements) {
  const newElements = elements.filter(el => !arr.includes(el))
  return arr.toSpliced(arr.length, 0, ...newElements);
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toSpliced = function(start, deleteCount, ...items) {
  let newArray = this.slice();
  if(deleteCount === undefined) deleteCount = newArray.length - start
  newArray.splice(start, deleteCount, ...items);
  return newArray;
};

it('Created function addUnique', () => {
  expect(addUnique).to.be.a('function');
});

it('Function addUnique should include method toSpliced()', () => {
  const res = addUnique.toString()
  expect(res).to.include('.toSpliced(')
});

it("addUnique(['apple', 'banana', 'cherry'], 'banana', 'cherry', 'durian', 'elderberry') should return ['apple', 'banana', 'cherry', 'durian', 'elderberry']", () => {
  expect(addUnique(['apple', 'banana', 'cherry'], 'banana', 'cherry', 'durian', 'elderberry')).to.deep.equal(['apple', 'banana', 'cherry', 'durian', 'elderberry']);
});

it("addUnique(['apple'], 'banana') should return ['apple', 'banana']", () => {
  expect(addUnique(['apple'], 'banana')).to.deep.equal(['apple', 'banana']);
});

it("addUnique(['apple', 'banana'], 'apple') should not add duplicate 'apple'", () => {
  expect(addUnique(['apple', 'banana'], 'apple')).to.deep.equal(['apple', 'banana']);
});

it("addUnique([], 'apple', 'banana') should return ['apple', 'banana'] for an empty original array", () => {
  expect(addUnique([], 'apple', 'banana')).to.deep.equal(['apple', 'banana']);
});

it("addUnique(['apple', 'banana'], 'cherry', 'durian') should return ['apple', 'banana', 'cherry', 'durian']", () => {
  expect(addUnique(['apple', 'banana'], 'cherry', 'durian')).to.deep.equal(['apple', 'banana', 'cherry', 'durian']);
});

it("addUnique(['apple'], 'banana', 'apple') should ignore the second 'apple'", () => {
  expect(addUnique(['apple'], 'banana', 'apple')).to.deep.equal(['apple', 'banana']);
});

it("addUnique(['apple', 'banana'], 'banana', 'banana') should ignore repeated 'banana'", () => {
  expect(addUnique(['apple', 'banana'], 'banana', 'banana')).to.deep.equal(['apple', 'banana']);
});

it("addUnique([], 'apple') should return ['apple'] when starting from an empty array", () => {
  expect(addUnique([], 'apple')).to.deep.equal(['apple']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
