// NAMEEN:
// NAMERU:Вычислите скидку на два товара

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `discountOfTwo`, которая вычислит дисконт на два товара.

Функция принимает 4 параметра: `priceProduct1`, `priceProduct2`, `discountProduct1`, `discountProduct2`.

Скидки указаны в процентах.

Функция должна вернуть только сумму дисконта на оба товара.

Примеры:
```javascript
discountOfTwo(100, 200, 10, 10) // 30
discountOfTwo(100, 200, 10, 20) // 50
discountOfTwo(100, 200, 20, 10) // 40
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function discount(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function discountOfTwo(p1, p2, d1, d2) {
  return (p1 * d1) / 100 + (p2 * d2) / 100;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function discountOfTwo', () => {
  expect(discountOfTwo).to.be.a('function');
});

it('Function returns correct result for arguments `100, 200, 10, 10`', () => {
  expect(discountOfTwo(100, 200, 10, 10)).eq(30);
});

it('Function returns correct result for arguments `100, 200, 10, 20`', () => {
  expect(discountOfTwo(100, 200, 10, 20)).eq(50);
});

it('Function returns correct result for arguments `100, 200, 20, 10`', () => {
  expect(discountOfTwo(100, 200, 20, 10)).eq(40);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
