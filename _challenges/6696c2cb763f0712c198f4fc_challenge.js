// NAMEEN:
// NAMERU:Обновление элемента с проверкой на уникальность

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `updateIfUnique`, которая принимает три аргумента: массив, индекс для обновления и новое значение.

Функция должна обновить элемент в массиве на указанном индексе только в случае, если новое значение не существует в массиве.

Если значение уже существует, функция должна вернуть новый массив без изменений.

Если индекс находится за пределами диапазона массива, функция также должна вернуть новый массив без изменений.


Примеры запуска функции:
```javascript
const originalArray = ['apple', 'banana', 'cherry'];
console.log(updateIfUnique(originalArray, 1, 'date')); // ['apple', 'date', 'cherry']
console.log(updateIfUnique(originalArray, 1, 'banana')); // ['apple', 'banana', 'cherry']
console.log(updateIfUnique(originalArray, 3, 'date')); // ['apple', 'banana', 'cherry']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function updateIfUnique(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function updateIfUnique(arr, i, el) {
  const isIncluded = arr.includes(el)
  const withingBound = Math.abs(i) < arr.length

  if(!isIncluded && withingBound) return arr.with(i, el)
  else return [...arr]
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.with = function(index, value){
  const newArray = this.slice();
  newArray.splice(index, 1, value);
  return newArray;
}

it('Created function updateIfUnique', () => {
  expect(updateIfUnique).to.be.a('function');
});

it('Function updateIfUnique should include method with()', () => {
  const res = updateIfUnique.toString()
  expect(res).to.include('.with(')
});

it("updates value at index 1 to 'date' when 'date' is not in the array", () => {
  expect(updateIfUnique(['apple', 'banana', 'cherry'], 1, 'date')).to.deep.equal(['apple', 'date', 'cherry']);
});

it("does not update value at index 1 to 'banana' when 'banana' is already in the array", () => {
  expect(updateIfUnique(['apple', 'banana', 'cherry'], 1, 'banana')).to.deep.equal(['apple', 'banana', 'cherry']);
});

it("returns a new array without changes when index is out of bounds", () => {
  expect(updateIfUnique(['apple', 'banana', 'cherry'], 3, 'date')).to.deep.equal(['apple', 'banana', 'cherry']);
});

it("returns a new array without changes when the new value is already present in the array", () => {
  expect(updateIfUnique(['apple', 'banana', 'cherry'], 2, 'apple')).to.deep.equal(['apple', 'banana', 'cherry']);
});

it("correctly handles negative index", () => {
  expect(updateIfUnique(['apple', 'banana', 'cherry'], -1, 'date')).to.deep.equal(['apple', 'banana', 'date']);
});

it("updates the first element when index is 0 and new value is unique", () => {
  expect(updateIfUnique(['apple', 'banana', 'cherry'], 0, 'date')).to.deep.equal(['date', 'banana', 'cherry']);
});

it("does not update when the new value is already present and index is the last element", () => {
  expect(updateIfUnique(['apple', 'banana', 'cherry'], 2, 'apple')).to.deep.equal(['apple', 'banana', 'cherry']);
});

it("returns a new array without changes when the index is negative and out of bounds", () => {
  expect(updateIfUnique(['apple', 'banana', 'cherry'], -4, 'date')).to.deep.equal(['apple', 'banana', 'cherry']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
