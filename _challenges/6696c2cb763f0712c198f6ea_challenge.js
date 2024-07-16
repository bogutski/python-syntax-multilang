// NAMEEN:
// NAMERU:Фильтрация студентов по среднему баллу

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterHighAchievers` которая принимает массив объектов, представляющих студентов, и пороговое значение `threshold` для среднего балла.

Функция должна возвращать новый массив, содержащий только тех студентов, чей средний балл выше или равен заданному порогу.


Примеры запуска функции:
```javascript
const students = [
  { name: "Alice", averageScore: 88 },
  { name: "Bob", averageScore: 72 },
  { name: "Clara", averageScore: 91 },
  { name: "David", averageScore: 85 }
];

console.log(filterHighAchievers(students, 85));
// [
//   { name: 'Alice', averageScore: 88 },
//   { name: 'Clara', averageScore: 91 },
//   { name: 'David', averageScore: 85 }
// ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterHighAchievers(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterHighAchievers(array, threshold) {
  return array.filter(({averageScore}) => averageScore >= threshold);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function filterHighAchievers', () => {
  expect(filterHighAchievers).to.be.a('function');
});

it("Function filterHighAchievers should include filter method", () => {
  const result = filterHighAchievers.toString();
  expect(result).to.include('.filter(');
});

it("filterHighAchievers should return students with scores above or equal to 85", () => {
  const students = [
    { name: "Alice", averageScore: 88 },
    { name: "Bob", averageScore: 72 },
    { name: "Clara", averageScore: 91 },
    { name: "David", averageScore: 85 }
  ];
  expect(filterHighAchievers(students, 85)).to.deep.equal([
    { name: "Alice", averageScore: 88 },
    { name: "Clara", averageScore: 91 },
    { name: "David", averageScore: 85 }
  ]);
});

it("filterHighAchievers should return an empty array if no students meet the threshold", () => {
  const students = [
    { name: "Alice", averageScore: 84 },
    { name: "Bob", averageScore: 72 }
  ];
  expect(filterHighAchievers(students, 85)).to.deep.equal([]);
});

it("filterHighAchievers should handle a single-element array", () => {
  const students = [{ name: "Clara", averageScore: 91 }];
  expect(filterHighAchievers(students, 85)).to.deep.equal([{ name: "Clara", averageScore: 91 }]);
});

it("filterHighAchievers should handle an array with all students above the threshold", () => {
  const students = [
    { name: "Alice", averageScore: 88 },
    { name: "Clara", averageScore: 91 },
    { name: "David", averageScore: 86 }
  ];
  expect(filterHighAchievers(students, 85)).to.deep.equal([
    { name: "Alice", averageScore: 88 },
    { name: "Clara", averageScore: 91 },
    { name: "David", averageScore: 86 }
  ]);
});

it("filterHighAchievers should handle an array with students having the exact threshold score", () => {
  const students = [
    { name: "David", averageScore: 85 }
  ];
  expect(filterHighAchievers(students, 85)).to.deep.equal([{ name: "David", averageScore: 85 }]);
});

it("filterHighAchievers should return an empty array when no data is available", () => {
  expect(filterHighAchievers([], 85)).to.deep.equal([]);
});

it("filterHighAchievers should return an empty array when threshold is not a number", () => {
  const students = [
    { name: "Alice", averageScore: 88 },
    { name: "Clara", averageScore: 91 }
  ];
  expect(filterHighAchievers(students, "eighty-five")).to.deep.equal([]);
});

it("filterHighAchievers should process large datasets efficiently", () => {
  const students = Array(1000).fill({ name: "Test", averageScore: 85 });
  expect(filterHighAchievers(students, 85).length).to.equal(1000);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
