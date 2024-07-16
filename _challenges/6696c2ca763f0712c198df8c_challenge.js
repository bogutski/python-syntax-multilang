// NAMEEN:
// NAMERU:Рассчитать стоимость топлива для поездки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `tripPrice`, которая принимает три параметра:

* `distance` - расстояние в милях,
* `mpg` - количество миль, которое может проехать автомобиль на одном галлоне топлива,
* `fuelPrice` - цена одного галлона топлива

Функция должна вернуть цену, которую нужно заплатить, что-бы проехать необходимую дистанцию.


Примеры запуска функции:
```javascript
tripPrice(60, 15, 3.10);   // 12.4
tripPrice(240, 12, 2.15);  // 43
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function tripPrice(distance, mpg, fuelPrice) {
  return distance / mpg * fuelPrice;
}

console.log(tripPrice(60, 15, 3.10));  // 12.4
console.log(tripPrice(240, 12, 2.15));  // 43
// SOLUTIONEND


// OPENTESTSSTART
it('Created function tripPrice', () => {
  expect(tripPrice).to.be.a('function');
});

it('tripPrice(100, 20, 3) should return 15', () => {
  expect(tripPrice(100, 20, 3)).to.equal(15);
});

it('tripPrice(40, 25, 2.50) should return 10', () => {
  expect(tripPrice(40, 25, 2.50)).to.equal(4);
});

it('tripPrice(90, 25, 2.50) should return 18', () => {
  expect(tripPrice(90, 25, 2.50)).to.equal(9);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
