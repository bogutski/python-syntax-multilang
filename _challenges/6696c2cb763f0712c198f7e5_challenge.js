// NAMEEN:
// NAMERU:Найти индекс элемента с максимальной суммой

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findIndexWithMaxDigitSum`, которая принимает массив строк, представляющих числа.

Функция должна вернуть индекс элемента, сумма цифр которого максимальна.

Если массив пуст или если элементы массива не содержат цифр, функция должна вернуть строку `No valid elements`.


Примеры запуска функции:
```javascript
console.log(findIndexWithMaxDigitSum(['10', '56', '23'])); // 1
console.log(findIndexWithMaxDigitSum(['123', '456', '789'])); // 2
console.log(findIndexWithMaxDigitSum(['abc', 'def', 'ghi'])); // "No valid elements"
console.log(findIndexWithMaxDigitSum([])); // "No valid elements"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findIndexWithMaxDigitSum(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findIndexWithMaxDigitSum(arr) {
  if(!arr.length) return 'No valid elements'
  const numbers = arr.map(str => str.split('').reduce((acc, el) => acc + Number(el), 0))
  const maxNum = Math.max(...numbers)

  return isNaN(maxNum) ? 'No valid elements' : numbers.indexOf(maxNum);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findIndexWithMaxDigitSum', () => {
  expect(findIndexWithMaxDigitSum).to.be.a('function');
});

it('findIndexWithMaxDigitSum(["123", "456", "789"]) should return 2', function() {
  expect(findIndexWithMaxDigitSum(["123", "456", "789"])).to.equal(2);
});

it('findIndexWithMaxDigitSum(["10", "56", "23"]) should return 1', function() {
  expect(findIndexWithMaxDigitSum(["10", "56", "23"])).to.equal(1);
});

it('findIndexWithMaxDigitSum(["abc", "def", "ghi"]) should return "No valid elements"', function() {
  expect(findIndexWithMaxDigitSum(["abc", "def", "ghi"])).to.equal("No valid elements");
});

it('findIndexWithMaxDigitSum([]) should return "No valid elements"', function() {
  expect(findIndexWithMaxDigitSum([])).to.equal("No valid elements");
});

it('findIndexWithMaxDigitSum(["1234", "567", "890"]) should return 1', function() {
  expect(findIndexWithMaxDigitSum(["1234", "567", "890"])).to.equal(1);
});

it('findIndexWithMaxDigitSum(["101", "202", "303"]) should return 2', function() {
  expect(findIndexWithMaxDigitSum(["101", "202", "303"])).to.equal(2);
});

it('findIndexWithMaxDigitSum(["0", "00", "000"]) should return 0', function() {
  expect(findIndexWithMaxDigitSum(["0", "00", "000"])).to.equal(0);
});

it('findIndexWithMaxDigitSum(["9", "99", "999"]) should return 2', function() {
  expect(findIndexWithMaxDigitSum(["9", "99", "999"])).to.equal(2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
