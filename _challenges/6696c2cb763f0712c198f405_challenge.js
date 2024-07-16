// NAMEEN:
// NAMERU:Ротация элементов массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `rotateArray`, которая принимает массив и число N.

Функция должна "ротировать" массив, перемещая первые N элементов из начала массива в его конец.

Если N отрицательное, перемещение должно происходить из конца массива в начало.

Функция должна возвращать измененный массив.


Пример запуска функции:
```javascript
rotateArray(['a', 'b', 'c', 'd', 'e'], 7); // [ 'a', 'b', 'c', 'd', 'e' ]
rotateArray(['a', 'b', 'c', 'd'], -1);    // [ 'd', 'a', 'b', 'c' ]
rotateArray([true, false, true], 3);     // [ true, false, true ]
rotateArray([1, 2, 3, 4, 5], -3);       // [ 3, 4, 5, 1, 2 ]
rotateArray([1, 2, 3, 4, 5], 2);       // [ 3, 4, 5, 1, 2 ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function rotateArray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function rotateArray(arr, n) {

  if(n > 0){
    const deletedElements = arr.splice(0, n)
    arr.splice(arr.length, 0, ...deletedElements)
  } else {
    const deletedElements = arr.splice(n)
    arr.splice(0, 0, ...deletedElements)
  }

  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function rotateArray', () => {
  expect(rotateArray).to.be.a('function');
});

it('Function rotateArray should include methods splice()', () => {
  const res = rotateArray.toString()
  expect(res).to.include('.splice(')
});

it("rotateArray([1, 2, 3, 4, 5], 2) should return [3, 4, 5, 1, 2]", () => {
  expect(rotateArray([1, 2, 3, 4, 5], 2)).to.deep.equal([3, 4, 5, 1, 2]);
});

it("rotateArray(['a', 'b', 'c', 'd'], -1) should return ['d', 'a', 'b', 'c']", () => {
  expect(rotateArray(['a', 'b', 'c', 'd'], -1)).to.deep.equal(['d', 'a', 'b', 'c']);
});

it("rotateArray([true, false, true], 3) should return [true, false, true]", () => {
  expect(rotateArray([true, false, true], 3)).to.deep.equal([true, false, true]);
});

it("rotateArray([1, 2, 3, 4, 5], -3) should return [3, 4, 5, 1, 2]", () => {
  expect(rotateArray([1, 2, 3, 4, 5], -3)).to.deep.equal([3, 4, 5, 1, 2]);
});

it("rotateArray([1, 2, 3], 6) should return the same array as rotating by its length doesn't change it", () => {
  expect(rotateArray([1, 2, 3], 6)).to.deep.equal([1, 2, 3]);
});

it("should handle the case when N is 0 and return the original array unchanged", () => {
  let originalArray = [1, 2, 3];
  expect(rotateArray(originalArray, 0)).to.deep.equal([1, 2, 3]);
});

it("rotateArray(['first', 'second', 'third', 'fourth'], 2) should correctly rotate elements to the end", () => {
  expect(rotateArray(['first', 'second', 'third', 'fourth'], 2)).to.deep.equal(['third', 'fourth', 'first', 'second']);
});

it("rotateArray(['a', 'b', 'c', 'd', 'e'], 7) should return ['a', 'b', 'c', 'd', 'e']", () => {
  expect(rotateArray(['a', 'b', 'c', 'd', 'e'], 7)).to.deep.equal(['a', 'b', 'c', 'd', 'e']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
