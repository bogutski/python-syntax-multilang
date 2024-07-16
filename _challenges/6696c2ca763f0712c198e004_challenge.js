// NAMEEN:
// NAMERU:Создаем переменные для расчета площади прямоугольника

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную `width` с помощью ключевого слова const и присвойте ей значение 10.
Создайте переменную `height` с помощью ключевого слова const и присвойте ей значение 20.
Создайте переменную `area` с помощью ключевого слова const и присвойте ей значение произведения переменных `width` и `height`.

Похожий пример:
```javascript
const a = 10;
const b = 20;
const c = a * b;
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
// YOUR CODE HERE
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const width = 10;
const height = 20;
const area = width * height;
// SOLUTIONEND


// OPENTESTSSTART
it('Created variable width', () => {
  expect(width).to.be.a('number');
});

it('Created variable height', () => {
  expect(height).to.be.a('number');
});

it('Created variable area', () => {
  expect(area).to.be.a('number');
});

it('Variable width has value 10', () => {
  expect(width).to.be.equal(10);
});

it('Variable height has value 20', () => {
  expect(height).to.be.equal(20);
});

it('Variable area has value 200', () => {
  expect(area).to.be.equal(200);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
