// NAMEEN:
// NAMERU:Вычисление площади круга по диаметру

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную `PI` вне функции и присвойте ей значение `3.14`.

Создайте функцию `circleArea` с одним параметром `diameter`.

Пусть функция возвращает площадь круга.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun circle!
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const PI = 3.14;

function circleArea(diameter) {
  return PI * (diameter / 2) ** 2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function circleArea', () => {
  expect(circleArea).to.be.a('function');
});

it('Function circleArea has one parameter', () => {
  expect(circleArea.length).to.be.equal(1);
});

it('Function circleArea has one parameter diameter', () => {
  // function to string and then to array of arguments
  const args = circleArea.toString().match(/\(([^)]*)\)/)[1].split(',').map(arg => arg.trim());
  expect(args).to.be.eql(['diameter']);
});

it('Function circleArea returns area of circle for diameter 10', () => {
  expect(circleArea(10)).to.be.equal(78.5);
});

it('Function circleArea returns area of circle for diameter 20', () => {
  expect(circleArea(20)).to.be.equal(314);
});

it('Function circleArea returns area of circle for diameter 30', () => {
  expect(circleArea(30)).to.be.equal(706.5);
});

it('Created variable PI', () => {
  expect(PI).equal(3.14);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
