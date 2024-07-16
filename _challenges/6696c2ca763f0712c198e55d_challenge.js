// NAMEEN:
// NAMERU:Расстояние между двумя точками на координатной плоскости

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `distanceBetweenPoints`, которая принимает параметры:
* `point1` - объект с координатами первой точки
* `point2` - объект с координатами второй точки

Каждый объект точки имеет следующую структуру:
```js
{
  x: 5,
  y: 10
}
```

Функция должна найти расстояние между двумя точками и вернуть его.

Ответ должен быть числом.

Пример вызова функции:
```javascript
distanceBetweenPoints(
  { x: 5, y: 10 },
  { x: 10, y: 10 }
); // 5

distanceBetweenPoints(
  { x: 5, y: 10 },
  { x: 10, y: 20 }
); // 11.180339887498949
```

Для решения задачи используйте формулу расстояния между двумя точками на плоскости:

`d = √((x2 - x1)² + (y2 - y1)²)`

Пояснение к формуле:
* Возведите в квадрат разность координат по оси `x`.
* Возведите в квадрат разность координат по оси `y`.
* Сложите два полученных числа.
* Из полученной суммы возьмите квадратный корень.


INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function distanceBetweenPoints(point1, point2) {
  return ((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2) ** 0.5;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function distanceBetweenPoints', () => {
  expect(distanceBetweenPoints).to.be.a('function');
});

it('distanceBetweenPoints({ x: 5, y: 10 }, { x: 10, y: 10 }) returns 5', () => {
  expect(distanceBetweenPoints({ x: 5, y: 10 }, { x: 10, y: 10 })).eq(5);
});

it('distanceBetweenPoints({ x: 5, y: 10 }, { x: 10, y: 20 }) returns 11.180339887498949', () => {
  expect(distanceBetweenPoints({ x: 5, y: 10 }, { x: 10, y: 20 })).eq(11.180339887498949);
});

it('distanceBetweenPoints({ x: -5, y: 10 }, { x: 10, y: -20 }) returns 33.54101966249684', () => {
  expect(distanceBetweenPoints({ x: -5, y: 10 }, { x: 10, y: -20 })).eq(
    33.54101966249684,
  );
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
