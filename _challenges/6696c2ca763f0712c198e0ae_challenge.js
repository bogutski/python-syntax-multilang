// NAMEEN:
// NAMERU:За сколько времени наполнится бассейн?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Для перекачки воды в бассейн используется насос.

Напишите функцию `poolPumpTime`, которая принимает в качестве параметров:
`pumpSpeed` – скорость перекачки насоса в галонах в час
`poolVolume` – объем бассейна в кубических футах

Функция должна возвращать время в секундах, за которое бассейн будет полностью заполнен.

В одном кубическом футе `7.48052` галлонов.

Скрипт выполнения задания:
* Объем бассейна перевести в галлоны
* Объем бассейна в галлонах разделить на скорость насоса
* Полученный результат перевести в секунды


Примеры запуска функции:
```javascript
poolPumpTime(50, 2500);   // 1346493.6
poolPumpTime(100, 1000);  // 269298.72
poolPumpTime(500, 10000); // 538597.44
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun pool
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function poolPumpTime(pumpSpeed, poolVolume) {
  const poolGallons = poolVolume * 7.48052;
  return poolGallons / pumpSpeed * 3600;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function poolPumpTime', () => {
  expect(poolPumpTime).to.be.a('function');
});

it('poolPumpTime(100, 1000) should return 269298.72', () => {
  expect(poolPumpTime(100, 1000)).to.be.equal(269298.72);
});

it('poolPumpTime(200, 1000) should return 134649.36', () => {
  expect(poolPumpTime(200, 1000)).to.be.equal(134649.36);
});

it('poolPumpTime(100, 2000) should return 538597.44', () => {
  expect(poolPumpTime(100, 2000)).to.be.equal(538597.44);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
