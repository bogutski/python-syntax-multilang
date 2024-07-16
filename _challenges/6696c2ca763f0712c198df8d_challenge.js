// NAMEEN:
// NAMERU:Рассчитать стоимость ремонта прямоугольной комнаты

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `remodelingCost`, которая принимает параметры:

* `side1Foot` - длина одной стороны комнаты в футах,
* `side2Foot` - длина второй стороны комнаты в футах,
* `costPerFoot` - стоимость ремонта за 1 квадратный фут


Пример расчета стоимости ремонта:

```javascript
remodelingCost(10, 10, 100) // 10000
remodelingCost(20, 20, 100) // 40000
remodelingCost(30, 30, 100) // 90000
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function (){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function remodelingCost(side1Foot, side2Foot, costPerFoot) {
  return side1Foot * side2Foot * costPerFoot;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function remodelingCost', () => {
  expect(remodelingCost).to.be.a('function');
});

it('remodelingCost(10, 10, 100) returns 10000', () => {
  expect(remodelingCost(10, 10, 100)).to.equal(10000);
});

it('remodelingCost(20, 20, 100) returns 40000', () => {
  expect(remodelingCost(20, 20, 100)).to.equal(40000);
});

it('remodelingCost(30, 30, 100) returns 90000', () => {
  expect(remodelingCost(30, 30, 100)).to.equal(90000);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
