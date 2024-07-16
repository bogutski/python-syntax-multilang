// NAMEEN:
// NAMERU:Площадь круга по радиусу

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `circleArea`, которая принимает радиус круга и возвращает его площадь.

В качестве значения `π` используй `3.14`.

Формула площади круга: `S = π * r * r`, где `r` - радиус круга.

Похожий пример функции расчета площади квадрата:
```javascript
function squareArea(side) {
  return side * side;
}
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function (radius){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function circleArea(radius) {
  const pi = 3.14;
  return pi * radius * radius;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function circleArea', () => {
  expect(circleArea).to.be.a('function');
});

it('Function returns correct result for radius 10', () => {
  expect(circleArea(10)).eq(314);
});

it('Function returns correct result for radius 20', () => {
  expect(circleArea(20)).eq(1256);
});

it('Function returns correct result for radius 30', () => {
  expect(circleArea(30)).eq(2826);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
