// NAMEEN:
// NAMERU:Сумма в объекте

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumObject`, которая принимает два параметра: `n1`, `n2`. Оба параметра - числа.

Функция должна возвращать объект со свойствами `n1`, `n2`, которые будут равны соответствующим аргументам и `sum`.

Свойство `sum` должно быть равно сумме `n1` и `n2`.

Примеры запуска функции:
```javascript
sumObject(10, 20); // { n1: 10, n2: 20, sum: 30 }
sumObject(5, 10); // { n1: 5, n2: 10, sum: 15 }
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumObject(n1, n2) {
  return {
    n1,
    n2,
    sum: n1 + n2,
  };
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function sumObject', () => {
  expect(sumObject).to.be.a('function');
});

it('sumObject(10, 20) return { n1: 10, n2: 20, sum: 30 }', () => {
  expect(sumObject(10, 20)).eql({ n1: 10, n2: 20, sum: 30 });
} );

it('sumObject(5, 10) return { n1: 5, n2: 10, sum: 15 }', () => {
  expect(sumObject(5, 10)).eql({ n1: 5, n2: 10, sum: 15 });
} );

it('sumObject(1, 2) return { n1: 1, n2: 2, sum: 3 }', () => {
  expect(sumObject(1, 2)).eql({ n1: 1, n2: 2, sum: 3 });
} );

it('sumObject(0, 0) return { n1: 0, n2: 0, sum: 0 }', () => {
  expect(sumObject(0, 0)).eql({ n1: 0, n2: 0, sum: 0 });
} );
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
