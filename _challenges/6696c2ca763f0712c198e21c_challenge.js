// NAMEEN:
// NAMERU:Функция на определение арифметической операции

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `evalNumbers()` , которая принимает три аргумента: `num1, num2` (два числа) и `operation` (арифметическая операция : "add" или "subtract", или "multiply", или "divide").

Если `operation` задан, функция должна вернуть результат арифметической операции между двумя числами `num1, num2`.
Если `operation` задан, но это не арифметическая операция, функция должна вернуть `Invalid operation`.
Если `operation` не задан, функция должна вернуть `Please, pass the operation`

Примеры:
- функция `evalNumbers(1, 23, "add")` должна возвратить 24;
- функция `evalNumbers(1, 3)` должна возвратить `Please, pass the operation`.
- функция `evalNumbers(1, 2, 'hello')` должна возвратить `Invalid operation`.
- функция `evalNumbers(22, 11, "divide")` должна возвратить 2.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function evalNumbers(num1, num2, operation) {
  if (operation) {
    if (operation === "add") {
      return num1 + num2;
    } else if (operation === "subtract") {
      return num1 - num2;
    } else if (operation === "multiply") {
      return num1 * num2;
    } else if (operation === "divide") {
      return num1 / num2;
    } else {
      return "Invalid operation";
    }
  } else {
    return "Please, pass the operation";
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it("Created function evalNumbers", () => {
  expect(evalNumbers).to.be.a("function");
});

it("Function returns correct result for arguments `1, 23, 'add'", () => {
  expect(evalNumbers(1, 23, "add")).eq(24);
});

it("Function returns correct result for arguments `1, 3`", () => {
  expect(evalNumbers(1, 3)).eq("Please, pass the operation");
});

it("Function returns correct result for arguments `1, 2, 'hello'`", () => {
  expect(evalNumbers(1, 2, "hello")).eq("Invalid operation");
});

it("The function returns the correct result for arguments `22, 11, 'divide'`", () => {
  expect(evalNumbers(22, 11, "divide")).eq(2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
