// NAMEEN:
// NAMERU:Напишите функцию, которая возвращает то же самое, что и переданное ей значение

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
На вход функция `nonsense` принимает один параметр и возвращает его без изменений.

Пример:
```javascript
nonsense('Hello') // 'Hello'
nonsense(42) // 42
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
nonsense here
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function nonsense(p) {
  return p;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function nonsense', () => {
  expect(nonsense).to.be.a('function');
});

it('Function returns the same value', () => {
  expect(nonsense('Hello')).to.equal('Hello');
});

it('Function returns the same value', () => {
  expect(nonsense(42)).to.equal(42);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
