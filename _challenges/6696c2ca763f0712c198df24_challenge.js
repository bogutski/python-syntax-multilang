// NAMEEN:
// NAMERU:Функция выводит в консоль тип 'number'

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `showNumberType`, которая определяет и выводит
в консоль чему равен тип данных числа `5`.

Чтобы определить тип, используйте оператор `typeof`.

```javascript
typeof 15
```

Если нужно вывести в консоль:
```javascript
console.log(typeof 15);
```

Напишите функцию, в которой будет вывод в консоль с определением типа числа `5`;
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function showNumberType() {
  console.log(typeof 5);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function showNumberType', () => {
  expect(showNumberType).to.be.a('function');
});

const entire = showNumberType.toString();
const body = entire.slice(entire.indexOf('{') + 1, entire.lastIndexOf('}')).trim();
const strings = body.split('\n');

it('Functions contains console.log with typeof 5', () => {
  expect(body).contains('console.log(typeof 5)');
});

it('Function contains 1 console log', () => {
  const occurrences = body.split('console.log').length - 1;
  expect(occurrences).eq(1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
