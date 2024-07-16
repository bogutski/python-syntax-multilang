// NAMEEN:
// NAMERU:Планирование дня с приоритетами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `organizeTasks`, которая принимает массив дневных задач.

Каждая задача описывается объектом, содержащим два свойства: `task` (название задачи) и `priority` (приоритет задачи, который может быть 'high' или 'low').

Функция должна создать новый массив и расположить задачи (task) высокого приоритета в начале массива, а задачи низкого приоритета — в конце.

Верните новый массив задач.


Пример запуска функции:
```javascript
organizeTasks([
  { task: "Eat breakfast", priority: "low" },
  { task: "Walk the dog", priority: "low" },
  { task: "Work", priority: "high" },
  { task: "Meditate", priority: "high" }
]);
//  [ 'Meditate', 'Work', 'Eat breakfast', 'Walk the dog' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function organizeTasks(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function organizeTasks(arr){
  const result = [];

  for(let {task, priority} of arr){
    if(priority === 'high') result.unshift(task)
    else result.push(task)
  }

  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function organizeTasks', () => {
  expect(organizeTasks).to.be.a('function');
});

it("should place high priority tasks before low priority tasks", () => {
  const tasks = [
    { task: "Eat breakfast", priority: "low" },
    { task: "Meditate", priority: "high" },
    { task: "Work", priority: "high" },
    { task: "Walk the dog", priority: "low" }
  ];
  expect(organizeTasks(tasks)).to.deep.equal([ 'Work', 'Meditate', 'Eat breakfast', 'Walk the dog' ]);
});

it("should return all tasks if they are all high priority, in reverse order of input", () => {
  const tasks = [
    { task: "Exercise", priority: "high" },
    { task: "Read a book", priority: "high" }
  ];
  expect(organizeTasks(tasks)).to.deep.equal(["Read a book", "Exercise"]);
});

it("should return all tasks in the same order if they are all low priority", () => {
  const tasks = [
    { task: "Watch a series", priority: "low" },
    { task: "Play video games", priority: "low" }
  ];
  expect(organizeTasks(tasks)).to.deep.equal(["Watch a series", "Play video games"]);
});

it("should correctly handle an empty array", () => {
  expect(organizeTasks([])).to.deep.equal([]);
});

it("should handle tasks with undefined priority by treating them as low priority", () => {
  const tasks = [
    { task: "Morning jog", priority: "high" },
    { task: "Read news" } // Undefined priority
  ];
  expect(organizeTasks(tasks)).to.deep.equal(["Morning jog", "Read news"]);
});

it("should handle tasks with null priority by treating them as low priority", () => {
  const tasks = [
    { task: "Finish project documentation", priority: "high" },
    { task: "Water plants", priority: null }
  ];
  expect(organizeTasks(tasks)).to.deep.equal(["Finish project documentation", "Water plants"]);
});

it("should correctly place a single task with high priority", () => {
  const tasks = [{ task: "Check-in with mentor", priority: "high" }];
  expect(organizeTasks(tasks)).to.deep.equal(["Check-in with mentor"]);
});

it("should place high priority tasks first even when mixed with non-standard priority values", () => {
  const tasks = [
    { task: "Update project roadmap", priority: "urgent" }, // Treated as low due to unrecognized priority
    { task: "Coffee break", priority: "when possible" }, // Treated as low
    { task: "Client call", priority: "high" }
  ];
  expect(organizeTasks(tasks)).to.deep.equal(["Client call", "Update project roadmap", "Coffee break"]);
});

it("should not alter the relative order of low priority tasks", () => {
  const tasks = [
    { task: "Reply to emails", priority: "low" },
    { task: "Lunch break", priority: "low" }
  ];
  expect(organizeTasks(tasks)).to.deep.equal(["Reply to emails", "Lunch break"]);
});

it("should correctly handle a list containing a mix of high and low priority tasks", () => {
  const tasks = [
    { task: "Prepare meeting agenda", priority: "high" },
    { task: "Set up conference call", priority: "low" },
    { task: "Review project proposal", priority: "high" }
  ];
  expect(organizeTasks(tasks)).to.deep.equal(["Review project proposal", "Prepare meeting agenda", "Set up conference call"]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
