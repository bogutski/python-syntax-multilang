// NAMEEN:
// NAMERU:Удаление первого элемента, если он boolean

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `removeFirstIfBoolean`, которая принимает массив как аргумент.

Если первый элемент массива является `boolean` значением (true или false), функция должна удалить этот элемент из массива и вернуть измененный массив.

Если первый элемент массива не является `boolean`, функция должна вернуть строку, указывающую на это: '"<first element>" is not boolean', где <first element> будет заменено на значение первого элемента массива.

Для реализации используйте метод `shift()`.


Пример запуска функции:
```javascript
removeFirstIfBoolean([true, 1, 2, 3]); // [ 1, 2, 3 ]
removeFirstIfBoolean([false, 'a', 'b', 'c']); // [ 'a', 'b', 'c' ]
removeFirstIfBoolean([1, 2, 3]); // "1" is not boolean
removeFirstIfBoolean(['a', 'b', 'c']); // "a" is not boolean
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function removeFirstIfBoolean(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function removeFirstIfBoolean(arr) {
  if(typeof arr[0] === 'boolean') arr.shift()
  else return `"${arr[0]}" is not boolean`;

  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function removeFirstIfBoolean', () => {
  expect(removeFirstIfBoolean).to.be.a('function');
});

it('Function removeFirstIfBoolean should include methods shift()', () => {
  const res = removeFirstIfBoolean.toString()
  expect(res).to.include('.shift()')
});

it("removeFirstIfBoolean([true, 1, 2, 3]) should return [1, 2, 3]", () => {
  expect(removeFirstIfBoolean([true, 1, 2, 3])).to.deep.equal([1, 2, 3]);
});

it("removeFirstIfBoolean([false, 'a', 'b', 'c']) should return ['a', 'b', 'c']", () => {
  expect(removeFirstIfBoolean([false, 'a', 'b', 'c'])).to.deep.equal(['a', 'b', 'c']);
});

it('removeFirstIfBoolean([1, 2, 3]) should return: "1" is not boolean', () => {
  expect(removeFirstIfBoolean([1, 2, 3])).to.equal('"1" is not boolean');
});

it('removeFirstIfBoolean(["a", "b", "c"]) should return: "a" is not boolean', () => {
  expect(removeFirstIfBoolean(['a', 'b', 'c'])).to.equal('"a" is not boolean');
});

it('removeFirstIfBoolean([]) should return: "undefined" is not boolean for an empty array', () => {
  expect(removeFirstIfBoolean([])).to.equal('"undefined" is not boolean');
});

it('removeFirstIfBoolean([undefined, "a", "b"]) should return: "undefined" is not boolean', () => {
  expect(removeFirstIfBoolean([undefined, "a", "b"])).to.equal('"undefined" is not boolean');
});

it('removeFirstIfBoolean([null, 1, 2, 3]) should return: "null" is not boolean', () => {
  expect(removeFirstIfBoolean([null, 1, 2, 3])).to.equal('"null" is not boolean');
});

it("should return the same array instance if the first element is boolean", () => {
  let inputArray = [true, 1, 2, 3];
  let resultArray = removeFirstIfBoolean(inputArray);
  expect(resultArray).to.equal(inputArray);
});

it("should not return an array but original array remains unchanged if the first element is not boolean", () => {
  let inputArray = [1, 2, 3];
  let result = removeFirstIfBoolean(inputArray);
  expect(result).to.be.a('string');
  expect(inputArray).to.deep.equal([1, 2, 3]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
