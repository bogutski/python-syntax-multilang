// NAMEEN:
// NAMERU:Найдите ошибки в функции расчета по формуле mc в квадрате

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция должна называться `formulaCalculation`.

Функция должна принимать два параметра: `m` и `c`.

Функция должна возвращать результат расчета по формуле `m * c * c`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function formula calculation(param1, param2){
  mс * 2
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function formulaCalculation(m, c) {
  return m * c * c;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function formulaCalculation', () => {
  expect(formulaCalculation).to.be.a('function');
});

it('Function returns correct result for arguments `2, 3`', () => {
  expect(formulaCalculation(2, 3)).eq(18);
});

it('Function returns correct result for arguments `5, 10`', () => {
  expect(formulaCalculation(5, 10)).eq(500);
});

it('Function has two parameters `m` and `c`', () => {
  const args = formulaCalculation.toString().match(/\(([^)]*)\)/)[1].split(',').map(arg => arg.trim());
  expect(args).to.be.eql(['m', 'c']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
