// NAMEEN:
// NAMERU: Посчитать количество вхождений заданной цифры в строку


/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `countDigit`, которая принимает два строковых аргумента:
- строку произвольной длины, составленную из различных символов (в том числе и цифр)
- строку длиной в 1 символ, содержащую цифру от 0 до 9

Нужно посчитать сколько раз в строке встречается заданная цифра и вернуть это число.

Примеры вызовов функции:

```javascript
countDigit('123456789', '1'); // 1
countDigit('Total price: 33.3$', '3'); // 3
countDigit('Time is up!', '5'); // 0
countDigit('', '9'); // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countDigit(str, digit) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === digit) {
      count++;
    }
  }
  return count;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function countDigit', () => {
  expect(countDigit).to.be.a('function');
});

it('countDigit("1234 56789", "1") should return 1', () => {
  expect(countDigit('1234 56789', '1')).to.equal(1);
});

it('countDigit("1234 516 7891", "1") should return 3', () => {
  expect(countDigit('1234 516 7891', '1')).to.equal(3);
});

it('countDigit("12341234", "2") should return 2', () => {
  expect(countDigit('12341234', '2')).to.equal(2);
});

it('countDigit("1", "4") should return 0', () => {
  expect(countDigit('1', '4')).to.equal(0);
});

it('countDigit("9", "9") should return 1', () => {
  expect(countDigit('9', '9')).to.equal(1);
});

it('countDigit("Total price: 33.3$", "3") should return 3', () => {
  expect(countDigit('Total price: 33.3$', '3')).to.equal(3);
});

it('countDigit("Time is up!", "5") should return 0', () => {
  expect(countDigit('Time is up!', '5')).to.equal(0);
});

it('countDigit("", "7") should return 0', () => {
  expect(countDigit('', '7')).to.equal(0);
});

it('countDigit("12 plus 34 equals 46", "4") should return 2', () => {
  expect(countDigit('12 plus 34 equals 46', '4')).to.equal(2);
});

it('countDigit("12 plus 34 equals 46", "6") should return 1', () => {
  expect(countDigit('12 plus 34 equals 46', '6')).to.equal(1);
});

it('countDigit("12 plus 34 equals 46", "0") should return 0', () => {
  expect(countDigit('12 plus 34 equals 46', '0')).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND