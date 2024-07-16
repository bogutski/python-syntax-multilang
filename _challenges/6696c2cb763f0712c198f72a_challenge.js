// NAMEEN:
// NAMERU:Поиск первого студента с оценкой выше заданного порога

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findStudentByGrade`, которая принимает массив студентов и пороговую оценку в качестве аргументов и возвращает объект первого студента с оценкой выше заданного порога.

Если такой студент не найден, функция должна вернуть `null`.


Пример запуска функции:
```javascript
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 70 },
  { name: "Charlie", grade: 90 }
];

console.log(findStudentByGrade(students, 80));
// Вывод: { name: "Alice", grade: 85 }

console.log(findStudentByGrade(students, 95));
// Вывод: null
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findStudentByGrade(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findStudentByGrade(students, n) {
  return students.find(obj => obj.grade > n) || null;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findStudentByGrade', () => {
  expect(findStudentByGrade).to.be.a('function');
});

it("Function findStudentByGrade should include find method", () => {
  const result = findStudentByGrade.toString();
  expect(result).to.include('.find(');
});

it("findStudentByGrade([{ name: 'Alice', grade: 85 }, { name: 'Bob', grade: 70 }, { name: 'Charlie', grade: 90 }], 80) should return { name: 'Alice', grade: 85 }", () => {
  const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 70 },
    { name: "Charlie", grade: 90 }
  ];

  expect(findStudentByGrade(students, 80)).to.deep.equal({ name: "Alice", grade: 85 });
});

it("findStudentByGrade([{ name: 'Alice', grade: 85 }, { name: 'Bob', grade: 70 }, { name: 'Charlie', grade: 90 }], 95) should return null", () => {
  const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 70 },
    { name: "Charlie", grade: 90 }
  ];

  expect(findStudentByGrade(students, 95)).to.be.null;
});

it("findStudentByGrade([{ name: 'Alice', grade: 85 }, { name: 'Bob', grade: 70 }, { name: 'Charlie', grade: 90 }], 70) should return { name: 'Alice', grade: 85 } if threshold is 70", () => {
  const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 70 },
    { name: "Charlie", grade: 90 }
  ];

  expect(findStudentByGrade(students, 70)).to.deep.equal({ name: "Alice", grade: 85 });
});

it("findStudentByGrade([{ name: 'Alice', grade: 85 }, { name: 'Bob', grade: 70 }, { name: 'Charlie', grade: 90 }], 60) should return { name: 'Alice', grade: 85 } if threshold is 60", () => {
  const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 70 },
    { name: "Charlie", grade: 90 }
  ];

  expect(findStudentByGrade(students, 60)).to.deep.equal({ name: "Alice", grade: 85 });
});

it("findStudentByGrade([{ name: 'Alice', grade: 85 }, { name: 'Bob', grade: 70 }, { name: 'Charlie', grade: 90 }], 75) should return { name: 'Alice', grade: 85 }", () => {
  const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 70 },
    { name: "Charlie", grade: 90 }
  ];

  expect(findStudentByGrade(students, 75)).to.deep.equal({ name: "Alice", grade: 85 });
});

it("findStudentByGrade([{ name: 'Alice', grade: 85 }, { name: 'Bob', grade: 70 }, { name: 'Charlie', grade: 90 }], 60) should return { name: 'Alice', grade: 85 }", () => {
  const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 70 },
    { name: "Charlie", grade: 90 }
  ];

  expect(findStudentByGrade(students, 60)).to.deep.equal({ name: "Alice", grade: 85 });
});

it("findStudentByGrade([{ name: 'Alice', grade: 85 }, { name: 'Bob', grade: 70 }, { name: 'Charlie', grade: 90 }], 100) should return null if threshold is greater than any student's grade", () => {
  const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 70 },
    { name: "Charlie", grade: 90 }
  ];

  expect(findStudentByGrade(students, 100)).to.be.null;
});

it("findStudentByGrade([], 80) should return null if array is empty", () => {
  const students = [];

  expect(findStudentByGrade(students, 80)).to.be.null;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
