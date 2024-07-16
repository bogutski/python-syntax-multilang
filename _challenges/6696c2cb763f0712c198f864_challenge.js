// NAMEEN:
// NAMERU:Найти индекс первой строки, содержащей заданное количество букв в верхнем и нижнем регистре

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findIndexByCaseCount`, которая принимает массив строк и объект с двумя свойствами: `upperCase` и `lowerCase`.

Функция должна вернуть индекс первой строки в массиве, которая содержит заданное или больше количество букв в верхнем и нижнем регистре.

Если такой строки нет, функция должна вернуть строку `Element not found`.


Примеры запуска функции:
```javascript
findIndexByCaseCount([' AlicE ', 'a  PP le', 'bla c k  '], { upperCase: 2, lowerCase: 3 }); // 0
findIndexByCaseCount(['cat', ' D O G', 'ElepHaNt'], { upperCase: 3, lowerCase: 5 }); // 2
findIndexByCaseCount(['  hEllo', 'WORLD  ', ' hi'], { upperCase: 5, lowerCase: 0 }); // 1
findIndexByCaseCount(['one', ' two', '  three '], { upperCase: 1, lowerCase: 4 }); // "Element not found"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findIndexByCaseCount(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findIndexByCaseCount(arr, obj) {
  const res = arr.findIndex(string => {
    let lower = 0
    let upper = 0

    for(let char of string){
      if(char !== ' ' && char.toLowerCase() === char) lower++
      else if(char !== ' ') upper++
    }

    return lower >= obj.lowerCase && upper >= obj.upperCase
  })

  return res !== -1 ? res : 'Element not found';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findIndexByCaseCount', () => {
  expect(findIndexByCaseCount).to.be.a('function');
});

it('findIndexByCaseCount([" AlicE ", "a  PP le", "bla c k  "], { upperCase: 2, lowerCase: 3 }) should return 0', function() {
  expect(findIndexByCaseCount([" AlicE ", "a  PP le", "bla c k  "], { upperCase: 2, lowerCase: 3 })).to.equal(0);
});

it('findIndexByCaseCount(["cat", " D O G", "ElepHaNt"], { upperCase: 3, lowerCase: 5 }) should return 2', function() {
  expect(findIndexByCaseCount(["cat", " D O G", "ElepHaNt"], { upperCase: 3, lowerCase: 5 })).to.equal(2);
});

it('findIndexByCaseCount(["  hEllo", "WORLD  ", " hi"], { upperCase: 5, lowerCase: 0 }) should return 1', function() {
  expect(findIndexByCaseCount(["  hEllo", "WORLD  ", " hi"], { upperCase: 5, lowerCase: 0 })).to.equal(1);
});

it('findIndexByCaseCount(["one", " two", "  three "], { upperCase: 1, lowerCase: 4 }) should return "Element not found"', function() {
  expect(findIndexByCaseCount(["one", " two", "  three "], { upperCase: 1, lowerCase: 4 })).to.equal("Element not found");
});

it('findIndexByCaseCount(["ShOrt", "tiny", "sMall", "big"], { upperCase: 2, lowerCase: 3 }) should return 0', function() {
  expect(findIndexByCaseCount(["ShOrt", "tiny", "sMall", "big"], { upperCase: 2, lowerCase: 3 })).to.equal(0);
});

it('findIndexByCaseCount(["Long", "longer", "Longest"], { upperCase: 1, lowerCase: 5 }) should return 2', function() {
  expect(findIndexByCaseCount(["Long", "longer", "Longest"], { upperCase: 1, lowerCase: 5 })).to.equal(2);
});

it('findIndexByCaseCount(["ThiS", "Is", "A", "teST"], { upperCase: 2, lowerCase: 2 }) should return 0', function() {
  expect(findIndexByCaseCount(["ThiS", "Is", "A", "teST"], { upperCase: 2, lowerCase: 2 })).to.equal(0);
});

it('findIndexByCaseCount(["A", "AB", "abc", "abCd"], { upperCase: 1, lowerCase: 3 }) should return 3', function() {
  expect(findIndexByCaseCount(["A", "AB", "abc", "abCd"], { upperCase: 1, lowerCase: 3 })).to.equal(3);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
