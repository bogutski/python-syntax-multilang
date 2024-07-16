// NAMEEN:
// NAMERU:Определить на сколько один товар дороже другого

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `compareProducts`, которая принимает цены двух товаров и возвращает на сколько первый товар дороже второго.

Пример:
```javascript
compareProducts(10, 5) // 5
compareProducts(5, 10) // -5
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function compareProducts(num1, num2) {
  return num1 - num2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function compareProducts', () => {
  expect(compareProducts).to.be.a('function');
});

it('compareProducts(10, 5) should return 5', () => {
  expect(compareProducts(10, 5)).to.equal(5);
} );

it('compareProducts(5, 10) should return -5', () => {
  expect(compareProducts(5, 10)).to.equal(-5);
} );

it('compareProducts(5, 5) should return 0', () => {
  expect(compareProducts(5, 5)).to.equal(0);
} );
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
