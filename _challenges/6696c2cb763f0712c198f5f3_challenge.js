// NAMEEN:
// NAMERU:Сортировка массива студентов по именам

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sortStudentsByName`, которая принимает массив объектов.

Каждый объект представляет студента со свойствами: `name` и `age`.

Функция должна возвращать новый массив, содержащий те же объекты, отсортированные по имени студента в алфавитном порядке.


Примеры запуска функции:
```javascript
const students = [
  { name: "John", age: 18 },
  { name: "Alice", age: 20 },
  { name: "Bob", age: 17 }
];

console.log(sortStudentsByName(students));
// Вывод: [{ name: "Alice", age: 20 }, { name: "Bob", age: 17 }, { name: "John", age: 18 }]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sortStudentsByName(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortStudentsByName(students) {
  return students.slice().sort((a, b) => a.name.localeCompare(b.name))
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sortStudentsByName', () => {
  expect(sortStudentsByName).to.be.a('function');
});

it('Function sortStudentsByName should include method sort()', () => {
  const res = sortStudentsByName.toString()
  expect(res).to.include('.sort(')
});

it('sortStudentsByName([{ name: "John", age: 18 }, { name: "Alice", age: 20 }, { name: "Bob", age: 17 }]) should return [{ name: "Alice", age: 20 }, { name: "Bob", age: 17 }, { name: "John", age: 18 }]', () => {
  const students = [
    { name: "John", age: 18 },
    { name: "Alice", age: 20 },
    { name: "Bob", age: 17 }
  ];
  expect(sortStudentsByName(students)).to.deep.equal([
    { name: "Alice", age: 20 },
    { name: "Bob", age: 17 },
    { name: "John", age: 18 }
  ]);
});

it('sortStudentsByName([]) should return []', () => {
  expect(sortStudentsByName([])).to.deep.equal([]);
});

it('sortStudentsByName([{ name: "Charlie" }]) should return [{ name: "Charlie" }]', () => {
  expect(sortStudentsByName([{ name: "Charlie" }])).to.deep.equal([{ name: "Charlie" }]);
});

it('sortStudentsByName([{ name: "Anna" }, { name: "anna" }]) should sort case-insensitively', () => {
  const students = [{ name: "Anna" }, { name: "anna" }];
  expect(sortStudentsByName(students)).to.deep.equal([{ name: "anna" }, { name: "Anna" }]);
});

it('sortStudentsByName([{ name: "Bob" }, { name: "bob" }]) should consider locale and sensitivity', () => {
  const students = [{ name: "Bob" }, { name: "bob" }];
  expect(sortStudentsByName(students)).to.deep.equal([{ name: "bob" }, { name: "Bob" }]);
});

it('sortStudentsByName([{ name: "Cory" }, { name: "bob" }, { name: "Alice" }]) should return sorted names regardless of case', () => {
  const students = [{ name: "Cory" }, { name: "bob" }, { name: "Alice" }];
  expect(sortStudentsByName(students)).to.deep.equal([{ name: "Alice" }, { name: "bob" }, { name: "Cory" }]);
});

it('sortStudentsByName([{ name: "Cory" }, { name: "Alice" }, { name: "Bob" }]) should return names sorted alphabetically', () => {
  const students = [{ name: "Cory" }, { name: "Alice" }, { name: "Bob" }];
  expect(sortStudentsByName(students)).to.deep.equal([{ name: "Alice" }, { name: "Bob" }, { name: "Cory" }]);
});

it('sortStudentsByName([{ name: "Dave" }, { name: "Eve" }, { name: "Frank" }]) should return names in alphabetical order', () => {
  const students = [{ name: "Dave" }, { name: "Eve" }, { name: "Frank" }];
  expect(sortStudentsByName(students)).to.deep.equal([{ name: "Dave" }, { name: "Eve" }, { name: "Frank" }]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
