// NAMEEN:
// NAMERU:Функция с расчетами площади круга

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `circleArea`.
В функции создайте переменную `pi` и присвойте ей значение `3.14`.
В функции создайте переменную `radius` и присвойте ей значение `20`.

Для вычисления площади круга используйте формулу `pi * radius * radius`.

Функция должна возвращать площадь круга.

Принципиально похожий пример вычисления площади прямоугольника:

```javascript
function cube() {
  const side1 = 3;
  const side2 = 5;
  return side1 * side2;
}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function volume(side){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function circleArea() {
  const pi = 3.14;
  const radius = 20;
  return pi * radius * radius;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function circleArea', () => {
  expect(circleArea).to.be.a('function');
} );

it('Function returns correct result', () => {
  expect(circleArea()).eq(1256);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
