// NAMEEN:
// NAMERU:Сортировка массива объектов по дате в указанном направлении

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sortObjectsByDate`, которая принимает:

 * массив объектов, каждый из которых содержит свойства `info` и `date`.
 * второй параметр `direction`, который может быть "Ascending" или "Descending", указывающий направление сортировки.

Функция должна возвращать новый массив, содержащий объекты, отсортированные по дате в указанном направлении.


Примеры запуска функции:
```javascript
const events = [
  { info: "Event 1", date: new Date(2021, 6, 10) },
  { info: "Event 2", date: new Date(2020, 5, 20) },
  { info: "Event 3", date: new Date(2021, 6, 15) }
];

console.log(sortObjectsByDate(events, "Ascending"));
// Вывод: [
// { info: "Event 2", date: Date("2020-06-20") },
// { info: "Event 1", date: Date("2021-07-10") },
// { info: "Event 3", date: Date("2021-07-15") }]

console.log(sortObjectsByDate(events, "Descending"));
// Вывод: [
// { info: "Event 3", date: Date("2021-07-15") },
// { info: "Event 1", date: Date("2021-07-10") },
// { info: "Event 2", date: Date("2020-06-20") }]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sortObjectsByDate(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortObjectsByDate(arr, sort) {
  return arr.slice().sort((a, b) => {
    return sort === 'Ascending' ? a.date - b.date : b.date - a.date
  });
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sortObjectsByDate', () => {
  expect(sortObjectsByDate).to.be.a('function');
});

it('Function sortObjectsByDate should include method sort()', () => {
  const res = sortObjectsByDate.toString()
  expect(res).to.include('.sort(')
});

it('sortObjectsByDate(events, "Ascending") should sort dates from earliest to latest', () => {
  const events = [
    { info: "Event 1", date: new Date(2021, 6, 10) },
    { info: "Event 2", date: new Date(2020, 5, 20) },
    { info: "Event 3", date: new Date(2021, 6, 15) }
  ];
  const sorted = sortObjectsByDate(events, "Ascending");
  expect(sorted[0].info).to.equal("Event 2");
  expect(sorted[1].info).to.equal("Event 1");
  expect(sorted[2].info).to.equal("Event 3");
});

it('sortObjectsByDate(events, "Descending") should sort dates from latest to earliest', () => {
  const events = [
    { info: "Event 1", date: new Date(2021, 6, 10) },
    { info: "Event 2", date: new Date(2020, 5, 20) },
    { info: "Event 3", date: new Date(2021, 6, 15) }
  ];
  const sorted = sortObjectsByDate(events, "Descending");
  expect(sorted[0].info).to.equal("Event 3");
  expect(sorted[1].info).to.equal("Event 1");
  expect(sorted[2].info).to.equal("Event 2");
});

it('sortObjectsByDate([], "Ascending") should return an empty array', () => {
  expect(sortObjectsByDate([], "Ascending")).to.deep.equal([]);
});

it('sortObjectsByDate([], "Descending") should return an empty array', () => {
  expect(sortObjectsByDate([], "Descending")).to.deep.equal([]);
});

it('sortObjectsByDate(events, "Ascending") handles dates with same day but different times', () => {
  const events = [
    { info: "Morning Event", date: new Date(2021, 6, 10, 9, 0) },
    { info: "Evening Event", date: new Date(2021, 6, 10, 18, 0) }
  ];
  const sorted = sortObjectsByDate(events, "Ascending");
  expect(sorted[0].info).to.equal("Morning Event");
  expect(sorted[1].info).to.equal("Evening Event");
});

it('sortObjectsByDate(events, "Descending") handles dates with same day but different times', () => {
  const events = [
    { info: "Morning Event", date: new Date(2021, 6, 10, 9, 0) },
    { info: "Evening Event", date: new Date(2021, 6, 10, 18, 0) }
  ];
  const sorted = sortObjectsByDate(events, "Descending");
  expect(sorted[0].info).to.equal("Evening Event");
  expect(sorted[1].info).to.equal("Morning Event");
});

it('sortObjectsByDate(events, "Ascending") handles different years correctly', () => {
  const events = [
    { info: "Old Event", date: new Date(2019, 0, 1) },
    { info: "New Event", date: new Date(2021, 0, 1) }
  ];
  const sorted = sortObjectsByDate(events, "Ascending");
  expect(sorted[0].info).to.equal("Old Event");
  expect(sorted[1].info).to.equal("New Event");
});

it('sortObjectsByDate(events, "Descending") handles different years correctly', () => {
  const events = [
    { info: "Old Event", date: new Date(2019, 0, 1) },
    { info: "New Event", date: new Date(2021, 0, 1) }
  ];
  const sorted = sortObjectsByDate(events, "Descending");
  expect(sorted[0].info).to.equal("New Event");
  expect(sorted[1].info).to.equal("Old Event");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
