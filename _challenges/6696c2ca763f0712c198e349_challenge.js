// NAMEEN:
// NAMERU:Процент от числа с форматированием

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `getPercent`, которая принимает два числа: `num` и `percent`.

Функция должна возвращать процент от `num`, округленный до двух знаков после запятой.

Примеры запуска функции:
```javascript
getPercent(100, 10) // 10
getPercent(100, 20) // 20
getPercent(99, 32) // 31.68
getPercent(8, 17) // 1.36
getPercent(40, 25) // 10
getPercent(40, 13) // 5.2
```


INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getPercent(num, percent) {
  return +(num * (percent / 100)).toFixed(2);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function getPercent', () => {
  expect(getPercent).to.be.a('function');
});

it('getPercent(100, 10) should return 10', () => {
  expect(getPercent(100, 10)).to.equal(10);
});

it('getPercent(90, 33) should return 29.7', () => {
  expect(getPercent(90, 33)).to.equal(29.7);
});

it('getPercent(99, 32) should return 31.68', () => {
  expect(getPercent(99, 32)).to.equal(31.68);
});

it('getPercent(40, 13) should return 5.2', () => {
  expect(getPercent(40, 13)).to.equal(5.2);
});

it('getPercent(8, 17) should return 1.36', () => {
  expect(getPercent(8, 17)).to.equal(1.36);
});

it('getPercent(11, 2.71) should return 0.3', () => {
  expect(getPercent(11, 2.71)).to.equal(0.3);
});

it('getPercent(7, 11) should return 0.77', () => {
  expect(getPercent(7, 11)).to.equal(0.77);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
