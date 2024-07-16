// NAMEEN:
// NAMERU:Планирование учебного графика

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `addCoursesToFront`, которая принимает два аргумента: массив с уже запланированными курсами и массив с новыми курсами для добавления.

Функция должна добавлять все новые курсы в начало списка существующих курсов.

Возвращаемое значение — обновленный массив курсов.

Пример запуска функции:
```javascript
addCoursesToFront(['Mathematics', 'English Literature'], ['Physics', 'Chemistry']);
// ['Physics', 'Chemistry', 'Mathematics', 'English Literature']

addCoursesToFront(['Literature', 'Biology'], ['Philosophy', 'Art History']);
// ['Philosophy', 'Art History', 'Literature', 'Biology']

addCoursesToFront([], ['Introduction to Programming']);
// ['Introduction to Programming']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function addCoursesToFront(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addCoursesToFront(arr, newItems){
  arr.unshift(...newItems);
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function addCoursesToFront', () => {
  expect(addCoursesToFront).to.be.a('function');
});

it("addCoursesToFront(['Mathematics', 'English Literature'], ['Physics', 'Chemistry']) should return ['Physics', 'Chemistry', 'Mathematics', 'English Literature']", () => {
  expect(addCoursesToFront(["Mathematics", "English Literature"], ["Physics", "Chemistry"])).to.deep.equal(["Physics", "Chemistry", "Mathematics", "English Literature"]);
});

it("addCoursesToFront([], ['Biology', 'History']) should return ['Biology', 'History']", () => {
  expect(addCoursesToFront([], ["Biology", "History"])).to.deep.equal(["Biology", "History"]);
});

it("addCoursesToFront(['Philosophy'], ['Psychology']) should start with 'Psychology'", () => {
  const result = addCoursesToFront(["Philosophy"], ["Psychology"]);
  expect(result[0]).to.equal("Psychology");
});

it("addCoursesToFront(['Programming'], ['Data Structures', 'Algorithms']) should return ['Data Structures', 'Algorithms', 'Programming']", () => {
  expect(addCoursesToFront(["Programming"], ["Data Structures", "Algorithms"])).to.deep.equal(["Data Structures", "Algorithms", "Programming"]);
});

it("addCoursesToFront(['Art'], ['Music', 'Painting']) should have a length of 3", () => {
  expect(addCoursesToFront(["Art"], ["Music", "Painting"]).length).to.equal(3);
});

it("addCoursesToFront(['Economics'], []) should return ['Economics'] without changes", () => {
  expect(addCoursesToFront(["Economics"], [])).to.deep.equal(["Economics"]);
});

it("addCoursesToFront(['Geometry'], ['Calculus']) should include 'Calculus'", () => {
  expect(addCoursesToFront(["Geometry"], ["Calculus"])).to.include("Calculus");
});

it("addCoursesToFront(['Marketing', 'Management'], ['Leadership']) should not include 'Cooking'", () => {
  expect(addCoursesToFront(["Marketing", "Management"], ["Leadership"])).to.not.include("Cooking");
});

it("addCoursesToFront(['World History'], ['Ancient Civilizations']) should have 'Ancient Civilizations' as the first task", () => {
  const result = addCoursesToFront(["World History"], ["Ancient Civilizations"]);
  expect(result[0]).to.equal("Ancient Civilizations");
});

it("addCoursesToFront(['Sociology'], ['Anthropology', 'Psychology']) should return array with exactly 3 elements", () => {
  const result = addCoursesToFront(["Sociology"], ["Anthropology", "Psychology"]);
  expect(result.length).to.equal(3);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
