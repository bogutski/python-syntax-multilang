// NAMEEN:
// NAMERU:Список важных дел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `mainTasks`, которая принимает три параметра:
* `tasks` - перечень строк с названиями всех задач, массив;
* `toDoFirst` - строка с названием первой интересующей задачи;
* `toDoLast` - строка с названием последней интересующей задачи.

Функция должна возвращать объект со свойствами `toDoFirst` и `toDoLast`, где:
* значением `toDoFirst` является строка `Before task_before`, где `task_before` - это название задачи, следующего за `toDoFirst` в массиве `tasks`;
* значением `toDoLast` является строка `After task_after`, где `task_after` - это название задачи, предшествующей `toDoLast` в массиве `tasks`.

Условия:
* `toDoLast` всегда следует за `toDoFirst` в массиве `tasks`;
* в массиве `tasks` могут быть только уникальные значения;
* в массиве `tasks` всегда есть хотя бы два элемента;
* строки могут включать пробелы.

Примеры запуска функции:
```javascript
mainTasks(["Getting up", "Working", "Eating", "Reading", "Sleeping"], "Getting up", "Reading");  // { "Getting up": "Before Working", "Reading": "After Eating" }
mainTasks(["Fist", "Second", "Third", "Fourth", "Fifth", "Sixth"], "Third", "Fourth");  // { "Third": "Before Fourth", "Fourth": "After Third" }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function mainTasks(tasks, toDoFirst, toDoLast) {
  const toDoFirstIndex = tasks.indexOf(toDoFirst);
  const toDoLastIndex = tasks.indexOf(toDoLast);
  const toDoFirstValue = `Before ${tasks[toDoFirstIndex + 1]}`;
  const toDoLastValue = `After ${tasks[toDoLastIndex - 1]}`;
  return {
    [toDoFirst]: toDoFirstValue,
    [toDoLast]: toDoLastValue,
  };
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function `mainTasks`', () => {
  expect(mainTasks).to.be.a('function');
});

it('mainTasks(["Getting up", "Working", "Eating", "Reading", "Sleeping"], "Getting up", "Reading");  // { "Getting up": "Before Working", Reading: "After Eating" }', () => {
  expect(mainTasks(["Getting up", "Working", "Eating", "Reading", "Sleeping"], "Getting up", "Reading")).to.deep.equal({ "Getting up": "Before Working", Reading: "After Eating" });
});

it('mainTasks(["Fist", "Second", "Third", "Fourth", "Fifth", "Sixth"], "Third", "Fourth");  // { "Third": "Before Fourth", "Fourth": "After Third" }', () => {
  expect(mainTasks(["Fist", "Second", "Third", "Fourth", "Fifth", "Sixth"], "Third", "Fourth")).to.deep.equal({ "Third": "Before Fourth", "Fourth": "After Third" });
});

it('mainTasks(["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"], "Three", "Eight");  // { "Three": "Before Four", "Eight": "After Seven" }', () => {
  expect(mainTasks(["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"], "Three", "Eight")).to.deep.equal({ "Three": "Before Four", "Eight": "After Seven" });
});

it('mainTasks(["Playing", "More playing"], "Playing", "More playing");  // { "Playing": "Before More playing", "More playing": "After Playing" }', () => {
  expect(mainTasks(["Playing", "More playing"], "Playing", "More playing")).to.deep.equal({ "Playing": "Before More playing", "More playing": "After Playing" });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
