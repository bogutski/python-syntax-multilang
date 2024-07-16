// NAMEEN:
// NAMERU:Рассчитать зарплату с бонусом

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `totalSalary`, которая принимает три параметра (числа):

`salary` – зарплату за месяц
`monthsCount` – количество отработанных месяцев
`bonus` – бонус в процентах

Функция должна возвращать сумму зарплаты за все месяцы с учетом бонуса.

Пример: `totalSalary(1000, 3, 10)` должна вернуть `3300`.

Названия параметров должны быть обязательно такими как в условии.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function totalSalary(salary, monthsCount, bonus) {
  const bonusAmount = salary * bonus / 100;
  return salary * monthsCount + bonusAmount * monthsCount;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function totalSalary', () => {
  expect(totalSalary).to.be.a('function');
});


it('totalSalary(1000, 3, 10) should return 3300', () => {
  expect(totalSalary(1000, 3, 10)).to.equal(3300);
} );

it('totalSalary(1000, 3, 0) should return 3000', () => {
  expect(totalSalary(1000, 3, 0)).to.equal(3000);
} );

it('totalSalary(1000, 0, 100) should return 0', () => {
  expect(totalSalary(1000, 0, 100)).to.equal(0);
} );

it('Function totalSalary has parameters salary, monthsCount, bonus', () => {
  // function to string and then to array of arguments
  const args = totalSalary.toString().match(/\(([^)]*)\)/)[1].split(',').map(arg => arg.trim());
  expect(args).to.be.eql(['salary', 'monthsCount', 'bonus']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
