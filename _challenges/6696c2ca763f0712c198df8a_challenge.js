// NAMEEN:
// NAMERU:Сколько распилов нужно сделать на бревне

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `woodSplit`, которая принимает один параметр.

Параметр функции - это число частей, на которые нужно разделить бревно.

Число не будет меньше 1.

Функция должна возвращать количество распилов, которые нужно сделать на бревне, чтобы получить указанное количество частей.

Например:

* Если параметр равен `1`, то бревно не нужно распиливать и функция должна вернуть `0`.

* Если параметр равен `2`, то бревно нужно распилить один раз, чтобы получить две части.

* Если параметр равен `3`, то бревно нужно распилить два раза, чтобы получить три части.


Примеры запуска функции:

```javascript
woodSplit(1) === 0
woodSplit(2) === 1
woodSplit(3) === 2
woodSplit(4) === 3
woodSplit(5) === 4
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function woodSplit(parts) {
  return parts - 1;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function woodSplit', () => {
  expect(woodSplit).to.be.a('function');
});

it('woodSplit(1) returns 0', () => {
  expect(woodSplit(1)).to.equal(0);
} );

it('woodSplit(2) returns 1', () => {
  expect(woodSplit(2)).to.equal(1);
} );

it('woodSplit(3) returns 2', () => {
  expect(woodSplit(3)).to.equal(2);

} );

it('woodSplit(4) returns 3', () => {
  expect(woodSplit(4)).to.equal(3);
} );
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
