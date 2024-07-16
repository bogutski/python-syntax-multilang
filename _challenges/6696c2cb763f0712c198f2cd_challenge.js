// NAMEEN:
// NAMERU:Посчитать количество элементов каждого типа в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `countEachType` принимает массив и возвращает объект с количеством элементов каждого типа в массиве.

В массиве могут быть элементы трех типов: `number`, `string` и `boolean`.

Объект, который возвращает функция, должен иметь три свойства: `number`, `string` и `boolean`.
Значениями этих свойств должны быть числа, которые соответствуют количеству элементов каждого типа в массиве.

Если массив пустой, то функция должна вернуть строку "Array is empty".

Примеры запуска функции:
```javascript
countEachType([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // {number: 10, string: 0, boolean: 0}
countEachType([1, "a"]) // {number: 1, string: 1, boolean: 0}
countEachType([true, false, true, false]) // {number: 0, string: 0, boolean: 4}
countEachType([]) // "Array is empty"
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countEachType(arr) {
  if (!arr.length) return 'Array is empty'
  const obj = {};
  obj.number = 0;
  obj.string = 0;
  obj.boolean = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') obj.number++;
    if (typeof arr[i] === 'string') obj.string++;
    if (typeof arr[i] === 'boolean') obj.boolean++;
  }
  return obj;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function countEachType', () => {
  expect(countEachType).to.be.a('function');
});

it('countEachType([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should return {number: 10, string: 0, boolean: 0}', () => {
  expect(countEachType([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.deep.equal({number: 10, string: 0, boolean: 0});
});

it('countEachType([1, "a"]) should return {number: 1, string: 1, boolean: 0}', () => {
  expect(countEachType([1, "a"])).to.deep.equal({number: 1, string: 1, boolean: 0});
});

it('countEachType([true, false, true, false]) should return {number: 0, string: 0, boolean: 4}', () => {
  expect(countEachType([true, false, true, false])).to.deep.equal({number: 0, string: 0, boolean: 4});
});

it('countEachType([1, "a", true, false]) should return {number: 1, string: 1, boolean: 2}', () => {
  expect(countEachType([1, "a", true, false])).to.deep.equal({number: 1, string: 1, boolean: 2});
});

it('countEachType([1, "a", true, false, 2, "b", true, false]) should return {number: 2, string: 2, boolean: 4}', () => {
  expect(countEachType([1, "a", true, false, 2, "b", true, false])).to.deep.equal({number: 2, string: 2, boolean: 4});
});

it('countEachType(["a", "b", "c"]) should return {number: 0, string: 3, boolean: 0}', () => {
  expect(countEachType(["a", "b", "c"])).to.deep.equal({number: 0, string: 3, boolean: 0});
});

it('countEachType([]) should return "Array is empty"', () => {
  expect(countEachType([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
