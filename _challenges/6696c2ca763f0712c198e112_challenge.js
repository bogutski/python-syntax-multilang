// NAMEEN:
// NAMERU:Площадь поверхности шара

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Шар — геометрическое тело, состоящее из точек пространства, которые удалены от центра на расстояние, не более заданного. Это расстояние называют радиусом шара.

Площадь поверхности шара равна `4 * PI * powerOfTwo(r)`, где

`PI` - переменная, число `3.14`,
`powerOfTwo(r)` - функция, которая возвращает квадрат числа `r`.

Создайте переменную `PI`, которая равна числу `3.14`.
Создайте функцию `powerOfTwo`, которая принимает число и возвращает квадрат этого числа.
Создайте функцию `sphereSurfaceArea`, которая принимает радиус шара и возвращает площадь его поверхности.

Используйте переменную `PI` и функцию `powerOfTwo` внутри функции `sphereSurfaceArea`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const PI = 3.14;

function powerOfTwo(r) {
  return r * r;
}

function sphereSurfaceArea(r) {
  return 4 * PI * powerOfTwo(r);
}
// SOLUTIONEND


// OPENTESTSSTART
// PI
it('Created variable PI', () => {
  expect(PI).to.equal(3.14);
});

it('Created function powerOfTwo', () => {
  expect(powerOfTwo).to.be.a('function');
});

it('Created function sphereSurfaceArea', () => {
  expect(sphereSurfaceArea).to.be.a('function');
});

it('Function powerOfTwo(2) returns 4', () => {
  expect(powerOfTwo(2)).to.equal(4);
});

it('Function powerOfTwo(3) returns 9', () => {
  expect(powerOfTwo(3)).to.equal(9);
});

it('Function sphereSurfaceArea(2) returns 50.24', () => {
  expect(sphereSurfaceArea(2)).to.equal(50.24);
});

it('Function sphereSurfaceArea(3) returns 113.04', () => {
  expect(sphereSurfaceArea(3)).to.equal(113.04);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
