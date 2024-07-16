// NAMEEN:
// NAMERU:Правду ли говорит продавец пиццы?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Продавец пиццы говорит, что большая пицца выгоднее маленькой по соотношению цены и размера.

Давайте проверим это утверждение при разных диаметрах и ценах.

В функцию `pizzaCompare` передаются параметры:

* `smallDiameter` - диаметр маленькой пиццы,
* `bigDiameter` - диаметр большой пиццы,
* `smallPrice` - цена маленькой пиццы,
* `bigPrice` - цена большой пиццы.

Если большая пицца действительно выгоднее, то функция должна вернуть `true`, иначе `false`.

Алгоритм решения:
* 1. Найти площадь маленькой пиццы
* 2. Найти площадь большой пиццы
* 3. Найти цену за квадратный сантиметр маленькой пиццы
* 4. Найти цену за квадратный сантиметр большой пиццы
* 5. Сравнить цены за квадратный сантиметр
* 6. Вернуть результат сравнения

Площадь круга равна `3.14 * radius ** 2`.

Вы заметили, что в функции `pizzaCompare` есть повторяющийся код? Попробуйте вынести его в отдельную функцию `getCircleArea` и вызывать ее внутри `pizzaCompare`.

Создайте функцию `getCircleArea`, которая принимает один параметр `diameter` и возвращает площадь круга. Используйте эту функцию внутри `pizzaCompare`.

Функция `getCircleArea` должна быть объявлена рядом с функцией `pizzaCompare`, но не внутри ее. Функция `pizzaCompare` должна вызывать функцию `getCircleArea` внутри себя.

Пример двух функций:
```javascript
function getRoomArea(width, length) {
  return width * length;
}

function twoRoomsAreaCompare(width1, length1, width2, length2) {
  const area1 = getRoomArea(width1, length1);
  const area2 = getRoomArea(width2, length2);
  return area1 > area2;
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
function getCircleArea(diameter) {
  return 3.14 * (diameter / 2) ** 2;
}

function pizzaCompare(smallDiameter, bigDiameter, smallPrice, bigPrice) {
  const smallArea = getCircleArea(smallDiameter);
  const bigArea = getCircleArea(bigDiameter);
  const smallPricePerSquareCm = smallPrice / smallArea;
  const bigPricePerSquareCm = bigPrice / bigArea;
  return bigPricePerSquareCm < smallPricePerSquareCm;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function pizzaCompare', () => {
  expect(pizzaCompare).to.be.a('function');
});

it('pizzaCompare(10, 20, 100, 200) should return true', () => {
  expect(pizzaCompare(10, 20, 100, 200)).to.be.true;
});

it('pizzaCompare(10, 20, 200, 100) should return true', () => {
  expect(pizzaCompare(10, 20, 200, 100)).to.be.true;
});

it('pizzaCompare(10, 20, 100, 100) should return true', () => {
  expect(pizzaCompare(10, 20, 100, 100)).to.be.true;
});

it('pizzaCompare(10, 20, 200, 200) should return true', () => {
  expect(pizzaCompare(10, 20, 200, 200)).to.be.true;
});

it('Created function getCircleArea', () => {
  expect(getCircleArea).to.be.a('function');
});

it('getCircleArea(10) should return 78.5', () => {
  expect(getCircleArea(10)).to.equal(78.5);
});

it('getCircleArea(20) should return 314', () => {
  expect(getCircleArea(20)).to.equal(314);
});

it('getCircleArea(30) should return 706.5', () => {
  expect(getCircleArea(30)).to.equal(706.5);
});

it('pizzaCompare should contain getCircleArea', () => {
  expect(pizzaCompare.toString().includes('getCircleArea')).to.be.true;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
