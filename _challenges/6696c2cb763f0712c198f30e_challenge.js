// NAMEEN:
// NAMERU:Добавление дел с учетом приоритета

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `addTaskWithPriority`, которая принимает три аргумента:

* массив с текущим списком дел,
* новую задачу в виде строки,
* булево значение, указывающее, имеет ли дело высокий приоритет.

Если задача имеет высокий приоритет (true), она добавляется в начало массива. В противном случае задача добавляется в конец массива.

Если задача дублируется, то вернуть строку: `<task_name> - task duplicates the existing one`

Функция должна возвращать обновленный список дел.

Примеры запуска функции:
```javascript
addTaskWithPriority(["Buy milk", "Call mom"], "Go to the post office", false)
// ["Buy milk", "Call mom", "Go to the post office"]

addTaskWithPriority(["Finish report", "Prepare for meeting"], "Check emails", true)
// ["Check emails", "Finish report", "Prepare for meeting"]

addTaskWithPriority([], "Start a new project", true)
// ["Start a new project"]

addTaskWithPriority(["Do exercise"], "Prepare breakfast", false)
// ["Do exercise", "Prepare breakfast"]

addTaskWithPriority([], "Learn a new word", false)
// ["Learn a new word"]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addTaskWithPriority(tasks, newTask, isHighPriority) {
  if(tasks.includes(newTask)) return `${newTask} - task duplicates the existing one`

  if(isHighPriority) tasks.unshift(newTask)
  else tasks.push(newTask)

  return tasks;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function addTaskWithPriority', () => {
  expect(addTaskWithPriority).to.be.a('function');
});

it('addTaskWithPriority(["Buy milk", "Call mom"], "Go to the post office", false) should return ["Buy milk", "Call mom", "Go to the post office"]', () => {
  expect(addTaskWithPriority(["Buy milk", "Call mom"], "Go to the post office", false)).to.deep.equal(["Buy milk", "Call mom", "Go to the post office"]);
});

it('addTaskWithPriority(["Finish report", "Prepare for meeting"], "Check emails", true) should return ["Check emails", "Finish report", "Prepare for meeting"]', () => {
  expect(addTaskWithPriority(["Finish report", "Prepare for meeting"], "Check emails", true)).to.deep.equal(["Check emails", "Finish report", "Prepare for meeting"]);
});

it('addTaskWithPriority([], "Start a new project", true) should return ["Start a new project"]', () => {
  expect(addTaskWithPriority([], "Start a new project", true)).to.deep.equal(["Start a new project"]);
});

it('addTaskWithPriority(["Do exercise"], "Prepare breakfast", false) should return ["Do exercise", "Prepare breakfast"]', () => {
  expect(addTaskWithPriority(["Do exercise"], "Prepare breakfast", false)).to.deep.equal(["Do exercise", "Prepare breakfast"]);
});

it('addTaskWithPriority([], "Learn a new word", false) should return ["Learn a new word"]', () => {
  expect(addTaskWithPriority([], "Learn a new word", false)).to.deep.equal(["Learn a new word"]);
});

it('addTaskWithPriority(["Buy groceries", "Study JavaScript"], "Study JavaScript", true) should return "Study JavaScript - task duplicates the existing one"', () => {
  expect(addTaskWithPriority(["Buy groceries", "Study JavaScript"], "Study JavaScript", true)).to.eq("Study JavaScript - task duplicates the existing one");
});

it('addTaskWithPriority(["Meditate", "Drink water"], "Drink water", false) should return "Drink water - task duplicates the existing one"', () => {
  expect(addTaskWithPriority(["Meditate", "Drink water"], "Drink water", false)).to.equal('Drink water - task duplicates the existing one');
});

it('addTaskWithPriority(["Call family"], "Call family", true) should return "Call family - task duplicates the existing one"', () => {
  expect(addTaskWithPriority(["Call family"], "Call family", true)).to.equal('Call family - task duplicates the existing one');
});

it('addTaskWithPriority(["Read book"], "Write diary", true) should add "Write diary" to the beginning of the list', () => {
  expect(addTaskWithPriority(["Read book"], "Write diary", true)).to.deep.equal(["Write diary", "Read book"]);
});

it('addTaskWithPriority(["Yoga", "Code"], "Sleep", true) should add "Sleep" to the beginning of the list', () => {
  expect(addTaskWithPriority(["Yoga", "Code"], "Sleep", true)).to.deep.equal(["Sleep", "Yoga", "Code"]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
