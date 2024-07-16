// NAMEEN:
// NAMERU:Количество вхождений символа в строку

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `numberOfOccurrences`, которая принимает строку и символ и возвращает количество вхождений символа в строку.

Если строка либо символ пустые, функция должна возвращать 0.


Примеры запуска функции:
```javascript
numberOfOccurrences('hello', 'o'); // 1
numberOfOccurrences('apple', 'p'); // 2
numberOfOccurrences('', 'w');      // 0
numberOfOccurrences('', '');       // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numberOfOccurrences(string, letter) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      count++;
    }
  }
  return count;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function numberOfOccurrences', () => {
  expect(numberOfOccurrences).to.be.a('function');
});

it('numberOfOccurrences("hello", "l") should return 2', () => {
  expect(numberOfOccurrences("hello", "l")).to.equal(2);
});

it('numberOfOccurrences("hello", "t") should return 0', () => {
  expect(numberOfOccurrences("hello", "t")).to.equal(0);
});

it('numberOfOccurrences("apple", "p") should return 2', () => {
  expect(numberOfOccurrences("apple", "p")).to.equal(2);
});

it('numberOfOccurrences("java script", "a") should return 2', () => {
  expect(numberOfOccurrences("java script", "a")).to.equal(2);
});

it('numberOfOccurrences("wwwwww", "w") should return 6', () => {
  expect(numberOfOccurrences("wwwwww", "w")).to.equal(6);
});

it('numberOfOccurrences("", "w") should return 0', () => {
  expect(numberOfOccurrences("", "w")).to.equal(0);
});

it('numberOfOccurrences("", "") should return 0', () => {
  expect(numberOfOccurrences("", "")).to.equal(0);
});

it('numberOfOccurrences("hello", "") should return 0', () => {
  expect(numberOfOccurrences("hello", "")).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
