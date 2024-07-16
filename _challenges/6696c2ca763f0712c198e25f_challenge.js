// NAMEEN:
// NAMERU:Вернуть противоположный цвет

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В функцию передается строка, которая является названием цвета. Необходимо вернуть противоположный цвет.

Название функции: `getOppositeColor`.

Например, если передать функции "red", то она должна вернуть "green".

Если передать "blue", то должно вернуться "orange". Если передать "orange", то должно вернуться "blue".

Список цветов:
* red - green
* orange - blue
* yellow - purple
* violet - amber

Если передать функции строку, которая не является названием ожидаемого цвета, то она должна вернуть строку `Unexpected color`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getOppositeColor(color) {
  const colors = {
    red: 'green',
    orange: 'blue',
    yellow: 'purple',
    violet: 'amber',
    green: 'red',
    blue: 'orange',
    purple: 'yellow',
    amber: 'violet',
  };

  return colors[color] || 'Unexpected color';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getOppositeColor', () => {
  expect(getOppositeColor).to.be.a('function');
});

it('getOppositeColor("red") should return "green"', () => {
  expect(getOppositeColor('red')).to.be.equal('green');
});

it('getOppositeColor("orange") should return "blue"', () => {
  expect(getOppositeColor('orange')).to.be.equal('blue');
});

it('getOppositeColor("yellow") should return "purple"', () => {
  expect(getOppositeColor('yellow')).to.be.equal('purple');
});

it('getOppositeColor("violet") should return "amber"', () => {
  expect(getOppositeColor('violet')).to.be.equal('amber');
});

it('getOppositeColor("green") should return "red"', () => {
  expect(getOppositeColor('green')).to.be.equal('red');
});

it('getOppositeColor("blue") should return "orange"', () => {
  expect(getOppositeColor('blue')).to.be.equal('orange');
});

it('getOppositeColor("purple") should return "yellow"', () => {
  expect(getOppositeColor('purple')).to.be.equal('yellow');
});

it('getOppositeColor("amber") should return "violet"', () => {
  expect(getOppositeColor('amber')).to.be.equal('violet');
});

it('getOppositeColor("black") should return "Unexpected color"', () => {
  expect(getOppositeColor('black')).to.be.equal('Unexpected color');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
