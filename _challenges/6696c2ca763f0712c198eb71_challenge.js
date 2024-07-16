// NAMEEN:
// NAMERU:Перевернуть каждую строку в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте функцию `reverseStringInArray`, которая принимает массив строк и возвращает массив перевернутых строк.

Каждая строка должна остаться на своем месте в массиве.

В функции сделано всего три ошибки. Цикл и всё что внутри без ошибок.

Разберите каждую строку и попытайтесь понять, что она делает.

Пример запуска функции:
```js
reverseStringInArray(['blue', 'red']);                   // [ 'eulb', 'der' ]
reverseStringInArray(['abc', 'def', 'ghi', 'jkl']);      // [ 'cba', 'fed', 'ihg', 'lkj' ]
reverseStringInArray(['hello', 'programming' ,'world']); // [ 'olleh', 'gnimmargorp', 'dlrow' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function reverseStringInArray() {
  let newArr = {};

  for (let i = 0; i < arr.length; i++) {
    let chunk = '';
    for (let j = arr[i].length - 1; j >= 0; j--) {
      chunk += arr[i][j];
    }
    newArr.push(chunk);
  }

  return => newArr;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseStringInArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let chunk = '';
    for (let j = arr[i].length - 1; j >= 0; j--) {
      chunk += arr[i][j];
    }
    newArr.push(chunk);
  }
  return newArr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseStringInArray', () => {
  expect(reverseStringInArray).to.be.a('function');
});

it("reverseStringInArray(['hello', 'programming' ,'world']) should return ['olleh', 'gnimmargorp' ,'dlrow']", () => {
  expect(reverseStringInArray(['hello', 'programming' ,'world'])).to.deep.equal(['olleh', 'gnimmargorp' ,'dlrow']);
});

it("reverseStringInArray(['blue', 'red' ,'green']) should return ['eulb', 'der' ,'neerg']", () => {
  expect(reverseStringInArray(['blue', 'red' ,'green'])).to.deep.equal(['eulb', 'der' ,'neerg']);
});

it("reverseStringInArray(['ac', 'bd']) should return ['ca', 'db']", () => {
  expect(reverseStringInArray(['ac', 'bd'])).to.deep.equal(['ca', 'db']);
});

it("reverseStringInArray(['123', '456' ,'789']) should return ['321', '654' ,'987']", () => {
  expect(reverseStringInArray(['123', '456' ,'789'])).to.deep.equal(['321', '654' ,'987']);
});

it("reverseStringInArray(['apple', 'banana' ,'orange']) should return ['elppa', 'ananab' ,'egnaro']", () => {
  expect(reverseStringInArray(['apple', 'banana' ,'orange'])).to.deep.equal(['elppa', 'ananab' ,'egnaro']);
});

it("reverseStringInArray(['']) should return ['']", () => {
  expect(reverseStringInArray([''])).to.deep.equal(['']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
