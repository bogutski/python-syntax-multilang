// NAMEEN:
// NAMERU:Модификация выбранных элементов массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterAndModify`, которая принимает массив, функцию-условие и функцию-модификатор.

Функция должна изменять элементы исходного массива, которые удовлетворяют заданному условию, применяя к ним функцию-модификатор mod. Остальные элементы оставляются без изменений. Возвращает модифицированный исходный массив.


Пример запуска функции:
```javascript
const items = [1, "hello", 2, "world", 3];
filterAndModify(
    items,
    item => typeof item === "number",
    item => item * 2
);
console.log(items); // [ 2, 'hello', 4, 'world', 6 ]


const numbers = [1, 2, 3, 4, 5];
filterAndModify(numbers, n => n % 2 === 0, n => n * 2);
console.log(numbers); // [ 1, 4, 3, 8, 5 ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterAndModify(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterAndModify(arr, isTrue, mod) {
  arr.forEach((el, i) => {
    if(isTrue(el)) arr[i] = mod(el)
  })

  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function filterAndModify', () => {
  expect(filterAndModify).to.be.a('function');
});

it('Function filterAndModify should include method forEach()', () => {
  const res = filterAndModify.toString()
  expect(res).to.include('.forEach(')
});

it("filterAndModify([1, 2, 3, 4, 5], n => n % 2 === 0, n => n * 2) should modify array to [1, 4, 3, 8, 5]", () => {
  const numbers = [1, 2, 3, 4, 5];
  filterAndModify(numbers, n => n % 2 === 0, n => n * 2);
  expect(numbers).to.deep.equal([1, 4, 3, 8, 5]);
});

it("filterAndModify(['a', 'b', 'c'], item => item === 'b', item => item.toUpperCase()) should modify array to ['a', 'B', 'c']", () => {
  const letters = ['a', 'b', 'c'];
  filterAndModify(letters, item => item === 'b', item => item.toUpperCase());
  expect(letters).to.deep.equal(['a', 'B', 'c']);
});

it("filterAndModify([10, 15, 20, 25], n => n > 10, n => n - 5) should modify array to [10, 10, 15, 20]", () => {
  const numbers = [10, 15, 20, 25];
  filterAndModify(numbers, n => n > 10, n => n - 5);
  expect(numbers).to.deep.equal([10, 10, 15, 20]);
});

it("filterAndModify([true, false, true], value => value === false, value => !value) should modify array to [true, true, true]", () => {
  const bools = [true, false, true];
  filterAndModify(bools, value => value === false, value => !value);
  expect(bools).to.deep.equal([true, true, true]);
});

it("filterAndModify(['apple', 'banana', 'cherry'], item => item.includes('a'), item => item.toUpperCase()) should modify array to ['APPLE', 'BANANA', 'cherry']", () => {
  const fruits = ['apple', 'banana', 'cherry'];
  filterAndModify(fruits, item => item.includes('a'), item => item.toUpperCase());
  expect(fruits).to.deep.equal(['APPLE', 'BANANA', 'cherry']);
});

it("filterAndModify([0, 1, 2, 3, 4], n => n % 2 === 0, n => n + 1) should modify array to [1, 1, 3, 3, 5]", () => {
  const numbers = [0, 1, 2, 3, 4];
  filterAndModify(numbers, n => n % 2 === 0, n => n + 1);
  expect(numbers).to.deep.equal([1, 1, 3, 3, 5]);
});

it("filterAndModify(['', ' ', 'text'], item => item.trim() === '', item => 'empty') should modify array to ['empty', 'empty', 'text']", () => {
  const strings = ['', ' ', 'text'];
  filterAndModify(strings, item => item.trim() === '', item => 'empty');
  expect(strings).to.deep.equal(['empty', 'empty', 'text']);
});

it("filterAndModify([3, 6, 9], n => true, n => n / 3) should modify array to [1, 2, 3]", () => {
  const numbers = [3, 6, 9];
  filterAndModify(numbers, n => true, n => n / 3);
  expect(numbers).to.deep.equal([1, 2, 3]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
