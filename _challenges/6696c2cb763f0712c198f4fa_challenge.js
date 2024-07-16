// NAMEEN:
// NAMERU:Обновление элемента массива с проверкой границ

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `updateArrayElement`, которая принимает массив, индекс элемента для обновления и новое значение для этого элемента.

Функция должна обновить элемент массива на указанном индексе, если индекс находится в пределах границ массива.

Если индекс выходит за границы массива, функция должна возвращать строку `Index is out of bound`.

Функция должна возвращать новый массив с обновленным элементом, не изменяя исходный массив.


Примеры использования функции:
```javascript
updateArrayElement(['January', 'February', 'March', 'April'], 2, 'Updated Month');
// ['January', 'February', 'Updated Month', 'April']

updateArrayElement([1, 2, 3], 5, 10);
// 'Index is out of bound'

updateArrayElement([1, 2, 3], -4, 10);
// 'Index is out of bound'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function updateArrayElement(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function updateArrayElement(arr, i, newEl) {
  if(Math.abs(i) < arr.length) return arr.with(i, newEl)
  else return 'Index is out of bound'
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.with = function(index, value){
  const newArray = this.slice();
  newArray.splice(index, 1, value);
  return newArray;
}

it('Created function updateArrayElement', () => {
  expect(updateArrayElement).to.be.a('function');
});

it('Function updateArrayElement should include method with()', () => {
  const res = updateArrayElement.toString()
  expect(res).to.include('.with(')
});

it('updates the element when index is within bounds', () => {
  const originalArray = ['January', 'February', 'March', 'April'];
  const result = updateArrayElement(originalArray, 2, 'Updated Month');
  expect(result).to.deep.equal(['January', 'February', 'Updated Month', 'April']);
});

it('does not modify the original array', () => {
  const originalArray = ['January', 'February', 'March', 'April'];
  updateArrayElement(originalArray, 1, 'Updated Month');
  expect(originalArray).to.deep.equal(['January', 'February', 'March', 'April']);
});

it('returns "Index is out of bound" when index is out of bounds', () => {
  const originalArray = ['January', 'February', 'March', 'April'];
  const result = updateArrayElement(originalArray, 4, 'May');
  expect(result).to.equal('Index is out of bound');
});

it('handles negative index correctly', () => {
  const originalArray = ['January', 'February', 'March', 'April'];
  const result = updateArrayElement(originalArray, -1, 'Updated Month');
  expect(result).to.deep.equal(['January', 'February', 'March', 'Updated Month']);
});

it('returns a new array with updated value when index is zero', () => {
  const originalArray = ['January', 'February', 'March', 'April'];
  const result = updateArrayElement(originalArray, 0, 'Updated Month');
  expect(result).to.deep.equal(['Updated Month', 'February', 'March', 'April']);
});

it('returns a new array with the first element updated when index is 0', () => {
  const originalArray = ['Monday', 'Tuesday', 'Wednesday'];
  const result = updateArrayElement(originalArray, 0, 'Sunday');
  expect(result).to.deep.equal(['Sunday', 'Tuesday', 'Wednesday']);
});

it('returns "Index is out of bound" for negative index that is out of bounds', () => {
  const originalArray = ['January', 'February', 'March'];
  const result = updateArrayElement(originalArray, -4, 'December');
  expect(result).to.equal('Index is out of bound');
});

it('updates the last element correctly using a negative index', () => {
  const originalArray = ['Apple', 'Banana', 'Cherry'];
  const result = updateArrayElement(originalArray, -1, 'Dragonfruit');
  expect(result[result.length - 1]).to.equal('Dragonfruit');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
