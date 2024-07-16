// NAMEEN:
// NAMERU:Функция выводит в консоль результат умножения

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `calculateTotal`.

В теле функции умножьте `15` на `71` и выводите результат в консоль.

Похожий пример:

```javascript
console.log(2 * 4)
```

Ставьте пробелы вокруг знака умножения.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function calculateTotal() {
  console.log(15 * 71);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function calculateTotal', () => {
  expect(calculateTotal).to.be.a('function');
});

const entire = calculateTotal.toString();
const body = entire.slice(entire.indexOf('{') + 1, entire.lastIndexOf('}')).trim();
const strings = body.split('\n');

it('Functions contains console.log with multiplication', () => {
  expect(body).contains.oneOf(['console.log(15 * 71)', 'console.log(71 * 15)']);
});

it('Function contains 1 console log', () => {
  const occurrences = body.split('console.log').length - 1;
  expect(occurrences).eq(1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
