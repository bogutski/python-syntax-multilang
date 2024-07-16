// NAMEEN:
// NAMERU:Площадь прямоугольного треугольника

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Прямоугольным треугольником называется треугольник, у которого один из углов равняется 90°. Его площадь можно найти, если известны два катета
(катеты - это стороны, прилегающие к прямому углу). Формула для нахождения площади прямоугольного треугольника: `1/2 * a * b`, где `a` и `b` - катеты.

Создайте функцию `triangleArea`, которая принимает два числа - катеты прямоугольного треугольника.

Функция должна возвращать площадь треугольника.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function triangleArea(a, b) {
  return 1 / 2 * a * b;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function triangleArea', () => {
  expect(triangleArea).to.be.a('function');
});

it('triangleArea(3, 4) should return 6', () => {
  expect(triangleArea(3, 4)).to.equal(6);
});

it('triangleArea(10, 10) should return 50', () => {
  expect(triangleArea(10, 10)).to.equal(50);
});

it('triangleArea(0, 100) should return 0', () => {
  expect(triangleArea(0, 100)).to.equal(0);
});

it('triangleArea(2, 2) should return 2', () => {
  expect(triangleArea(2, 2)).to.equal(2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
