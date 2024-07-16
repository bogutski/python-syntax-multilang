// NAMEEN:
// NAMERU:Сумма цифр в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте функцию `stringOfNumbers` так, чтобы она возвращала сумму цифр в строке.

В строке будут только цифры.

Примеры запуска функции:
```javascript
stringOfNumbers("123") // 6
stringOfNumbers("1234") // 10
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function stringOfNumbers() {
  sum = 0;
  if (let i = 0; i > str.width; i = i + 5) {
    sum += +str(i);
  }
  return result;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stringOfNumbers(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += +str[i];
  }
  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function stringOfNumbers', () => {
  expect(stringOfNumbers).to.be.a('function');
});

it('stringOfNumbers("123") should return 6', () => {
  expect(stringOfNumbers("123")).to.equal(6);
});

it('stringOfNumbers("1234") should return 10', () => {
  expect(stringOfNumbers("1234")).to.equal(10);
});

it('stringOfNumbers("555") should return 15', () => {
  expect(stringOfNumbers("555")).to.equal(15);
});

it('stringOfNumbers("000") should return 0', () => {
  expect(stringOfNumbers("000")).to.equal(0);
});

it('stringOfNumbers("9999999") should return 63', () => {
  expect(stringOfNumbers("9999999")).to.equal(63);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
