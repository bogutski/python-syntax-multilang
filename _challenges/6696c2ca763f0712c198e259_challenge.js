// NAMEEN:
// NAMERU:Параллельна ли прямая оси координат?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Задача использует оси координат.

Ось `x` направлена вправо, ось `y` – вверх.

Точка `(0, 0)` – это начало координат.

Напишите функцию `isParallelToAxes`, которая принимает параметры:
- `x1` – координата `x` первой точки
- `y1` – координата `y` первой точки
- `x2` – координата `x` второй точки
- `y2` – координата `y` второй точки

Функция должна возвращать `true`, если прямая, проходящая через эти точки, параллельна оси `x` или оси `y`. В противном случае возвращает `false`.

Примеры:
```javascript
isParallelToAxes(0, 0, 0, 1) // true
isParallelToAxes(0, 0, 1, 0) // true
isParallelToAxes(0, 0, 0, -1) // true
isParallelToAxes(0, 0, -1, 0) // true
isParallelToAxes(0, 0, 1, 1) // false
isParallelToAxes(0, 0, 1, -1) // false
isParallelToAxes(0, 0, -1, 1) // false
isParallelToAxes(0, 0, -1, -1) // false
isParallelToAxes(0, 0, 0, 0) // false

```

Если две точки совпадают, то прямая, проходящая через них, не существует – возвращаем `false`.

Для решения задачи используйте только операторы сравнения и логические операторы.

Нарисуйте оси координат и прямую, проходящую через точки. Это поможет вам понять, какие условия должны выполняться, чтобы прямая была параллельна оси.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
so much fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isParallelToAxes(x1, y1, x2, y2) {
  if (x1 === x2 && y1 === y2) return false;
  return x1 === x2 || y1 === y2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isParallelToAxes', () => {
  expect(isParallelToAxes).to.be.a('function');
});

it('isParallelToAxes(0, 0, 0, 1) // true', () => {
  expect(isParallelToAxes(0, 0, 0, 1)).to.be.true;
} );

it('isParallelToAxes(0, 0, 1, 0) // true', () => {
  expect(isParallelToAxes(0, 0, 1, 0)).to.be.true;
} );

it('isParallelToAxes(0, 0, 0, -1) // true', () => {
  expect(isParallelToAxes(0, 0, 0, -1)).to.be.true;
} );

it('isParallelToAxes(0, 0, -1, 0) // true', () => {
  expect(isParallelToAxes(0, 0, -1, 0)).to.be.true;
} );

it('isParallelToAxes(0, 0, 1, 1) // false', () => {
  expect(isParallelToAxes(0, 0, 1, 1)).to.be.false;
} );

it('isParallelToAxes(0, 0, 1, -1) // false', () => {
  expect(isParallelToAxes(0, 0, 1, -1)).to.be.false;
} );

it('isParallelToAxes(0, 0, -1, 1) // false', () => {
  expect(isParallelToAxes(0, 0, -1, 1)).to.be.false;
} );

it('isParallelToAxes(0, 0, -1, -1) // false', () => {
  expect(isParallelToAxes(0, 0, -1, -1)).to.be.false;
} );

it('isParallelToAxes(0, 0, 0, 0) // false', () => {
  expect(isParallelToAxes(0, 0, 0, 0)).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
