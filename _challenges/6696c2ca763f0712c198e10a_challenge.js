// NAMEEN:
// NAMERU:Получаем результат от функции и передаем его в другую функцию. Сумма и умножение

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `multiply`, которая принимает два параметра и возвращает их произведение.

Напишите функцию `add`, которая принимает два параметра и возвращает их сумму.

Создайте переменную `sum1` и присвойте ей результат работы функции `add` с аргументами 2 и 3.

Создайте переменную `sum2` и присвойте ей результат работы функции `add` с аргументами 4 и 5.

Создайте переменную `multiply1` и присвойте ей результат работы функции `multiply` с аргументами `sum1` и `sum2`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function multiply(a, b) {
  return a * b;
}

function add(a, b) {
  return a + b;
}

const sum1 = add(2, 3);
const sum2 = add(4, 5);
const multiply1 = multiply(sum1, sum2);
// SOLUTIONEND


// OPENTESTSSTART
it('Created function multiply', () => {
  expect(multiply).to.be.a('function');
});

it('Created function add', () => {
  expect(add).to.be.a('function');
});

it('Created variable sum1', () => {
  expect(sum1).to.be.equal(5);
});

it('Created variable sum2', () => {
  expect(sum2).to.be.equal(9);
});

it('Created variable multiply1', () => {
  expect(multiply1).to.be.equal(45);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
