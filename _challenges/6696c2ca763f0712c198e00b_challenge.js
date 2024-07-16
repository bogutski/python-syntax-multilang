// NAMEEN:
// NAMERU:Функция и задача про автобусы. Версия 2

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Одновременно 2 автобуса выехали из одной точки и движутся в противоположные стороны.

Скорость автобусов разная.

Создайте функцию `busDistance`, которая принимает три параметра: `bus1`, `bus2` и `time`.

Функция должна возвращать расстояние между автобусами.

`bus1` и `bus2` - это числа, скорость, в милях в час, с которой движутся автобусы.

`time` - это число, время, в минутах, которое прошло с момента выезда автобусов.

Примеры:
```javascript
busDistance(10, 10, 60) // 20
busDistance(10, 20, 60) // 30
busDistance(10, 20, 120) // 60
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun bus 2
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function busDistance(bus1, bus2, time) {
  return (bus1 + bus2) * time / 60;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function busDistance', () => {
  expect(busDistance).to.be.a('function');
});

it('Function busDistance has tree parameters bus1, bus2, time', () => {
  // function to string and then to array of arguments
  const args = busDistance.toString().match(/\(([^)]*)\)/)[1].split(',').map(arg => arg.trim());
  expect(args).to.be.eql(['bus1', 'bus2', 'time']);
});

it('Function busDistance returns correct value with 10, 10, 60', () => {
  expect(busDistance(10, 10, 60)).to.be.equal(20);
} );

it('Function busDistance returns correct value with 10, 20, 60', () => {
  expect(busDistance(10, 20, 60)).to.be.equal(30);
} );

it('Function busDistance returns correct value with 10, 20, 120', () => {
  expect(busDistance(10, 20, 120)).to.be.equal(60);
} );

it('Function busDistance returns correct value with 20, 10, 120', () => {
  expect(busDistance(20, 10, 120)).to.be.equal(60);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
