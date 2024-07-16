// NAMEEN:
// NAMERU:Является ли число дробным

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Для проверки является ли число целым используется оператор `%` (остаток от деления).

Если остаток от деления на 1 равен нулю, то число является целым. Если остаток от деления на 1 не равен нулю, то число является дробным.

Пример:
```javascript
console.log(10 % 1); // 0
console.log(10.5 % 1); // 0.5
```

Создайте функцию `isFloat`, которая принимает один параметр - число.

Функция должна вернуть `true`, если число является дробным, и `false` если нет.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isFloat(num) {
  return num % 1 !== 0;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isFloat', () => {
  expect(isFloat).to.be.a('function');
});

it('isFloat(10) should return false', () => {
  expect(isFloat(10)).to.be.false;
});

it('isFloat(10.5) should return true', () => {
  expect(isFloat(10.5)).to.be.true;
});

it('isFloat(0) should return false', () => {
  expect(isFloat(0)).to.be.false;
});

it('isFloat(-10) should return false', () => {
  expect(isFloat(-10)).to.be.false;
});

it('isFloat(-11.5) should return true', () => {
  expect(isFloat(-11.5)).to.be.true;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
