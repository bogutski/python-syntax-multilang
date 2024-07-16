// NAMEEN:
// NAMERU:Распределение новых задач по дням недели с учетом приоритета

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `distributeTasks`, которая принимает два аргумента:
* объект, где ключами являются дни недели, а значениями массивы задач запланированных на эти дни,
* массив объектов новых задач.

Каждый объект новой задачи содержит свойства `task` (название задачи), `day` (день недели, на который запланирована задача) и `priority` (булево значение, где true означает высокий приоритет задачи).

Если задача высокого приоритета, она должна быть добавлена в начало списка задач на соответствующий день, в противном случае — в конец.

Функция должна возвращать обновленный объект расписания.

Примеры запуска функции:
```javascript
distributeTasks({"Monday": ["Check emails"], "Wednesday": ["Write report"]}, [
    {task: "Team meeting", day: "Monday", priority: true},
    {task: "Code review", day: "Wednesday", priority: false}
])
// {"Monday": ["Team meeting", "Check emails"], "Wednesday": ["Write report", "Code review"]}

distributeTasks({}, [
    {task: "Start new feature", day: "Tuesday", priority: false},
    {task: "Fix bugs", day: "Tuesday", priority: true}
])
// {"Tuesday": ["Fix bugs", "Start new feature"]}

distributeTasks({"Friday": ["Deploy app"]}, [{task: "Prepare deployment", day: "Friday", priority: true}])
// returns {"Friday": ["Prepare deployment", "Deploy app"]}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function distributeTasks(weeklyTasks, newTasks) {
  for(let {task, day, priority} of newTasks){
    if(!weeklyTasks[day]) weeklyTasks[day] = []

    if(priority) weeklyTasks[day].unshift(task)
    else weeklyTasks[day].push(task)
  }

  return weeklyTasks;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function distributeTasks', () => {
  expect(distributeTasks).to.be.a('function');
});

it('distributeTasks({"Monday": ["Check emails"], "Wednesday": ["Write report"]}, [{task: "Team meeting", day: "Monday", priority: true}, {task: "Code review", day: "Wednesday", priority: false}]) should return {"Monday": ["Team meeting", "Check emails"], "Wednesday": ["Write report", "Code review"]}', () => {
  expect(distributeTasks({
    "Monday": ["Check emails"],
    "Wednesday": ["Write report"]
  }, [
    {task: "Team meeting", day: "Monday", priority: true},
    {task: "Code review", day: "Wednesday", priority: false}
  ])).to.deep.equal({
    "Monday": ["Team meeting", "Check emails"],
    "Wednesday": ["Write report", "Code review"]
  });
});

it('distributeTasks({}, [{task: "Start new feature", day: "Tuesday", priority: false}, {task: "Fix bugs", day: "Tuesday", priority: true}]) should return {"Tuesday": ["Fix bugs", "Start new feature"]}', () => {
  expect(distributeTasks({}, [
    {task: "Start new feature", day: "Tuesday", priority: false},
    {task: "Fix bugs", day: "Tuesday", priority: true}
  ])).to.deep.equal({"Tuesday": ["Fix bugs", "Start new feature"]});
});

it('distributeTasks({"Friday": ["Deploy app"]}, [{task: "Prepare deployment", day: "Friday", priority: true}]) should return {"Friday": ["Prepare deployment", "Deploy app"]}', () => {
  expect(distributeTasks({
    "Friday": ["Deploy app"]
  }, [
    {task: "Prepare deployment", day: "Friday", priority: true}
  ])).to.deep.equal({"Friday": ["Prepare deployment", "Deploy app"]});
});

it('distributeTasks({"Thursday": ["Review metrics"]}, [{task: "Update dashboard", day: "Thursday", priority: false}, {task: "Sync with team", day: "Thursday", priority: true}]) should return {"Thursday": ["Sync with team", "Review metrics", "Update dashboard"]}', () => {
  expect(distributeTasks({
    "Thursday": ["Review metrics"]
  }, [
    {task: "Update dashboard", day: "Thursday", priority: false},
    {task: "Sync with team", day: "Thursday", priority: true}
  ])).to.deep.equal({"Thursday": ["Sync with team", "Review metrics", "Update dashboard"]});
});

it('distributeTasks({"Monday": ["Plan week"], "Wednesday": [], "Friday": ["Reflect on week"]}, [{task: "Design review", day: "Wednesday", priority: true}, {task: "Code cleanup", day: "Monday", priority: false}, {task: "Team outing", day: "Friday", priority: true}]) should return {"Monday": ["Plan week", "Code cleanup"], "Wednesday": ["Design review"], "Friday": ["Team outing", "Reflect on week"]}', () => {
  const schedule = {
    "Monday": ["Plan week"],
    "Wednesday": [],
    "Friday": ["Reflect on week"]
  };
  const tasks = [
    {task: "Design review", day: "Wednesday", priority: true},
    {task: "Code cleanup", day: "Monday", priority: false},
    {task: "Team outing", day: "Friday", priority: true}
  ];
  expect(distributeTasks(schedule, tasks)).to.deep.equal({
    "Monday": ["Plan week", "Code cleanup"],
    "Wednesday": ["Design review"],
    "Friday": ["Team outing", "Reflect on week"]
  });
});

it('distributeTasks({"Tuesday": []}, [{task: "Documentation", day: "Tuesday", priority: false}]) should return {"Tuesday": ["Documentation"]}', () => {
  expect(distributeTasks({
    "Tuesday": []
  }, [
    {task: "Documentation", day: "Tuesday", priority: false}
  ])).to.deep.equal({"Tuesday": ["Documentation"]});
});

it('distributeTasks({"Thursday": ["Check metrics"]}, []) should return {"Thursday": ["Check metrics"]}', () => {
  const originalSchedule = {"Thursday": ["Check metrics"]};
  expect(distributeTasks(originalSchedule, [])).to.deep.equal({"Thursday": ["Check metrics"]});
});

it('distributeTasks({}, [{task: "Client meeting", day: "Monday", priority: true}, {task: "Outreach emails", day: "Monday", priority: false}]) should return {"Monday": ["Client meeting", "Outreach emails"]}', () => {
  const newTasks = [
    {task: "Client meeting", day: "Monday", priority: true},
    {task: "Outreach emails", day: "Monday", priority: false}
  ];
  expect(distributeTasks({}, newTasks)).to.deep.equal({"Monday": ["Client meeting", "Outreach emails"]});
});

it('distributeTasks({"Friday": ["End-of-week review"]}, [{task: "Client feedback session", day: "Friday", priority: true}]) should return {"Friday": ["Client feedback session", "End-of-week review"]}', () => {
  expect(distributeTasks({
    "Friday": ["End-of-week review"]
  }, [
    {task: "Client feedback session", day: "Friday", priority: true}
  ])).to.deep.equal({"Friday": ["Client feedback session", "End-of-week review"]});
});

it('distributeTasks({}, [{task: "Learning hour", day: "Thursday", priority: false}]) should return {"Thursday": ["Learning hour"]}', () => {
  expect(distributeTasks({}, [
    {task: "Learning hour", day: "Thursday", priority: false}
  ])).to.deep.equal({"Thursday": ["Learning hour"]});
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
