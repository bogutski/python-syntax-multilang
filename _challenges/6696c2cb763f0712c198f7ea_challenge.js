// NAMEEN:
// NAMERU:Проверка присутствия подстроки в массиве строк и возврат их значений и индексов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findSubstringsIndices`, которая принимает массив строк и подстроку.

Функция должна вернуть массив, состоящий из пар `[значение, индекс]` для каждого элемента массива, который содержит данную подстроку, без учета регистра.

Если таких элементов нет, функция должна вернуть строку `No elements found`.


Примеры запуска функции:
```javascript
findSubstringsIndices(['apPle pIe', 'baNAna Split', 'cheRRy tArt', 'BananA brEad'], 'BANANA'); // [ [ 'baNAna Split', 1 ], [ 'BananA brEad', 3 ] ]
findSubstringsIndices(['Cat', 'Dog', 'Fish'], 'do'); // [ [ 'Dog', 1 ] ]
findSubstringsIndices(['apple pie', 'cherry tart'], 'banana'); // "No elements found"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findSubstringsIndices(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findSubstringsIndices(arr, str) {
  let result = []
  str = str.toLowerCase()

  arr.forEach((curr, i) => {
    const string = curr.toLowerCase()
    if(string.indexOf(str) !== -1) result.push([curr, i])
  })

  return result.length ? result : 'No elements found';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findSubstringsIndices', () => {
  expect(findSubstringsIndices).to.be.a('function');
});

it('findSubstringsIndices(["apPle pIe", "baNAna Split", "cheRRy tArt", "BananA brEad"], "BANANA") should return [ [ "baNAna Split", 1 ], [ "BananA brEad", 3 ] ]', function() {
  expect(findSubstringsIndices(["apPle pIe", "baNAna Split", "cheRRy tArt", "BananA brEad"], "BANANA")).to.deep.equal([["baNAna Split", 1], ["BananA brEad", 3]]);
});

it('findSubstringsIndices(["Cat", "Dog", "Fish"], "do") should return [ [ "Dog", 1 ] ]', function() {
  expect(findSubstringsIndices(["Cat", "Dog", "Fish"], "do")).to.deep.equal([["Dog", 1]]);
});

it('findSubstringsIndices(["apple pie", "cherry tart"], "banana") should return "No elements found"', function() {
  expect(findSubstringsIndices(["apple pie", "cherry tart"], "banana")).to.equal("No elements found");
});

it('findSubstringsIndices(["hello world", "hi there", "hey"], "hi") should return [ [ "hi there", 1 ] ]', function() {
  expect(findSubstringsIndices(["hello world", "hi there", "hey"], "hi")).to.deep.equal([["hi there", 1]]);
});

it('findSubstringsIndices(["javascript", "java", "typescript"], "java") should return [ [ "javascript", 0 ], [ "java", 1 ] ]', function() {
  expect(findSubstringsIndices(["javascript", "java", "typescript"], "java")).to.deep.equal([["javascript", 0], ["java", 1]]);
});

it('findSubstringsIndices(["python", "ruby", "perl"], "ru") should return [ [ "ruby", 1 ] ]', function() {
  expect(findSubstringsIndices(["python", "ruby", "perl"], "ru")).to.deep.equal([["ruby", 1]]);
});

it('findSubstringsIndices(["a", "b", "c"], "d") should return "No elements found"', function() {
  expect(findSubstringsIndices(["a", "b", "c"], "d")).to.equal("No elements found");
});

it('findSubstringsIndices([], "anything") should return "No elements found"', function() {
  expect(findSubstringsIndices([], "anything")).to.equal("No elements found");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
