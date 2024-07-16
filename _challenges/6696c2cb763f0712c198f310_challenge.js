// NAMEEN:
// NAMERU:Автоматизация управления умными устройствами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `automateDeviceTasks`, которая принимает два аргумента: массив текущих задач умных устройств и массив новых задач для автоматизации.

Каждая задача описывается объектом с тремя свойствами: `device` (название устройства), `task` (описание задачи), и `time` (время выполнения задачи).

Используя метод `push()`, функция должна добавлять новые задачи в конец списка задач.

Если в списке уже существует задача для устройства на то же время, новая задача должна заменить старую.

Функция возвращает обновленный список задач.

Примеры запуска функции:
```javascript
automateDeviceTasks(
    [{device: "Coffee Maker", task: "Make coffee", time: "07:00"}],
    [{device: "Coffee Maker", task: "Clean", time: "07:00"}, {device: "Thermostat", task: "Set temperature to 22C", time: "07:30"}]
)
// returns [{device: "Coffee Maker", task: "Clean", time: "07:00"}, {device: "Thermostat", task: "Set temperature to 22C", time: "07:30"}]

automateDeviceTasks(
    [{device: "Light", task: "Turn on", time: "18:00"}],
    [{device: "Light", task: "Adjust brightness", time: "18:00"}]
)
// returns [{device: "Light", task: "Adjust brightness", time: "18:00"}]

automateDeviceTasks(
    [],
    [{device: "Security Camera", task: "Activate", time: "22:00"}]
)
// returns [{device: "Security Camera", task: "Activate", time: "22:00"}]

automateDeviceTasks(
    [{device: "Sprinkler", task: "Water the garden", time: "05:00"}],
    []
)
// returns [{device: "Sprinkler", task: "Water the garden", time: "05:00"}]

automateDeviceTasks(
    [{device: "Vacuum Cleaner", task: "Start cleaning", time: "09:00"}],
    [{device: "Vacuum Cleaner", task: "Empty dustbin", time: "09:00"}, {device: "Vacuum Cleaner", task: "Charge battery", time: "21:00"}]
)
// returns [{device: "Vacuum Cleaner", task: "Empty dustbin", time: "09:00"}, {device: "Vacuum Cleaner", task: "Charge battery", time: "21:00"}]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function automateDeviceTasks(curr, newTasks) {
  for(let tasksToAdd of newTasks){
    let needToAdd = true

    for(let currTask of curr){
      if(currTask.device === tasksToAdd.device && currTask.time === tasksToAdd.time) {
        currTask.task = tasksToAdd.task
        needToAdd = false
      }
    }

    if(needToAdd) curr.push(tasksToAdd)

  }
  return curr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function automateDeviceTasks', () => {
  expect(automateDeviceTasks).to.be.a('function');
});

it('automateDeviceTasks([{device: "Coffee Maker", task: "Make coffee", time: "07:00"}], [{device: "Coffee Maker", task: "Clean", time: "07:00"}, {device: "Thermostat", task: "Set temperature to 22C", time: "07:30"}]) should return updated tasks list with Coffee Maker cleaning and new Thermostat setting', () => {
  const initialTasks = [{device: "Coffee Maker", task: "Make coffee", time: "07:00"}];
  const newTasks = [{device: "Coffee Maker", task: "Clean", time: "07:00"}, {device: "Thermostat", task: "Set temperature to 22C", time: "07:30"}];
  expect(automateDeviceTasks(initialTasks, newTasks)).to.deep.equal([{device: "Coffee Maker", task: "Clean", time: "07:00"}, {device: "Thermostat", task: "Set temperature to 22C", time: "07:30"}]);
});

it('automateDeviceTasks with an empty initial list should simply add the new device task', () => {
  const newTasks = [{device: "Security Camera", task: "Activate", time: "22:00"}];
  expect(automateDeviceTasks([], newTasks)).to.deep.equal([{device: "Security Camera", task: "Activate", time: "22:00"}]);
});

it('automateDeviceTasks should replace an existing task for a device at the same time with the new task', () => {
  const initialTasks = [{device: "Light", task: "Turn on", time: "18:00"}];
  const newTasks = [{device: "Light", task: "Adjust brightness", time: "18:00"}];
  expect(automateDeviceTasks(initialTasks, newTasks)).to.deep.equal([{device: "Light", task: "Adjust brightness", time: "18:00"}]);
});

it('automateDeviceTasks should add all new tasks when no conflicts with time exist', () => {
  const initialTasks = [{device: "Vacuum Cleaner", task: "Start cleaning", time: "09:00"}];
  const newTasks = [{device: "Vacuum Cleaner", task: "Empty dustbin", time: "09:00"}, {device: "Vacuum Cleaner", task: "Charge battery", time: "21:00"}];
  expect(automateDeviceTasks(initialTasks, newTasks)).to.deep.equal([{device: "Vacuum Cleaner", task: "Empty dustbin", time: "09:00"}, {device: "Vacuum Cleaner", task: "Charge battery", time: "21:00"}]);
});

it('automateDeviceTasks should handle multiple devices and tasks correctly', () => {
  const initialTasks = [{device: "Speaker", task: "Play music", time: "19:00"}];
  const newTasks = [{device: "Speaker", task: "Adjust volume", time: "19:00"}, {device: "Thermostat", task: "Lower temperature", time: "23:00"}];
  expect(automateDeviceTasks(initialTasks, newTasks)).to.deep.equal([{device: "Speaker", task: "Adjust volume", time: "19:00"}, {device: "Thermostat", task: "Lower temperature", time: "23:00"}]);
});

it('automateDeviceTasks with no new tasks should return the initial task list unchanged', () => {
  const initialTasks = [{device: "Fridge", task: "Restock", time: "12:00"}];
  expect(automateDeviceTasks(initialTasks, [])).to.deep.equal([{device: "Fridge", task: "Restock", time: "12:00"}]);
});

it('automateDeviceTasks should ensure that if a device has multiple tasks at different times, they are all preserved', () => {
  const initialTasks = [{device: "Fridge", task: "Defrost", time: "10:00"}];
  const newTasks = [{device: "Fridge", task: "Restock", time: "12:00"}, {device: "Fridge", task: "Clean", time: "15:00"}];
  expect(automateDeviceTasks(initialTasks, newTasks)).to.deep.equal([{device: "Fridge", task: "Defrost", time: "10:00"}, {device: "Fridge", task: "Restock", time: "12:00"}, {device: "Fridge", task: "Clean", time: "15:00"}]);
});

it('automateDeviceTasks should add a new task at a different time even if the device is the same', () => {
  const initialTasks = [{device: "AC Unit", task: "Turn on", time: "14:00"}];
  const newTasks = [{device: "AC Unit", task: "Turn off", time: "22:00"}];
  expect(automateDeviceTasks(initialTasks, newTasks)).to.deep.equal([{device: "AC Unit", task: "Turn on", time: "14:00"}, {device: "AC Unit", task: "Turn off", time: "22:00"}]);
});

it('automateDeviceTasks should not duplicate a task for the same device and time', () => {
  const initialTasks = [{device: "Coffee Maker", task: "Brew coffee", time: "07:00"}];
  const newTasks = [{device: "Coffee Maker", task: "Brew coffee", time: "07:00"}];
  expect(automateDeviceTasks(initialTasks, newTasks)).to.deep.equal([{device: "Coffee Maker", task: "Brew coffee", time: "07:00"}]);
});

it('automateDeviceTasks should correctly manage tasks when adding to an already full schedule', () => {
  const initialTasks = [
    {device: "Humidifier", task: "Turn on", time: "20:00"},
    {device: "Dehumidifier", task: "Turn on", time: "20:00"}
  ];
  const newTasks = [
    {device: "Humidifier", task: "Turn off", time: "06:00"},
    {device: "Dehumidifier", task: "Turn off", time: "06:00"}
  ];
  expect(automateDeviceTasks(initialTasks, newTasks)).to.deep.equal([
    {device: "Humidifier", task: "Turn on", time: "20:00"},
    {device: "Dehumidifier", task: "Turn on", time: "20:00"},
    {device: "Humidifier", task: "Turn off", time: "06:00"},
    {device: "Dehumidifier", task: "Turn off", time: "06:00"}
  ]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
