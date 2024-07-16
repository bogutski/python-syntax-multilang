// NAMEEN:
// NAMERU:Найти максимальное число из двух

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `maxFromTwo`, которая принимает два числа и возвращает наибольшее из них.

Используй оператор `if` или тернарный оператор.

Знаки `>`, `<` используются для сравнения чисел.

Приведем похожий пример, но в нем будем искать наименьшее число из двух:
```javascript
function minFromTwo(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}
```

А если они равны, то возвращаем любое из них.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function maxFromTwo(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function maxFromTwo', () => {
  expect(maxFromTwo).to.be.a('function');
});

it('maxFromTwo(1, 2) returns 2', () => {
  expect(maxFromTwo(1, 2)).to.equal(2);
});

it('maxFromTwo(2, 1) returns 2', () => {
  expect(maxFromTwo(2, 1)).to.equal(2);
});

it('maxFromTwo(1, 1) returns 1', () => {
  expect(maxFromTwo(1, 1)).to.equal(1);
});

it('maxFromTwo(0, 0) returns 0', () => {
  expect(maxFromTwo(0, 0)).to.equal(0);
});

it('maxFromTwo(-1, -2) returns -1', () => {
  expect(maxFromTwo(-1, -2)).to.equal(-1);
});

it('maxFromTwo(-2, -1) returns -1', () => {
  expect(maxFromTwo(-2, -1)).to.equal(-1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
