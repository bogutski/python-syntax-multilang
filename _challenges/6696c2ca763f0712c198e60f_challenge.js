// NAMEEN:
// NAMERU:Лучший студент

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `bestStudent`, которая принимает четыре объекта.

Первые два объекта: `student1` и `student2`, включают имена студентов

* `{ firstName: 'John', lastName: 'Smith' }`
* `{ firstName: 'Mike', lastName: 'Williams' }`

Вторые два объекта: `scoreOfStudent1` и `scoreOfStudent2`, включают заработанные баллы студентов:

* `{ score1: 89, score2: 44 }`
* `{ score1: 75, score2: 77 }`

Функция должна вернуть строку с полным именем студента, который, по сумме своих баллов, набрал большее количество.
* `Student Mike Williams has the score of 152`

Если количество баллов одинаковое, вернуть следующую строку:
* `Both students have the same score of 100`, где 100 - сумма баллов одного из студентов

Пример запуска функции:
```javascript
bestStudent(
  { firstName: "John", lastName: "Smith" },
  { firstName: "Mike", lastName: "Williams" },
  { score1: 25, score2: 35 },
  { score1: 40, score2: 30 }
);  // Student Mike Williams has the score of 70
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function bestStudent(student1, student2, scoreOfStudent1, scoreOfStudent2) {
  // student1 { firstName: 'John', lastName: 'Smith'},
  // student2 { firstName: 'Mike', lastName: 'Williams' },
  // scoreOfStudent1 { score1: 89, score2: 44 },
  // scoreOfStudent2 { score1: 75, score2: 77 }
  const st1 = scoreOfStudent1.score1 + scoreOfStudent1.score2;
  const st2 = scoreOfStudent2.score1 + scoreOfStudent2.score2;
  if (st1 > st2)
    return `Student ${student1.firstName} ${student1.lastName} with the score of ${st1}`;
  else if (st2 > st1)
    return `Student ${student2.firstName} ${student2.lastName} has the score of ${st2}`;
  else return `Both students have the same score of ${st1}`;
}

// SOLUTIONEND

// OPENTESTSSTART
it('Created function example', () => {
  expect(bestStudent).to.be.a('function');
});

it(
  'bestStudent({ firstName: "John", lastName: "Smith"}, { firstName: "Mike", lastName: "Williams" }, {score1: 89,' +
    ' score2: 44 }, { score1: 75, score2: 77 }} return Student Mike Williams has the score of 152',
  () => {
    expect(
      bestStudent(
        { firstName: 'John', lastName: 'Smith' },
        { firstName: 'Mike', lastName: 'Williams' },
        { score1: 89, score2: 44 },
        { score1: 75, score2: 77 },
      ),
    ).eql('Student Mike Williams has the score of 152');
  },
);

it(
  'bestStudent({ firstName: "Jessy", lastName: "Jones"}, { firstName: "Bob", lastName: "Brown" }, {score1: 34, score2: 66 },' +
    ' { score1: 56, score2: 71 }} return Student Mike Williams has the score of 152',
  () => {
    expect(
      bestStudent(
        { firstName: 'Jessy', lastName: 'Jones' },
        { firstName: 'Bob', lastName: 'Brown' },
        { score1: 34, score2: 66 },
        { score1: 56, score2: 71 },
      ),
    ).eql('Student Bob Brown has the score of 127');
  },
);

it(
  'bestStudent({ firstName: "Robert", lastName: "Davis"}, { firstName: "Thomas", lastName: "Garcia" }, {score1: 40,' +
    ' score2: 80 }, { score1: 60, score2: 60 }} return Both students have the same score of 120',
  () => {
    expect(
      bestStudent(
        { firstName: 'Robert', lastName: 'Davis' },
        { firstName: 'Thomas', lastName: 'Garcia' },
        { score1: 40, score2: 80 },
        { score1: 60, score2: 60 },
      ),
    ).eql('Both students have the same score of 120');
  },
);

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
