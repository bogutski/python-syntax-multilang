// NAMEEN:
// NAMERU:Цена автомобиля в зависимости от комплектации

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `carPrice`, которая принимает параметры:
* `basePrice` - базовая цена автомобиля
* `panoramicRoof` - наличие панорамной крыши, boolean
* `parkingSensors` - наличие датчиков парковки, boolean
* `leatherInterior` - наличие кожаного салона, boolean
* `navigation` - наличие навигации, boolean
* `multimedia` - наличие мультимедиа, boolean
* `climateControl` - наличие климат-контроля, boolean
* `heatedSeats` - наличие подогрева сидений, boolean

Наличие каждой опции увеличивает цену автомобиля на 10% от базовой цены.

Функция должна возвращать цену автомобиля с учетом всех опций.

Пример запуска функции:
```javascript
carPrice(10000, true, true, true, true, true, true, true); // 17000
carPrice(10000, false, false, false, false, false, false, false); // 10000
carPrice(10000, true, false, false, false, false, false, false); // 11000
```

Для расчета общей цены сначала сложите все опции и только потом рассчитайте размер наценки.

Прибавьте к базовой цене наценку.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function carPrice(basePrice, panoramicRoof, parkingSensors, leatherInterior, navigation, multimedia, climateControl, heatedSeats) {
  let percent = 0;
  if (panoramicRoof)  percent += 10;
  if (parkingSensors)  percent += 10;
  if (leatherInterior)  percent += 10;
  if (navigation)  percent += 10;
  if (multimedia)  percent += 10;
  if (climateControl)  percent += 10;
  if (heatedSeats)  percent += 10;

  const price = basePrice + basePrice * (percent / 100);

  return price;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function carPrice', () => {
  expect(carPrice).to.be.a('function');
});

it('Function returns correct result for arguments `10000, true, true, true, true, true, true, true`', () => {
  expect(carPrice(10000, true, true, true, true, true, true, true)).eq(17000);
});

it('Function returns correct result for arguments `10000, false, false, false, false, false, false, false`', () => {
  expect(carPrice(10000, false, false, false, false, false, false, false)).eq(10000);
});

it('Function returns correct result for arguments `10000, true, false, false, false, false, false, false`', () => {
  expect(carPrice(10000, true, false, false, false, false, false, false)).eq(11000);
});

it('Function returns correct result for arguments `10000, false, true, true, false, true, false, false`', () => {
  expect(carPrice(10000, false, true, true, false, true, false, false)).eq(13000);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
