// NAMEEN:
// NAMERU:Функция возвращает число умноженное на 2

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `double`, которая принимает число и возвращает его удвоенное значение.

Пример:
```js
double(2) // 4
double(3) // 6
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
solution here
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function double(num) {
  return num * 2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function double', () => {
  expect(double).to.be.a('function');
});

it('Function returns correct result for 2', () => {
  expect(double(2)).eq(4);
});

it('Function returns correct result for 3', () => {
  expect(double(3)).eq(6);
});

it('Function returns correct result for 4', () => {
  expect(double(4)).eq(8);
});

it('Function returns correct result for 5', () => {
  expect(double(5)).eq(10);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
