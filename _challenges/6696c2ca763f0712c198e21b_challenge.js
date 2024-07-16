// NAMEEN:
// NAMERU:Одно из чисел или сумма чисел равны 23

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `equal23`, которая принимает два аргумента num1 и num2.
Функция должна возвращать true если один из аргументов или их сумма равны 23, и `false` в других случаях.

Примеры:
- функция `equal23(1, 23)` должна возвратить true;
- функция `equal23(21, 2)` должна возвратить true.
- функция `equal23('23', 1)` должна возвратить false.
- функция `equal23(10, 12)` должна возвратить false.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function equal23(num1, num2) {
  if (num1 === 23) {
    return true;
  } else if (num2 === 23) {
    return true;
  } else if (num1 + num2 === 23) {
    return true;
  } else {
    return false;
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it("Created function equal23", () => {
  expect(equal23).to.be.a("function");
});

it("Function returns correct result for arguments `1, 23", () => {
  expect(equal23(1, 23)).eq(true);
});

it("Function returns correct result for arguments `21, 2`", () => {
  expect(equal23(21, 2)).eq(true);
});

it("Function returns correct result for arguments `'23', 1`", () => {
  expect(equal23("23", 1)).eq(false);
});

it("The function returns the correct result for arguments `10, 12`", () => {
  expect(equal23(10, 12)).eq(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
