// NAMEEN:
// NAMERU:Замена сегментов массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `updateSegment`, которая принимает четыре параметра: исходный массив, начальную позицию `start`, количество элементов для удаления `deleteCount` и массив новых элементов `newElements`.

Функция должна использовать метод `toSpliced()` для замены сегмента в новом массиве, начиная с `start`, удаляя `deleteCount` элементов и вставляя элементы из `newElements` на их место.

Функция возвращает новый массив с обновленным сегментом, не изменяя исходный массив.


Пример запуска функции:
```javascript
const originalArray = [10, 20, 30, 40, 50];
const newElements = [60, 70, 80];
const resultArray = updateSegment(originalArray, 1, 3, newElements);

console.log(originalArray); // Вывод: [10, 20, 30, 40, 50]
console.log(resultArray);   // Вывод: [10, 60, 70, 80, 50]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function updateSegment(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function updateSegment(arr, start, deleteCount, elements) {
  return arr.toSpliced(start, deleteCount, ...elements);
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toSpliced = function(start, deleteCount, ...items) {
  let newArray = this.slice();
  if(deleteCount === undefined) deleteCount = newArray.length - start
  newArray.splice(start, deleteCount, ...items);
  return newArray;
};

it('Created function updateSegment', () => {
  expect(updateSegment).to.be.a('function');
});

it('Function updateSegment should include method toSpliced()', () => {
  const res = updateSegment.toString()
  expect(res).to.include('.toSpliced(')
});

it("updateSegment([10, 20, 30, 40, 50], 1, 3, [60, 70, 80]) should return [10, 60, 70, 80, 50]", () => {
  expect(updateSegment([10, 20, 30, 40, 50], 1, 3, [60, 70, 80])).to.deep.equal([10, 60, 70, 80, 50]);
});

it("updateSegment(['a', 'b', 'c', 'd'], 2, 1, ['x', 'y']) should return ['a', 'b', 'x', 'y', 'd']", () => {
  expect(updateSegment(['a', 'b', 'c', 'd'], 2, 1, ['x', 'y'])).to.deep.equal(['a', 'b', 'x', 'y', 'd']);
});

it("updateSegment([1, 2, 3], 0, 2, [4, 5]) should return [4, 5, 3]", () => {
  expect(updateSegment([1, 2, 3], 0, 2, [4, 5])).to.deep.equal([4, 5, 3]);
});

it("updateSegment([1], 1, 0, [2, 3]) should add elements at the end", () => {
  expect(updateSegment([1], 1, 0, [2, 3])).to.deep.equal([1, 2, 3]);
});

it("updateSegment(['apple', 'banana'], 0, 1, ['cherry']) should replace 'apple' with 'cherry'", () => {
  expect(updateSegment(['apple', 'banana'], 0, 1, ['cherry'])).to.deep.equal(['cherry', 'banana']);
});

it("updateSegment(['start', 'middle', 'end'], 1, 1, ['new']) should return ['start', 'new', 'end']", () => {
  expect(updateSegment(['start', 'middle', 'end'], 1, 1, ['new'])).to.deep.equal(['start', 'new', 'end']);
});

it("updateSegment(['x', 'y', 'z'], 0, 3, ['a']) should return ['a']", () => {
  expect(updateSegment(['x', 'y', 'z'], 0, 3, ['a'])).to.deep.equal(['a']);
});

it("updateSegment([10, 20, 30], 3, 0, [40]) should add '40' at the end", () => {
  expect(updateSegment([10, 20, 30], 3, 0, [40])).to.deep.equal([10, 20, 30, 40]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
