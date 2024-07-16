// NAMEEN:
// NAMERU:Отформатировать число. Два знака после запятой. toFixed

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
На вход функция `formatNumber` принимает одно число.

Необходимо вернуть это число, округленное до двух знаков после запятой.

Используйте для округления `toFixed`. Преобразуйте результат в число с помощью унарного плюса.

```javascript
const num = 1.111;
const numStr = num.toFixed(2); // строка '1.11'
const numNum = +numStr; // число 1.11
```

Примеры запуска функции:
```javascript
formatNumber(1) // 1
formatNumber(1.1) // 1.1
formatNumber(1.11) // 1.11
formatNumber(1.111) // 1.11

formatNumber(1.99) // 1.99
formatNumber(1.999) // 2
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
  return +num.toFixed(2);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function formatNumber', () => {
  expect(formatNumber).to.be.a('function');
});

it('formatNumber(1) should return 1.00', () => {
  expect(formatNumber(1)).to.equal(1.0);
});

it('formatNumber(1.1) should return 1.10', () => {
  expect(formatNumber(1.1)).to.equal(1.1);
});

it('formatNumber(1.11) should return 1.11', () => {
  expect(formatNumber(1.11)).to.equal(1.11);
});

it('formatNumber(1.111) should return 1.11', () => {
  expect(formatNumber(1.111)).to.equal(1.11);
});

it('formatNumber(1.1111) should return 1.11', () => {
  expect(formatNumber(1.1111)).to.equal(1.11);
});

it('formatNumber(1.99) should return 1.99', () => {
  expect(formatNumber(1.99)).to.equal(1.99);
});

it('formatNumber(1.999) should return 2.00', () => {
  expect(formatNumber(1.999)).to.equal(2.0);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
