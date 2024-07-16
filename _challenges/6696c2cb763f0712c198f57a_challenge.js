// NAMEEN:
// NAMERU:Удаление пустых массивов после частичного сглаживания

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `removeEmptyArrays`, которая принимает один аргумент — вложенный массив `nestedArray`.

Функция должна сначала выполнить сглаживание массива на один уровень вложенности, используя метод `Array.prototype.flat()`.

Затем функция должна фильтровать и удалять все пустые массивы из результата.

Возвращаемый массив должен содержать все кроме пустых массивов.

Для проверки, является ли элемент массивом, можно использовать метод `Array.isArray()`.

Пример:
```javascript
Array.isArray([1, 2, 3]);  // Выводит: true
Array.isArray({foo: 123}); // Выводит: false
Array.isArray('Hello');    // Выводит: false
Array.isArray(undefined);  // Выводит: false
```


Примеры Запуска Функции:
```javascript
removeEmptyArrays([[[], []], [[]], []]); // []
removeEmptyArrays(['a', [], ['b', ['c']], []]); // [ 'a', 'b', ['с'] ]
removeEmptyArrays([[['hello']], [[]], [['world']]]) // [ [ 'hello' ], [ 'world' ] ]
removeEmptyArrays([1, [], [2, [3, []], []], [4, []]]); // [ 1, 2, [3, []], 4 ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function removeEmptyArrays(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function removeEmptyArrays(arr) {
  arr = arr.flat()
  let res = []

  for(let el of arr){
    if(Array.isArray(el)){
      if(el.length !== 0) res.push(el)
    } else {
      res.push(el)
    }
  }

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function removeEmptyArrays', () => {
  expect(removeEmptyArrays).to.be.a('function');
});

it('Function removeEmptyArrays should include method flat()', () => {
  const res = removeEmptyArrays.toString()
  expect(res).to.include('.flat(')
});

it("removeEmptyArrays([1, [], [2, [3, []], []], [4, []]]) should return [1, 2, [3, []], 4]", function() {
  expect(removeEmptyArrays([1, [], [2, [3, []], []], [4, []]])).to.deep.equal([1, 2, [3, []], 4]);
});

it("removeEmptyArrays([[[], []], [[]], []]) should return []", function() {
  expect(removeEmptyArrays([[[], []], [[]], []])).to.deep.equal([]);
});

it("removeEmptyArrays(['a', [], ['b', ['c']], []]) should return ['a', 'b', ['c']]", function() {
  expect(removeEmptyArrays(['a', [], ['b', ['c']], []])).to.deep.equal(['a', 'b', ['c']]);
});

it("removeEmptyArrays([[], [[], [0]]]) should return [[0]]", function() {
  expect(removeEmptyArrays([[], [[], [0]]])).to.deep.equal([[0]]);
});

it("removeEmptyArrays([[1, 2], [], [3, 4], []]) should return [1, 2, 3, 4]", function() {
  expect(removeEmptyArrays([[1, 2], [], [3, 4], []])).to.deep.equal([1, 2, 3, 4]);
});

it("removeEmptyArrays([[['hello']], [[]], [['world']]]) should return [['hello'], ['world']]", function() {
  expect(removeEmptyArrays([[['hello']], [[]], [['world']]])).to.deep.equal([['hello'], ['world']]);
});

it("removeEmptyArrays([['keep', [], ['elements']], [[], 'remove', []]]) should return ['keep', ['elements'], 'remove']", function() {
  expect(removeEmptyArrays([['keep', [], ['elements']], [[], 'remove', []]])).to.deep.equal(['keep', ['elements'], 'remove']);
});

it("removeEmptyArrays([['data', [true, false]], [undefined, null, []], []]) should return ['data', [true, false], undefined, null]", function() {
  expect(removeEmptyArrays([['data', [true, false]], [undefined, null, []], []])).to.deep.equal(['data', [true, false], undefined, null]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
