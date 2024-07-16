// NAMEEN:
// NAMERU:Найти индексы заданных элементов и сообщить о не найденных

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findIndices`, которая принимает массив и произвольное количество элементов.

Функция должна вернуть объект, где ключами являются найденные элементы, а значениями — их индексы в массиве.

Если элемент не найден, он должен быть добавлен в массив под ключом `notFound`.

Если все элементы найдены, ключ `notFound` не должен присутствовать в объекте.


Примеры запуска функции:
```javascript
findIndices(['a', 'b', 'c'], 'b', 'c', 'd') // { notFound: [ 'd' ], b: 1, c: 2 }
findIndices(['hello', 'js', 'world'], 'js', 'hello') // { js: 1, hello: 0 }
findIndices(['apple', 'pear', 'strawberry'], 'pear', 'banana') // { notFound: [ 'banana' ], pear: 1 }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findIndices(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findIndices(arr, ...elements) {
  let result = {notFound: []}

  for(let el of [...elements]){
    const curr = arr.indexOf(el)
    if(curr === -1) result.notFound.push(el)
    else result[el] = curr
  }

  if(!result.notFound.length) delete result.notFound

  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findIndices', () => {
  expect(findIndices).to.be.a('function');
});

it('findIndices(["a", "b", "c"], "b", "c", "d") should return { notFound: ["d"], b: 1, c: 2 }', function() {
  expect(findIndices(["a", "b", "c"], "b", "c", "d")).to.deep.equal({ notFound: ["d"], b: 1, c: 2 });
});

it('findIndices(["hello", "js", "world"], "js", "hello") should return { js: 1, hello: 0 }', function() {
  expect(findIndices(["hello", "js", "world"], "js", "hello")).to.deep.equal({ js: 1, hello: 0 });
});

it('findIndices(["apple", "pear", "strawberry"], "pear", "banana") should return { notFound: ["banana"], pear: 1 }', function() {
  expect(findIndices(["apple", "pear", "strawberry"], "pear", "banana")).to.deep.equal({ notFound: ["banana"], pear: 1 });
});

it('findIndices(["car", "bike", "plane"], "bike", "car", "train") should return { notFound: ["train"], bike: 1, car: 0 }', function() {
  expect(findIndices(["car", "bike", "plane"], "bike", "car", "train")).to.deep.equal({ notFound: ["train"], bike: 1, car: 0 });
});

it('findIndices(["cat", "dog", "fish"], "dog", "bird") should return { notFound: ["bird"], dog: 1 }', function() {
  expect(findIndices(["cat", "dog", "fish"], "dog", "bird")).to.deep.equal({ notFound: ["bird"], dog: 1 });
});

it('findIndices(["red", "green", "blue"], "yellow", "green") should return { notFound: ["yellow"], green: 1 }', function() {
  expect(findIndices(["red", "green", "blue"], "yellow", "green")).to.deep.equal({ notFound: ["yellow"], green: 1 });
});

it('findIndices(["a", "b", "c"], "a", "b", "c") should return { a: 0, b: 1, c: 2 }', function() {
  expect(findIndices(["a", "b", "c"], "a", "b", "c")).to.deep.equal({ a: 0, b: 1, c: 2 });
});

it('findIndices([], "x", "y", "z") should return { notFound: ["x", "y", "z"] }', function() {
  expect(findIndices([], "x", "y", "z")).to.deep.equal({ notFound: ["x", "y", "z"] });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
