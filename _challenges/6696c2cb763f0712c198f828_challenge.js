// NAMEEN:
// NAMERU:Найти последний индекс числа, сумма цифр которого равна заданному числу

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastIndexByDigitSum`, которая принимает массив чисел и число.

Функция должна вернуть объект, содержащий массив сумм цифр каждого числа и индекс последнего элемента массива, сумма цифр которого равна заданному числу.


Примеры запуска функции:
```javascript
console.log(findLastIndexByDigitSum([123, 456, 789, 101, 202], 6));
// { sumOfNumbers: [ 6, 15, 24, 2, 4 ], index: 0 }

console.log(findLastIndexByDigitSum([34, 56, 78, 90], 9));
// { sumOfNumbers: [ 7, 11, 15, 9 ], index: 3 }

console.log(findLastIndexByDigitSum([12, 34, 56, 78], 10));
// { sumOfNumbers: [ 3, 7, 11, 15 ], index: -1 }

console.log(findLastIndexByDigitSum([11, 22, 33, 44], 5));
// { sumOfNumbers: [ 2, 4, 6, 8 ], index: -1 }
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
function findLastIndexByDigitSum(arr, n) {
  const modified = arr.map(num => {
    num = num.toString()
    let sum = 0

    for(let char of num){
      sum += +char
    }

    return sum
  })

  return {sumOfNumbers: modified, index: modified.lastIndexOf(n)};
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastIndexByDigitSum', () => {
  expect(findLastIndexByDigitSum).to.be.a('function');
});

it('findLastIndexByDigitSum([123, 456, 789, 101, 202], 6) should return { sumOfNumbers: [ 6, 15, 24, 2, 4 ], index: 0 }', function() {
  expect(findLastIndexByDigitSum([123, 456, 789, 101, 202], 6)).to.deep.equal({ sumOfNumbers: [ 6, 15, 24, 2, 4 ], index: 0 });
});

it('findLastIndexByDigitSum([34, 56, 78, 90], 9) should return { sumOfNumbers: [ 7, 11, 15, 9 ], index: 3 }', function() {
  expect(findLastIndexByDigitSum([34, 56, 78, 90], 9)).to.deep.equal({ sumOfNumbers: [ 7, 11, 15, 9 ], index: 3 });
});

it('findLastIndexByDigitSum([12, 34, 56, 78], 10) should return { sumOfNumbers: [ 3, 7, 11, 15 ], index: -1 }', function() {
  expect(findLastIndexByDigitSum([12, 34, 56, 78], 10)).to.deep.equal({ sumOfNumbers: [ 3, 7, 11, 15 ], index: -1 });
});

it('findLastIndexByDigitSum([11, 22, 33, 44], 5) should return { sumOfNumbers: [ 2, 4, 6, 8 ], index: -1 }', function() {
  expect(findLastIndexByDigitSum([11, 22, 33, 44], 5)).to.deep.equal({ sumOfNumbers: [ 2, 4, 6, 8 ], index: -1 });
});

it('findLastIndexByDigitSum([9, 18, 27, 36], 9) should return { sumOfNumbers: [ 9, 9, 9, 9 ], index: 3 }', function() {
  expect(findLastIndexByDigitSum([9, 18, 27, 36], 9)).to.deep.equal({ sumOfNumbers: [ 9, 9, 9, 9 ], index: 3 });
});

it('findLastIndexByDigitSum([123, 321, 213, 231], 6) should return { sumOfNumbers: [ 6, 6, 6, 6 ], index: 3 }', function() {
  expect(findLastIndexByDigitSum([123, 321, 213, 231], 6)).to.deep.equal({ sumOfNumbers: [ 6, 6, 6, 6 ], index: 3 });
});

it('findLastIndexByDigitSum([], 1) should return { sumOfNumbers: [], index: -1 }', function() {
  expect(findLastIndexByDigitSum([], 1)).to.deep.equal({ sumOfNumbers: [], index: -1 });
});

it('findLastIndexByDigitSum([15, 24, 33, 42], 6) should return { sumOfNumbers: [ 6, 6, 6, 6 ], index: 3 }', function() {
  expect(findLastIndexByDigitSum([15, 24, 33, 42], 6)).to.deep.equal({ sumOfNumbers: [ 6, 6, 6, 6 ], index: 3 });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
