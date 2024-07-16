// NAMEEN:
// NAMERU:Посчитай сколько плиток нужно для покрытия комнаты.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `calculateTiles`, которая принимает три параметра:
* `room` - объект, описывающий комнату,
* `tile` - объект, описывающий плитку,
* `k` - коэффициент, который учитывает, что плитки нужно купить на k процентов больше.

Объект `room` имеет следующие свойства:
* `width` - ширина комнаты, число в дюймах,
* `height` - высота комнаты, число в дюймах.

Объект `tile` имеет следующие свойства:
* `width` - ширина плитки, число в дюймах
* `height` - высота плитки, число в дюймах,
* `quantity` - количество плиток, число 0.

Функция должна посчитать, сколько плиток нужно для покрытия комнаты с учетом коэффициента `k`.

Результат вычислений должен быть округлен в большую сторону.

Для вычисления количества плиток используй формулу:
`количество плиток = Math.ceil((площадь комнаты / площадь плитки) * (1 + k / 100))`.

Функция должна вернуть объект `tile` с обновленным свойством `quantity`.

Пример запуска функции:
```javascript
calculateTiles({width: 100, height: 200}, {width: 2, height: 3, quantity: 0}, 10)
// {width: 2, height: 3, quantity: 3667}
```

Похожий пример:
```javascript
calculatePaint({width: 25, height: 3}, {flowRate: 24, quantity: 0}, 15)
// {flowRate: 24, quantity: 4}
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function calculateTiles(room, tile, k) {
  // k = 10% - коэффициент, который учитывает, что плитки нужно купить на 10% больше
  const roomArea = room.width * room.height;
  const tileArea = tile.width * tile.height;
  tile.quantity = Math.ceil((roomArea / tileArea) * (1 + k / 100));
  return tile;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function calculateTiles', () => {
  expect(calculateTiles).to.be.a('function');
});

it('calculateTiles should return object', () => {
  expect(calculateTiles({width: 120, height: 78}, {width: 8, height: 13, quantity: 0}, 11)).to.be.a('object');
});

it('calculateTiles({width: 100, height: 200}, {width: 2, height: 3}, 10) should return {width: 2, height: 3, quantity: 3667}', () => {
  expect(calculateTiles({width: 100, height: 200}, {width: 2, height: 3}, 10)).to.deep.equal({width: 2, height: 3, quantity: 3667});
});

it('calculateTiles({width: 345, height: 179}, {width: 4, height: 8}, 12) should return {width: 4, height: 8, quantity: 2162}', () => {
  expect(calculateTiles({width: 345, height: 179}, {width: 4, height: 8}, 12)).to.deep.equal({width: 4, height: 8, quantity: 2162});
});

it('calculateTiles({width: 120, height: 78}, {width: 8, height: 13}, 11) should return {width: 8, height: 13, quantity: 11}', () => {
  expect(calculateTiles({width: 120, height: 78}, {width: 8, height: 13}, 11)).to.deep.equal({width: 8, height: 13, quantity: 100});
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
