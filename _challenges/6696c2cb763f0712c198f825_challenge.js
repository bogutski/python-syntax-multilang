// NAMEEN:
// NAMERU:Найти последний индекс элемента после модификации массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastIndexAfterModification`, которая принимает массив и число.

Функция должна создать новый массив и пройтись по массиву и

Функция должна вернуть объект, содержащий модифицированный массив и индекс последнего элемента, равного заданному числу после выполнения следующих преобразований:

* Если элемент массива является числом, его значение заменяется на округленный квадратный корень этого числа.
* Все остальные элементы остаются без изменений.

Пример объекта: `{modifiedArray: [<elements>], lastIndex: <number>}`.


Примеры запуска функции:
```javascript
console.log(findLastIndexAfterModification([10, '3', 'a', 5, 'b', 7, false, 9], 3));
// {
//   modifiedArray: [3, '3', 'a', 2, 'b', 3, false, 3],
//   lastIndex: 7
// }

console.log(findLastIndexAfterModification([4, 16, 'hello', 25, 'world'], 4));
// {
//   modifiedArray: [2, 4, 'hello', 5, 'world'],
//   lastIndex: 1
// }

console.log(findLastIndexAfterModification([1, 2, 3, 4, 5], 2));
// {
//   modifiedArray: [1, 1, 2, 2, 2],
//   lastIndex: 4
// }

console.log(findLastIndexAfterModification([1, 2, 3, 4, 5], 10));
// {
//   modifiedArray: [1, 1, 2, 2, 2],
//   lastIndex: -1
// }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastIndexAfterModification(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastIndexAfterModification(arr, n) {
  const modified = arr.map(el => {
    if(typeof el === 'number') return Math.round(el ** 0.5)
    else return el
  })

  return {modifiedArray: modified, lastIndex: modified.lastIndexOf(n)};
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastIndexAfterModification', () => {
  expect(findLastIndexAfterModification).to.be.a('function');
});

it('findLastIndexAfterModification([10, "3", "a", 5, "b", 7, false, 9], 3) should return { modifiedArray: [3, "3", "a", 2, "b", 3, false, 3], lastIndex: 7 }', function() {
  expect(findLastIndexAfterModification([10, "3", "a", 5, "b", 7, false, 9], 3)).to.deep.equal({ modifiedArray: [3, "3", "a", 2, "b", 3, false, 3], lastIndex: 7 });
});

it('findLastIndexAfterModification([4, 16, "hello", 25, "world"], 4) should return { modifiedArray: [2, 4, "hello", 5, "world"], lastIndex: 1 }', function() {
  expect(findLastIndexAfterModification([4, 16, "hello", 25, "world"], 4)).to.deep.equal({ modifiedArray: [2, 4, "hello", 5, "world"], lastIndex: 1 });
});

it('findLastIndexAfterModification([1, 2, 3, 4, 5], 2) should return { modifiedArray: [1, 1, 2, 2, 2], lastIndex: 4 }', function() {
  expect(findLastIndexAfterModification([1, 2, 3, 4, 5], 2)).to.deep.equal({ modifiedArray: [1, 1, 2, 2, 2], lastIndex: 4 });
});

it('findLastIndexAfterModification([1, 2, 3, 4, 5], 10) should return { modifiedArray: [1, 1, 2, 2, 2], lastIndex: -1 }', function() {
  expect(findLastIndexAfterModification([1, 2, 3, 4, 5], 10)).to.deep.equal({ modifiedArray: [1, 1, 2, 2, 2], lastIndex: -1 });
});

it('findLastIndexAfterModification([9, "text", 25, true, 4, 36], 6) should return { modifiedArray: [3, "text", 5, true, 2, 6], lastIndex: 5 }', function() {
  expect(findLastIndexAfterModification([9, "text", 25, true, 4, 36], 6)).to.deep.equal({ modifiedArray: [3, "text", 5, true, 2, 6], lastIndex: 5 });
});

it('findLastIndexAfterModification([49, "seven", 81, 10], 7) should return { modifiedArray: [7, "seven", 9, 3], lastIndex: 0 }', function() {
  expect(findLastIndexAfterModification([49, "seven", 81, 10], 7)).to.deep.equal({ modifiedArray: [7, "seven", 9, 3], lastIndex: 0 });
});

it('findLastIndexAfterModification([16, 8, 64, 2], 4) should return { modifiedArray: [4, 3, 8, 1], lastIndex: 0 }', function() {
  expect(findLastIndexAfterModification([16, 8, 64, 2], 4)).to.deep.equal({ modifiedArray: [4, 3, 8, 1], lastIndex: 0 });
});

it('findLastIndexAfterModification([], 1) should return { modifiedArray: [], lastIndex: -1 }', function() {
  expect(findLastIndexAfterModification([], 1)).to.deep.equal({ modifiedArray: [], lastIndex: -1 });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
