// NAMEEN:
// NAMERU:Функция заполняет объект свойствами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `roomProperties`, которая принимает три параметра: `width`, `height`, `length`.

Функция должна возвращать объект со свойствами `width`, `height` и `length`, которые будут равны соответствующим аргументам.

Примеры запуска функции:
```javascript
roomProperties(10, 20, 30); // { width: 10, height: 20, length: 30 }
roomProperties(5, 10, 15); // { width: 5, height: 10, length: 15 }
```

Похожая функция:
```javascript
function carProperties(model, year, color) {
  return {
    model,
    year,
    color,
  };
}

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function roomProperties(width, height, length) {
  return {
    width,
    height,
    length,
  };
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function roomProperties', () => {
  expect(roomProperties).to.be.a('function');
});

it('roomProperties(10, 20, 30) return { width: 10, height: 20, length: 30 }', () => {
  expect(roomProperties(10, 20, 30)).eql({ width: 10, height: 20, length: 30 });
});

it('roomProperties(5, 10, 15) return { width: 5, height: 10, length: 15 }', () => {
  expect(roomProperties(5, 10, 15)).eql({ width: 5, height: 10, length: 15 });
});

it('roomProperties(1, 2, 3) return { width: 1, height: 2, length: 3 }', () => {
  expect(roomProperties(1, 2, 3)).eql({ width: 1, height: 2, length: 3 });
});

it('roomProperties(0, 0, 0) return { width: 0, height: 0, length: 0 }', () => {
  expect(roomProperties(0, 0, 0)).eql({ width: 0, height: 0, length: 0 });
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
