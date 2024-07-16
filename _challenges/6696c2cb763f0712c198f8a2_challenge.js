// NAMEEN:
// NAMERU:Найти индекс последнего элемента с заданной суммой цифр

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastIndexByDigitSum`, которая принимает массив строк и число.

Функция должна вернуть объект, содержащий отформатированный массив строк (только цифры) и индекс последнего элемента, сумма цифр которого равна заданному числу.


Примеры запуска функции:
```javascript
console.log(findLastIndexByDigitSum(['123', '4a5 6', 'hello', '789', ' 3!2#+1 '], 15));
// { modifiedArray: [ '123', '456', '', '789', '321' ], index: 1 }

console.log(findLastIndexByDigitSum(['a-10', 'b-20', 'c-30', 'd-40'], 3));
// { modifiedArray: [ '10', '20', '30', '40' ], index: 2 }

console.log(findLastIndexByDigitSum(['abc', 'def', 'ghi'], 0));
// { modifiedArray: [ '', '', '' ], index: 2 }

console.log(findLastIndexByDigitSum(['1a2b3c', '4d5e6f', '7g8h9i'], 10));
// { modifiedArray: [ '123', '456', '789' ], index: -1 }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastIndexByDigitSum(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastIndexByDigitSum(arr, target) {
  const modified = arr.map(str => str.replace(/[^0-9]/g, ''))
  const index = modified.findLastIndex(el => {
    let sum = 0;

    for(let char of el){
      sum += +char
    }

    return sum === target
  })

  return {modifiedArray: modified, index};
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastIndexByDigitSum', () => {
  expect(findLastIndexByDigitSum).to.be.a('function');
});

it('findLastIndexByDigitSum(["123", "4a5 6", "hello", "789", " 3!2#+1 "], 15) should return { modifiedArray: ["123", "456", "", "789", "321"], index: 1 }', function() {
  expect(findLastIndexByDigitSum(["123", "4a5 6", "hello", "789", " 3!2#+1 "], 15)).to.deep.equal({ modifiedArray: ["123", "456", "", "789", "321"], index: 1 });
});

it('findLastIndexByDigitSum(["10", "20", "30", "40"], 3) should return { modifiedArray: ["10", "20", "30", "40"], index: 2 }', function() {
  expect(findLastIndexByDigitSum(["10", "20", "30", "40"], 3)).to.deep.equal({ modifiedArray: ["10", "20", "30", "40"], index: 2 });
});

it('findLastIndexByDigitSum(["abc", "def", "ghi"], 0) should return { modifiedArray: ["", "", ""], index: 2 }', function() {
  expect(findLastIndexByDigitSum(["abc", "def", "ghi"], 0)).to.deep.equal({ modifiedArray: ["", "", ""], index: 2 });
});

it('findLastIndexByDigitSum(["1a2b3c", "4d5e6f", "7g8h9i"], 10) should return { modifiedArray: ["123", "456", "789"], index: -1 }', function() {
  expect(findLastIndexByDigitSum(["1a2b3c", "4d5e6f", "7g8h9i"], 10)).to.deep.equal({ modifiedArray: ["123", "456", "789"], index: -1 });
});

it('findLastIndexByDigitSum(["12x3", "4#5 6", "hello", "78@9", " 3!2#+1 "], 6) should return { modifiedArray: ["123", "456", "", "789", "321"], index: 4 }', function() {
  expect(findLastIndexByDigitSum(["12x3", "4#5 6", "hello", "78@9", " 3!2#+1 "], 6)).to.deep.equal({ modifiedArray: ["123", "456", "", "789", "321"], index: 4 });
});

it('findLastIndexByDigitSum(["123abc", "456def", "789ghi"], 10) should return { modifiedArray: ["123", "456", "789"], index: -1 }', function() {
  expect(findLastIndexByDigitSum(["123abc", "456def", "789ghi"], 10)).to.deep.equal({ modifiedArray: ["123", "456", "789"], index: -1 });
});

it('findLastIndexByDigitSum(["11", "22", "33", "44"], 4) should return { modifiedArray: ["11", "22", "33", "44"], index: 1 }', function() {
  expect(findLastIndexByDigitSum(["11", "22", "33", "44"], 4)).to.deep.equal({ modifiedArray: ["11", "22", "33", "44"], index: 1 });
});

it('findLastIndexByDigitSum(["abc123", "def456", "ghi789"], 12) should return { modifiedArray: ["123", "456", "789"], index: -1 }', function() {
  expect(findLastIndexByDigitSum(["abc123", "def456", "ghi789"], 12)).to.deep.equal({ modifiedArray: ["123", "456", "789"], index: -1 });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
