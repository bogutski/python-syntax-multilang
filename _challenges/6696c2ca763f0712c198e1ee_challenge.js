// NAMEEN:
// NAMERU:От нуля до 10 числа в слова

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `numToWord`, которая принимает число и возвращает его словесное представление.

Только для чисел от 0 до 10.

Например:
```javascript
numToWord(0) // 'zero'
numToWord(1) // 'one'
numToWord(2) // 'two'
numToWord(3) // 'three'
numToWord(4) // 'four'
numToWord(5) // 'five'
numToWord(6) // 'six'
numToWord(7) // 'seven'
numToWord(8) // 'eight'
numToWord(9) // 'nine'
numToWord(10) // 'ten'

numToWord(11) // 11
numToWord(20) // 20
numToWord(-1) // -1
```

Если число не входит в диапазон от 0 до 10, то функция должна вернуть это число.

Для решения этой задачи вам поможет сравнение:
```javascript
function words(num) {
  if(num === -1) return 'minus one';
  if(num === 11) return 'eleven';
  if(num === 20) return 'twenty';
  return num;
}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numToWord(num) {
  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  if (words[num]) return words[num];
  return num;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function numToWord', () => {
  expect(numToWord).to.be.a('function');
});

it('numToWord(0) should return "zero"', () => {
  expect(numToWord(0)).to.equal('zero');
});

it('numToWord(1) should return "one"', () => {
  expect(numToWord(1)).to.equal('one');
});

it('numToWord(2) should return "two"', () => {
  expect(numToWord(2)).to.equal('two');
});

it('numToWord(3) should return "three"', () => {
  expect(numToWord(3)).to.equal('three');
});

it('numToWord(4) should return "four"', () => {
  expect(numToWord(4)).to.equal('four');
});

it('numToWord(5) should return "five"', () => {
  expect(numToWord(5)).to.equal('five');
});

it('numToWord(6) should return "six"', () => {
  expect(numToWord(6)).to.equal('six');
});

it('numToWord(7) should return "seven"', () => {
  expect(numToWord(7)).to.equal('seven');
});

it('numToWord(8) should return "eight"', () => {
  expect(numToWord(8)).to.equal('eight');
});

it('numToWord(9) should return "nine"', () => {
  expect(numToWord(9)).to.equal('nine');
});

it('numToWord(10) should return "ten"', () => {
  expect(numToWord(10)).to.equal('ten');
});

it('numToWord(11) should return 11', () => {
  expect(numToWord(11)).to.equal(11);
});

it('numToWord(20) should return 20', () => {
  expect(numToWord(20)).to.equal(20);
});

it('numToWord(-1) should return -1', () => {
  expect(numToWord(-1)).to.equal(-1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
