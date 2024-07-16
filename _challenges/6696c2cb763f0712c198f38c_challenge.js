// NAMEEN:
// NAMERU:Удаление до первого четного числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `clearUntilEven`, которая принимает массив чисел.

Функция должна последовательно удалять элементы с конца массива, используя метод `pop()`, пока не удалит первое четное число (включая это число).

Если в массиве нет четных чисел, функция должна удалить все элементы.

Функция должна возвращать измененный массив. Если массив изначально пуст, вернуть пустой массив.


Пример запуска функции:
```javascript
clearUntilEven([1, 3, 5, 7, 4, 9]); // [1, 3, 5, 7], т.к. 4 — первое четное, удаляем его и все, что после
clearUntilEven([2, 3, 5, 7]); // [], т.к. 2 — первое (и единственное) четное число, удаляем его и все остальные
clearUntilEven([1, 3, 5, 7]); // [], т.к. нет четных чисел
clearUntilEven([]); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function clearUntilEven(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function clearUntilEven(arr) {
  let currEl = 1

  while(currEl % 2 !== 0 && arr.length  !== 0)(
      currEl = arr.pop()
  )

  return arr
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function clearUntilEven', () => {
  expect(clearUntilEven).to.be.a('function');
});

it('Function clearUntilEven includes methods pop() and push()', () => {
  const result = clearUntilEven.toString()
  expect(result).to.include('.pop()')
});

it("clearUntilEven([1, 3, 5, 7, 4, 9]) should return [1, 3, 5, 7]", () => {
  expect(clearUntilEven([1, 3, 5, 7, 4, 9])).to.deep.equal([1, 3, 5, 7]);
});

it("clearUntilEven([2, 3, 5, 7]) should return []", () => {
  expect(clearUntilEven([2, 3, 5, 7])).to.deep.equal([]);
});

it("clearUntilEven([1, 3, 5, 7]) should return [] because there are no even numbers", () => {
  expect(clearUntilEven([1, 3, 5, 7])).to.deep.equal([]);
});

it("clearUntilEven([]) should return an empty array for an initially empty array", () => {
  expect(clearUntilEven([])).to.deep.equal([]);
});

it("should modify the original array", () => {
  let originalArray = [5, 7, 9, 2, 8];
  clearUntilEven(originalArray);
  expect(originalArray).to.deep.equal([5, 7, 9, 2]);
});

it("clearUntilEven([1, 2, 3, 4, 5, 6]) should return [1, 2, 3, 4, 5]", () => {
  expect(clearUntilEven([1, 2, 3, 4, 5, 6])).to.deep.equal([1, 2, 3, 4, 5]);
});

it("clearUntilEven([0, 1, 3, 5]) should return [] because 0 is even", () => {
  expect(clearUntilEven([0, 1, 3, 5])).to.deep.equal([]);
});

it("clearUntilEven([11, 22, 33, 44, 55]) should return [11, 22, 33]", () => {
  expect(clearUntilEven([11, 22, 33, 44, 55])).to.deep.equal([11, 22, 33]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
