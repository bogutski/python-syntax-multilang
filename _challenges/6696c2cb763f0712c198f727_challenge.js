// NAMEEN:
// NAMERU:Поиск студента по ID

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findStudentById`, которая принимает массив студентов и идентификатор студента в качестве аргументов и возвращает объект студента с указанным идентификатором.

Если студент с указанным идентификатором не найден, функция должна возвращать `null`.


Пример запуска функции:
```javascript
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

console.log(findStudentById(students, 2));
// Вывод: { id: 2, name: "Bob" }

console.log(findStudentById(students, 4));
// Вывод: null
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findStudentById(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findStudentById(students, id) {
  const result = students.find(obj => obj.id === id)
  return result === undefined ? null : result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findStudentById', () => {
  expect(findStudentById).to.be.a('function');
});

it("Function findStudentById should include find method", () => {
  const result = findStudentById.toString();
  expect(result).to.include('.find(');
});

it("findStudentById([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]) should return { id: 2, name: 'Bob' }", () => {
  const students = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  expect(findStudentById(students, 2)).to.deep.equal({ id: 2, name: 'Bob' });
});

it("findStudentById([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]) should return null if student id not found", () => {
  const students = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  expect(findStudentById(students, 4)).to.be.null;
});

it("findStudentById([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]) should return { id: 1, name: 'Alice' } if id is 1", () => {
  const students = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  expect(findStudentById(students, 1)).to.deep.equal({ id: 1, name: 'Alice' });
});

it("findStudentById([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]) should return { id: 3, name: 'Charlie' } if id is 3", () => {
  const students = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  expect(findStudentById(students, 3)).to.deep.equal({ id: 3, name: 'Charlie' });
});

it("findStudentById([]) should return null if array is empty", () => {
  const students = [];

  expect(findStudentById(students, 1)).to.be.null;
});

it("findStudentById([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]) should return null if id is negative", () => {
  const students = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  expect(findStudentById(students, -1)).to.be.null;
});

it("findStudentById([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]) should return null if id is not a number", () => {
  const students = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  expect(findStudentById(students, "id")).to.be.null;
});

it("findStudentById([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]) should return null if id is not found in a mixed array", () => {
  const students = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' },
    { id: 3, name: 'Charlie' }
  ];

  expect(findStudentById(students, 6)).to.be.null;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
