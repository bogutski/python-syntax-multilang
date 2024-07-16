// NAMEEN:
// NAMERU:Количество пробелов в строках

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `numOfSpaces`, которая принимает две строки и возвращает количество пробелов в обеих строках.

Выполните склеивание строк и при помощи цикла `for` посчитайте количество пробелов в получившейся строке.

Если в обеих строках нет пробелов, то функция должна вернуть 0.

Примеры запуска функции:
```javascript
numOfSpaces('1 2 3', '4 5 6'); // 4
numOfSpaces('a b c', ''); // 2
numOfSpaces('', ''); // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numOfSpaces(str1, str2){
  let bothStrings = str1 + str2;
  let count = 0;
  for (let i = 0; i < bothStrings.length; i++){
    if (bothStrings[i] === " "){
      count++;
    }
  }
  return count;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function numOfSpaces', () => {
  expect(numOfSpaces).to.be.a('function');
});

it("numOfSpaces('H e l l o', 'W o r l d') should return 8", () => {
  expect(numOfSpaces('H e l l o', 'W o r l d')).to.equal(8);
});

it("numOfSpaces('     ', '     ') should return 10", () => {
  expect(numOfSpaces('     ', '     ')).to.equal(10);
});

it("numOfSpaces(' Hi ', ' there ') should return 4", () => {
  expect(numOfSpaces(' Hi ', ' there ')).to.equal(4);
});

it("numOfSpaces('', '') should return 0", () => {
  expect(numOfSpaces('', '')).to.equal(0);
});

it("numOfSpaces('123', '4 5 6') should return 2", () => {
  expect(numOfSpaces('123', '4 5 6')).to.equal(2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
