// NAMEEN:
// NAMERU:Функция и задача про автобусы. Версия 3

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Одновременно 2 автобуса выехали из одной точки и движутся в перпендикулярных направлениях.

Перпендикулярные направления означает, что если первый автобус движется вверх, то второй автобус движется вправо.
Или можно сказать, что первый автобус движется на север, а второй автобус движется на запад.

Скорость автобусов разная.

Создайте функцию `busDistance`, которая принимает три параметра: `bus1`, `bus2` и `time`.

Функция должна возвращать расстояние между автобусами.

`bus1` и `bus2` - это числа, скорость, в милях в час, с которой движутся автобусы.

`time` - это число, время, в минутах, которое прошло с момента выезда автобусов.

Требования к написанию функции:
* Создайте в функции переменную `distanceBus1` и присвойте в нее вычисление расстояния, которое проехал первый автобус.
* Создайте в функции переменную `distanceBus2` и присвойте в нее вычисление расстояния, которое проехал второй автобус.
* Остальное делайте как хотите.

Примеры:
```javascript
busDistance(10, 10, 60) // 14.142135623730951
busDistance(10, 20, 60) // 22.360679774997898
busDistance(10, 20, 120) // 44.721359549995796)
```

Это вам пригодится:
1. Вспомните геометрию и теорему Пифагора
2. Для возведения в квадрат используйте оператор `**`
3. Для извлечения квадратного корня используйте возведение в степень `0.5

```javascript
const a = 2;
const b = 3;
const c = (a ** 2 + b ** 2) ** 0.5;
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun bus 2
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function busDistance(bus1, bus2, time) {
  const distanceBus1 = bus1 * time / 60;
  const distanceBus2 = bus2 * time / 60;
  return (distanceBus1 ** 2 + distanceBus2 ** 2) ** 0.5;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function busDistance', () => {
  expect(busDistance).to.be.a('function');
});

it('Function busDistance has tree parameters bus1, bus2, time', () => {
  // function to string and then to array of arguments
  const args = busDistance.toString().match(/\(([^)]*)\)/)[1].split(',').map(arg => arg.trim());
  expect(args).to.be.eql(['bus1', 'bus2', 'time']);
});

it('Function busDistance returns correct value with 10, 10, 60', () => {
  expect(busDistance(10, 10, 60)).to.be.equal(14.142135623730951);
} );

it('Function busDistance returns correct value with 10, 20, 60', () => {
  expect(busDistance(10, 20, 60)).to.be.equal(22.360679774997898);
} );

it('Function busDistance returns correct value with 10, 20, 120', () => {
  expect(busDistance(10, 20, 120)).to.be.equal(44.721359549995796);
} );

it('Function busDistance returns correct value with 20, 10, 120', () => {
  expect(busDistance(30, 10, 120)).to.be.equal(63.245553203367585);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
