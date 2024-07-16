// NAMEEN:
// NAMERU:Удаление и возврат первого элемента

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `removeAndReturnFirst`, которая принимает массив и возвращает первый элемент этого массива, одновременно удаляя его из массива.

Если массив изначально пуст, функция должна возвращать undefined.

Для выполнения задачи используйте метод `shift()`.


Пример запуска функции:
```javascript
removeAndReturnFirst(['a', 'b', 'c']); // Должен вернуть 'а', массив станет ['b', 'c']
removeAndReturnFirst([1, 2, 3]); // Должен вернуть 1, массив станет [2, 3]
removeAndReturnFirst([]); // Должен вернуть undefined, массив остается []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function removeAndReturnFirst(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function removeAndReturnFirst(arr) {
  return arr.shift();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function removeAndReturnFirst', () => {
  expect(removeAndReturnFirst).to.be.a('function');
});

it('Function removeAndReturnFirst should include method shift()', () => {
  const res = removeAndReturnFirst.toString()
  expect(res).to.include('.shift()')
});

it("removeAndReturnFirst([1, 2, 3]) should return 1", () => {
  expect(removeAndReturnFirst([1, 2, 3])).to.equal(1);
});

it("removeAndReturnFirst(['a', 'b', 'c']) should return 'a'", () => {
  expect(removeAndReturnFirst(['a', 'b', 'c'])).to.equal('a');
});

it("removeAndReturnFirst([]) should return undefined", () => {
  expect(removeAndReturnFirst([])).to.equal(undefined);
});

it("removeAndReturnFirst([true, false, true]) should return true", () => {
  expect(removeAndReturnFirst([true, false, true])).to.equal(true);
});

it("removeAndReturnFirst(['single']) should return 'single'", () => {
  expect(removeAndReturnFirst(['single'])).to.equal('single');
});

it("should modify the original array by removing the first element", () => {
  let originalArray = [1, 2, 3];
  removeAndReturnFirst(originalArray);
  expect(originalArray).to.deep.equal([2, 3]);
});

it("removeAndReturnFirst([[1, 2], [3, 4], [5, 6]]) should return [1, 2]", () => {
  expect(removeAndReturnFirst([[1, 2], [3, 4], [5, 6]])).to.deep.equal([1, 2]);
});

it("removeAndReturnFirst(['long', 'string', 'array']) should return 'long'", () => {
  expect(removeAndReturnFirst(['long', 'string', 'array'])).to.equal('long');
});

it("removeAndReturnFirst([undefined, null, '']) should return undefined", () => {
  expect(removeAndReturnFirst([undefined, null, ''])).to.equal(undefined);
});

it("removeAndReturnFirst([-1, 0, 1, 2]) should return -1", () => {
  expect(removeAndReturnFirst([-1, 0, 1, 2])).to.equal(-1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
