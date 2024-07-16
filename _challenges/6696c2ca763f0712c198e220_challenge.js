// NAMEEN:
// NAMERU:Является ли число целым

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Для проверки является ли число целым используется оператор `%` (остаток от деления).

Если остаток от деления на 1 равен нулю, то число является целым.

Пример:
```javascript
console.log(10 % 1); // 0
console.log(10.5 % 1); // 0.5
```

Создайте функцию `isInteger`, которая принимает один параметр - число.

Функция должна вернуть `true`, если число является целым, и `false` если нет.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isInteger(num) {
  return num % 1 === 0;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isInteger', () => {
  expect(isInteger).to.be.a('function');
});

it('isInteger(10) should return true', () => {
  expect(isInteger(10)).to.be.true;
});

it('isInteger(10.5) should return false', () => {
  expect(isInteger(10.5)).to.be.false;
});

it('isInteger(0) should return true', () => {
  expect(isInteger(0)).to.be.true;
});

it('isInteger(-10) should return true', () => {
  expect(isInteger(-10)).to.be.true;
});

it('isInteger(-10.5) should return false', () => {
  expect(isInteger(-10.5)).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
