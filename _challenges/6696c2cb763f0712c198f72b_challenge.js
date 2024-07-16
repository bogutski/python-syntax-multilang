// NAMEEN:
// NAMERU:Поиск студента с максимальной оценкой

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findStudentWithMaxGrade`, которая принимает массив студентов в качестве аргумента и возвращает объект студента с максимальной оценкой.

Если несколько студентов имеют одинаковую максимальную оценку, вернуть первого встретившегося из них.

Если массив пустой, вернуть - `null`.


Пример запуска функции:
```javascript
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 70 },
  { name: "Charlie", grade: 90 },
  { name: "David", grade: 90 }
];

console.log(findStudentWithMaxGrade(students));
// Вывод: { name: "Charlie", grade: 90 }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findStudentWithMaxGrade(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findStudentWithMaxGrade(students) {
  if(!students.length) return null
  const grades = students.map(({grade}) => grade)
  const maxGrade = Math.max(...grades)

  return students.find(({grade}) => grade === maxGrade);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findStudentWithMaxGrade', () => {
  expect(findStudentWithMaxGrade).to.be.a('function');
});

it("findStudentWithMaxGrade([{ name: 'Alice', grade: 85 }, { name: 'Bob', grade: 70 }, { name: 'Charlie', grade: 90 }]) should return { name: 'Charlie', grade: 90 }", () => {
  const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 70 },
    { name: "Charlie", grade: 90 }
  ];

  expect(findStudentWithMaxGrade(students)).to.deep.equal({ name: "Charlie", grade: 90 });
});

it("findStudentWithMaxGrade([{ name: 'Alice', grade: 85 }, { name: 'Bob', grade: 70 }, { name: 'Charlie', grade: 90 }, { name: 'David', grade: 90 }]) should return { name: 'Charlie', grade: 90 } if there are multiple students with the same maximum grade", () => {
  const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 70 },
    { name: "Charlie", grade: 90 },
    { name: "David", grade: 90 }
  ];

  expect(findStudentWithMaxGrade(students)).to.deep.equal({ name: "Charlie", grade: 90 });
});

it("findStudentWithMaxGrade([{ name: 'Alice', grade: 85 }, { name: 'Bob', grade: 70 }]) should return { name: 'Alice', grade: 85 }", () => {
  const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 70 }
  ];

  expect(findStudentWithMaxGrade(students)).to.deep.equal({ name: "Alice", grade: 85 });
});

it("findStudentWithMaxGrade([]) should return null if array is empty", () => {
  const students = [];

  expect(findStudentWithMaxGrade(students)).to.be.null;
});

it("findStudentWithMaxGrade([{ name: 'Alice', grade: 85 }, { name: 'Bob', grade: 70 }, { name: 'Charlie', grade: 90 }, { name: 'David', grade: 90 }, { name: 'Eve', grade: 80 }]) should return { name: 'Charlie', grade: 90 }", () => {
  const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 70 },
    { name: "Charlie", grade: 90 },
    { name: "David", grade: 90 },
    { name: "Eve", grade: 80 }
  ];

  expect(findStudentWithMaxGrade(students)).to.deep.equal({ name: "Charlie", grade: 90 });
});

it("findStudentWithMaxGrade([{ name: 'Alice', grade: 85 }, { name: 'Bob', grade: 85 }, { name: 'Charlie', grade: 85 }]) should return { name: 'Alice', grade: 85 } if there are multiple students with the same maximum grade", () => {
  const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 85 }
  ];

  expect(findStudentWithMaxGrade(students)).to.deep.equal({ name: "Alice", grade: 85 });
});

it("findStudentWithMaxGrade([{ name: 'Alice', grade: 90 }]) should return { name: 'Alice', grade: 90 } if there is only one student", () => {
  const students = [
    { name: "Alice", grade: 90 }
  ];

  expect(findStudentWithMaxGrade(students)).to.deep.equal({ name: "Alice", grade: 90 });
});

it("findStudentWithMaxGrade([{ name: 'Bob', grade: 70 }, { name: 'Charlie', grade: 90 }, { name: 'David', grade: 80 }]) should return { name: 'Charlie', grade: 90 } if there is a tie but Charlie appears first", () => {
  const students = [
    { name: "Bob", grade: 70 },
    { name: "Charlie", grade: 90 },
    { name: "David", grade: 80 }
  ];

  expect(findStudentWithMaxGrade(students)).to.deep.equal({ name: "Charlie", grade: 90 });
});

it("findStudentWithMaxGrade([{ name: 'Alice', grade: 85 }, { name: 'Bob', grade: 70 }, { name: 'Charlie', grade: 90 }, { name: 'David', grade: 85 }, { name: 'Eve', grade: 80 }]) should return { name: 'Charlie', grade: 90 } if there is a tie and Charlie appears after David", () => {
  const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 70 },
    { name: "Charlie", grade: 90 },
    { name: "David", grade: 85 },
    { name: "Eve", grade: 80 }
  ];

  expect(findStudentWithMaxGrade(students)).to.deep.equal({ name: "Charlie", grade: 90 });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
