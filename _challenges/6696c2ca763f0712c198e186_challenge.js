// NAMEEN:
// NAMERU:Хватит ли бензина чтобы доехать до заправки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `isEnoughFuel`, которая принимает три параметра:

* `distance` – расстояние до заправки,
* `fuel` – количество бензина в баке, галлоны,
* `mpg` – (miles per gallon) – сколько миль проедет машина на одном галлоне бензина. Опциональный параметр, по умолчанию равен `25`.

Функция должна вернуть `true`, если машина сможет доехать до заправки, и `false` если нет.

Похожая задача:
```javascript
function isEnoughMoney(money, price, count) {
  return money >= price * count;
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
function isEnoughFuel(distance, fuel, mpg = 25) {
  return mpg * fuel >= distance;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isEnoughFuel', () => {
  expect(isEnoughFuel).to.be.a('function');
});

it('isEnoughFuel(100, 10) should return true', () => {
  expect(isEnoughFuel(100, 10)).to.equal(true);
});

it('isEnoughFuel(100, 5) should return true', () => {
  expect(isEnoughFuel(100, 5)).to.equal(true);
});

it('isEnoughFuel(100, 10, 50) should return true', () => {
  expect(isEnoughFuel(100, 10, 50)).to.equal(true);
});

it('isEnoughFuel(100, 5, 50) should return true', () => {
  expect(isEnoughFuel(100, 5, 50)).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
