// NAMEEN:
// NAMERU:Расширение списка утренних дел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `expandMorningRoutines`, которая принимает массив с уже запланированными делами и добавляет в его начало задачи "Wake up" и "Meditate".

Функция должна возвращать новый обновленный массив утренних дел.

Пример запуска функции:
```javascript
expandMorningRoutines([]); // ["Wake up", "Meditate"]
expandMorningRoutines(["Brush teeth", "Have breakfast"]); // ["Wake up", "Meditate", "Brush teeth", "Have breakfast"]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function expandMorningRoutines(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function expandMorningRoutines(arr){
  arr.unshift('Wake up', 'Meditate')
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function expandMorningRoutines', () => {
  expect(expandMorningRoutines).to.be.a('function');
});

it("expandMorningRoutines(['Brush teeth', 'Have breakfast']) should return ['Wake up', 'Meditate', 'Brush teeth', 'Have breakfast']", () => {
  expect(expandMorningRoutines(["Brush teeth", "Have breakfast"])).to.deep.equal(["Wake up", "Meditate", "Brush teeth", "Have breakfast"]);
});

it("expandMorningRoutines([]) should return ['Wake up', 'Meditate']", () => {
  expect(expandMorningRoutines([])).to.deep.equal(["Wake up", "Meditate"]);
});

it("expandMorningRoutines(['Go jogging']) should start with 'Wake up'", () => {
  const result = expandMorningRoutines(["Go jogging"]);
  expect(result[0]).to.equal("Wake up");
});

it("expandMorningRoutines(['Read a book']) should have 'Meditate' as the second task", () => {
  const result = expandMorningRoutines(["Read a book"]);
  expect(result[1]).to.equal("Meditate");
});

it("expandMorningRoutines(['Plan the day']) should have a length of 3", () => {
  expect(expandMorningRoutines(["Plan the day"]).length).to.equal(3);
});

it("expandMorningRoutines(['Check emails']) should include 'Meditate'", () => {
  expect(expandMorningRoutines(["Check emails"])).to.include("Meditate");
});

it("expandMorningRoutines(['Have breakfast', 'Brush teeth']) should not include 'Go to sleep'", () => {
  expect(expandMorningRoutines(["Have breakfast", "Brush teeth"])).to.not.include("Go to sleep");
});

it("expandMorningRoutines(['Yoga']) should have 'Yoga' as the last task", () => {
  const result = expandMorningRoutines(["Yoga"]);
  expect(result[result.length - 1]).to.equal("Yoga");
});

it("expandMorningRoutines(['Write a journal']) should have 'Wake up' as the first and 'Write a journal' as the last tasks", () => {
  const result = expandMorningRoutines(["Write a journal"]);
  expect(result[0]).to.equal("Wake up");
  expect(result[result.length - 1]).to.equal("Write a journal");
});

it("expandMorningRoutines(['Study']) should return array with exactly 3 elements", () => {
  const result = expandMorningRoutines(["Study"]);
  expect(result.length).to.equal(3);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
