// NAMEEN:
// NAMERU:Динамическое добавление элементов в начало массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `prependItemsDynamic`, которая принимает исходный массив и произвольное количество дополнительных элементов.

Функция должна добавлять все переданные элементы в начало исходного массива и возвращать новую длину исходного массива.

Использование метода `.length` запрещено.


Пример запуска функции:
```javascript
prependItemsDynamic([1, 2, 3, 4, 5], 0); // 6
prependItemsDynamic([4, 5], 1, 2, 3); // 5
prependItemsDynamic([], 'a', 'b'); // 2
prependItemsDynamic([]); // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function prependItemsDynamic(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function prependItemsDynamic(arr, ...items){
  return arr.unshift(...items)
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function prependItemsDynamic', () => {
  expect(prependItemsDynamic).to.be.a('function');
});

it('Function prependItemsDynamic does not include "length"', () => {
  const result = prependItemsDynamic.toString()
  expect(result).to.not.include('.length');
});

it("prependItemsDynamic([4, 5], 1, 2, 3) should return 5 without using .length", () => {
  expect(prependItemsDynamic([4, 5], 1, 2, 3)).to.equal(5);
});

it("prependItemsDynamic([], 1, 2, 3) should return 3 without using .length", () => {
  expect(prependItemsDynamic([], 1, 2, 3)).to.equal(3);
});

it("prependItemsDynamic([1], 'a', 'b', 'c') should return 4 without using .length", () => {
  expect(prependItemsDynamic([1], 'a', 'b', 'c')).to.equal(4);
});

it("prependItemsDynamic(['start'], 1, true, 'text') should return 4", () => {
  expect(prependItemsDynamic(['start'], 1, true, 'text')).to.equal(4);
});

it("prependItemsDynamic([true, false]) should return 2", () => {
  expect(prependItemsDynamic([true, false])).to.equal(2);
});

it("prependItemsDynamic([], 'a', 'b') should return 2", () => {
  expect(prependItemsDynamic([], 'a', 'b')).to.equal(2);
});

it("prependItemsDynamic(['existing'], [1, 2], ['a', 'b']) should return 3", () => {
  expect(prependItemsDynamic(['existing'], [1, 2], ['a', 'b'])).to.equal(3);
});

it("prependItemsDynamic([1], undefined) should return 2", () => {
  expect(prependItemsDynamic([1], undefined)).to.equal(2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
