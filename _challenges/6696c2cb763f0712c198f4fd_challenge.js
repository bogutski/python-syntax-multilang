// NAMEEN:
// NAMERU:Обновление объекта в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `updateTaskStatus`, которая принимает три аргумента: массив объектов `tasks`, индекс `index` задачи в массиве и новый статус `newStatus` задачи.

Каждый объект в массиве tasks содержит два свойства: `name` (имя задачи) и `status` (статус задачи).

Функция должна обновить статус задачи по указанному индексу на `newStatus` с использованием метода `with()` и вернуть новый массив задач без изменения исходного.

Если индекс находится за пределами диапазона массива, функция должна вернуть переданный массив без изменений.


Пример запуска функции:
```javascript
const tasks = [
  { name: "Task 1", status: "Incomplete" },
  { name: "Task 2", status: "Incomplete" },
  { name: "Task 3", status: "Complete" }
];

const updatedTasks = updateTaskStatus(tasks, 1, "Complete");
console.log(updatedTasks);
// Вывод: [
//   { name: "Task 1", status: "Incomplete" },
//   { name: "Task 2", status: "Complete" },
//   { name: "Task 3", status: "Complete" }
// ]
console.log(tasks);
// Вывод: [
//   { name: "Task 1", status: "Incomplete" },
//   { name: "Task 2", status: "Incomplete" },
//   { name: "Task 3", status: "Complete" }
// ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function updateTaskStatus(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function updateTaskStatus(arr, i, el) {
  if(Math.abs(i) > arr.length) return arr

  const updatedObj = {...arr[i], status: el}
  return arr.with(i, updatedObj);
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.with = function(index, value){
  const newArray = this.slice();
  newArray.splice(index, 1, value);
  return newArray;
}

it('Created function updateTaskStatus', () => {
  expect(updateTaskStatus).to.be.a('function');
});

it('Function updateTaskStatus should include method with()', () => {
  const res = updateTaskStatus.toString()
  expect(res).to.include('.with(')
});

it("updateTaskStatus(tasks, 1, 'Complete') should correctly update the status of task at index 1", () => {
  const tasks = [
    { name: "Task 1", status: "Incomplete" },
    { name: "Task 2", status: "Incomplete" },
    { name: "Task 3", status: "Complete" }
  ];
  const updatedTasks = updateTaskStatus(tasks, 1, "Complete");
  expect(updatedTasks[1].status).to.equal("Complete");
});

it("updateTaskStatus should not modify the original tasks array", () => {
  const tasks = [
    { name: "Task 1", status: "Incomplete" },
    { name: "Task 2", status: "Incomplete" },
    { name: "Task 3", status: "Complete" }
  ];
  updateTaskStatus(tasks, 1, "Complete");
  expect(tasks[1].status).to.equal("Incomplete");
});

it("updateTaskStatus should return the original array if the index is out of bounds", () => {
  const tasks = [
    { name: "Task 1", status: "Incomplete" }
  ];
  const updatedTasks = updateTaskStatus(tasks, 2, "Complete");
  expect(updatedTasks).to.deep.equal(tasks);
});

it("updateTaskStatus should correctly handle negative indices", () => {
  const tasks = [
    { name: "Task 1", status: "Incomplete" },
    { name: "Task 2", status: "Incomplete" },
    { name: "Task 3", status: "Complete" }
  ];
  const updatedTasks = updateTaskStatus(tasks, -2, "Complete");
  expect(updatedTasks[1].status).to.equal("Complete");
});

it("updateTaskStatus should update the task even if the new status is the same as the current status", () => {
  const tasks = [
    { name: "Task 1", status: "Incomplete" },
    { name: "Task 2", status: "Complete" }
  ];
  const updatedTasks = updateTaskStatus(tasks, 1, "Complete");
  expect(updatedTasks[1].status).to.equal("Complete");
});

it("updateTaskStatus should not change the array if index is invalid", () => {
  const tasks = [
    { name: "Task 1", status: "Incomplete" },
    { name: "Task 2", status: "Incomplete" }
  ];
  const updatedTasks = updateTaskStatus(tasks, 5, "Complete");
  expect(updatedTasks).to.deep.equal(tasks);
});

it("updateTaskStatus should correctly update the first task's status when index is 0", () => {
  const tasks = [
    { name: "Task 1", status: "Incomplete" },
    { name: "Task 2", status: "Complete" }
  ];
  const updatedTasks = updateTaskStatus(tasks, 0, "Complete");
  expect(updatedTasks[0].status).to.equal("Complete");
});

it("updateTaskStatus should return a new array instance", () => {
  const tasks = [
    { name: "Task 1", status: "Incomplete" },
    { name: "Task 2", status: "Incomplete" }
  ];
  const updatedTasks = updateTaskStatus(tasks, 1, "Complete");
  expect(updatedTasks).to.not.equal(tasks);
  expect(updatedTasks).to.be.an.instanceof(Array);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
