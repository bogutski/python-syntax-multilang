// NAMEEN:
// NAMERU:Определите в какой четверти находится точка

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Представьте оси координат. Оси `x` и `y` пересекаются в точке `(0, 0)`.

Ось `x` направлена вправо, ось `y` – вверх.

Точка `(0, 0)` – это начало координат.

Первая четверть – это четверть, в которой находятся точки с положительными значениями по обеим осям.

Например, точка (1, 1) находится в первой четверти, а точка (-1, -1) - в третьей.

В декартовой системе координат четверти считаются против часовой стрелки.


Напишите функцию `getQuarter`, которая принимает параметры `x` и `y` – координаты точки.

Пусть функция возвращает номер четверти, в которой находится эта точка.

Примеры запуска функции:
```javascript
getQuarter(1, 1);   // 1
getQuarter(1, -1);  // 4
getQuarter(-1, -1); // 3
getQuarter(-1, 1);  // 2

// Если точка находится на оси координат, то функция возвращает 0
getQuarter(0, 0);   // 0
getQuarter(0, 1);   // 0
getQuarter(-1, 0);  // 0
getQuarter(0, -1);  // 0
getQuarter(1, 0);   // 0
```

Вместо `x` и `y` может быть любое число.

В решении используйте `if`, `else`, операторы `||` и `&&`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getQuarter(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }

  if (x > 0 && y > 0) {
    return 1;
  }

  if (x > 0 && y < 0) {
    return 4;
  }

  if (x < 0 && y < 0) {
    return 3;
  }

  if (x < 0 && y > 0) {
    return 2;
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getQuarter', () => {
  expect(getQuarter).to.be.a('function');
});

it('getQuarter(1, 1) === 1', () => {
  expect(getQuarter(1, 1)).to.equal(1);
});

it('getQuarter(-1, 1) === 2', () => {
  expect(getQuarter(-1, 1)).to.equal(2);
});

it('getQuarter(-1, -1) === 3', () => {
  expect(getQuarter(-1, -1)).to.equal(3);
});

it('getQuarter(1, -1) === 4', () => {
  expect(getQuarter(1, -1)).to.equal(4);
});

it('getQuarter(0, 0) === 0', () => {
  expect(getQuarter(0, 0)).to.equal(0);
});

it('getQuarter(0, 1) === 0', () => {
  expect(getQuarter(0, 1)).to.equal(0);
});

it('getQuarter(-1, 0) === 0', () => {
  expect(getQuarter(-1, 0)).to.equal(0);
});

it('getQuarter(0, -1) === 0', () => {
  expect(getQuarter(0, -1)).to.equal(0);
});

it('getQuarter(1, 0) === 0', () => {
  expect(getQuarter(1, 0)).to.equal(0);
});

it('getQuarter(100, 100) === 1', () => {
  expect(getQuarter(100, 100)).to.equal(1);
});

it('getQuarter(-100, 100) === 2', () => {
  expect(getQuarter(-100, 100)).to.equal(2);
});

it('getQuarter(-100, -100) === 3', () => {
  expect(getQuarter(-100, -100)).to.equal(3);
});

it('getQuarter(100, -100) === 4', () => {
  expect(getQuarter(100, -100)).to.equal(4);
});

it('getQuarter(0, 100) === 0', () => {
  expect(getQuarter(0, 100)).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
