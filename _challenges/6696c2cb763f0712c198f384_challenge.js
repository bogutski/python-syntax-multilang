// NAMEEN:
// NAMERU:Удаление элементов из массива чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `trimArray`, которая принимает массив чисел.

Функция должна удалить последние три элемента и вернуть массив.

Если исходный массив содержит три или менее элементов, функция должна вернуть пустой массив.

Используйте метод `pop()` для удаления элементов.


Пример запуска функции:
```javascript
trimArray([1, 2, 3, 4, 5, 6, 7]); // [ 1, 2, 3, 4 ]
trimArray([10, 20, 30]); // []
trimArray([1, 2]); // []
trimArray([]); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function trimArray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function trimArray(arr){
  if(arr.length < 3) return []

  for(let i = 0; i < 3; i++){
    arr.pop();
  }

  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function trimArray', () => {
  expect(trimArray).to.be.a('function');
});

it("trimArray([1, 2, 3, 4, 5, 6, 7]) should return [1, 2, 3, 4]", () => {
  expect(trimArray([1, 2, 3, 4, 5, 6, 7])).to.deep.equal([1, 2, 3, 4]);
});

it("trimArray([10, 20, 30]) should return []", () => {
  expect(trimArray([10, 20, 30])).to.deep.equal([]);
});

it("trimArray([1, 2]) should return []", () => {
  expect(trimArray([1, 2])).to.deep.equal([]);
});

it("trimArray([5, 6, 7, 8, 9]) should return [5, 6]", () => {
  expect(trimArray([5, 6, 7, 8, 9])).to.deep.equal([5, 6]);
});

it("trimArray([]) should return []", () => {
  expect(trimArray([])).to.deep.equal([]);
});

it("trimArray([100]) should return [] for an array with a single element", () => {
  expect(trimArray([100])).to.deep.equal([]);
});

it("trimArray([1, 2, 3, 4]) should return [1] for an array with exactly four elements", () => {
  expect(trimArray([1, 2, 3, 4])).to.deep.equal([1]);
});

it("trimArray([9, 8, 7, 6, 5, 4, 3, 2, 1]) should return [9, 8, 7, 6, 5, 4] for an array with nine elements", () => {
  expect(trimArray([9, 8, 7, 6, 5, 4, 3, 2, 1])).to.deep.equal([9, 8, 7, 6, 5, 4]);
});

it("trimArray([0, 0, 0, 0, 0, 0]) should return [0, 0, 0]", () => {
  expect(trimArray([0, 0, 0, 0, 0, 0])).to.deep.equal([0, 0, 0]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
