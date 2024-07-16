// NAMEEN:
// NAMERU:Найдите среднюю оценку

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `averageGrade`, которая принимает три числа и возвращает среднюю оценку.

Результат округлите до ближайшего целого числа, используя функцию `Math.round()`.

Примеры запуска функции:
```javascript
averageGrade(77, 21, 45); // 48
averageGrade(100, 100, 100); // 100
averageGrade(23, 45, 67); // 45
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function averageGrade(grade1, grade2, grade3) {
  let average = (grade1 + grade2 + grade3) / 3;
  return Math.round(average);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function averageGrade', () => {
  expect(averageGrade).to.be.a('function');
});

it('averageGrade(25, 25, 25) should contain Math.round', () => {
  expect(averageGrade.toString().indexOf('Math.round')).to.not.be.equal(-1);
});

it('averageGrade(77, 21, 45) should return 48', () => {
  expect(averageGrade(77, 21, 45)).to.be.equal(48);
});

it('averageGrade(100, 100, 100) should return 100', () => {
  expect(averageGrade(100, 100, 100)).to.be.equal(100);
});

it('averageGrade(23, 45, 67) should return 45', () => {
  expect(averageGrade(23, 45, 67)).to.be.equal(45);
});

it('averageGrade(216, 142, 178) should return 179', () => {
  expect(averageGrade(216, 142, 178)).to.be.equal(179);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
