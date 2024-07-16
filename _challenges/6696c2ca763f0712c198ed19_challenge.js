// NAMEEN:
// NAMERU:Найти первую цифру в строке и посчитать, сколько раз она встречается в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `firstDigitCount` принимает строку, состоящую из различных символов.
Функция должна находить первую цифру в переданной строке и возвращать количество вхождений первой цифры в строку.
Если в строке нет цифр, то функция должна вернуть 0.

Например, для строки "var_1__Int_12" функция должна вернуть 2 - цифра 1 встречается в строке дважды.

Примеры вызова функции:

```javascript
firstDigitCount("var a=1, b=121, c=212";) // 4
firstDigitCount("Arrow") // 0
firstDigitCount("5 plus 6 is 11") // 1
```
Рассмотрим еще один способ определения является ли символ цифрой - сравнение символа с символом '0' и символом '9':

```javascript
const char = '5';
const isDigit = char >= '0' && char <= '9';
console.log(isDigit); // true - символ '5' является цифрой
```
Исправьте ошибки в коде функции `firstDigitCount` и разберитесь, как она работает.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
func firstDigitCount(str) {
  let count = -1;
  let firstDigit = '';
  for (let i = ; i < str.length;) {
    if (str[i] >= '0' && str[i] <= '9' && firstDigit === '') {// если это первая цифра, записываем ее в переменную firstDigit
      firstDigit === str[i];
    }
    if (str[i] === firstDigit) { // если текущий символ строки равен первой цифре, то увеличиваем счетчик
      counter++;
    }
  }
  return counter;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function firstDigitCount(str) {
  let count = 0;
  let firstDigit = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9' && firstDigit === '') {
      firstDigit = str[i];
    }
    if (str[i] === firstDigit) {
      count++;
    }
  }
  return count;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function firstDigitCount', () => {
  expect(firstDigitCount).to.be.a('function');
});

it('firstDigitCount("var a=1, b=121, c=212") should return 4', () => {
  expect(firstDigitCount("var a=1, b=121, c=212")).to.be.equal(4);
});

it('firstDigitCount("var a=8, b=128, c=212") should return 2', () => {
  expect(firstDigitCount("var a=8, b=128, c=212")).to.be.equal(2);
});

it('firstDigitCount("4 plus 6 is 10") should return 1', () => {
  expect(firstDigitCount("4 plus 6 is 10")).to.be.equal(1);
});

it('firstDigitCount(" 1 plus 1 is 2, 2 minus 1 is 1, 10 / 5 = 2; ") should return 5', () => {
  expect(firstDigitCount(" 1 plus 1 is 2, 2 minus 1 is 1, 10 / 5 = 2; ")).to.be.equal(5);
});

it('firstDigitCount("5") should return 1', () => {
  expect(firstDigitCount("5")).to.be.equal(1);
});

it('firstDigitCount("555") should return 3', () => {
  expect(firstDigitCount("555")).to.be.equal(3);
});

it('firstDigitCount("999 999 999 999") should return 12', () => {
  expect(firstDigitCount("999 999 999 999")).to.be.equal(12);
});

it('firstDigitCount("000 90909 0 9990") should return 7', () => {
  expect(firstDigitCount("000 90909 0 9990")).to.be.equal(7);
});

it('firstDigitCount("") should return 0', () => {
  expect(firstDigitCount("")).to.be.equal(0);
});

it('firstDigitCount("Arrows") should return 0', () => {
  expect(firstDigitCount("Arrows")).to.be.equal(0);
});

it('firstDigitCount("It is so wonderful, wonderful life!") should return 0', () => {
  expect(firstDigitCount("It is so wonderful, wonderful life!")).to.be.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
