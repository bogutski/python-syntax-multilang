// NAMEEN:
// NAMERU:Форматировать число. Три знака после запятой. toFixed

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `formatNumber`, которая принимает одно число и возвращает его, округленное до трех знаков после запятой.

Используйте для округления `toFixed`. Преобразуйте результат в число с помощью унарного плюса.

Примеры запуска функции:
```javascript
formatNumber(1) // 1
formatNumber(1.1) // 1.1
formatNumber(1.11) // 1.11
formatNumber(1.1111) // 1.111
formatNumber(1.231) // 1.231
formatNumber(1.2398) // 1.24
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function formatNumber(num) {
  return +num.toFixed(3);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function formatNumber', () => {
  expect(formatNumber).to.be.a('function');
});

it('formatNumber(1) should return 1.000', () => {
  expect(formatNumber(1)).to.equal(1.0);
});

it('formatNumber(1.1) should return 1.100', () => {
  expect(formatNumber(1.1)).to.equal(1.1);
});

it('formatNumber(1.11) should return 1.110', () => {
  expect(formatNumber(1.11)).to.equal(1.11);
});

it('formatNumber(1.111) should return 1.111', () => {
  expect(formatNumber(1.111)).to.equal(1.111);
});

it('formatNumber(1.1111) should return 1.111', () => {
  expect(formatNumber(1.1111)).to.equal(1.111);
});

it('formatNumber(1.11111) should return 1.111', () => {
  expect(formatNumber(1.11111)).to.equal(1.111);
});

it('formatNumber(1.2391) should return 1.239', () => {
  expect(formatNumber(1.2391)).to.equal(1.239);
});

it('formatNumber(1.2398) should return 1.24', () => {
  expect(formatNumber(1.2398)).to.equal(1.24);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
