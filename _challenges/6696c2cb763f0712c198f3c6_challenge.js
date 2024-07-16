// NAMEEN:
// NAMERU:Перемещение минимального элемента в начало

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `moveMinToFront`, которая принимает массив чисел.

Функция должна найти минимальный/ые элемент/ы в массиве, и добавить в начало массива.

Если минимальный элемент повторяется,

Используйте комбинацию методов `shift()`,` push()` и `unshift()` для выполнения этой задачи.

Если массив пуст, функция должна вернуть пустой массив.

Функция возвращает новый массив и переданный массив должен быть пустой.


Пример запуска функции:
```javascript
moveMinToFront([10, 22, 5, 1]); // [ 1, 10, 22, 5 ]
moveMinToFront([4, 2, 1, 3, 5]); // [ 1, 4, 2, 3, 5 ]
moveMinToFront([-3, -1, -2, -10]); // [ -10, -3, -1, -2 ]
moveMinToFront([5, 0, 5, 0, 5, 5]); // [ 0, 0, 5, 5, 5, 5 ]
moveMinToFront([]); // Должен вернуть []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function moveMinToFront(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function moveMinToFront(arr) {
  let res = []
  const min = Math.min(...arr)

  while(arr.length){
    const el = arr.shift()
    if(el === min) res.unshift(el)
    else res.push(el)
  }

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function moveMinToFront', () => {
  expect(moveMinToFront).to.be.a('function');
});

it('Function moveMinToFront should include methods: push(), shift(), unshift()', () => {
  const res = moveMinToFront.toString()
  expect(res).to.include('.shift()')
  expect(res).to.include('.push(')
  expect(res).to.include('.unshift(')
});


it("moveMinToFront([4, 2, 1, 3, 5]) should return [1, 4, 2, 3, 5]", () => {
  expect(moveMinToFront([4, 2, 1, 3, 5])).to.deep.equal([1, 4, 2, 3, 5]);
});

it("moveMinToFront([10, 22, 5, 1]) should return [1, 10, 22, 5]", () => {
  expect(moveMinToFront([10, 22, 5, 1])).to.deep.equal([1, 10, 22, 5]);
});

it("moveMinToFront([-3, -1, -2]) should correctly leave the array unchanged because -3 is already the minimum at the front", () => {
  expect(moveMinToFront([-3, -1, -2])).to.deep.equal([-3, -1, -2]);
});

it("moveMinToFront([]) should return an empty array for an initially empty array", () => {
  expect(moveMinToFront([])).to.deep.equal([]);
});

it("moveMinToFront([5]) should return the same array when there is only one element", () => {
  expect(moveMinToFront([5])).to.deep.equal([5]);
});

it("moveMinToFront([3, 1, 4, 1, 5]) should return [1, 1, 3, 4, 5] when there are duplicate minimum values", () => {
  expect(moveMinToFront([3, 1, 4, 1, 5])).to.deep.equal([1, 1, 3, 4, 5]);
});

it("moveMinToFront([2, 3, 1]) should return a new array", () => {
  let originalArray = [2, 3, 1];
  let resultArray = moveMinToFront(originalArray);
  expect(resultArray).to.not.equal(originalArray);
  expect(resultArray).to.deep.equal([1, 2, 3]);
  expect(originalArray).to.deep.equal([]);
});

it("moveMinToFront([5, -5, 0, -5, 1, -4, -5, 3]) should return [-5, -5, -5, 5, 0, 1, -4, 3]", () => {
  expect(moveMinToFront([5, -5, 0, -5, 1, -4, -5, 3])).to.deep.equal([-5, -5, -5, 5, 0, 1, -4, 3]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
