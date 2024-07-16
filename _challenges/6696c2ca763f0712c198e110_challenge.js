// NAMEEN:
// NAMERU:Площадь треугольника по трем сторонам

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Зная длины трех сторон треугольника, можно найти площадь треугольника по формуле Герона:

```
s = (p * (p - a) * (p - b) * (p - c)) ** 0.5
```

где `p` - полупериметр треугольника, равный половине суммы длин трех сторон треугольника, `a`, `b`, `c` - длины сторон треугольника.

`** 0.5` - это извлечение квадратного корня.

Пусть функция называется `triangleArea` принимает три параметра – длины сторон треугольника.

Функция должна возвращать площадь треугольника.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function triangleArea(a, b, c) {
  const p = (a + b + c) / 2;
  return (p * (p - a) * (p - b) * (p - c)) ** 0.5;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function triangleArea', () => {
  expect(triangleArea).to.be.a('function');
});

it('triangleArea(3, 4, 5) should return 6', () => {
  expect(triangleArea(3, 4, 5)).eq(6);
});

it('triangleArea(10, 10, 10) should return 43.3', () => {
  expect(triangleArea(10, 10, 10)).eq(43.30127018922193);
});

it('triangleArea(7, 8, 9) should return 26.8', () => {
  expect(triangleArea(7, 8, 9)).eq(26.832815729997478);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
