// NAMEEN:
// NAMERU:Стоимость квадратного дюйма пиццы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `pizzaInchPrice`.

Параметры функции:
- `diameter` - диаметр пиццы в дюймах
- `slicePrice` - цена пиццы за 1 кусок
- `slices` - количество кусков пиццы

Функция должна возвращать стоимость квадратного дюйма пиццы.

Используйте значение `PI` равное `3.14`.

Требования к функции:
- создайте переменную `pizzaPrice` и высчитайте в ней стоимость пиццы целиком.
- создайте переменную `PI` и присвойте ей значение `3.14`.
- создайте переменную `area` и высчитайте в ней площадь пиццы.
- создайте переменную `inchPrice` и высчитайте в ней стоимость квадратного дюйма пиццы.
- верните переменную `inchPrice` из функции.

Подсказка:
- возведение в квадрат можно высчитать с помощью оператора `** 2`
- Вспомните формулу площади круга.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function pizzaInchPrice(diameter, slicePrice, slices) {
  const pizzaPrice = slicePrice * slices;
  const PI = 3.14;
  const area = PI * (diameter / 2) ** 2;
  const inchPrice = pizzaPrice / area;
  return inchPrice;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function pizzaInchPrice', () => {
  expect(pizzaInchPrice).to.be.a('function');
});

it('pizzaInchPrice(12, 2, 8) should return 0.14154281670205238', () => {
  expect(pizzaInchPrice(12, 2, 8)).to.equal(0.14154281670205238);
});

it('pizzaInchPrice(16, 3, 12) should return 0.17914012738853502', () => {
  expect(pizzaInchPrice(16, 3, 12)).to.equal(0.17914012738853502);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
