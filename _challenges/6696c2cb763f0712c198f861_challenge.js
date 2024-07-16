// NAMEEN:
// NAMERU:Найти индекс первого элемента, сумма цифр которого равна заданному числу

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findIndexByDigitSum`, которая принимает массив (чисел и других типов элементы), и число.

Функция должна вернуть индекс первого элемента массива, сумма цифр которого равна заданному числу.

Если такой элемент не найден, функция должна вернуть строку `Element not found`.


Примеры запуска функции:
```javascript
findIndexByDigitSum([123, 'abc', 789, null, 'hello', 101, 202], 6); // 0
findIndexByDigitSum([34, true, 56, undefined, 78, NaN, 90], 9); // 2
findIndexByDigitSum([11, 'twenty-two', 33, 44], 5); // "Element not found"
findIndexByDigitSum([12, 34, 56, 78], 10); // "Element not found"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findIndexByDigitSum(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findIndexByDigitSum(arr, n) {
  const sumOfNums = num => {
    let sum = 0
    if(typeof num === 'number' && !isNaN(num)){
      const toStr = num.toString()
      for(let i = 0; i < toStr.length; i++){
        sum += +toStr[i]
      }
    } else return false

    return sum
  }

  const result = arr.findIndex(num => sumOfNums(num) === n)
  return result !== -1 ? result : 'Element not found';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findIndexByDigitSum', () => {
  expect(findIndexByDigitSum).to.be.a('function');
});

it('findIndexByDigitSum([123, "abc", 789, null, "hello", 101, 202], 6) should return 0', function() {
  expect(findIndexByDigitSum([123, "abc", 789, null, "hello", 101, 202], 6)).to.equal(0);
});

it('findIndexByDigitSum([34, true, 56, undefined, 78, NaN, 90], 9) should return 6', function() {
  expect(findIndexByDigitSum([34, true, 56, undefined, 78, NaN, 90], 9)).to.equal(6);
});

it('findIndexByDigitSum([12, 34, 56, 78], 10) should return "Element not found"', function() {
  expect(findIndexByDigitSum([12, 34, 56, 78], 10)).to.equal("Element not found");
});

it('findIndexByDigitSum([11, "twenty-two", 33, 44], 5) should return "Element not found"', function() {
  expect(findIndexByDigitSum([11, "twenty-two", 33, 44], 5)).to.equal("Element not found");
});

it('findIndexByDigitSum([9, 18, "twenty-seven", 36], 9) should return 0', function() {
  expect(findIndexByDigitSum([9, 18, "twenty-seven", 36], 9)).to.equal(0);
});

it('findIndexByDigitSum([123, 321, 213, 231], 6) should return 0', function() {
  expect(findIndexByDigitSum([123, 321, 213, 231], 6)).to.equal(0);
});

it('findIndexByDigitSum([], 1) should return "Element not found"', function() {
  expect(findIndexByDigitSum([], 1)).to.equal("Element not found");
});

it('findIndexByDigitSum([15, 24, 33, 42], 6) should return 0', function() {
  expect(findIndexByDigitSum([15, 24, 33, 42], 6)).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
