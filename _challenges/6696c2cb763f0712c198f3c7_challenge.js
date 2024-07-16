// NAMEEN:
// NAMERU:Реверс массива с помощью shift()

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseArrayUsingShift`, которая принимает массив элементов.

Функция должна использовать метод `shift()` для последовательного извлечения элементов из начала исходного массива и метод `unshift()` для добавления этих элементов в новый массив в обратном порядке.

В конечном итоге, функция должна возвращать новый массив, элементы которого являются элементами исходного массива, расположенными в обратном порядке.

Исходный массив должен остаться без изменений.


Пример запуска функции:
```javascript
reverseArrayUsingShift([1, 2, 3, 4]); // [ 4, 3, 2, 1 ]
reverseArrayUsingShift(['a', 'b', 'c']); // [ 'c', 'b', 'a' ]
reverseArrayUsingShift([]); // []]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function reverseArrayUsingShift(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseArrayUsingShift(arr) {
  let original = [...arr]
  let res = []

  while(original.length){
    res.unshift(original.shift())
  }

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseArrayUsingShift', () => {
  expect(reverseArrayUsingShift).to.be.a('function');
});

it('Function reverseArrayUsingShift should include methods: push(), shift()', () => {
  const res = reverseArrayUsingShift.toString()
  expect(res).to.include('.shift()')
  expect(res).to.include('.unshift(')

});it('Function reverseArrayUsingShift should not include method .reverse()', () => {
  const res = reverseArrayUsingShift.toString()
  expect(res).to.not.include('.reverse()')
});

it("reverseArrayUsingShift([1, 2, 3, 4]) should return [4, 3, 2, 1]", () => {
  expect(reverseArrayUsingShift([1, 2, 3, 4])).to.deep.equal([4, 3, 2, 1]);
});

it("reverseArrayUsingShift([5]) should return [5] when array contains only one element", () => {
  expect(reverseArrayUsingShift([5])).to.deep.equal([5]);
});

it("reverseArrayUsingShift(['apple', 'banana', 'cherry', 'date']) should return ['date', 'cherry', 'banana', 'apple']", () => {
  expect(reverseArrayUsingShift(['apple', 'banana', 'cherry', 'date'])).to.deep.equal(['date', 'cherry', 'banana', 'apple']);
});

it("reverseArrayUsingShift(['a', 'b', 'c']) should return ['c', 'b', 'a']", () => {
  expect(reverseArrayUsingShift(['a', 'b', 'c'])).to.deep.equal(['c', 'b', 'a']);
});

it("reverseArrayUsingShift([]) should return an empty array", () => {
  expect(reverseArrayUsingShift([])).to.deep.equal([]);
});

it("reverseArrayUsingShift([true, false, true]) should return [true, false, true]", () => {
  expect(reverseArrayUsingShift([true, false, true])).to.deep.equal([true, false, true]);
});

it("should not modify the original array", () => {
  let originalArray = [1, 2, 3];
  reverseArrayUsingShift(originalArray);
  expect(originalArray).to.deep.equal([1, 2, 3]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
