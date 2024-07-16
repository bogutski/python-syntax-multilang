// NAMEEN:
// NAMERU:Округленная площадь круга

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `roundCircleArea`, которая принимает один параметр – радиус круга, и возвращает его площадь, округленную в большую сторону.

Числа могут быть целыми или дробными. Название параметра функции выберите сами.

Значение `π` в JavaScript можно получить так: `Math.PI`.

```javascript
const square = Math.PI * radius ** 2;
```

Примеры вызова функции:
```javascript
roundCircleArea(1) // 4
roundCircleArea(1.5) // 7
roundCircleArea(2) // 13
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function roundCircleArea(radius) {
  return Math.ceil(Math.PI * radius ** 2);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function roundCircleArea', () => {
  expect(roundCircleArea).to.be.a('function');
});

it('roundCircleArea(1) should return 4', () => {
  expect(roundCircleArea(1)).to.equal(4);
});

it('roundCircleArea(1.5) should return 8', () => {
  expect(roundCircleArea(1.5)).to.equal(8);
});

it('roundCircleArea(2) should return 13', () => {
  expect(roundCircleArea(2)).to.equal(13);
});

it('roundCircleArea(3) should return 29', () => {
  expect(roundCircleArea(3)).to.equal(29);
});

it('roundCircleArea(4) should return 51', () => {
  expect(roundCircleArea(4)).to.equal(51);
});

it('roundCircleArea(5) should return 79', () => {
  expect(roundCircleArea(5)).to.equal(79);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
