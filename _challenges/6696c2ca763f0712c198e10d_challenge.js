// NAMEEN:
// NAMERU:Форматированный ответ. Площади кругов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `circleAreaFormatted`, которая принимает в качестве параметра радиус круга и возвращает строку вида `Area of circle with radius 2 is 12.56`.

Для расчета площади круга используйте функцию `circleArea`, которая принимает в качестве параметра радиус круга и возвращает его площадь.

В итоге у вас должно быть 2 функции: `circleArea` и `circleAreaFormatted`.

`PI = 3.14`

Для избежания ошибок округления используйте для расчета площади круга формулу `PI * (radius ** 2)`



INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function circleArea(radius) {
  return 3.14 * (radius ** 2);
}

function circleAreaFormatted(radius) {
  return `Area of circle with radius ${radius} is ${circleArea(radius)}`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function circleArea', () => {
  expect(circleArea).to.be.a('function');
});

it('Created function circleAreaFormatted', () => {
  expect(circleAreaFormatted).to.be.a('function');
});

it('circleArea(2) should return 12.56', () => {
  expect(circleArea(2)).to.be.equal(12.56);
});

it('circleAreaFormatted(2) should return "Area of circle with radius 2 is 12.56"', () => {
  expect(circleAreaFormatted(2)).to.be.equal('Area of circle with radius 2 is 12.56');
});

it('circleArea(3) should return 28.26', () => {
  expect(circleArea(3)).to.be.equal(28.26);
});

it('circleAreaFormatted(3) should return "Area of circle with radius 3 is 28.26"', () => {
  expect(circleAreaFormatted(3)).to.be.equal('Area of circle with radius 3 is 28.26');
});

it('circleArea(4) should return 50.24', () => {
  expect(circleArea(4)).to.be.equal(50.24);
});

it('circleAreaFormatted(4) should return "Area of circle with radius 4 is 50.24"', () => {
  expect(circleAreaFormatted(4)).to.be.equal('Area of circle with radius 4 is 50.24');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
