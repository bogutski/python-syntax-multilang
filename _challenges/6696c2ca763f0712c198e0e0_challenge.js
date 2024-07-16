// NAMEEN:
// NAMERU:Как далеко проедут автомобили c учетом ветра

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `distance`, которая принимает три параметра:
`mpg` – расход топлива в милях на галлон,
`tank` – количество галлонов в баке,
`wind` – процент помощи ветра. Если отрицательное число, то ветер уменьшает дистанцию.

Если `wind` равен `10`, то это означает, что ветер увеличивает дистанцию на `10%`.
Если `wind` равен `-10`, то это означает, что ветер уменьшает дистанцию на `10%`.

Если `wind` не указан, то считать, что `wind` равен `-5`. Это параметр по умолчанию.

Функция должна возвращать расстояние, которое проедет автомобиль с учетом ветра.

* Создайте переменную `car1Distance` и присвойте ей результат вызова функции `distance` с аргументами `20`, `3` и `0`.
* Создайте переменную `car2Distance` и присвойте ей результат вызова функции `distance` с аргументами `30`, `3` и `10`.
* Создайте переменную `car3Distance` и присвойте ей результат вызова функции `distance` с аргументами `40`, `3` и `-10`.
* Создайте переменную `car4Distance` и присвойте ей результат вызова функции `distance` с аргументами `50`, `4`.


Используйте формулу `mpg * tank * (1 + wind / 100)` для расчета дистанции.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function distance(mpg, tank, wind = -5) {
  return mpg * tank * (1 + wind / 100);
}

const car1Distance = distance(20, 3, 0);
const car2Distance = distance(30, 3, 10);
const car3Distance = distance(40, 3, -10);
const car4Distance = distance(50, 4);
// SOLUTIONEND


// OPENTESTSSTART
it('Created function distance', () => {
  expect(distance).to.be.a('function');
});

it('function has 3 parameters', () => {
  const func = distance.toString();
  const params = func.match(/\((.*?)\)/)[1].split(',').length;
  expect(params).to.equal(3);
});

it('distance(10, 10, 0) returns 100', () => {
  expect(distance(10, 10, 0)).to.equal(100);
});

it('distance(10, 10, 10) returns 120', () => {
  expect(distance(10, 10, 20)).to.equal(120);
});

it('distance(40, 10, 50) returns 600', () => {
  expect(distance(40, 10, 50)).to.equal(600);
});

it('distance(10, 10, -10) returns 90', () => {
  expect(distance(10, 10, -10)).to.equal(90);
});

it('distance(10, 10, -50) returns 50', () => {
  expect(distance(10, 10, -50)).to.equal(50);
});

it('distance(10, 10) returns 90', () => {
  expect(distance(10, 10)).to.equal(95);
});

// var car1Distance = distance(20, 3, 0);
it('car1Distance = distance(20, 3, 0) returns 60', () => {
  expect(car1Distance).to.equal(distance(20, 3, 0));
  expect(car1Distance).to.equal(60);
});

// var car2Distance = distance(30, 3, 10);
it('car2Distance = distance(30, 3, 10) returns 99', () => {
  expect(car2Distance).to.equal(distance(30, 3, 10));
  expect(car2Distance).to.equal(99.00000000000001);
});

// var car3Distance = distance(40, 3, -10);
it('car3Distance = distance(40, 3, -10) returns 108', () => {
  expect(car3Distance).to.equal(distance(40, 3, -10));
  expect(car3Distance).to.equal(108);
});

// var car4Distance = distance(50, 4);
it('car4Distance = distance(50, 4) returns 200', () => {
  expect(car4Distance).to.equal(distance(50, 4));
  expect(car4Distance).to.equal(190);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
