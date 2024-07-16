// NAMEEN:
// NAMERU:Найти сумму четырех чисел. Параметры по умолчанию

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumFour`, которая принимает 4 параметра `num1`, `num2`, `num3` и `num4` и возвращает их сумму.

Если какой-то аргумент не передан, то он должен быть равен 2.

Все аргументы будут числами.

Примеры:
```javascript
sumFour(1, 2, 3, 4) // 10
sumFour(1, 2, 3) // 8
sumFour(1, 2) // 7
sumFour(1) // 7
sumFour() // 8
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumFour(num1 = 2, num2 = 2, num3 = 2, num4 = 2) {
  return num1 + num2 + num3 + num4;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumFour', () => {
  expect(sumFour).to.be.a('function');
});

it('Function returns correct result for arguments `1, 2, 3, 4`', () => {
  expect(sumFour(1, 2, 3, 4)).to.equal(10);
});

it('Function returns correct result for arguments `0, 0, 0, 0`', () => {
  expect(sumFour(0, 0, 0, 0)).to.equal(0);
});

it('Function returns correct result for arguments `1, 2, 3`', () => {
  expect(sumFour(1, 2, 3)).to.equal(8);
});

it('Function returns correct result for arguments `1, 2`', () => {
  expect(sumFour(1, 2)).to.equal(7);
});

it('Function returns correct result for arguments `1`', () => {
  expect(sumFour(1)).to.equal(7);
});

it('Function returns correct result with no arguments', () => {
  expect(sumFour()).to.equal(8);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
