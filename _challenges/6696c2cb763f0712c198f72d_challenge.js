// NAMEEN:
// NAMERU:Поиск и удаление студента

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterStudentsByGradeRange`, которая принимает:
 * массив объектов студентов: `[{ id: 1, name: "Alice", grade: 85 }, { id: 2, name: "Bob", grade: 70 } ...]`
 * диапазон оценок в виде объекта: `{ min: минимальная оценка, max: максимальная оценка }`.

Функция должна удалить первого студента из массива, чья оценка попадает в указанный диапазон, и вернуть измененный массив.


Пример запуска функции:
```javascript
const students = [
  { id: 1, name: "Alice", grade: 85 },
  { id: 2, name: "Bob", grade: 70 },
  { id: 3, name: "Charlie", grade: 90 },
  { id: 4, name: "David", grade: 95 }
];

console.log(filterStudentsByGradeRange(students, { min: 80, max: 90 }));
// Вывод: [
//   { id: 2, name: 'Bob', grade: 70 },
//   { id: 3, name: 'Charlie', grade: 90 },
//   { id: 4, name: 'David', grade: 95 }
// ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterStudentsByGradeRange(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterStudentsByGradeRange(students, minMax) {
  const toDelete = students.find(({grade}) => grade >= minMax.min && grade <= minMax.max)
  if(toDelete) students.splice(toDelete.id - 1, 1)
  return students;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function filterStudentsByGradeRange', () => {
  expect(filterStudentsByGradeRange).to.be.a('function');
});

it("filterStudentsByGradeRange([{ id: 1, name: 'Alice', grade: 85 }, { id: 2, name: 'Bob', grade: 70 }, { id: 3, name: 'Charlie', grade: 90 }, { id: 4, name: 'David', grade: 95 }], { min: 80, max: 90 }) should remove the first student with grade in the range and return the modified array", () => {
  const students = [
    { id: 1, name: "Alice", grade: 85 },
    { id: 2, name: "Bob", grade: 70 },
    { id: 3, name: "Charlie", grade: 90 },
    { id: 4, name: "David", grade: 95 }
  ];

  expect(filterStudentsByGradeRange(students, { min: 80, max: 90 })).to.deep.equal([
    { id: 2, name: 'Bob', grade: 70 },
    { id: 3, name: 'Charlie', grade: 90 },
    { id: 4, name: 'David', grade: 95 }
  ]);
});

it("filterStudentsByGradeRange([{ id: 1, name: 'Alice', grade: 85 }, { id: 2, name: 'Bob', grade: 70 }, { id: 3, name: 'Charlie', grade: 90 }, { id: 4, name: 'David', grade: 95 }], { min: 70, max: 95 }) should return the original array if no students are within the grade range", () => {
  const students = [
    { id: 1, name: "Alice", grade: 85 },
    { id: 2, name: "Bob", grade: 70 },
    { id: 3, name: "Charlie", grade: 90 },
    { id: 4, name: "David", grade: 95 }
  ];

  expect(filterStudentsByGradeRange(students, { min: 70, max: 95 })).to.deep.equal(students);
});

it("filterStudentsByGradeRange([{ id: 1, name: 'Alice', grade: 85 }, { id: 2, name: 'Bob', grade: 70 }, { id: 3, name: 'Charlie', grade: 90 }, { id: 4, name: 'David', grade: 95 }], { min: 60, max: 70 }) should return the original array if no students are within the grade range", () => {
  const students = [
    { id: 1, name: "Alice", grade: 85 },
    { id: 2, name: "Bob", grade: 70 },
    { id: 3, name: "Charlie", grade: 90 },
    { id: 4, name: "David", grade: 95 }
  ];

  expect(filterStudentsByGradeRange(students, { min: 60, max: 70 })).to.deep.equal(students);
});

it("filterStudentsByGradeRange([], { min: 80, max: 90 }) should return an empty array if the students array is empty", () => {
  const students = [];

  expect(filterStudentsByGradeRange(students, { min: 80, max: 90 })).to.be.an('array').that.is.empty;
});

