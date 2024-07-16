// NAMEEN:
// NAMERU:Объединение массивов с добавлением уникальных элементов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `mergeUnique` принимает два массива в качестве аргументов.

Функция должна объединить эти массивы в один, используя метод `push` для добавления элементов из второго массива в первый, но только если они ещё не присутствуют в первом массиве.

Верните модифицированный первый массив, который теперь должен включать любые уникальные элементы из второго массива.

Примеры запуска функции:
```javascript
mergeUnique([null, undefined], [undefined, null, false]) // возвращает [null, undefined, false]
mergeUnique(['a', 'b'], ['b', 'c', 'd']) // возвращает ['a', 'b', 'c', 'd']
mergeUnique([], ['unique', 'elements']) // возвращает ['unique', 'elements']
mergeUnique([1, 2, 3], [2, 3, 4, 5])   // возвращает [1, 2, 3, 4, 5]
mergeUnique(['same', 'elements'], []) // возвращает ['same', 'elements']
mergeUnique([], []) // возвращает []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function mergeUnique(arr1, arr2) {
  for(let element of arr2){
    if (!arr1.includes(element)) arr1.push(element);
  }

  return arr1;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function mergeUnique', () => {
  expect(mergeUnique).to.be.a('function');
});

it('mergeUnique([1, 2, 3], [2, 3, 4, 5]) should return [1, 2, 3, 4, 5]', () => {
  expect(mergeUnique([1, 2, 3], [2, 3, 4, 5])).to.deep.equal([1, 2, 3, 4, 5]);
});

it('mergeUnique(["a", "b"], ["b", "c", "d"]) should return ["a", "b", "c", "d"]', () => {
  expect(mergeUnique(['a', 'b'], ['b', 'c', 'd'])).to.deep.equal(['a', 'b', 'c', 'd']);
});

it('mergeUnique([], ["unique", "elements"]) should return ["unique", "elements"]', () => {
  expect(mergeUnique([], ['unique', 'elements'])).to.deep.equal(['unique', 'elements']);
});

it('mergeUnique(["same", "elements"], []) should return ["same", "elements"]', () => {
  expect(mergeUnique(['same', 'elements'], [])).to.deep.equal(['same', 'elements']);
});

it('mergeUnique([], []) should return []', () => {
  expect(mergeUnique([], [])).to.deep.equal([]);
});

it('mergeUnique([null, undefined], [undefined, null, false]) should return [null, undefined, false]', () => {
  expect(mergeUnique([null, undefined], [undefined, null, false])).to.deep.equal([null, undefined, false]);
});

it('mergeUnique([true, 1], [1, "1", true]) should return [true, 1, "1"]', () => {
  expect(mergeUnique([true, 1], [1, "1", true])).to.deep.equal([true, 1, "1"]);
});

it('mergeUnique(["number", 3], [3, "3", "number"]) should return ["number", 3, "3"]', () => {
  expect(mergeUnique(["number", 3], [3, "3", "number"])).to.deep.equal(["number", 3, "3"]);
});

it('mergeUnique(["empty", ""], ["", "filled", "empty"]) should return ["empty", "", "filled"]', () => {
  expect(mergeUnique(["empty", ""], ["", "filled", "empty"])).to.deep.equal(["empty", "", "filled"]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
