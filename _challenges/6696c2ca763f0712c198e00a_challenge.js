// NAMEEN:
// NAMERU:Функция и задача про автобусы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Одновременно 2 автобуса выехали из одной точки и движутся в противоположные стороны.

Скорость автобусов одинаковая.

Создайте функцию `busDistance`, которая принимает два параметра: `bus1` и `bus2`.

Функция должна возвращать расстояние между автобусами.

`bus1` и `bus2` - это числа, расстояние, которое каждый автобус проехал с момента выезда.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function busDistance(bus1, bus2) {
  return bus1 + bus2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function busDistance', () => {
  expect(busDistance).to.be.a('function');
});

it('Function busDistance has two parameters bus1 and bus2', () => {
  // function to string and then to array of arguments
  const args = busDistance.toString().match(/\(([^)]*)\)/)[1].split(',').map(arg => arg.trim());
  expect(args).to.be.eql(['bus1', 'bus2']);
});

it('Function busDistance returns number with arguments 2, 3', () => {
  expect(busDistance(2, 3)).eql(5);
});

it('Function busDistance returns number with arguments 5, 5', () => {
  expect(busDistance(5, 5)).eql(10);
});

it('Function busDistance returns number with arguments 10, 10', () => {
  expect(busDistance(10, 10)).eql(20);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
