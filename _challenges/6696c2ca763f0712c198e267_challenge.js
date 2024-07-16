// NAMEEN:
// NAMERU:Возможно ли построить треугольник по трем сторонам

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Треугольник можно построить в том случае, если сумма длин двух любых его сторон больше длины третьей стороны.

Напишите функцию `isTriangle`, которая принимает три параметра: `a`, `b`, `c` – длины сторон треугольника.

Функция должна возвращать `true`, если треугольник можно построить, и `false` в противном случае.

Алгоритм проверки:
* Сложите длины двух сторон треугольника `a` и `b`. Должно быть больше длины третьей стороны `с`.
* Сложите длины двух сторон треугольника `a` и `c`. Должно быть больше длины третьей стороны `b`.
* Сложите длины двух сторон треугольника `b` и `c`. Должно быть больше длины третьей стороны `a`.

Если хотя бы одно из этих условий не выполняется, то треугольник не может быть построен.

Примеры запуска функции:
```javascript
isTriangle(3, 4, 5) // true
isTriangle(3, 4, 10) // false
isTriangle(3, 4, 4) // true
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  }
  return false;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isTriangle', () => {
  expect(isTriangle).to.be.a('function');
});

it('isTriangle(3, 4, 5) should return true', () => {
  expect(isTriangle(3, 4, 5)).to.be.true;
});

it('isTriangle(5, 4, 3) should return true', () => {
  expect(isTriangle(5, 4, 3)).to.be.true;
});

it('isTriangle(4, 5, 3) should return true', () => {
  expect(isTriangle(4, 5, 3)).to.be.true;
});

it('isTriangle(3, 4, 10) should return false', () => {
  expect(isTriangle(3, 4, 10)).to.be.false;
});

it('isTriangle(3, 4, 4) should return true', () => {
  expect(isTriangle(3, 4, 4)).to.be.true;
});

it('isTriangle(3, 4, 3) should return true', () => {
  expect(isTriangle(3, 4, 3)).to.be.true;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
