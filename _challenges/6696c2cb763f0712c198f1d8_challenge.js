// NAMEEN:
// NAMERU:Перевернуть элементы массива, если в нем есть элемент со значением reverse

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseOnlyMarkedArr`, которая принимает массив массивов с разными типами данных.

Функция должна вернуть новый массив, который включает все массивы из исходного, в том же порядке.

Элементы тех под-массивов, среди которых есть элемент со значением 'reverse', должны быть перевернуты, все остальные - оставлены без изменений.

Например: `[[1, 2, 3], [5, 6, 7, 'reverse'], [8, 9, 10]]` должно вернуть `[[1, 2, 3], ['reverse', 7, 6, 5], [8, 9, 10]]`.

Можно использовать методы `includes`, `indexOf`, `reverse`.

Если внешний массив пустой, верните строку 'Array is empty'.


Примеры запуска функции:
```javascript
reverseOnlyMarkedArr([[1, 2, 3], [4, 5], ['reverse', 6, 7]]); // [[1, 2, 3], [4, 5], [7, 6, 'reverse']]
reverseOnlyMarkedArr([['a', 'b', 'c', 'd' reverse]]);         // [['reverse', 'd', 'c', 'b', 'a']]
reverseOnlyMarkedArr([]);                                     // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseOnlyMarkedArr(arr) {
  if (!arr.length) return 'Array is empty';
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('reverse')) newArr.push(arr[i].reverse());
    else newArr.push(arr[i]);
  }
  return newArr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseOnlyMarkedArr', () => {
  expect(reverseOnlyMarkedArr).to.be.a('function');
});

it("reverseOnlyMarkedArr([[1, 2, 3], [4, 5,'reverse', 6, 7], [8, 9, 10, 11, 12]]) should return [[1, 2, 3], [7, 6, 'reverse', 5, 4], [8, 9, 10, 11, 12]]", () => {
  expect(reverseOnlyMarkedArr([[1, 2, 3], [4, 5,'reverse', 6, 7], [8, 9, 10, 11, 12]])).to.deep.equal([[1, 2, 3], [7, 6, 'reverse', 5, 4], [8, 9, 10, 11, 12]]);
});

it("reverseOnlyMarkedArr([['a', 'b', 'c', 'reverse'], ['d', 'e', 'f'], ['g', 'h', 'i', 'reverse']]) should return [['reverse', 'c', 'b', 'a'], ['d', 'e', 'f'], ['reverse', 'i', 'h', 'g']]", () => {
  expect(reverseOnlyMarkedArr([['a', 'b', 'c', 'reverse'], ['d', 'e', 'f'], ['g', 'h', 'i', 'reverse']])).to.deep.equal([['reverse', 'c', 'b', 'a'], ['d', 'e', 'f'], ['reverse', 'i', 'h', 'g']]);
});

it("reverseOnlyMarkedArr([[true, false], [false, true, 'reverse'], [8 > 1, 3 < 5]]) should return [[true, false], ['reverse', true, false], [true, 3 < 5]]", () => {
  expect(reverseOnlyMarkedArr([[true, false], [false, true, 'reverse'], [8 > 1, 3 < 5]])).to.deep.equal([[true, false], ['reverse', true, false], [true, 3 < 5]]);
});

it("reverseOnlyMarkedArr([[1, 2, 3], [], [5, 6, 7]]) should return [[1, 2, 3], [], [5, 6, 7]]", () => {
  expect(reverseOnlyMarkedArr([[1, 2, 3], [], [5, 6, 7]])).to.deep.equal([[1, 2, 3], [], [5, 6, 7]]);
});

it("reverseOnlyMarkedArr([]) should return 'Array is empty'", () => {
  expect(reverseOnlyMarkedArr([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
