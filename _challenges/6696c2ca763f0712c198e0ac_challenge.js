// NAMEEN:
// NAMERU:Время передвижения в космосе. Километры

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Космический корабль летит со скоростью `27 000` километров в час.

Напиши функцию `getSpaceTripTime`, которая принимает в качестве параметра расстояние в километрах
и возвращает время в часах, за которое корабль преодолеет это расстояние.

Примеры:
```javascript
getSpaceTripTime(27000); // 1
getSpaceTripTime(54000); // 2
getSpaceTripTime(81000); // 3
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getSpaceTripTime(distance) {
  return distance / 27000;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getSpaceTripTime', () => {
  expect(getSpaceTripTime).to.be.a('function');
});

it('getSpaceTripTime(27000) should return 1', () => {
  expect(getSpaceTripTime(27000)).to.be.equal(1);
});

it('getSpaceTripTime(54000) should return 2', () => {
  expect(getSpaceTripTime(54000)).to.be.equal(2);
});

it('getSpaceTripTime(81000) should return 3', () => {
  expect(getSpaceTripTime(81000)).to.be.equal(3);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
