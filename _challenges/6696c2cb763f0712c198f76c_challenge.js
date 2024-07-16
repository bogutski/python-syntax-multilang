// NAMEEN:
// NAMERU:Найти последнюю строку с суммой чисел больше заданного значения

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastStringWithSumAbove`, которая принимает:

 * массив строк, каждая из которых содержит числа, разделенные пробелами,
 * число, представляющее пороговое значение суммы.

Функция должна сначала обработать каждую строку для вычисления суммы чисел в ней, затем найти последнюю строку, в которой сумма чисел превышает заданное пороговое значение.

Функция должна возвращать объект с двумя свойствами: `processedSums`, массив сумм чисел каждой строки, и `matchingString`, последнюю строку, где сумма превышает порог, или `undefined`, если такой строки нет.


Примеры запуска функции:
```javascript
console.log(findLastStringWithSumAbove(["1 2 3", "4 5 6", "7 8 9", "10 11"], 20));
// Вывод:
// {
//   processedSums: [6, 15, 24, 21],
//   matchingString: "10 11"
// }

console.log(findLastStringWithSumAbove(["3 3 3", "4 1", "2 2 1 1", "8 0 2"], 7));
// Вывод:
// {
//   processedSums: [9, 5, 6, 10],
//   matchingString: "8 0 2"
// }

console.log(findLastStringWithSumAbove(["5", "1 1", "2 2", "3"], 5));
// Вывод:
// {
//   processedSums: [5, 2, 4, 3],
//   matchingString: undefined
// }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastStringWithSumAbove(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastStringWithSumAbove(arr, n) {
  const processedSums = arr.map(str => str.split(' ').reduce((acc, el) => acc + Number(el), 0))
  const matchingString = arr.findLast((_, i) => processedSums[i] > n)
  return {processedSums, matchingString};
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastStringWithSumAbove', () => {
  expect(findLastStringWithSumAbove).to.be.a('function');
});

it('findLastStringWithSumAbove(["1 2 3", "4 5 6", "7 8 9", "10 11"], 20) should return {processedSums: [6, 15, 24, 21], matchingString: "10 11"}', function() {
  expect(findLastStringWithSumAbove(["1 2 3", "4 5 6", "7 8 9", "10 11"], 20)).to.deep.equal({
    processedSums: [6, 15, 24, 21],
    matchingString: "10 11"
  });
});

it('findLastStringWithSumAbove(["3 3 3", "4 1", "2 2 1 1", "8 0 2"], 7) should return {processedSums: [9, 5, 6, 10], matchingString: "8 0 2"}', function() {
  expect(findLastStringWithSumAbove(["3 3 3", "4 1", "2 2 1 1", "8 0 2"], 7)).to.deep.equal({
    processedSums: [9, 5, 6, 10],
    matchingString: "8 0 2"
  });
});

it('findLastStringWithSumAbove(["5", "1 1", "2 2", "3"], 5) should return {processedSums: [5, 2, 4, 3], matchingString: undefined}', function() {
  expect(findLastStringWithSumAbove(["5", "1 1", "2 2", "3"], 5)).to.deep.equal({
    processedSums: [5, 2, 4, 3],
    matchingString: undefined
  });
});

it('findLastStringWithSumAbove(["2 4 6", "3 3 3", "4 2 2", "1 1 1 1"], 10) should return {processedSums: [12, 9, 8, 4], matchingString: "2 4 6"}', function() {
  expect(findLastStringWithSumAbove(["2 4 6", "3 3 3", "4 2 2", "1 1 1 1"], 10)).to.deep.equal({
    processedSums: [12, 9, 8, 4],
    matchingString: "2 4 6"
  });
});

it('findLastStringWithSumAbove(["1 1 1 2", "5 5", "7 0 0", "8"], 9) should return {processedSums: [5, 10, 7, 8], matchingString: "5 5"}', function() {
  expect(findLastStringWithSumAbove(["1 1 1 2", "5 5", "7 0 0", "8"], 9)).to.deep.equal({
    processedSums: [5, 10, 7, 8],
    matchingString: "5 5"
  });
});

it('findLastStringWithSumAbove(["9 0", "8 1", "6 2 2", "5 5"], 11) should return {processedSums: [9, 9, 10, 10], matchingString: undefined}', function() {
  expect(findLastStringWithSumAbove(["9 0", "8 1", "6 2 2", "5 5"], 11)).to.deep.equal({
    processedSums: [9, 9, 10, 10],
    matchingString: undefined
  });
});

it('findLastStringWithSumAbove(["10 10", "15 15", "20 20", "25 5"], 30) should return {processedSums: [20, 30, 40, 30], matchingString: "20 20"}', function() {
  expect(findLastStringWithSumAbove(["10 10", "15 15", "20 20", "25 5"], 30)).to.deep.equal({
    processedSums: [20, 30, 40, 30],
    matchingString: "20 20"
  });
});

it('findLastStringWithSumAbove(["0 0 0 0", "1 2 3", "4 5 6", "10 10 10"], 20) should return {processedSums: [0, 6, 15, 30], matchingString: "10 10 10"}', function() {
  expect(findLastStringWithSumAbove(["0 0 0 0", "1 2 3", "4 5 6", "10 10 10"], 20)).to.deep.equal({
    processedSums: [0, 6, 15, 30],
    matchingString: "10 10 10"
  });
});

it('findLastStringWithSumAbove(["11 12", "13 14", "15 16 1", "20 1"], 25) should return {processedSums: [23, 27, 32, 21], matchingString: "15 16 1"}', function() {
  expect(findLastStringWithSumAbove(["11 12", "13 14", "15 16 1", "20 1"], 25)).to.deep.equal({
    processedSums: [23, 27, 32, 21],
    matchingString: "15 16 1"
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
