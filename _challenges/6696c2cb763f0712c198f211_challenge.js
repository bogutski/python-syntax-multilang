// NAMEEN:
// NAMERU:Разделить массив на подмассивы по типам данных

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `splitArrayByType` принимает массив произвольных элементов с разными типами данных и возвращает массив, в котором каждый элемент - это массив, содержащий элементы исходного массива определенного типа.
Рассматриваются только следующие типы данных: `number`, `string`, `boolean`. Элементы, имеющие тип `undefined`, `null`, `object`, игнорируются.
То есть исходный массив должен быть разбит на три подмассива: первый - с числами, второй - со строками, третий - с булевыми значениями.
Если в каком-то подмассиве нет элементов, то он не должен включаться в результирующий массив.
Если исходный массив пустой, или все полученные подмассивы пустые, то функция должна вернуть пустой массив.

Примеры использования:
```javascript
splitArrayByType([1, 2, 'a', 'b', true, false]); // [[1, 2], ['a', 'b'], [true, false]]
splitArrayByType([1, 'a', true, null, undefined, {key: 'value'}, [1,2,3]]); // [[1], ['a'], [true]]
splitArrayByType([1, 2, 3, 4, 5]); // [[1, 2, 3, 4, 5]]
splitArrayByType(['a', 'b', 'c']); // [['a', 'b', 'c']]
splitArrayByType([true, false]); // [[true, false]]
splitArrayByType([null, undefined]); // []
splitArrayByType([]); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function splitArrayByType(arr) {
  const numbers = [];
  const strings = [];
  const booleans = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (typeof element === 'number') {
      numbers.push(element);
    } else if (typeof element === 'string') {
      strings.push(element);
    } else if (typeof element === 'boolean') {
      booleans.push(element);
    }
  }

  const result = [];
  if (numbers.length) result.push(numbers);
  if (strings.length) result.push(strings);
  if (booleans.length) result.push(booleans);

  return result;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function splitArrayByType', () => {
  expect(splitArrayByType).to.be.a('function');
});

it('splitArrayByType([1, 2, "a", "b", true, false]) should return [[1, 2], ["a", "b"], [true, false]]', () => {
  expect(splitArrayByType([1, 2, "a", "b", true, false])).to.deep.equal([[1, 2], ["a", "b"], [true, false]]);
});

it('splitArrayByType([1, "a", true, null, undefined, {key: "value"}, [1,2,3]]) should return [[1], ["a"], [true]]', () => {
  expect(splitArrayByType([1, "a", true, null, undefined, {key: "value"}, [1, 2, 3]])).to.deep.equal([[1], ["a"], [true]]);
});

it('splitArrayByType([1, 2, 3, 4, 5]) should return [[1, 2, 3, 4, 5]]', () => {
  expect(splitArrayByType([1, 2, 3, 4, 5])).to.deep.equal([[1, 2, 3, 4, 5]]);
});

it('splitArrayByType(["a", "b", "c"]) should return [["a", "b", "c"]]', () => {
  expect(splitArrayByType(["a", "b", "c"])).to.deep.equal([["a", "b", "c"]]);
});

it('splitArrayByType([true, false, false]) should return [[true, false, false]]', () => {
  expect(splitArrayByType([true, false, false])).to.deep.equal([[true, false, false]]);
});

it('splitArrayByType([null, undefined]) should return []', () => {
  expect(splitArrayByType([null, undefined])).to.deep.equal([]);
});

it('splitArrayByType([]) should return []', () => {
  expect(splitArrayByType([])).to.deep.equal([]);
});

it('splitArrayByType([true, 123, -90, 0, false]) should return [[123, -90, 0], [true, false]]', () => {
  expect(splitArrayByType([true, 123, -90, 0, false])).to.deep.equal([[123, -90, 0], [true, false]]);
});

it('splitArrayByType(["sad", -0.2, 0.5, 1.5, "funny", "calm", "happy", "111", -10000]) should return [[-0.2, 0.5, 1.5, -10000], ["sad", "funny", "calm", "happy", "111"]]', () => {
  expect(splitArrayByType(["sad", -0.2, 0.5, 1.5, "funny", "calm", "happy", "111", -10000])).to.deep.equal([[-0.2, 0.5, 1.5, -10000], ["sad", "funny", "calm", "happy", "111"]]);
});

it('splitArrayByType([true, null, 0, "", undefined, -15 ]) should return [[0, -15], [""], [true]]', () => {
  expect(splitArrayByType([true, null, 0, "", undefined, -15])).to.deep.equal([[0, -15], [""], [true]]);
});

it('splitArrayByType([1, "2, 3, 4", 5, "Alice", true, null, 34, null, 12.9025, undefined, "value:", false, 0, -0, Infinity, "true"]) should return [[1, 5, 34, 12.9025, 0, -0, Infinity], ["2, 3, 4", "Alice", "value:", "true"], [true, false]]', () => {
  expect(splitArrayByType([1, "2, 3, 4", 5, "Alice", true, null, 34, null, 12.9025, undefined, "value:", false, 0, -0, Infinity, "true"])).to.deep.equal([[1, 5, 34, 12.9025, 0, -0, Infinity], ["2, 3, 4", "Alice", "value:", "true"], [true, false]]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
