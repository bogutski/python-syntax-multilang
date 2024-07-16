// NAMEEN:
// NAMERU:Сортировка сотрудников по отделам и стажу работы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sortEmployeesByDepartmentAndExperience`, которая принимает массив объектов сотрудников.

Каждый объект содержит свойства `name`, `department` и `yearsOfExperience`.

Функция должна возвращать новый массив, содержащий сотрудников, отсортированных сначала по отделу в алфавитном порядке, а затем по стажу работы в порядке убывания.


Примеры запуска функции:
```javascript
const employees = [
  { name: "John Smith", department: "Finance", yearsOfExperience: 2 },
  { name: "Jane Doe", department: "IT", yearsOfExperience: 5 },
  { name: "Mary Johnson", department: "Finance", yearsOfExperience: 8 },
  { name: "James Brown", department: "IT", yearsOfExperience: 3 }
];

console.log(sortEmployeesByDepartmentAndExperience(employees));
// Вывод: [
//   { name: "Mary Johnson", department: "Finance", yearsOfExperience: 8 },
//   { name: "John Smith", department: "Finance", yearsOfExperience: 2 },
//   { name: "Jane Doe", department: "IT", yearsOfExperience: 5 },
//   { name: "James Brown", department: "IT", yearsOfExperience: 3 }
// ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sortEmployeesByDepartmentAndExperience(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortEmployeesByDepartmentAndExperience(arr) {
  let res = arr.slice().sort((a, b) => a.department.localeCompare(b.department))

  res.sort((a, b) => {
    if(b.department === a.department) return b.yearsOfExperience - a.yearsOfExperience
  })

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sortEmployeesByDepartmentAndExperience', () => {
  expect(sortEmployeesByDepartmentAndExperience).to.be.a('function');
});

it('Function sortEmployeesByDepartmentAndExperience should include method sort()', () => {
  const res = sortEmployeesByDepartmentAndExperience.toString()
  expect(res).to.include('.sort(')
});

it('sortEmployeesByDepartmentAndExperience should sort by department alphabetically and by experience descending within the same department', () => {
  const employees = [
    { name: "John Smith", department: "Finance", yearsOfExperience: 2 },
    { name: "Jane Doe", department: "IT", yearsOfExperience: 5 },
    { name: "Mary Johnson", department: "Finance", yearsOfExperience: 8 },
    { name: "James Brown", department: "IT", yearsOfExperience: 3 }
  ];
  expect(sortEmployeesByDepartmentAndExperience(employees)).to.deep.equal([
    { name: "Mary Johnson", department: "Finance", yearsOfExperience: 8 },
    { name: "John Smith", department: "Finance", yearsOfExperience: 2 },
    { name: "Jane Doe", department: "IT", yearsOfExperience: 5 },
    { name: "James Brown", department: "IT", yearsOfExperience: 3 }
  ]);
});

it('sortEmployeesByDepartmentAndExperience with an empty array should return an empty array', () => {
  expect(sortEmployeesByDepartmentAndExperience([])).to.deep.equal([]);
});

it('sortEmployeesByDepartmentAndExperience with employees from the same department should sort only by experience', () => {
  const employees = [
    { name: "Alice Green", department: "Marketing", yearsOfExperience: 10 },
    { name: "Bob Grey", department: "Marketing", yearsOfExperience: 3 }
  ];
  expect(sortEmployeesByDepartmentAndExperience(employees)).to.deep.equal([
    { name: "Alice Green", department: "Marketing", yearsOfExperience: 10 },
    { name: "Bob Grey", department: "Marketing", yearsOfExperience: 3 }
  ]);
});

it('sortEmployeesByDepartmentAndExperience should handle multiple departments and different levels of experience', () => {
  const employees = [
    { name: "Carl Blue", department: "HR", yearsOfExperience: 4 },
    { name: "Diane Yellow", department: "HR", yearsOfExperience: 12 },
    { name: "Eve White", department: "Operations", yearsOfExperience: 7 }
  ];
  expect(sortEmployeesByDepartmentAndExperience(employees)).to.deep.equal([
    { name: "Diane Yellow", department: "HR", yearsOfExperience: 12 },
    { name: "Carl Blue", department: "HR", yearsOfExperience: 4 },
    { name: "Eve White", department: "Operations", yearsOfExperience: 7 }
  ]);
});

it('sortEmployeesByDepartmentAndExperience should correctly sort a list where all employees have the same years of experience but different departments', () => {
  const employees = [
    { name: "Fred Black", department: "Sales", yearsOfExperience: 5 },
    { name: "Gina Pink", department: "Legal", yearsOfExperience: 5 }
  ];
  expect(sortEmployeesByDepartmentAndExperience(employees)).to.deep.equal([
    { name: "Gina Pink", department: "Legal", yearsOfExperience: 5 },
    { name: "Fred Black", department: "Sales", yearsOfExperience: 5 }
  ]);
});

it('sortEmployeesByDepartmentAndExperience should preserve the order of names within the same department and experience level', () => {
  const employees = [
    { name: "Hank Red", department: "Development", yearsOfExperience: 9 },
    { name: "Ivy Orange", department: "Development", yearsOfExperience: 9 }
  ];
  expect(sortEmployeesByDepartmentAndExperience(employees)).to.deep.equal([
    { name: "Hank Red", department: "Development", yearsOfExperience: 9 },
    { name: "Ivy Orange", department: "Development", yearsOfExperience: 9 }
  ]);
});

it('sortEmployeesByDepartmentAndExperience should sort correctly with mixed case department names', () => {
  const employees = [
    { name: "Julie Teal", department: "development", yearsOfExperience: 2 },
    { name: "Kyle Maroon", department: "Development", yearsOfExperience: 5 }
  ];
  expect(sortEmployeesByDepartmentAndExperience(employees)).to.deep.equal([
      { name: "Julie Teal", department: "development", yearsOfExperience: 2 },
      { name: "Kyle Maroon", department: "Development", yearsOfExperience: 5 }
  ]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
