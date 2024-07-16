// NAMEEN:
// NAMERU:Округлить вверх наибольшее из трех чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `maxOfThree`, которая принимает три числа и возвращает наибольшее из них округленное в большую сторону.

Название параметров функции может быть любым.

Примеры запуска функции:
```javascript
maxOfThree(1.45, 2.12, 0.99) // 3
maxOfThree(1.45, 7.12, 2.99) // 8
maxOfThree(25, 24.2, 19.9) // 25
maxOfThree(0.1, 0.2, 0.3) // 1
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function maxOfThree(n1, n2, n3){
  if(n1 > n2 && n1 > n3) return Math.ceil(n1)
  if(n2 > n1 && n2 > n3) return Math.ceil(n2)
  if(n3 > n1 && n3 > n2) return Math.ceil(n3)
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function maxOfThree', () => {
  expect(maxOfThree).to.be.a('function');
});

it('Function maxOfThree does not include method Math.max', () => {
  expect(maxOfThree.toString()).to.not.include('Math.max');
});

it('maxOfThree(1.45, 2.12, 0.99) should return 3', () => {
  expect(maxOfThree(1.45, 2.12, 0.99)).to.equal(3);
});

it('maxOfThree(1.45, 7.12, 2.99) should return 8', () => {
  expect(maxOfThree(1.45, 7.12, 2.99)).to.equal(8);
});

it('maxOfThree(25, 24.2, 19.9) should return 25', () => {
  expect(maxOfThree(25, 24.2, 19.9)).to.equal(25);
});

it('maxOfThree(0.1, 0.2, 0.3) should return 1', () => {
  expect(maxOfThree(0.1, 0.2, 0.3)).to.equal(1);
});

it('maxOfThree(10.1, 12.2, 9.3) should return 1', () => {
  expect(maxOfThree(10.1, 12.2, 9.3)).to.equal(13);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
