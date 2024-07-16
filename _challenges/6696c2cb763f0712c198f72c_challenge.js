// NAMEEN:
// NAMERU:Поиск студентов по именам

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findStudentsByName`, которая принимает:
 * массив объектов студентов: `[{ id: 1, name: "Alice", grade: 85 }, { id: 2, name: "Bob", grade: 70 }, ...]`;
 * массив имен: `['Jack', 'Mike'...]`.

Функция должна найти студентов по именам из второго массива и вернуть новый массив, содержащий объекты найденных студентов.
Новые объекты студентов должны содержать только: `id` и `grade` -> `[{ id: 1, grade: 85 }, { id: 2, grade: 70 }]`


Если студенты с указанными именами не найдены или массив имен пустой, функция должна вернуть строку: `No students found`.


Пример запуска функции:
```javascript
const students = [
  { id: 1, name: "Alice", grade: 85 },
  { id: 2, name: "Bob", grade: 70 },
  { id: 3, name: "Charlie", grade: 90 }
];

console.log(findStudentsByName(students, ['Alice', 'Bob']));
// Вывод: [{ id: 1, grade: 85 }, { id: 2, grade: 70 }]

console.log(findStudentsByName(students, ['Jack', 'Angel']));
// Вывод: 'No students found'

console.log(findStudentsByName(students, []));
// Вывод: 'No students found'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findStudentsByName(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findStudentsByName(students, names) {
  if(!names.length || !students.length) return 'No students found'
  const result = []

  names.forEach(el => {
    const search = students.find(({name}) => name === el)
    if(search !== undefined) result.push({id: search.id, grade: search.grade})
  })

  return result.length !== 0 ? result : 'No students found';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findStudentsByName', () => {
  expect(findStudentsByName).to.be.a('function');
});

it("findStudentsByName([{ id: 1, name: 'Alice', grade: 85 }, { id: 2, name: 'Bob', grade: 70 }, { id: 3, name: 'Charlie', grade: 90 }], ['Alice', 'Bob']) should return [{ id: 1, grade: 85 }, { id: 2, grade: 70 }]", () => {
  const students = [
    { id: 1, name: "Alice", grade: 85 },
    { id: 2, name: "Bob", grade: 70 },
    { id: 3, name: "Charlie", grade: 90 }
  ];

  expect(findStudentsByName(students, ['Alice', 'Bob'])).to.deep.equal([
    { id: 1, grade: 85 },
    { id: 2, grade: 70 }
  ]);
});

it("findStudentsByName([{ id: 1, name: 'Alice', grade: 85 }, { id: 2, name: 'Bob', grade: 70 }, { id: 3, name: 'Charlie', grade: 90 }], []) should return 'No students found' if the names array is empty", () => {
  const students = [
    { id: 1, name: "Alice", grade: 85 },
    { id: 2, name: "Bob", grade: 70 },
    { id: 3, name: "Charlie", grade: 90 }
  ];

  expect(findStudentsByName(students, [])).to.equal('No students found');
});

it("findStudentsByName([], ['Alice', 'Bob']) should return 'No students found' if the students array is empty", () => {
  const students = [];

  expect(findStudentsByName(students, ['Alice', 'Bob'])).to.equal('No students found');
});

it("findStudentsByName([{ id: 1, name: 'Alice', grade: 85 }, { id: 2, name: 'Bob', grade: 70 }, { id: 3, name: 'Charlie', grade: 90 }], ['Eve', 'David']) should return 'No students found' if no students with the specified names are found", () => {
  const students = [
    { id: 1, name: "Alice", grade: 85 },
    { id: 2, name: "Bob", grade: 70 },
    { id: 3, name: "Charlie", grade: 90 }
  ];

  expect(findStudentsByName(students, ['Eve', 'David'])).to.equal('No students found');
});

it("findStudentsByName([{ id: 1, name: 'Alice', grade: 85 }, { id: 2, name: 'Bob', grade: 70 }, { id: 3, name: 'Charlie', grade: 90 }], ['Charlie']) should return [{ id: 3, grade: 90 }]", () => {
  const students = [
    { id: 1, name: "Alice", grade: 85 },
    { id: 2, name: "Bob", grade: 70 },
    { id: 3, name: "Charlie", grade: 90 }
  ];

  expect(findStudentsByName(students, ['Charlie'])).to.deep.equal([{ id: 3, grade: 90 }]);
});

it("findStudentsByName([{ id: 1, name: 'Alice', grade: 85 }, { id: 2, name: 'Bob', grade: 70 }, { id: 3, name: 'Charlie', grade: 90 }], ['Eve']) should return 'No students found'", () => {
  const students = [
    { id: 1, name: "Alice", grade: 85 },
    { id: 2, name: "Bob", grade: 70 },
    { id: 3, name: "Charlie", grade: 90 }
  ];

  expect(findStudentsByName(students, ['Eve'])).to.equal('No students found');
});

it("findStudentsByName([{ id: 1, name: 'Alice', grade: 80 }, { id: 2, name: 'Bob', grade: 70 }, { id: 3, name: 'Charlie', grade: 90 }], []) should return 'No students found' if the names array is empty", () => {
  const students = [
    { id: 1, name: "Alice", grade: 80 },
    { id: 2, name: "Bob", grade: 70 },
    { id: 3, name: "Charlie", grade: 90 }
  ];

  expect(findStudentsByName(students, [])).to.equal('No students found');
});

it("findStudentsByName([], ['Alice', 'Bob']) should return 'No students found' if the students array is empty", () => {
  const students = [];

  expect(findStudentsByName(students, ['Alice', 'Bob'])).to.equal('No students found');
});

it("findStudentsByName([], []) should return 'No students found' if both students and names arrays are empty", () => {
  const students = [];

  expect(findStudentsByName(students, [])).to.equal('No students found');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
