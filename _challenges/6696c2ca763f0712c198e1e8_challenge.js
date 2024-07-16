// NAMEEN:
// NAMERU:Всегда четные числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `alwaysEven`, которая принимает число и возвращает его же, если оно четное, и следующее четное, если нечетное.

Вам это поможет:
```javascript
const num = 10;
console.log(num % 2); // 0
```

Если число четное, то остаток от деления на 2 будет равен 0.

Если число нечетное, то остаток от деления на 2 будет больше 0.

Примеры исполнения функции:
```javascript
alwaysEven(10); // 10
alwaysEven(11); // 12
alwaysEven(12); // 12
alwaysEven(13); // 14
```

Для сравнения с нулем используйте оператор `===` тройное равно, строгое равенство.
```javascript
const num = 0;
console.log(num === 0); // true
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function alwaysEven(num) {
  return num % 2 < 1 ? num : num + 1;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function alwaysEven', () => {
  expect(alwaysEven).to.be.a('function');
});

it('alwaysEven(10) should return 10', () => {
  expect(alwaysEven(10)).to.equal(10);
});

it('alwaysEven(11) should return 12', () => {
  expect(alwaysEven(11)).to.equal(12);
});

it('alwaysEven(12) should return 12', () => {
  expect(alwaysEven(12)).to.equal(12);
});

it('alwaysEven(13) should return 14', () => {
  expect(alwaysEven(13)).to.equal(14);
});

it('alwaysEven(14) should return 14', () => {
  expect(alwaysEven(14)).to.equal(14);
});

it('alwaysEven(15) should return 16', () => {
  expect(alwaysEven(15)).to.equal(16);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
