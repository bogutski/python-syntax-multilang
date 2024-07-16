// NAMEEN:
// NAMERU:Общая площадь трех прямоугольников

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `square`, которая принимает в качестве параметров длину и ширину прямоугольника и возвращает его площадь.

Напишите функцию `threeRoomSquare`, которая принимает в качестве параметров длины и ширины трех прямоугольников и возвращает их общую площадь.

Параметры функции `threeRoomSquare`:
- длина первого прямоугольника
- ширина первого прямоугольника
- длина второго прямоугольника
- ширина второго прямоугольника
- длина третьего прямоугольника
- ширина третьего прямоугольника

Внутри функции `threeRoomSquare` используйте функцию `square` для вычисления площади каждого прямоугольника.

Похожий пример:
```javascript
function sum(a, b){
  return a + b;
}

function sumThreeNumbers(a, b, c, d){
  return sum(a, b) + sum(c, d);
}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function square(a, b) {
  return a * b;
}

function threeRoomSquare(a, b, c, d, e, f) {
  return square(a, b) + square(c, d) + square(e, f);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function square', () => {
  expect(square).to.be.a('function');
});

it('Created function threeRoomSquare', () => {
  expect(threeRoomSquare).to.be.a('function');
});

it('Function square get 2 and 3 and return 6', () => {
  expect(square(2, 3)).to.be.equal(6);
});

it('Function square get 3 and 4 and return 12', () => {
  expect(square(3, 4)).to.be.equal(12);
});

it('Function threeRoomSquare get 2, 3, 3, 4, 5, 6 and return 42', () => {
  expect(threeRoomSquare(2, 3, 3, 4, 5, 6)).to.be.equal(48);
});

it('Function threeRoomSquare get 3, 4, 5, 6, 7, 8 and return 110', () => {
  expect(threeRoomSquare(3, 4, 5, 6, 7, 8)).to.be.equal(98);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
