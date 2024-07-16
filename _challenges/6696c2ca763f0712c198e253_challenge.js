// NAMEEN:
// NAMERU:Красный, синий или зеленый?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isRedBlueGreen`, которая принимает цвет (строка) и возвращает true, если цвет `red`, `blue` или `green`. В противном случае возвращает false.

Эту задачу можно решить с помощью `if`, но для тренировки попробуйте решить ее с помощью `||`.

Похожий пример:
```javascript
function isOneTwoThree(number) {
  if (number === 1 || number === 2 || number === 3) {
    return true;
  }
  return false;
}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isRedBlueGreen(color) {
  if (color === 'red' || color === 'blue' || color === 'green') {
    return true;
  }
  return false;

}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isRedBlueGreen', () => {
  expect(isRedBlueGreen).to.be.a('function');
});

it('isRedBlueGreen("red") should return true', () => {
  expect(isRedBlueGreen('red')).to.be.equal(true);
});

it('isRedBlueGreen("blue") should return true', () => {
  expect(isRedBlueGreen('blue')).to.be.equal(true);
});

it('isRedBlueGreen("green") should return true', () => {
  expect(isRedBlueGreen('green')).to.be.equal(true);
});

it('isRedBlueGreen("yellow") should return false', () => {
  expect(isRedBlueGreen('yellow')).to.be.equal(false);
});

it('isRedBlueGreen("orange") should return false', () => {
  expect(isRedBlueGreen('orange')).to.be.equal(false);
});

it('isRedBlueGreen("purple") should return false', () => {
  expect(isRedBlueGreen('purple')).to.be.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
