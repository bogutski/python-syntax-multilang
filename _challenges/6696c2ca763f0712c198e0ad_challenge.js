// NAMEEN:
// NAMERU:Время передвижения в космосе. Мили

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Космический корабль летит со скоростью `27 000` километров в час.

Напиши функцию `getSpaceTripTime`, которая принимает в качестве параметра расстояние в милях
и возвращает время в минутах, за которое корабль преодолеет это расстояние.

В одной миле `1609` метров.

Чтобы решить эту задачу делай следующее. Соблюдайте порядок действий:

1. Переведи километры в час в мили в час, разделив `27 000` на `1.609`.
2. Найдем сколько часов займет преодоление расстояния, разделив расстояние в милях на скорость в милях в час.
3. Найдем сколько минут займет преодоление расстояния, умножив время в часах на `60`.
4. Верните полученный результат.

Примеры:
```javascript
getSpaceTripTime(10000); // 35.75555555555555
getSpaceTripTime(20000); // 71.5111111111111
getSpaceTripTime(30000); // 107.26666666666667
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function space
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getSpaceTripTime(miles) {
  const mph = 27000 / 1.609;
  const hours = miles / mph;
  const minutes = hours * 60;
  return minutes;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getSpaceTripTime', () => {
  expect(getSpaceTripTime).to.be.a('function');
});

it('getSpaceTripTime(10000) should return 35.75555555555555', () => {
  expect(getSpaceTripTime(10000)).to.be.equal(35.75555555555555);
});

it('getSpaceTripTime(20000) should return 71.5111111111111', () => {
  expect(getSpaceTripTime(20000)).to.be.equal(71.5111111111111);
});

it('getSpaceTripTime(30000) should return 107.26666666666667', () => {
  expect(getSpaceTripTime(30000)).to.be.equal(107.26666666666667);
});

it('getSpaceTripTime(43452) should return 155.36504', () => {
  expect(getSpaceTripTime(43452)).to.be.equal(155.36504);
} );
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
