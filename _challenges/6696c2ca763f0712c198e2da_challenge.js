// NAMEEN:
// NAMERU:В каком числе дробная часть больше

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `compareFractionalParts`.

Функция принимает два числа, возвращает число, у которого дробная часть больше.

Если дробные части равны, то возвращается первое число.

Примеры запуска функции:
```javascript
compareFractionalParts(1.10, 1.2) // 1.2
compareFractionalParts(1.2, 1.1) // 1.2
compareFractionalParts(2.1, 1.1) // 2.1
compareFractionalParts(10.1, 2.3) // 2.3
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function compareFractionalParts(num1, num2) {
  const num1FractionalPart = num1 - Math.floor(num1);
  const num2FractionalPart = num2 - Math.floor(num2);
  if (num1FractionalPart === num2FractionalPart) return num1;
  return num1FractionalPart > num2FractionalPart ? num1 : num2;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function compareFractionalParts', () => {
  expect(compareFractionalParts).to.be.a('function');
});

it('compareFractionalParts(1.10, 1.2) should return 1.2', () => {
  expect(compareFractionalParts(1.10, 1.2)).to.equal(1.2);
});

it('compareFractionalParts(1.2, 1.1) should return 1.2', () => {
  expect(compareFractionalParts(1.2, 1.1)).to.equal(1.2);
});

it('compareFractionalParts(2.1, 1.1) should return 2.1', () => {
  expect(compareFractionalParts(2.1, 1.1)).to.equal(2.1);
});

it('compareFractionalParts(10.1, 2.3) should return 2.3', () => {
  expect(compareFractionalParts(10.1, 2.3)).to.equal(2.3);
});

it('compareFractionalParts(10.1, 10.2) should return 10.2', () => {
  expect(compareFractionalParts(10.1, 10.2)).to.equal(10.2);
});

it('compareFractionalParts(10.2, 10.1) should return 10.2', () => {
  expect(compareFractionalParts(10.2, 10.1)).to.equal(10.2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
