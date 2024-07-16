// NAMEEN:
// NAMERU:Поместятся ли все в автобус?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Автобус едет по остановкам. На каждой остановке некоторое количество людей заходит.

Напишите функцию `isBusCanTakeAll`, которая принимает в качестве параметров:
* `busCapacity` – вместимость автобуса,
* `onTheBus` – количество людей в автобусе до начала поездки,
* `countStops` – количество остановок,
* `peopleIn` – сколько людей заходит на каждой остановке. Одинаковое количество людей заходит на каждой остановке.

Пусть функция возвращает `true`, если все люди поместятся в автобус, и `false` в противном случае.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isBusCanTakeAll(busCapacity, onTheBus, countStops, peopleIn) {
  return busCapacity >= onTheBus + peopleIn * countStops;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isBusCanTakeAll', () => {
  expect(isBusCanTakeAll).to.be.a('function');
});

it('isBusCanTakeAll(10, 0, 2, 2) should return true', () => {
  expect(isBusCanTakeAll(10, 0, 2, 2)).to.be.true;
});

it('isBusCanTakeAll(10, 0, 2, 3) should return true', () => {
  expect(isBusCanTakeAll(10, 0, 2, 3)).to.be.true;
});

it('isBusCanTakeAll(10, 0, 2, 4) should return true', () => {
  expect(isBusCanTakeAll(10, 0, 2, 4)).to.be.true;
});

it('isBusCanTakeAll(10, 0, 2, 5) should return true', () => {
  expect(isBusCanTakeAll(10, 0, 2, 5)).to.be.true;
});

it('isBusCanTakeAll(10, 5, 2, 2) should return true', () => {
  expect(isBusCanTakeAll(10, 5, 2, 2)).to.be.true;
});

it('isBusCanTakeAll(10, 5, 2, 4) should return false', () => {
  expect(isBusCanTakeAll(10, 5, 2, 4)).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
