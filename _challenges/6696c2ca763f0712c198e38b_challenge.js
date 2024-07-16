// NAMEEN:
// NAMERU:Премия в зависимости от стажа работы в компании

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `bonus`, которая принимает четыре параметра:
* `name` - имя сотрудника
* `position` - должность сотрудника
* `salary` - годовой оклад сотрудника
* `experience` - стаж работы сотрудника в компании, в годах

Функция должна рассчитать премию сотрудника в зависимости от его стажа работы в компании.

* Если стаж работы менее года, то премия составляет 0% от оклада
* Если стаж работы от 1 до 3 лет, то премия составляет 2% от оклада
* Если стаж работы от 3 до 5 лет, то премия составляет 5% от оклада
* Если стаж работы от 5 до 10 лет, то премия составляет 10% от оклада
* Если стаж работы более 10 лет, то премия составляет 20% от оклада

Функция должна возвращать строку вида `Name: John, Position: Manager, Salary: 1000, Experience: 5, Bonus: 50. Total: 1050`

Если стаж работы отрицательный, то функция должна возвращать строку `Invalid value for experience`
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function bonus(name, Position, salary, experience) {
  let bonus = 0;

  if (experience < 0) return 'Invalid value for experience';
  else if (experience < 1) bonus = salary * 0;
  else if (experience < 3) bonus = salary * 0.02;
  else if (experience < 5) bonus = salary * 0.05;
  else if (experience < 10) bonus = salary * 0.1;
  else bonus = salary * 0.2;

  return `Name: ${name}, Position: ${Position}, Salary: ${salary}, Experience: ${experience}, Bonus: ${bonus}. Total: ${
    salary + bonus
  }`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function bonus', () => {
  expect(bonus).to.be.a('function');
});

it('bonus("John", "Manager", 1000, 0) should return "Name: John, Position: Manager, Salary: 1000, Experience: 0, Bonus: 0. Total: 1000"', () => {
  expect(bonus('John', 'Manager', 1000, 0)).to.equal(
    'Name: John, Position: Manager, Salary: 1000, Experience: 0, Bonus: 0. Total: 1000',
  );
});

it('bonus("John", "Manager", 1000, -1) should return "Invalid value for experience"', () => {
  expect(bonus('John', 'Manager', 1000, -1)).to.equal('Invalid value for experience');
});

it('bonus("John", "Manager", 1000, 1) should return "Name: John, Position: Manager, Salary: 1000, Experience: 1, Bonus: 20. Total: 1020"', () => {
  expect(bonus('John', 'Manager', 1000, 1)).to.equal(
    'Name: John, Position: Manager, Salary: 1000, Experience: 1, Bonus: 20. Total: 1020',
  );
});

it('bonus("John", "Manager", 1000, 2) should return "Name: John, Position: Manager, Salary: 1000, Experience: 2, Bonus: 20. Total: 1020"', () => {
  expect(bonus('John', 'Manager', 1000, 2)).to.equal(
    'Name: John, Position: Manager, Salary: 1000, Experience: 2, Bonus: 20. Total: 1020',
  );
});

it('bonus("John", "Manager", 1000, 3) should return "Name: John, Position: Manager, Salary: 1000, Experience: 3, Bonus: 50. Total: 1050"', () => {
  expect(bonus('John', 'Manager', 1000, 3)).to.equal(
    'Name: John, Position: Manager, Salary: 1000, Experience: 3, Bonus: 50. Total: 1050',
  );
});

it('bonus("John", "Manager", 1000, 4) should return "Name: John, Position: Manager, Salary: 1000, Experience: 4, Bonus: 50. Total: 1050"', () => {
  expect(bonus('John', 'Manager', 1000, 4)).to.equal(
    'Name: John, Position: Manager, Salary: 1000, Experience: 4, Bonus: 50. Total: 1050',
  );
});

it('bonus("John", "Manager", 1000, 6) should return "Name: John, Position: Manager, Salary: 1000, Experience: 6, Bonus: 100. Total: 1100"', () => {
  expect(bonus('John', 'Manager', 1000, 6)).to.equal(
    'Name: John, Position: Manager, Salary: 1000, Experience: 6, Bonus: 100. Total: 1100',
  );
});

it('bonus("John", "Manager", 1000, 7) should return "Name: John, Position: Manager, Salary: 1000, Experience: 7, Bonus: 100. Total: 1100"', () => {
  expect(bonus('John', 'Manager', 1000, 7)).to.equal(
    'Name: John, Position: Manager, Salary: 1000, Experience: 7, Bonus: 100. Total: 1100',
  );
});

it('bonus("John", "Manager", 1000, 8) should return "Name: John, Position: Manager, Salary: 1000, Experience: 8, Bonus: 100. Total: 1100"', () => {
  expect(bonus('John', 'Manager', 1000, 8)).to.equal(
    'Name: John, Position: Manager, Salary: 1000, Experience: 8, Bonus: 100. Total: 1100',
  );
});

it('bonus("John", "Manager", 1000, 9) should return "Name: John, Position: Manager, Salary: 1000, Experience: 9, Bonus: 100. Total: 1100"', () => {
  expect(bonus('John', 'Manager', 1000, 9)).to.equal(
    'Name: John, Position: Manager, Salary: 1000, Experience: 9, Bonus: 100. Total: 1100',
  );
});

it('bonus("John", "Manager", 1000, 10) should return "Name: John, Position: Manager, Salary: 1000, Experience: 10, Bonus: 200. Total: 1200"', () => {
  expect(bonus('John', 'Manager', 1000, 10)).to.equal(
    'Name: John, Position: Manager, Salary: 1000, Experience: 10, Bonus: 200. Total: 1200',
  );
});

it('bonus("John", "Manager", 1000, 11) should return "Name: John, Position: Manager, Salary: 1000, Experience: 11, Bonus: 200. Total: 1200"', () => {
  expect(bonus('John', 'Manager', 1000, 11)).to.equal(
    'Name: John, Position: Manager, Salary: 1000, Experience: 11, Bonus: 200. Total: 1200',
  );
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
