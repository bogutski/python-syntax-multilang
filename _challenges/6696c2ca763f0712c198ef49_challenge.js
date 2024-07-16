// NAMEEN:
// NAMERU:Подсчитать количество типов элементов в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `countElementTypes`, которая принимает массив элементов произвольного типа.

Функция должна вернуть объект, в котором указано сколько элементов каждого типа было в массиве.

Например, для массива `['a', 'b', 1, 2, 3, true]` функция должна вернуть `{string: 2, number: 3, boolean: 1}`.

Если массив пустой, то функция должна вернуть строку `'Array has no elements'`.


Примеры запуска функции:
```javascript
countElementTypes([])                           // 'Array has no elements'
countElementTypes([[], {}])                     // {object: 2}
countElementTypes([1, 2, 3, 4, 5])              // {number: 5}
countElementTypes(['a', 'b', 'c', 1, 2, 3])     // {string: 3, number: 3}
countElementTypes(['a', true, null, undefined]) // {string: 1, boolean: 1, object: 1, undefined: 1}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countElementTypes(arr){
  if(!arr.length) return 'Array has no elements'
  const objTypes = {};
  for (let i = 0; i < arr.length; i++){
    if(objTypes.hasOwnProperty(typeof arr[i])) objTypes[typeof arr[i]]++
    else objTypes[typeof arr[i]] = 1
  }
  return objTypes;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function countElementTypes', () => {
  expect(countElementTypes).to.be.a('function');
});

it("countElementTypes(['a', 'b', 'c', 1, 2, 3]) should return {string: 3, number: 3}", () => {
  expect(countElementTypes(['a', 'b', 'c', 1, 2, 3])).to.deep.equal({string: 3, number: 3});
});

it("countElementTypes(['a', 'b', 'c', true, false, null, undefined]) should return {string: 3, boolean: 2, object: 1, undefined: 1}", () => {
  expect(countElementTypes(['a', 'b', 'c', true, false, null, undefined])).to.deep.equal({string: 3, boolean: 2, object: 1, undefined: 1});
});

it("countElementTypes([1, 2, 3, 4, 5]) should return {number: 5}", () => {
  expect(countElementTypes([1, 2, 3, 4, 5])).to.deep.equal({number: 5});
});

it("countElementTypes([[], {}, null]) should return {object: 3}", () => {
  expect(countElementTypes([[], {}, null])).to.deep.equal({object: 3});
});

it('countElementTypes([{name: "John"}, [1,2,3], true, 50, undefined, null, "hello", NaN, 123890n]) should return' +
  ' {object: 3, boolean: 1, number: 2, undefined: 1, string: 1, bigint: 1}', () => {
  expect(countElementTypes([{name: "John"}, [1,2,3], true, 50, undefined, null, "hello", NaN, 123890n])).to.deep.equal({object: 3, boolean: 1, number: 2, undefined: 1, string: 1, bigint: 1});
});

it("countElementTypes([]) should return 'Array has no elements'", () => {
  expect(countElementTypes([])).to.equal('Array has no elements');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
