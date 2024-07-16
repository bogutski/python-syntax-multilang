// NAMEEN:
// NAMERU:Возведение в степень и присваивание результата переменным

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `powerOf`, которая принимает два параметра `num` и `power` и возвращает результат возведения `num` в степень `power`.

Создайте переменную `calculation1` и присвойте ей результат вызова функции `powerOf` с аргументами `2` и `3`.
Создайте переменную `calculation2` и присвойте ей результат вызова функции `powerOf` с аргументами `3` и `4`.
Создайте переменную `calculation3` и присвойте ей результат вызова функции `powerOf` с аргументами `4` и `5`.

Названия параметров должны быть обязательно такими как в условии.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function powerOf(num, power) {
  return num ** power;
}

const calculation1 = powerOf(2, 3);
const calculation2 = powerOf(3, 4);
const calculation3 = powerOf(4, 5);
// SOLUTIONEND


// OPENTESTSSTART
it('Created function powerOf', () => {
  expect(powerOf).to.be.a('function');
});

it('Function has parameters num and power', () => {
  const func = powerOf.toString();
  const params = func.match(/\((.+?)\)/)[1];
  expect(params).to.equal('num, power');
});

it('Function powerOf(2, 3) returns 8 and calculation1 is 8', () => {
  expect(powerOf(2, 3)).to.equal(8);
  expect(calculation1).to.equal(8);
});

it('Function powerOf(3, 4) returns 81 and calculation2 is 81', () => {
  expect(powerOf(3, 4)).to.equal(81);
  expect(calculation2).to.equal(81);
});

it('Function powerOf(4, 5) returns 1024 and calculation3 is 1024', () => {
  expect(powerOf(4, 5)).to.equal(1024);
  expect(calculation3).to.equal(1024);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
