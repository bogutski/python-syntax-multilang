// NAMEEN:
// NAMERU:Нечетные и кратные 3-м

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isOddAndMultipleOfThree`, которая принимает число и возвращает true, если число нечетное и кратно 3. В противном случае возвращает false.

Эту задачу можно решить с помощью `if`, но для тренировки попробуйте решить ее с помощью `&&`.

Похожий пример:
```javascript
function isEvenAndMultipleOfFour(number) {
  if (number % 2 === 0 && number % 4 === 0) {
    return true;
  }
  return false;
}
```

В этом примере на вход подается число, которое проверяется на четность и кратность 4. Если число четное и кратно 4, то функция возвращает true, иначе false.

Кратность можно проверить с помощью оператора `%`. Он возвращает остаток от деления. Например, `5 % 2` равно 1, потому что 5 делится на 2 с остатком 1. А `4 % 2` равно 0, потому что 4 делится на 2 без остатка.

Кратно трем – это значит, что остаток от деления на 3 равен 0. Например, `9 % 3` равно 0, потому что 9 делится на 3 без остатка.


Логическое И (`&&`) возвращает true, если оба операнда равны true. В противном случае возвращает false. Например, ` 2 > 1 && 3 > 2` равно true, потому что оба операнда равны true. А `2 > 1 && 3 < 2` равно false, потому что один из операндов равен false.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isOddAndMultipleOfThree(number) {
  return number % 2 !== 0 && number % 3 === 0;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isOddAndMultipleOfThree', () => {
  expect(isOddAndMultipleOfThree).to.be.a('function');
});

it('isOddAndMultipleOfThree(3) === true', () => {
  expect(isOddAndMultipleOfThree(3)).to.be.true;
});

it('isOddAndMultipleOfThree(6) === false', () => {
  expect(isOddAndMultipleOfThree(6)).to.be.false;
});

it('isOddAndMultipleOfThree(9) === true', () => {
  expect(isOddAndMultipleOfThree(9)).to.be.true;
});

it('isOddAndMultipleOfThree(12) === false', () => {
  expect(isOddAndMultipleOfThree(12)).to.be.false;
});

it('isOddAndMultipleOfThree(15) === true', () => {
  expect(isOddAndMultipleOfThree(15)).to.be.true;
});

it('isOddAndMultipleOfThree(18) === false', () => {
  expect(isOddAndMultipleOfThree(18)).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
