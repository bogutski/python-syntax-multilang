// NAMEEN:
// NAMERU:Найти индекс последнего элемента с четной или нечетной длиной строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastIndexByLength`, которая принимает массив строк и опцию (`even` или `odd`).

Функция должна вернуть индекс последнего элемента в массиве, длина строки которого четная или нечетная в зависимости от переданной опции.

Если такого элемента нет, функция должна вернуть `-1`.


Примеры запуска функции:
```javascript
findLastIndexByLength(["hello", "world", "hi"], 'odd'); // 1
findLastIndexByLength(["one", "two", "three"], 'even'); // -1
findLastIndexByLength(["cat", "dog", "elephant"], 'odd'); // 1
findLastIndexByLength(["apple", "banana", "cherry"], 'even'); // 2
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastIndexByLength(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastIndexByLength(arr, opt) {
  let num
  if(opt === 'even') num = 0
  else if(opt === 'odd') num = 1

  return arr.findLastIndex(str => str.length % 2 === num);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastIndexByLength', () => {
  expect(findLastIndexByLength).to.be.a('function');
});

it("Function findLastIndexByLength should include findLastIndex method", () => {
  const result = findLastIndexByLength.toString();
  expect(result).to.include('.findLastIndex(');
});

it('findLastIndexByLength(["one", "two", "three"], "even") should return -1', function() {
  expect(findLastIndexByLength(["one", "two", "three"], "even")).to.equal(-1);
});

it('findLastIndexByLength(["hello", "world", "hi"], "odd") should return 1', function() {
  expect(findLastIndexByLength(["hello", "world", "hi"], "odd")).to.equal(1);
});

it('findLastIndexByLength(["apple", "banana", "cherry"], "even") should return 2', function() {
  expect(findLastIndexByLength(["apple", "banana", "cherry"], "even")).to.equal(2);
});

it('findLastIndexByLength(["cat", "dog", "elephant"], "odd") should return 1', function() {
  expect(findLastIndexByLength(["cat", "dog", "elephant"], "odd")).to.equal(1);
});

it('findLastIndexByLength(["lemon", "lime", "banana", "berry"], "even") should return 2', function() {
  expect(findLastIndexByLength(["lemon", "lime", "banana", "berry"], "even")).to.equal(2);
});

it('findLastIndexByLength(["apple", "banana", "apricot", "blueberry"], "odd") should return 3', function() {
  expect(findLastIndexByLength(["apple", "banana", "apricot", "blueberry"], "odd")).to.equal(3);
});

it('findLastIndexByLength(["strawberry", "raspberry", "blueberry"], "even") should return 0', function() {
  expect(findLastIndexByLength(["strawberry", "raspberry", "blueberry"], "even")).to.equal(0);
});

it('findLastIndexByLength(["kiwi", "melon", "orange"], "odd") should return 1', function() {
  expect(findLastIndexByLength(["kiwi", "melon", "orange"], "odd")).to.equal(1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
