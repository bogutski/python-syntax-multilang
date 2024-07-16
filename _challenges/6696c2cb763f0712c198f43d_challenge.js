// NAMEEN:
// NAMERU:Очистка и наполнение массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `clearAndFill`, которая принимает массив и произвольное количество аргументов `newElements`.

Функция должна удалять все элементы из копии массива, используя метод `toSpliced()`, а затем добавлять `newElements` в массив.

Ваша функция должна возвращать новый массив с добавленными элементами, оставляя исходный массив неизменным.


Пример запуска функции:
```javascript
const originalArray = ['apple', 'banana', 'cherry'];
const newArray = clearAndFill(originalArray, 'durian', 'elderberry');

console.log(originalArray); // Вывод: ['apple', 'banana', 'cherry']
console.log(newArray);      // Вывод: ['durian', 'elderberry']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function clearAndFill(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function clearAndFill(arr, ...elements) {
  return arr.toSpliced(0, arr.length, ...elements);
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toSpliced = function(start, deleteCount, ...items) {
  let newArray = this.slice();
  if(deleteCount === undefined) deleteCount = newArray.length - start
  newArray.splice(start, deleteCount, ...items);
  return newArray;
};

it('Created function clearAndFill', () => {
  expect(clearAndFill).to.be.a('function');
});

it('Function clearAndFill should include method toSpliced()', () => {
  const res = clearAndFill.toString()
  expect(res).to.include('.toSpliced(')
});

it("clearAndFill(['apple', 'banana', 'cherry'], 'durian', 'elderberry') should return ['durian', 'elderberry']", () => {
  const originalArray = ['apple', 'banana', 'cherry'];
  const newArray = clearAndFill(originalArray, 'durian', 'elderberry');
  expect(newArray).to.deep.equal(['durian', 'elderberry']);
});

it("clearAndFill(['apple', 'banana', 'cherry'], 'durian', 'elderberry') should return ['apple', 'banana', 'cherry']", () => {
  const originalArray = ['apple', 'banana', 'cherry'];
  clearAndFill(originalArray, 'durian', 'elderberry');
  expect(originalArray).to.deep.equal(['apple', 'banana', 'cherry']);
});

it("clearAndFill(['apple', 'banana', 'cherry']) should return []", () => {
  const originalArray = ['apple', 'banana', 'cherry'];
  const newArray = clearAndFill(originalArray);
  expect(newArray).to.deep.equal([]);
});

it("clearAndFill([1, 2, 3], 4, 5, 6) should return [4, 5, 6]", () => {
  const originalArray = [1, 2, 3];
  const newArray = clearAndFill(originalArray, 4, 5, 6);
  expect(newArray).to.deep.equal([4, 5, 6]);
});

it("clearAndFill(['a', 1, true], null, 'b', 2) should return [null, 'b', 2]", () => {
  const originalArray = ['a', 1, true];
  const newArray = clearAndFill(originalArray, null, 'b', 2);
  expect(newArray).to.deep.equal([null, 'b', 2]);
});

it("clearAndFill(['apple', 'banana'], undefined) should return [undefined]", () => {
  const originalArray = ['apple', 'banana'];
  const newArray = clearAndFill(originalArray, undefined);
  expect(newArray).to.deep.equal([undefined]);
});

it("clearAndFill([], 'new', 'array') should return ['new', 'array']", () => {
  const originalArray = [];
  const newArray = clearAndFill(originalArray, 'new', 'array');
  expect(newArray).to.deep.equal(['new', 'array']);
});

it("clearAndFill([], 'a', 'b', 'c') should return ['a', 'b', 'c']", () => {
  const originalArray = [];
  const newArray = clearAndFill(originalArray, 'a', 'b', 'c');
  expect(newArray).to.deep.equal(['a', 'b', 'c']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
