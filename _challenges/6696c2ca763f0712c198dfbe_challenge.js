// NAMEEN:
// NAMERU:Дисконт при покупке. Параметры по умолчанию

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `discountCalculate`, которая принимает два параметра:

- `price` – цена товара. Число. По умолчанию равно 0.
- `discount` – скидка в процентах. Число. По умолчанию равно 10.

Функция должна возвращать цену товара с учетом скидки.

Цена товара будет всегда больше нуля, а скидка – от 0 до 100.

Примеры:
```javascript
discountCalculate(100, 5); // 95
discountCalculate(100); // 90
discountCalculate(100, 0); // 100
discountCalculate(100, 100); // 0
discountCalculate(50, 10); // 45
discountCalculate(50, 20); // 40
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
function discountCalculate(price = 0, discount = 10) {
  return price - (price * discount / 100);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function discountCalculate', () => {
  expect(discountCalculate).to.be.a('function');
});

it('discountCalculate(100, 5) should return 95', () => {
  expect(discountCalculate(100, 5)).to.equal(95);
});

it('discountCalculate(100) should return 90', () => {
  expect(discountCalculate(100)).to.equal(90);
});

it('discountCalculate(100, 0) should return 100', () => {
  expect(discountCalculate(100, 0)).to.equal(100);
});

it('discountCalculate(100, 100) should return 0', () => {
  expect(discountCalculate(100, 100)).to.equal(0);
});

it('No values. discountCalculate() should return 0', () => {
  expect(discountCalculate()).eq(0);
});

it('discountCalculate(50, 10) should return 45', () => {
  expect(discountCalculate(50, 10)).to.equal(45);
});

it('discountCalculate(50, 20) should return 40', () => {
  expect(discountCalculate(50, 20)).to.equal(40);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
