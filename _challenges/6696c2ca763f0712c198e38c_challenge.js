// NAMEEN:
// NAMERU:Недвижимость дорожает ближе к центру

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Недвижимость дорожает ближе к центру города.

В самом центре города цена составляет 300% от недвижимости которая расположена в 50 миль от центра. То есть в 3 раза дороже.

Напишите функцию `realEstatePrice`, которая принимает два параметра:
* `distance` - расстояние от центра города в милях
* `price` - базовая цена недвижимости в 50 милях от центра.

Функция должна возвращать цену недвижимости в зависимости от расстояния от центра города.

Алгоритм вычисления цены:

Допустим, что `distance = 10` и `price = 1000`

Для решения задачи вычислите цену недвижимости в самом центре города: `centerPrice = price * 3 = 1000 * 3 = 3000`

Затем найдите на сколько дешевеет недвижимость на каждую милю от центра города: `pricePerMile = (centerPrice - price) / 50 = (3000 - 1000) / 50 = 40`

Значение `pricePerMile` - это цена за каждую милю от центра города. То есть на каждую милю от центра города недвижимость дешевле на 40 долларов.

Теперь вычислите на сколько дешевеет недвижимость от центра города: `pricePerDistance = pricePerMile * distance = 40 * 10 = 400`

И наконец, вычислите цену недвижимости: `finalPrice = centerPrice - pricePerDistance = 3000 - 400 = 2600`

Если расстояние от центра города больше 50 миль, то функция должна возвращать базовую цену.

Примеры запуска функции:
```javascript
realEstatePrice(50, 1000); // 1000
realEstatePrice(25, 1000); // 1500
realEstatePrice(15, 1000); // 2000
realEstatePrice(0, 1000); // 3000
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function realEstatePrice(distance, price) {
  if (distance >= 50) return price;

  const centerPrice = price * 3;
  const pricePerMile = (centerPrice - price) / 50;
  const pricePerDistance = pricePerMile * distance;
  return centerPrice - pricePerDistance;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function realEstatePrice', () => {
  expect(realEstatePrice).to.be.a('function');
});

it('realEstatePrice(60, 1000) returns 1000', () => {
  expect(realEstatePrice(60, 1000)).to.equal(1000);
});

it('realEstatePrice(50, 1000) returns 1000', () => {
  expect(realEstatePrice(50, 1000)).to.equal(1000);
});

it('realEstatePrice(45, 1000) returns 1200', () => {
  expect(realEstatePrice(45, 1000)).to.equal(1200);
});

it('realEstatePrice(25, 1000) returns 1500', () => {
  expect(realEstatePrice(25, 1000)).to.equal(2000);
});

it('realEstatePrice(15, 1000) returns 2000', () => {
  expect(realEstatePrice(15, 1000)).to.equal(2400);
});

it('realEstatePrice(10, 1000) returns 2600', () => {
  expect(realEstatePrice(10, 1000)).to.equal(2600);
});

it('realEstatePrice(0, 1000) returns 3000', () => {
  expect(realEstatePrice(0, 1000)).to.equal(3000);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
