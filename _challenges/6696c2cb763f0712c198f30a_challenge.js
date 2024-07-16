// NAMEEN:
// NAMERU:Добавление задач в список с проверкой уникальности

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `addUniqueTasks`, которая принимает два аргумента: массив текущих задач и массив новых задач для добавления.

Используя метод `push()`, функция должна добавить новые задачи в конец списка текущих задач, но только если эти задачи уникальны (т.е., их еще нет в списке текущих задач).

Функция должна вернуть обновленный массив задач.

Примеры запуска функции:
```javascript
addUniqueTasks(["Read a book", "Learn JavaScript"], ["Learn JavaScript", "Go for a walk"])
// ["Read a book", "Learn JavaScript", "Go for a walk"]

addUniqueTasks(["Go to the store", "Cook dinner"], ["Cook dinner", "Do exercise", "Go to the store"])
// ["Go to the store", "Cook dinner", "Do exercise"]

addUniqueTasks([], ["Read an article", "Drink water"]) // ["Read an article", "Drink water"]
addUniqueTasks(["Finish the project"], []) // ["Finish the project"]
addUniqueTasks([], []) // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addUniqueTasks(currentTasks, newTasks) {
  for (let task of newTasks){
    if (!currentTasks.includes(task)) {
      currentTasks.push(task);
    }
  }

  return currentTasks;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function addUniqueTasks', () => {
  expect(addUniqueTasks).to.be.a('function');
});

it('Adds unique tasks correctly', () => {
  expect(addUniqueTasks(["Study", "Eat"], ["Eat", "Sleep"])).to.deep.equal(["Study", "Eat", "Sleep"]);
});

it('Returns the original array if all new tasks are duplicates', () => {
  expect(addUniqueTasks(["Run", "Jump"], ["Run", "Jump"])).to.deep.equal(["Run", "Jump"]);
});

it('Correctly adds tasks to an empty array', () => {
  expect(addUniqueTasks([], ["Read", "Write"])).to.deep.equal(["Read", "Write"]);
});

it('Returns an empty array if no tasks are provided', () => {
  expect(addUniqueTasks([], [])).to.deep.equal([]);
});

it('Handles adding a large number of tasks efficiently', () => {
  const manyTasks = Array.from({ length: 100 }, (_, i) => `Task ${i}`);
  const newTasks = ["New task 1", "Task 99", "New task 2"];
  const result = addUniqueTasks(manyTasks, newTasks);
  expect(result.length).to.equal(102);
  expect(result).to.include.members(["New task 1", "New task 2"]);
});

it('Correctly processes when new tasks array contains duplicates', () => {
  expect(addUniqueTasks(["task1"], ["task2", "task2", "task3"])).to.deep.equal(["task1", "task2", "task3"]);
});

it('Works correctly with tasks having special characters', () => {
  expect(addUniqueTasks(["Task #1"], ["Task #2", "Task #3", "Task #1"])).to.deep.equal(["Task #1", "Task #2", "Task #3"]);
});

it('Preserves the order of tasks after adding new ones', () => {
  const originalTasks = ["Original task 1", "Original task 2"];
  const newTasks = ["New task 1", "Original task 2", "New task 2"];
  const updatedTasks = addUniqueTasks(originalTasks, newTasks);
  expect(updatedTasks[0]).to.equal("Original task 1");
  expect(updatedTasks[updatedTasks.length - 1]).to.equal("New task 2");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
