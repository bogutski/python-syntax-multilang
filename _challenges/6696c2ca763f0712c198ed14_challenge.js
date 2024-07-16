// NAMEEN:
// NAMERU:Посчитать сколько раз заданная цифра входит в число

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `countDigitInNumber` должна принимать два аргумента: число `number` и цифру `digit`.

Оба аргумента должны быть целыми неотрицательными числами.

Функция должна посчитать сколько раз цифра `digit` встречается в числе `number` и вернуть результат в виде строки следующего формата:

 \`In number ${number} digit ${digit} occurs ${count} times\`

Где `number` и `digit` - аргументы функции, а `count` - количество вхождений цифры `digit` в число `number`.

Для решения задачи приведите оба аргумента к типу String.

Примеры преобразования чисел в строки:

```javascript
const number = 123123123;
const digit = 3;
const numberAsString = number.toString(); // '123123123'
const digitAsString = String(digit);   // '3'
```

Примеры запуска функции:

```javascript
countDigitInNumber(123123, 3) должна вернуть `In number 123123 digit 3 occurs 2 times`
countDigitInNumber(302, 0) должна вернуть `In number 302 digit 0 occurs 1 times`
countDigitInNumber(111, 5) должна вернуть `In number 111 digit 5 occurs 0 times`
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function countDigitInNumber(number, digit) {

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countDigitInNumber(number, digit) {
  let count = 0;
  const numberAsString = String(number);
  const digitAsString = String(digit);
  for (let i = 0; i < numberAsString.length; i += 1) {
    if (numberAsString[i] === digitAsString) {
      count += 1;
    }
  }
  return `In number ${number} digit ${digit} occurs ${count} times`;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function countDigitInNumber', () => {
  expect(countDigitInNumber).to.be.a('function');
});

it('countDigitInNumber(123123, 3) should return "In number 123123 digit 3 occurs 2 times"', () => {
  expect(countDigitInNumber(123123, 3)).to.be.eq('In number 123123 digit 3 occurs 2 times');
});

it('countDigitInNumber(123123, 2) should return "In number 123123 digit 2 occurs 2 times"', () => {
  expect(countDigitInNumber(123123, 2)).to.be.eq('In number 123123 digit 2 occurs 2 times');
});

it('countDigitInNumber(123123, 0) should return "In number 123123 digit 0 occurs 0 times"', () => {
  expect(countDigitInNumber(123123, 0)).to.be.eq('In number 123123 digit 0 occurs 0 times');
});

it('countDigitInNumber(111, 5) should return "In number 111 digit 5 occurs 0 times"', () => {
  expect(countDigitInNumber(111, 5)).to.be.eq('In number 111 digit 5 occurs 0 times');
});

it('countDigitInNumber(111111, 1) should return "In number 111111 digit 1 occurs 6 times"', () => {
  expect(countDigitInNumber(111111, 1)).to.be.eq('In number 111111 digit 1 occurs 6 times');
});

it('countDigitInNumber(302, 0) should return "In number 302 digit 0 occurs 1 times"', () => {
  expect(countDigitInNumber(302, 0)).to.be.eq('In number 302 digit 0 occurs 1 times');
});

it('countDigitInNumber(3000000000, 0) should return "In number 3000000000 digit 0 occurs 9 times"', () => {
  expect(countDigitInNumber(3000000000, 0)).to.be.eq('In number 3000000000 digit 0 occurs 9 times');
});

it('countDigitInNumber(3000000000, 3) should return "In number 3000000000 digit 3 occurs 1 times"', () => {
  expect(countDigitInNumber(3000000000, 3)).to.be.eq('In number 3000000000 digit 3 occurs 1 times');
});

it('countDigitInNumber(3000000000, 5) should return "In number 3000000000 digit 5 occurs 0 times"', () => {
  expect(countDigitInNumber(3000000000, 5)).to.be.eq('In number 3000000000 digit 5 occurs 0 times');
});

it('countDigitInNumber(0, 9) should return "In number 0 digit 9 occurs 0 times"', () => {
  expect(countDigitInNumber(0, 9)).to.be.eq('In number 0 digit 9 occurs 0 times');
});

it('countDigitInNumber(0, 0) should return "In number 0 digit 0 occurs 1 times"', () => {
  expect(countDigitInNumber(0, 0)).to.be.eq('In number 0 digit 0 occurs 1 times');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
