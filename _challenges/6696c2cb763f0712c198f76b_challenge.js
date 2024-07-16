// NAMEEN:
// NAMERU:Обработка массива строк и поиск последней строки по заданной длине

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastStringByLength`, которая принимает массив строк и число, представляющее длину.

Функция должна сначала удалить все пробелы из каждой строки в массиве. Затем она должна найти последнюю строку, чья длина совпадает с заданным числом.

Возвращаемый объект должен содержать два свойства: `processedArray`, массив обработанных строк, и `matchingString`, последнюю строку, соответствующую заданной длине, или `undefined`, если такой строки нет.


Примеры запуска функции:
```javascript
console.log(findLastStringByLength([" apple ", "banana", " cherry ", "date", "fig"], 5));
// Вывод:
// {
//   processedArray: ["apple", "banana", "cherry", "date", "fig"],
//   matchingString: "apple"
// }

console.log(findLastStringByLength(["kiwi ", " mango", "p e a c h", " apr  icot ", "p lu m"], 4));
// Вывод:
// {
//   processedArray: ["kiwi", "mango", "peach", "apricot", "plum"],
//   matchingString: "plum"
// }

console.log(findLastStringByLength(["  lemon  ", " l ime ", "grap e ", " m elo n ", "  berry  "], 6));
// Вывод:
// {
//   processedArray: ["lemon", "lime", "grape", "melon", "berry"],
//   matchingString: undefined
// }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastStringByLength(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastStringByLength(array, n) {
  let processedArray = []

  for(let string of array){
    let newStr = ''

    for(let symbol of string){
      if(symbol !== ' ') newStr += symbol
    }

    processedArray.push(newStr)
  }

  const matchingString = processedArray.findLast(str => str.length === n)
  return {processedArray, matchingString};
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastStringByLength', () => {
  expect(findLastStringByLength).to.be.a('function');
});

it('findLastStringByLength([" apple ", "banana", " cherry ", "date", "fig"], 5) should return {processedArray: ["apple", "banana", "cherry", "date", "fig"], matchingString: "apple"}', function() {
  expect(findLastStringByLength([" apple ", "banana", " cherry ", "date", "fig"], 5)).to.deep.equal({
    processedArray: ["apple", "banana", "cherry", "date", "fig"],
    matchingString: "apple"
  });
});

it('findLastStringByLength(["kiwi ", " mango", "p e a c h", " apr  icot ", "p lu m"], 4) should return {processedArray: ["kiwi", "mango", "peach", "apricot", "plum"], matchingString: "plum"}', function() {
  expect(findLastStringByLength(["kiwi ", " mango", "peach", " apricot ", "plum"], 4)).to.deep.equal({
    processedArray: ["kiwi", "mango", "peach", "apricot", "plum"],
    matchingString: "plum"
  });
});

it('findLastStringByLength(["lemon", " lime ", "grape", " melon", "berry"], 6) should return {processedArray: ["lemon", "lime", "grape", "melon", "berry"], matchingString: undefined}', function() {
  expect(findLastStringByLength(["lemon", " lime ", "grape", " melon", "berry"], 6)).to.deep.equal({
    processedArray: ["lemon", "lime", "grape", "melon", "berry"],
    matchingString: undefined
  });
});

it('findLastStringByLength(["  b a n a n a  ", "ap ple", " orange  ", "grapefruit", "bl ueberry"], 7) should return {processedArray: ["banana", "apple", "orange", "grapefruit", "blueberry"], matchingString: undefined}', function() {
  expect(findLastStringByLength(["  b a n a n a  ", "ap ple", " orange  ", "grapefruit", "bl ueberry"], 7)).to.deep.equal({
    processedArray: ["banana", "apple", "orange", "grapefruit", "blueberry"],
    matchingString: undefined
  });
});

it('findLastStringByLength(["water melon", " peach ", "necta rine", "man go", "lemonade"], 9) should return {processedArray: ["watermelon", "peach", "nectarine", "mango", "lemonade"], matchingString: "nectarine"}', function() {
  expect(findLastStringByLength(["water melon", " peach ", "necta rine", "man go", "lemonade"], 9)).to.deep.equal({
    processedArray: ["watermelon", "peach", "nectarine", "mango", "lemonade"],
    matchingString: "nectarine"
  });
});

it('findLastStringByLength(["r aspberry ", " black berry", " straw berry ", "apple", "b anana"], 10) should return {processedArray: ["raspberry", "blackberry", "strawberry", "apple", "banana"], matchingString: "strawberry"}', function() {
  expect(findLastStringByLength(["r aspberry ", " black berry", " straw berry ", "apple", "b anana"], 10)).to.deep.equal({
    processedArray: ["raspberry", "blackberry", "strawberry", "apple", "banana"],
    matchingString: "strawberry"
  });
});

it('findLastStringByLength(["ki w i", "mango ", "apri cot ", " pl um ", "grape"], 4) should return {processedArray: ["kiwi", "mango", "apricot", "plum", "grape"], matchingString: "plum"}', function() {
  expect(findLastStringByLength(["ki w i", "mango ", "apri cot ", " pl um ", "grape"], 4)).to.deep.equal({
    processedArray: ["kiwi", "mango", "apricot", "plum", "grape"],
    matchingString: "plum"
  });
});

it('findLastStringByLength(["pe anut", "coco nut", "al mond", "hazeln ut", "cashe w"], 6) should return {processedArray: ["peanut", "coconut", "almond", "hazelnut", "cashew"], matchingString: "cashew"}', function() {
  expect(findLastStringByLength(["pe anut", "coco nut", "al mond", "hazeln ut", "cashe w"], 6)).to.deep.equal({
    processedArray: ["peanut", "coconut", "almond", "hazelnut", "cashew"],
    matchingString: "cashew"
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
