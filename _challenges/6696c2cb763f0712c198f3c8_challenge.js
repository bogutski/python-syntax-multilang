// NAMEEN:
// NAMERU:Объединение и переворачивание двух массивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `mergeAndReverse`, которая принимает два массива в качестве аргументов.

Функция должна сначала объединить эти два массива в один, а затем перевернуть порядок элементов в полученном массиве.

Для реализации используйте методы `unshift()` и `shift()`.

Функция должна возвращать новый массив, содержащий элементы исходных массивов в обратном порядке.


Пример запуска функции:
```javascript
mergeAndReverse([1, 2, 3], [4, 5, 6]);   // [ 6, 5, 4, 3, 2, 1 ]
mergeAndReverse(['a', 'b'], ['c', 'd']); // [ 'd', 'c', 'b', 'a' ]
mergeAndReverse([], [7, 8]); // [ 8, 7 ]
mergeAndReverse(['x'], []);  // [ 'x' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function mergeAndReverse(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function mergeAndReverse(arr1, arr2) {
  const merged = [...arr1, ...arr2]
  const res = []

  while(merged.length){
    const el = merged.shift()
    res.unshift(el)
  }

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function mergeAndReverse', () => {
  expect(mergeAndReverse).to.be.a('function');
});

it('Function mergeAndReverse should include methods: push(), shift()', () => {
  const res = mergeAndReverse.toString()
  expect(res).to.include('.shift()')
  expect(res).to.include('.unshift(')
});

it('Function mergeAndReverse should not include method .reverse()', () => {
  const res = mergeAndReverse.toString()
  expect(res).to.not.include('.reverse()')
});

it("mergeAndReverse([1, 2, 3], [4, 5, 6]) should return [6, 5, 4, 3, 2, 1]", () => {
  expect(mergeAndReverse([1, 2, 3], [4, 5, 6])).to.deep.equal([6, 5, 4, 3, 2, 1]);
});

it("mergeAndReverse(['a', 'b'], ['c', 'd']) should return ['d', 'c', 'b', 'a']", () => {
  expect(mergeAndReverse(['a', 'b'], ['c', 'd'])).to.deep.equal(['d', 'c', 'b', 'a']);
});

it("mergeAndReverse([], [7, 8]) should return [8, 7]", () => {
  expect(mergeAndReverse([], [7, 8])).to.deep.equal([8, 7]);
});

it("mergeAndReverse(['x'], []) should return ['x']", () => {
  expect(mergeAndReverse(['x'], [])).to.deep.equal(['x']);
});

it("mergeAndReverse([true, false], [false, true]) should return [true, false, false, true]", () => {
  expect(mergeAndReverse([true, false], [false, true])).to.deep.equal([true, false, false, true]);
});

it("should return an empty array when both input arrays are empty", () => {
  expect(mergeAndReverse([], [])).to.deep.equal([]);
});

it("mergeAndReverse(['1', '2'], ['3', '4', '5']) should return ['5', '4', '3', '2', '1']", () => {
  expect(mergeAndReverse(['1', '2'], ['3', '4', '5'])).to.deep.equal(['5', '4', '3', '2', '1']);
});

it("mergeAndReverse([null, undefined], [NaN, 0]) should correctly process non-standard values", () => {
  let result = mergeAndReverse([null, undefined], [NaN, 0]);
  expect(result.length).to.equal(4);
  expect(result).to.deep.include.members([0, NaN, undefined, null]);
});

it("mergeAndReverse(['start'], ['end']) should return ['end', 'start']", () => {
  expect(mergeAndReverse(['start'], ['end'])).to.deep.equal(['end', 'start']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
