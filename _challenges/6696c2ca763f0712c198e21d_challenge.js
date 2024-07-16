// NAMEEN:
// NAMERU:Функция умножает сумму на 3 если числа не равны

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumTriple`, которая принимает два аргумента a и b (числа).
В теле функции определите равны ли два аргумента.
Если не равны — верните утроенную их сумму, если равны — верните их сумму.

Примеры:
- функция `sumTriple(2, 6)` должна возвратить 24, так как числа не равны, а значит возвращается утроенная сумма 3 * (2 + 6);
- функция `sumTriple(2, 2)` должна возвратить 4, так как числа равны, а значит возвращается просто сумма 2 + 2.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sumTriple(a, b) {
  if (...) else
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumTriple(a, b) {
  if (a !== b) {
    return 3 * (a + b);
  } else {
    return a + b;
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it("Created function sumTriple", () => {
  expect(sumTriple).to.be.a("function");
});

it("Function returns correct result for arguments `2, 6", () => {
  expect(sumTriple(2, 6)).eq(24);
});

it("Function returns correct result for arguments `2, 2`", () => {
  expect(sumTriple(2, 2)).eq(4);
});

it('Function returns correct result for arguments `3, 4`', () => {
  expect(sumTriple(3, 4)).eq(21);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
