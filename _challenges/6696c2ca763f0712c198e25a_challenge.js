// NAMEEN:
// NAMERU:Определить длину отрезка по координатам

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В этой задаче вам нужно определить длину отрезка по его координатам.

Длина отрезка вычисляется по формуле: `квадратный корень из ((x2 - x1)^2 + (y2 - y1)^2)`, где `x1`, `y1` – координаты первой точки, `x2`, `y2` – координаты второй точки.

`^2` – это возведение в квадрат.

Для возведения в квадрат используйте оператор `** 2`, например: `2 ** 2 = 4`.

Для извлечения квадратного корня используйте оператор `** 0.5`, например: `4 ** 0.5 = 2`.

Напишите функцию `distance`, которая принимает на вход координаты двух точек и возвращает длину отрезка между ними.

Параметры функции:
* `x1` – координата x первой точки
* `y1` – координата y первой точки
* `x2` – координата x второй точки
* `y2` – координата y второй точки


Пример запуска:
```javascript
distance(0, 0, 0, 0); // 0
distance(0, 0, 1, 0); // 1
distance(0, 0, 0, 1); // 1
distance(0, 0, 1, 1); // 1.4142135623730951
distance(0, 0, 2, 2); // 2.8284271247461903
distance(0, 0, 3, 4); // 5
distance(0, 0, 4, 3); // 5
distance(0, 0, 5, 12); // 13
```

Формула вычисления длины отрезка:
```javascript
((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function distance(x1, y1, x2, y2) {
  return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function distance', () => {
  expect(distance).to.be.a('function');
});

it('distance(0, 0, 0, 0) = 0', () => {
  expect(distance(0, 0, 0, 0)).to.equal(0);
});

it('distance(0, 0, 1, 0) = 1', () => {
  expect(distance(0, 0, 1, 0)).to.equal(1);
});

it('distance(0, 0, 0, 1) = 1', () => {
  expect(distance(0, 0, 0, 1)).to.equal(1);
});

it('distance(0, 0, 1, 1) = 1.4142135623730951', () => {
  expect(distance(0, 0, 1, 1)).to.equal(1.4142135623730951);
});

it('distance(0, 0, 2, 2) = 2.8284271247461903', () => {
  expect(distance(0, 0, 2, 2)).to.equal(2.8284271247461903);
});

it('distance(0, 0, 3, 4) = 5', () => {
  expect(distance(0, 0, 3, 4)).to.equal(5);
});

it('distance(0, 0, 4, 3) = 5', () => {
  expect(distance(0, 0, 4, 3)).to.equal(5);
});

it('distance(0, 0, 5, 12) = 13', () => {
  expect(distance(0, 0, 5, 12)).to.equal(13);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
