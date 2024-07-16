// NAMEEN:
// NAMERU:Сортировка массива с числами и строками

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sortMixedArray`, которая принимает массив, включающий как числовые, так и строковые элементы, представляющие числа.

Функция должна преобразовывать все строковые элементы в числа, затем сортировать весь массив по возрастанию и возвращать новый, отсортированный массив чисел.


Примеры запуска функции:
```javascript
sortMixedArray([4, 6, 2, '3', 0, '5', '1']); // [0, 1, 2, 3, 4, 5, 6]
sortMixedArray([10, '-15', '20', -5, '0']); // [-15, -5, 0, 10, 20]
sortMixedArray(['007', 3, '2', '0001']); //  [1, 2, 3, 7]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sortMixedArray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortMixedArray(arr) {
  return arr.map(el => +el).toSorted((a, b) => a - b);
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toSorted = function(compareFunction){
  const newArray = this.slice()
  if(compareFunction) return newArray.sort(compareFunction)
  else return newArray.sort()
}

it('Created function sortMixedArray', () => {
  expect(sortMixedArray).to.be.a('function');
});

it('Function sortMixedArray should include method toSorted()', () => {
  const res = sortMixedArray.toString()
  expect(res).to.include('.toSorted(')
});

it('Function sortMixedArray should not include method sort()', () => {
  const res = sortMixedArray.toString()
  expect(res).to.not.include('.sort(')
});

it("sortMixedArray should not modify the original array", () => {
  const originalArray = [4, '6', 2, '3', 0, '5', '1'];
  sortMixedArray(originalArray);
  expect(originalArray).to.deep.equal([4, '6', 2, '3', 0, '5', '1']);
});

it("sortMixedArray([4, 6, 2, '3', 0, '5', '1']) should return [0, 1, 2, 3, 4, 5, 6]", () => {
  expect(sortMixedArray([4, 6, 2, '3', 0, '5', '1'])).to.deep.equal([0, 1, 2, 3, 4, 5, 6]);
});

it("sortMixedArray(['10', 9, '8', 7]) should return [7, 8, 9, 10]", () => {
  expect(sortMixedArray(['10', 9, '8', 7])).to.deep.equal([7, 8, 9, 10]);
});

it("sortMixedArray([]) should return an empty array", () => {
  expect(sortMixedArray([])).to.deep.equal([]);
});

it("sortMixedArray(['0', '1', '2']) should return [0, 1, 2]", () => {
  expect(sortMixedArray(['0', '1', '2'])).to.deep.equal([0, 1, 2]);
});

it("sortMixedArray([5, '11', 2, '1']) should sort numeric strings as numbers", () => {
  expect(sortMixedArray([5, '11', 2, '1'])).to.deep.equal([1, 2, 5, 11]);
});

it("sortMixedArray(['100', 50, '25', 75]) should convert all to numbers and sort", () => {
  expect(sortMixedArray(['100', 50, '25', 75])).to.deep.equal([25, 50, 75, 100]);
});

it("sortMixedArray(['004', 2, '3', 1]) should handle leading zeros in strings correctly", () => {
  expect(sortMixedArray(['004', 2, '3', 1])).to.deep.equal([1, 2, 3, 4]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
