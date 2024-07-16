// NAMEEN:
// NAMERU:Добавление утренних и вечерних задач

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `addMorningEveningTasks`, которая принимает три аргумента: массив существующих задач, строку с утренней задачей и строку с вечерней задачей.

Второй и третий аргументы не всегда будут передаваться в функцию.

Если какого-то из аргументов нет, добавьте следующую строку: 'Empty slot'.

Функция должна добавить утреннюю задачу в начало массива задач и вечернюю задачу в его конец.

Возвращаемое значение — обновленный массив задач.

Пример запуска функции:
```javascript
addMorningEveningTasks(['Check email', 'Lunch'], 'Workout', 'Reading before sleep');
// ['Workout', 'Check email', 'Lunch', 'Reading before sleep']

addMorningEveningTasks(['Work'], 'Morning yoga', 'Evening relaxation');
// ['Morning yoga', 'Work', 'Evening relaxation']

addMorningEveningTasks(['Hiking']);
// ['Empty slot', 'Work', 'Empty slot']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function addMorningEveningTasks(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addMorningEveningTasks(arr, morning= 'Empty slot', evening = 'Empty slot'){
  arr.unshift(morning);
  arr.push(evening);
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it("Created function addMorningEveningTasks", () => {
  expect(addMorningEveningTasks).to.be.a('function');
});

it("addMorningEveningTasks(['Check emails'], 'Morning exercise', 'Read before bed') should return ['Morning exercise', 'Check emails', 'Read before bed']", () => {
  expect(addMorningEveningTasks(['Check emails'], 'Morning exercise', 'Read before bed')).to.deep.equal(['Morning exercise', 'Check emails', 'Read before bed']);
});

it("addMorningEveningTasks(['Work on project']) should return ['Empty slot', 'Work on project', 'Empty slot']", () => {
  expect(addMorningEveningTasks(['Work on project'])).to.deep.equal(['Empty slot', 'Work on project', 'Empty slot']);
});

it("addMorningEveningTasks(['Review day's work'], undefined, 'Plan next day') should return ['Empty slot', 'Review day's work', 'Plan next day']", () => {
  expect(addMorningEveningTasks(['Review day\'s work'], undefined, 'Plan next day')).to.deep.equal(['Empty slot', 'Review day\'s work', 'Plan next day']);
});

it("addMorningEveningTasks(['Attend meeting'], 'Prepare presentation') should return ['Prepare presentation', 'Attend meeting', 'Empty slot']", () => {
  expect(addMorningEveningTasks(['Attend meeting'], 'Prepare presentation')).to.deep.equal(['Prepare presentation', 'Attend meeting', 'Empty slot']);
});

it("addMorningEveningTasks([]) should return ['Empty slot', 'Empty slot']", () => {
  expect(addMorningEveningTasks([])).to.deep.equal(['Empty slot', 'Empty slot']);
});

it("addMorningEveningTasks(['Midday task'], 123, true) should return [123, 'Midday task', true]", () => {
  expect(addMorningEveningTasks(['Midday task'], 123, true)).to.deep.equal([123, 'Midday task', true]);
});

it("addMorningEveningTasks(['Lunch break'], undefined, 'Watch TV') should return ['Empty slot', 'Lunch break', 'Watch TV']", () => {
  expect(addMorningEveningTasks(['Lunch break'], undefined, 'Watch TV')).to.deep.equal(['Empty slot', 'Lunch break', 'Watch TV']);
});

it("addMorningEveningTasks(['Afternoon work'], '', '') should return ['', 'Afternoon work', '']", () => {
  expect(addMorningEveningTasks(['Afternoon work'], '', '')).to.deep.equal(['', 'Afternoon work', '']);
});

it("addMorningEveningTasks(['Evening jog'], undefined, undefined) should return ['Empty slot', 'Evening jog', 'Empty slot']", () => {
  expect(addMorningEveningTasks(['Evening jog'], undefined, undefined)).to.deep.equal(['Empty slot', 'Evening jog', 'Empty slot']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
