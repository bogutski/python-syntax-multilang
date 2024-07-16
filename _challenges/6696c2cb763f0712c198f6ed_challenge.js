// NAMEEN:
// NAMERU:Фильтрация по временным интервалам и доступности

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterByAvailability`, которая принимает четыре параметра:

* events - массив объектов,
* fromDate - дата начала (строка вида: "2024-05-10"),
* toDate - дата окончания (строка вида: "2024-05-31"),
* isAvailable - доступность события (Boolean).


Функция должна фильтровать массив событий, возвращая только те, что происходят в заданный временной интервал (включительно переданные даты) и соответствуют статусу доступности.


Примеры запуска функции:
```javascript
const events = [
  { name: "Webinar", date: "2024-05-10", available: true },
  { name: "Workshop", date: "2024-05-20", available: false },
  { name: "Seminar", date: "2024-05-31", available: true },
  { name: "Conference", date: "2024-06-01", available: true }
];

console.log(filterByAvailability(events, "2024-05-01", "2024-05-31", true));
// [{name: "Webinar", date: "2024-05-10", available: true}, {name: 'Seminar', date: '2024-05-31', available: true}]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterByAvailability(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterByAvailability(events, fromDate, toDate, isAvailable) {
  return events.filter(({date, available}) => date >= fromDate && date <= toDate && available === isAvailable)
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function filterByAvailability', () => {
  expect(filterByAvailability).to.be.a('function');
});

it("Function filterByAvailability should include filter method", () => {
  const result = filterByAvailability.toString();
  expect(result).to.include('.filter(');
});

it("filterByAvailability([{name: 'Webinar', date: '2024-05-10', available: true}], '2024-05-01', '2024-05-31', true) should return [{name: 'Webinar', date: '2024-05-10', available: true}]", () => {
  const events = [
    { name: "Webinar", date: "2024-05-10", available: true }
  ];
  expect(filterByAvailability(events, "2024-05-01", "2024-05-31", true)).to.deep.equal([
    { name: "Webinar", date: "2024-05-10", available: true }
  ]);
});

it("filterByAvailability([{name: 'Workshop', date: '2024-05-20', available: false}], '2024-05-01', '2024-05-31', false) should return [{name: 'Workshop', date: '2024-05-20', available: false}]", () => {
  const events = [
    { name: "Workshop", date: "2024-05-20", available: false }
  ];
  expect(filterByAvailability(events, "2024-05-01", "2024-05-31", false)).to.deep.equal([
    { name: "Workshop", date: "2024-05-20", available: false }
  ]);
});

it("filterByAvailability([], '2024-05-01', '2024-05-31', true) should return []", () => {
  expect(filterByAvailability([], "2024-05-01", "2024-05-31", true)).to.deep.equal([]);
});

it("filterByAvailability([{name: 'Conference', date: '2024-06-01', available: true}], '2024-05-01', '2024-05-31', true) should return []", () => {
  const events = [
    { name: "Conference", date: "2024-06-01", available: true }
  ];
  expect(filterByAvailability(events, "2024-05-01", "2024-05-31", true)).to.deep.equal([]);
});

it("filterByAvailability([{name: 'Webinar', date: '2024-05-10', available: true}, {name: 'Workshop', date: '2024-05-20', available: false}], '2024-05-01', '2024-05-31', true) should return [{name: 'Webinar', date: '2024-05-10', available: true}]", () => {
  const events = [
    { name: "Webinar", date: "2024-05-10", available: true },
    { name: "Workshop", date: "2024-05-20", available: false }
  ];
  expect(filterByAvailability(events, "2024-05-01", "2024-05-31", true)).to.deep.equal([
    { name: "Webinar", date: "2024-05-10", available: true }
  ]);
});

it("filterByAvailability([{name: 'Conference', date: '2024-05-01', available: true}], '2024-05-01', '2024-05-31', true) should return [{name: 'Conference', date: '2024-05-01', available: true}]", () => {
  const events = [
    { name: "Conference", date: "2024-05-01", available: true }
  ];
  expect(filterByAvailability(events, "2024-05-01", "2024-05-31", true)).to.deep.equal([
    { name: "Conference", date: "2024-05-01", available: true }
  ]);
});

it("filterByAvailability([{name: 'Seminar', date: '2024-05-31', available: true}], '2024-05-01', '2024-05-31', true) should return [{name: 'Seminar', date: '2024-05-31', available: true}]", () => {
  const events = [
    { name: "Seminar", date: "2024-05-31", available: true }
  ];
  expect(filterByAvailability(events, "2024-05-01", "2024-05-31", true)).to.deep.equal([
    { name: "Seminar", date: "2024-05-31", available: true }
  ]);
});

it("filterByAvailability([{name: 'Webinar', date: '2024-04-30', available: true}, {name: 'Workshop', date: '2024-05-01', available: true}], '2024-05-01', '2024-05-31', true) should only return events starting from the start date, thus [{name: 'Workshop', date: '2024-05-01', available: true}]", () => {
  const events = [
    { name: "Webinar", date: "2024-04-30", available: true },
    { name: "Workshop", date: "2024-05-01", available: true }
  ];
  expect(filterByAvailability(events, "2024-05-01", "2024-05-31", true)).to.deep.equal([
    { name: "Workshop", date: "2024-05-01", available: true }
  ]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
