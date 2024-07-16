// NAMEEN:
// NAMERU:Переформатировать номер телефона

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В функцию `formatPhoneNumber` передается строка, содержащая номер телефона.

Входящая строка всегда будет вида `+XXXXXXXXXXX`, где `X` - цифра.
Необходимо переформатировать номер телефона в формат `+1 (XXX) XXX-XXXX`, где `X` - цифра.

Примеры запуска функции:
```javascript
formatPhoneNumber('+17071234567'); // '+1 (707) 123-4567'
formatPhoneNumber('+24151234567'); // '+2 (415) 123-4567'
formatPhoneNumber('+36501234567'); // '+3 (650) 123-4567'
```

Используйте конкатенацию строк и обращайтесь к каждому символу строки по индексу.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function formatPhoneNumber(p) {
  return `+${p[1]} (${p.slice(2, 5)}) ${p.slice(5, 8)}-${p.slice(8)}`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function formatPhoneNumber', () => {
  expect(formatPhoneNumber).to.be.a('function');
});

it('formatPhoneNumber("+17071234567") should return "+1 (707) 123-4567"', () => {
  expect(formatPhoneNumber('+17071234567')).to.equal('+1 (707) 123-4567');
});

it('formatPhoneNumber("+24151234567") should return "+2 (415) 123-4567"', () => {
  expect(formatPhoneNumber('+24151234567')).to.equal('+2 (415) 123-4567');
});

it('formatPhoneNumber("+36501234567") should return "+3 (650) 123-4567"', () => {
  expect(formatPhoneNumber('+36501234567')).to.equal('+3 (650) 123-4567');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
