// NAMEEN:
// NAMERU:Площади трех комнат

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `roomArea`, которая принимает два параметра `width` и `height` и возвращает площадь комнаты.

Создайте переменную `kitchenArea` и присвойте ей результат вызова функции `roomArea` с аргументами `15` и `14`.

Создайте переменную `livingRoomArea` и присвойте ей результат вызова функции `roomArea` с аргументами `15` и `18`.

Создайте переменную `bedroomArea` и присвойте ей результат вызова функции `roomArea` с аргументами `12` и `12`.

Названия параметров должны быть обязательно такими как в условии.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function roomArea(width, height) {
  return width * height;
}

const kitchenArea = roomArea(15, 14);
const livingRoomArea = roomArea(15, 18);
const bedroomArea = roomArea(12, 12);
// SOLUTIONEND


// OPENTESTSSTART
it('Created function roomArea', () => {
  expect(roomArea).to.be.a('function');
});

it('function has parameters width and height', () => {
  const func = roomArea.toString();
  const params = func.match(/\((.+?)\)/)[1];
  expect(params).to.equal('width, height');
});

it('Created variable kitchenArea and assigned value from function roomArea 15, 14', () => {
  expect(kitchenArea).equal(roomArea(15, 14));
});

it('Created variable livingRoomArea and assigned value from function roomArea 15, 18', () => {
  expect(livingRoomArea).equal(roomArea(15, 18));
});

it('Created variable bedroomArea and assigned value from function roomArea 12, 12', () => {
  expect(bedroomArea).equal(roomArea(12, 12));
});

it('roomArea(15, 14) returns 210', () => {
  expect(roomArea(15, 14)).equal(210);
});

it('roomArea(15, 18) returns 270', () => {
  expect(roomArea(15, 18)).equal(270);
});

it('roomArea(12, 12) returns 144', () => {
  expect(roomArea(12, 12)).equal(144);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
