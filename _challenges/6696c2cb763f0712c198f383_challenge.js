// NAMEEN:
// NAMERU:Удаление и возврат последнего элемента массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `removeAndReturnLast`, которая удаляет последний элемент из переданного массива и возвращает удаленный элемент.

Если массив изначально пустой, функция должна возвращать null.

Пример запуска функции:
```javascript
removeAndReturnLast([1, 2, 3]); // 3
removeAndReturnLast([1, 2, 3, 4, 5]); // 5
removeAndReturnLast(['bananas', 'apple', 'strawberry']); // 'strawberry'
removeAndReturnLast([])); // null
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function removeAndReturnLast(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function removeAndReturnLast(arr){
  if(!arr.length) return null
  return arr.pop()
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function removeAndReturnLast', () => {
  expect(removeAndReturnLast).to.be.a('function');
});

it("removeAndReturnLast([]) should return null", () => {
  expect(removeAndReturnLast([])).to.equal(null);
});

it("removeAndReturnLast([100, 0, 5555, 795, 1]) should return 1", () => {
  expect(removeAndReturnLast([100, 0, 5555, 795, 1])).to.equal(1);
});

it("Should modify the original array by removing the last element", () => {
  let arr = [1, 2, 3];
  removeAndReturnLast(arr);
  expect(arr).to.deep.equal([1, 2]);
});

it("removeAndReturnLast(['a', 'b', 'c']) should return 'c'", () => {
  expect(removeAndReturnLast(['a', 'b', 'c'])).to.equal('c');
});

it("removeAndReturnLast(['single']) should return 'single'", () => {
  expect(removeAndReturnLast(['single'])).to.equal('single');
});

it("removeAndReturnLast([true, 'string', 42]) should return 42", () => {
  expect(removeAndReturnLast([true, 'string', 42])).to.equal(42);
});

it("Should return the last element without affecting preceding elements", () => {
  let arr = [1, 'two', 3.0];
  removeAndReturnLast(arr);
  expect(arr).to.deep.equal([1, 'two']);
});

it("Should handle array with null elements correctly", () => {
  expect(removeAndReturnLast([null, null, null])).to.equal(null);
});

it("Should not throw an error for arrays containing undefined elements", () => {
  expect(() => removeAndReturnLast([undefined, undefined, undefined])).to.not.throw();
  expect(removeAndReturnLast([undefined, undefined, undefined])).to.equal(undefined);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
