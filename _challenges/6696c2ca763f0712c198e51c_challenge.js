// NAMEEN:
// NAMERU:Функция возвращает пустой объект

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `emptyObject`, которая возвращает пустой объект.

Пустой объект `{}`

У пустого объекта нет свойств.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function emptyObject() {
  return {};
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function emptyObject', () => {
  expect(emptyObject).to.be.a('function');
});

it('Function returns empty object', () => {
  expect(emptyObject()).to.be.an('object').that.is.empty;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
