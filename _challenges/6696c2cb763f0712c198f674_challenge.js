// NAMEEN:
// NAMERU:Объединение и обращение массива с удалением дубликатов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `mergeReverseUnique`, которая принимает массив подмассивов любых типов данных.

Функция должна сначала сгруппировать все элементы подмассивов в один массив, удалить из него все дублирующиеся элементы, а затем развернуть порядок элементов и вернуть новый массив.

Метод `Set` использовать нельзя.


Примеры запуска функции:
```javascript
mergeReverseUnique([[1, 2, 3], [3, 4, 5], [6, 7]]); // [7, 6, 5, 4, 3, 2, 1]
mergeReverseUnique([['a', 'b'], ['c', 'd', 'e'], ['e', 'f']]); // ['f', 'e', 'd', 'c', 'b', 'a']
mergeReverseUnique([[1, 2], [2, 3], [3, 4]]); // [4, 3, 2, 1]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function mergeReverseUnique(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function mergeReverseUnique(array) {
  const result = []

  array.flat().forEach((el, i, arr) => {
    if(arr.indexOf(el, i + 1) === -1) result.push(el)
  })

  return result.reverse();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function mergeReverseUnique', () => {
  expect(mergeReverseUnique).to.be.a('function');
});

it("Original array should not be modified", () => {
  const array  = [[1, 2, 3], [3, 4, 5], [6, 7]];
  mergeReverseUnique(array)
  expect(array).to.deep.equal([[1, 2, 3], [3, 4, 5], [6, 7]]);
});

it("mergeReverseUnique should have the reverse method", () => {
  const result = mergeReverseUnique.toString();
  expect(result).to.include('.reverse()');
});

it("mergeReverseUnique should not have the Set method", () => {
  const result = mergeReverseUnique.toString();
  expect(result).to.not.include('new Set(');
});

it("mergeReverseUnique([[1, 2, 3], [3, 4, 5], [6, 7]]) should return [7, 6, 5, 4, 3, 2, 1]", () => {
  expect(mergeReverseUnique([[1, 2, 3], [3, 4, 5], [6, 7]])).to.deep.equal([7, 6, 5, 4, 3, 2, 1]);
});

it("mergeReverseUnique([['a', 'b'], ['c', 'd', 'e'], ['e', 'f']]) should return ['f', 'e', 'd', 'c', 'b', 'a']", () => {
  expect(mergeReverseUnique([['a', 'b'], ['c', 'd', 'e'], ['e', 'f']])).to.deep.equal(['f', 'e', 'd', 'c', 'b', 'a']);
});

it("mergeReverseUnique([[1, 2], [2, 3], [3, 4]]) should return [4, 3, 2, 1]", () => {
  expect(mergeReverseUnique([[1, 2], [2, 3], [3, 4]])).to.deep.equal([4, 3, 2, 1]);
});

it("mergeReverseUnique([]) should return an empty array", () => {
  expect(mergeReverseUnique([])).to.deep.equal([]);
});

it("mergeReverseUnique([[1], [1], [1]]) should return [1]", () => {
  expect(mergeReverseUnique([[1], [1], [1]])).to.deep.equal([1]);
});

it("mergeReverseUnique([[true, false], [false, true]]) should return [true, false]", () => {
  expect(mergeReverseUnique([[true, false], [false, true]])).to.deep.equal([true, false]);
});

it("mergeReverseUnique([['hello', 'world'], ['world', 'test']]) should return ['test', 'world', 'hello']", () => {
  expect(mergeReverseUnique([['hello', 'world'], ['world', 'test']])).to.deep.equal(['test', 'world', 'hello']);
});

it("mergeReverseUnique([[null, undefined, null], [undefined]]) should return [undefined, null]", () => {
  expect(mergeReverseUnique([[null, undefined, null], [undefined]])).to.deep.equal([undefined, null]);
});

it("mergeReverseUnique([[1, 2, 3], [3, 4, 5], [5, 6, 7], [7, 8, 9]]) should return [9, 8, 7, 6, 5, 4, 3, 2, 1]", () => {
  expect(mergeReverseUnique([[1, 2, 3], [3, 4, 5], [5, 6, 7], [7, 8, 9]])).to.deep.equal([9, 8, 7, 6, 5, 4, 3, 2, 1]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
