// NAMEEN:
// NAMERU:Удаление конкретного элемента

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `removeElement`, которая принимает массив и элемент для удаления.

Функция должна найти первое вхождение указанного элемента в массив и удалить его с помощью метода `splice()`.

Если элемент не найден, массив остается неизменным. Функция должна возвращать измененный массив.


Пример запуска функции:
```javascript
removeElement([1, 2, 3], 4);       // [ 1, 2, 3 ]
removeElement([1, 2, 3, 4, 5], 3); // [ 1, 2, 4, 5 ]
removeElement(['a', 'b', 'c', 'd'], 'c');  // [ 'a', 'b', 'd' ]
removeElement(['a', 'a', 'b', 'c'], 'a');  // [ 'a', 'b', 'c' ]
removeElement([true, false, true], false); // [ true, true ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function removeElement(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function removeElement(arr, el) {
  const index = arr.indexOf(el)

  if(index === -1) return arr
  else arr.splice(index, 1)

  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function removeElement', () => {
  expect(removeElement).to.be.a('function');
});

it('Function removeElement should include methods splice()', () => {
  const res = removeElement.toString()
  expect(res).to.include('.splice(')
});

it("removeElement([1, 2, 3, 4, 5], 3) should return [1, 2, 4, 5]", () => {
  expect(removeElement([1, 2, 3, 4, 5], 3)).to.deep.equal([1, 2, 4, 5]);
});

it("removeElement([-5, 6, 10, -5, -8, -5, 0], -5) should return [6, 10, -5, -8, -5, 0]", () => {
  expect(removeElement([-5, 6, 10, -5, -8, -5, 0], -5)).to.deep.equal([6, 10, -5, -8, -5, 0]);
});

it("removeElement(['a', 'b', 'c', 'd'], 'c') should return ['a', 'b', 'd']", () => {
  expect(removeElement(['a', 'b', 'c', 'd'], 'c')).to.deep.equal(['a', 'b', 'd']);
});

it("removeElement([true, false, true], false) should return [true, true]", () => {
  expect(removeElement([true, false, true], false)).to.deep.equal([true, true]);
});

it("removeElement([1, 2, 3], 4) should return [1, 2, 3] when the element is not found", () => {
  expect(removeElement([1, 2, 3], 4)).to.deep.equal([1, 2, 3]);
});

it("removeElement([], 1) should return an empty array if the input array is initially empty", () => {
  expect(removeElement([], 1)).to.deep.equal([]);
});

it("removeElement([1, 2, 3, 4, 5], 1) should remove the first element if it matches", () => {
  expect(removeElement([1, 2, 3, 4, 5], 1)).to.deep.equal([2, 3, 4, 5]);
});

it("should not modify the array if the element to remove is repeated but remove only the first occurrence", () => {
  let originalArray = [1, 2, 2, 3];
  removeElement(originalArray, 2);
  expect(originalArray).to.deep.equal([1, 2, 3]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
