// NAMEEN:
// NAMERU:Функция profitCalculation с расчетом по формуле

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `profitCalculation`, которая принимает три аргумента: `income`, `cost`, `taxPercent`.

Функция должна вести расчет прибыли по формуле: `income - cost - (income - cost) * (taxPercent / 100)`.

По возможности в функции используйте переменные для хранения промежуточных значений.

Создайте переменные `client1` и `client2` и присвойте им результаты вызова функции `profitCalculation` с разными аргументами.

```javascript
const client1 = profitCalculation(1000, 500, 10);
const client2 = profitCalculation(1000, 500, 20);
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function profitCalculation(income, cost, taxPercent) {
  return income - cost - (income - cost) * (taxPercent / 100);
}

const client1 = profitCalculation(1000, 500, 10);
const client2 = profitCalculation(1000, 500, 20);
// SOLUTIONEND


// OPENTESTSSTART
it('Created function profitCalculation', () => {
  expect(profitCalculation).to.be.a('function');
});

it('profitCalculation(1000, 500, 10) should return 450', () => {
  expect(profitCalculation(1000, 500, 10)).to.be.equal(450);
});

it('profitCalculation(1000, 500, 20) should return 400', () => {
  expect(profitCalculation(1000, 500, 20)).to.be.equal(400);
});

it('profitCalculation(1000, 500, 30) should return 350', () => {
  expect(profitCalculation(1000, 500, 30)).to.be.equal(350);
});

it('profitCalculation(1000, 500, 40) should return 300', () => {
  expect(profitCalculation(1000, 500, 40)).to.be.equal(300);
});

it('created variable client1', () => {
  expect(client1).to.be.equal(450);
});

it('created variable client2', () => {
  expect(client2).to.be.equal(400);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
