// NAMEEN:
// NAMERU:Перестановка элементов массива согласно карте индексов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reorderArray`, которая принимает массив `arr` и карту индексов `indexMap`.

Карта индексов — это объект, где ключи и значения представляют собой индексы массива `arr`.

Функция должна переставить элементы в `arr` согласно карте индексов, генерируя новый массив с переставленными элементами и сохраняя неизменность исходного массива.


Важное Уточнение к Решению Задачи:

При реализации функции `reorderArray` важно следовать определённому подходу: необходимо итерировать по исходному массиву, используя индексы его элементов для обращения к значениям в объекте карты индексов. И проверять есть ли такие ключи в объекте.

Этот подход обеспечит корректное переставление элементов массива в соответствии с заданными индексами. Применение альтернативных методов может привести к несоответствию ожидаемых результатов и, как следствие, не прохождению тестов.


Примеры Запуска Функции:
```javascript
reorderArray(['x', 'y', 'z'], { 2: 1, 1: 2 }); // ['x', 'z', 'y']
reorderArray(['a', 'b', 'c', 'd'], { 0: 2, 2: 0, 3: 1, 1: 3 }); // ['c', 'd', 'a', 'b']
reorderArray(['hello', 'world', 'and', 'JS'], { 1: 3, 3: 1 }); // ['hello', 'JS', 'and', 'world']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function reorderArray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reorderArray(arr, indexMap) {
  let result = [...arr]

  arr.forEach((_, index) => {
    if(index in indexMap) result = result.with(index, arr[indexMap[index]])
  })

  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.with = function(index, value){
  const newArray = this.slice();
  newArray.splice(index, 1, value);
  return newArray;
}

it('Created function reorderArray', () => {
  expect(reorderArray).to.be.a('function');
});

it("reorderArray(['a', 'b', 'c', 'd'], { 0: 2, 2: 0, 3: 1, 1: 3 }) should return ['c', 'd', 'a', 'b']", function() {
  expect(reorderArray(['a', 'b', 'c', 'd'], { 0: 2, 2: 0, 3: 1, 1: 3 })).to.deep.equal(['c', 'd', 'a', 'b']);
});

it("reorderArray(['apple', 'banana', 'cherry'], { 0: 1, 1: 2, 2: 0 }) should return ['banana', 'cherry', 'apple']", function() {
  expect(reorderArray(['apple', 'banana', 'cherry'], { 0: 1, 1: 2, 2: 0 })).to.deep.equal(['banana', 'cherry', 'apple']);
});

it("reorderArray([1, 2, 3], { 0: 0, 1: 1, 2: 2 }) should return [1, 2, 3] (no change)", function() {
  expect(reorderArray([1, 2, 3], { 0: 0, 1: 1, 2: 2 })).to.deep.equal([1, 2, 3]);
});

it("reorderArray(['first', 'second'], { 1: 0, 0: 1 }) should return ['second', 'first']", function() {
  expect(reorderArray(['first', 'second'], { 1: 0, 0: 1 })).to.deep.equal(['second', 'first']);
});

it("reorderArray(['x', 'y', 'z'], { 2: 1, 1: 2 }) should return ['x', 'z', 'y']", function() {
  expect(reorderArray(['x', 'y', 'z'], { 2: 1, 1: 2 })).to.deep.equal(['x', 'z', 'y']);
});

it("reorderArray(['left', 'right', 'up', 'down'], { 3: 0, 0: 3 }) should return ['down', 'right', 'up', 'left']", function() {
  expect(reorderArray(['left', 'right', 'up', 'down'], { 3: 0, 0: 3 })).to.deep.equal(['down', 'right', 'up', 'left']);
});

it("reorderArray([10, 20, 30, 40], { 0: 2, 2: 3, 3: 1, 1: 0 }) should return [30, 10, 40, 20]", function() {
  expect(reorderArray([10, 20, 30, 40], { 0: 2, 2: 3, 3: 1, 1: 0 })).to.deep.equal([30, 10, 40, 20]);
});

it("reorderArray(['sun', 'moon', 'earth'], { 0: 2, 1: 0, 2: 1 }) should return ['earth', 'sun', 'moon']", function() {
  expect(reorderArray(['sun', 'moon', 'earth'], { 0: 2, 1: 0, 2: 1 })).to.deep.equal(['earth', 'sun', 'moon']);
});

it("reorderArray([10, 20, 30, 40, 50], { 4: 0, 0: 4, 2: 2, 3: 1, 1: 3 }) should return [50, 40, 30, 20, 10]", function() {
  expect(reorderArray([10, 20, 30, 40, 50], { 4: 0, 0: 4, 2: 2, 3: 1, 1: 3 })).to.deep.equal([50, 40, 30, 20, 10]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
