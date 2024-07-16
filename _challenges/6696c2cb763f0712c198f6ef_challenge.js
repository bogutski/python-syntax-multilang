// NAMEEN:
// NAMERU:Фильтрация задач по срокам и статусу

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterTasks`, которая фильтрует массив задач на основании их статуса и срока выполнения.

Функция принимает четыре параметра:
* `tasks` - массив объектов,
* `statuses` - массив строк,
* `startDate` - строка вида: "2024-06-01",
* `endDate` - строка вида: "2024-06-30".

Задачи должны соответствовать любому из статусов в массиве `statuses` и иметь дату выполнения в заданном диапазоне от `startDate` до `endDate`.


Примеры запуска функции:
```javascript
const tasks = [
  { name: "Task 1", status: "Completed", dueDate: "2024-06-01" },
  { name: "Task 2", status: "In Progress", dueDate: "2024-06-15" },
  { name: "Task 3", status: "Not Started", dueDate: "2024-07-01" }
];

console.log(filterTasks(tasks, ["Completed", "In Progress"], "2024-06-01", "2024-06-30"));
// [{ name: "Task 1", status: "Completed", dueDate: "2024-06-01" }, { name: "Task 2", status: "In Progress", dueDate: "2024-06-15" }]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterTasks(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterTasks(tasks, statuses, startDate, endDate) {
  return tasks.filter(({status, dueDate}) => dueDate >= startDate && dueDate <= endDate && statuses.includes(status));
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function filterTasks', () => {
  expect(filterTasks).to.be.a('function');
});

it("Function filterTasks should include filter method", () => {
  const result = filterTasks.toString();
  expect(result).to.include('.filter(');
});

it("filterTasks([{name: 'Task 1', status: 'Completed', dueDate: '2024-06-01'}], ['Completed'], '2024-06-01', '2024-06-30') should return [{name: 'Task 1', status: 'Completed', dueDate: '2024-06-01'}]", () => {
  const tasks = [
    { name: "Task 1", status: "Completed", dueDate: "2024-06-01" }
  ];
  expect(filterTasks(tasks, ["Completed"], "2024-06-01", "2024-06-30")).to.deep.equal([
    { name: "Task 1", status: "Completed", dueDate: "2024-06-01" }
  ]);
});

it("filterTasks([{name: 'Task 2', status: 'In Progress', dueDate: '2024-06-15'}], ['Completed'], '2024-06-01', '2024-06-30') should return [] because the status does not match", () => {
  const tasks = [
    { name: "Task 2", status: "In Progress", dueDate: "2024-06-15" }
  ];
  expect(filterTasks(tasks, ["Completed"], "2024-06-01", "2024-06-30")).to.deep.equal([]);
});

it("filterTasks([{name: 'Task 3', status: 'Not Started', dueDate: '2024-07-01'}], ['Not Started'], '2024-06-01', '2024-06-30') should return [] because the due date is out of range", () => {
  const tasks = [
    { name: "Task 3", status: "Not Started", dueDate: "2024-07-01" }
  ];
  expect(filterTasks(tasks, ["Not Started"], "2024-06-01", "2024-06-30")).to.deep.equal([]);
});

it("filterTasks([], ['Completed'], '2024-06-01', '2024-06-30') should return [] when there are no tasks", () => {
  expect(filterTasks([], ["Completed"], "2024-06-01", "2024-06-30")).to.deep.equal([]);
});

it("filterTasks([{name: 'Task 1', status: 'Completed', dueDate: '2024-06-01'}], ['Completed'], '2024-06-01', '2024-06-01') should return [{name: 'Task 1', status: 'Completed', dueDate: '2024-06-01'}] as the due date matches exactly the start date", () => {
  const tasks = [
    { name: "Task 1", status: "Completed", dueDate: "2024-06-01" }
  ];
  expect(filterTasks(tasks, ["Completed"], "2024-06-01", "2024-06-01")).to.deep.equal([
    { name: "Task 1", status: "Completed", dueDate: "2024-06-01" }
  ]);
});

it("filterTasks([{name: 'Task 4', status: 'In Progress', dueDate: '2024-06-30'}], ['In Progress'], '2024-06-01', '2024-06-30') should return [{name: 'Task 4', status: 'In Progress', dueDate: '2024-06-30'}] as the due date matches exactly the end date", () => {
  const tasks = [
    { name: "Task 4", status: "In Progress", dueDate: "2024-06-30" }
  ];
  expect(filterTasks(tasks, ["In Progress"], "2024-06-01", "2024-06-30")).to.deep.equal([
    { name: "Task 4", status: "In Progress", dueDate: "2024-06-30" }
  ]);
});

it("filterTasks([{name: 'Task 1', status: 'Completed', dueDate: '2024-06-01'}, {name: 'Task 2', status: 'Completed', dueDate: '2024-06-15'}], ['Completed'], '2024-06-01', '2024-06-30') should return all tasks within date range and matching status", () => {
  const tasks = [
    { name: "Task 1", status: "Completed", dueDate: "2024-06-01" },
    { name: "Task 2", status: "Completed", dueDate: "2024-06-15" }
  ];
  expect(filterTasks(tasks, ["Completed"], "2024-06-01", "2024-06-30")).to.deep.equal([
    { name: "Task 1", status: "Completed", dueDate: "2024-06-01" },
    { name: "Task 2", status: "Completed", dueDate: "2024-06-15" }
  ]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