it("filterStudentsByGradeRange([{ id: 1, name: 'Alice', grade: 85 }, { id: 2, name: 'Bob', grade: 70 }, { id: 3, name: 'Charlie', grade: 90 }, { id: 4, name: 'David', grade: 95 }], { min: 100, max: 110 }) should return the original array if no students are within the grade range", () => {
  const students = [
    { id: 1, name: "Alice", grade: 85 },
    { id: 2, name: "Bob", grade: 70 },
    { id: 3, name: "Charlie", grade: 90 },
    { id: 4, name: "David", grade: 95 }
  ];

  expect(filterStudentsByGradeRange(students, { min: 100, max: 110 })).to.deep.equal(students);
});

it("filterStudentsByGradeRange([{ id: 1, name: 'Alice', grade: 85 }, { id: 2, name: 'Bob', grade: 70 }, { id: 3, name: 'Charlie', grade: 90 }, { id: 4, name: 'David', grade: 95 }], { min: 85, max: 90 }) should remove the first student with grade in the range and return the modified array", () => {
  const students = [
    { id: 1, name: "Alice", grade: 85 },
    { id: 2, name: "Bob", grade: 70 },
    { id: 3, name: "Charlie", grade: 90 },
    { id: 4, name: "David", grade: 95 }
  ];

  expect(filterStudentsByGradeRange(students, { min: 85, max: 90 })).to.deep.equal([
    { id: 2, name: 'Bob', grade: 70 },
    { id: 3, name: 'Charlie', grade: 90 },
    { id: 4, name: 'David', grade: 95 }
  ]);
});

it("filterStudentsByGradeRange([{ id: 1, name: 'Alice', grade: 85 }, { id: 2, name: 'Bob', grade: 70 }, { id: 3, name: 'Charlie', grade: 90 }, { id: 4, name: 'David', grade: 95 }], { min: 0, max: 100 }) should remove the first student with grade in the range and return the modified array", () => {
  const students = [
    { id: 1, name: "Alice", grade: 85 },
    { id: 2, name: "Bob", grade: 70 },
    { id: 3, name: "Charlie", grade: 90 },
    { id: 4, name: "David", grade: 95 }
  ];

  expect(filterStudentsByGradeRange(students, { min: 0, max: 100 })).to.deep.equal([
    { id: 2, name: 'Bob', grade: 70 },
    { id: 3, name: 'Charlie', grade: 90 },
    { id: 4, name: 'David', grade: 95 }
  ]);
});

it("filterStudentsByGradeRange([{ id: 1, name: 'Alice', grade: 85 }, { id: 2, name: 'Bob', grade: 70 }, { id: 3, name: 'Charlie', grade: 90 }, { id: 4, name: 'David', grade: 95 }], { min: 95, max: 100 }) should remove the last student with grade in the range and return the modified array", () => {
  const students = [
    { id: 1, name: "Alice", grade: 85 },
    { id: 2, name: "Bob", grade: 70 },
    { id: 3, name: "Charlie", grade: 90 },
    { id: 4, name: "David", grade: 95 }
  ];

  expect(filterStudentsByGradeRange(students, { min: 95, max: 100 })).to.deep.equal([
    { id: 1, name: "Alice", grade: 85 },
    { id: 2, name: 'Bob', grade: 70 },
    { id: 3, name: 'Charlie', grade: 90 }
  ]);
});

it("filterStudentsByGradeRange([{ id: 1, name: 'Alice', grade: 85 }, { id: 2, name: 'Bob', grade: 70 }, { id: 3, name: 'Charlie', grade: 90 }, { id: 4, name: 'David', grade: 95 }], { min: 91, max: 94 }) should return the original array if no students are within the grade range", () => {
  const students = [
    { id: 1, name: "Alice", grade: 85 },
    { id: 2, name: "Bob", grade: 70 },
    { id: 3, name: "Charlie", grade: 90 },
    { id: 4, name: "David", grade: 95 }
  ];

  expect(filterStudentsByGradeRange(students, { min: 91, max: 94 })).to.deep.equal(students);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
