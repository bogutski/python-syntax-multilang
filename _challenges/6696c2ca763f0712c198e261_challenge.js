// NAMEEN:
// NAMERU:Конвертер метры в километры и наоборот

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `converter`, которая принимает три параметра: `value`, `from`, `to`.

Функция должна конвертировать `value` из единицы измерения `from` в единицу измерения `to`.

`value` - число, которое необходимо конвертировать.
`from` - единица измерения, в которой передано число. Допустимые значения: `m`, `km`.
`to` - единица измерения, в которую необходимо конвертировать число. Допустимые значения: `m`, `km`.

Примеры запуска функции:
```javascript
converter(1000, 'm', 'km'); // 1
converter(1, 'km', 'm'); // 1000
converter(1, 'm', 'm'); // 1
converter(1, 'km', 'km'); // 1
```

Эта функция должна уметь конвертировать метры в километры и наоборот.

Если `value` не является положительным числом, то функция должна вернуть `null`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function converter(value, from, to) {
  if (typeof value !== 'number' || value < 0) {
    return null;
  }

  if (from === 'm' && to === 'km') {
    return value / 1000;
  }

  if (from === 'km' && to === 'm') {
    return value * 1000;
  }

  if (from === to) {
    return value;
  }

  return null;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function converter', () => {
  expect(converter).to.be.a('function');
});

it('converter(1000, \'m\', \'km\') should return 1', () => {
  expect(converter(1000, 'm', 'km')).to.be.equal(1);
} );

it('converter(1, \'km\', \'m\') should return 1000', () => {
  expect(converter(1, 'km', 'm')).to.be.equal(1000);
} );

it('converter(1, \'m\', \'m\') should return 1', () => {
  expect(converter(1, 'm', 'm')).to.be.equal(1);
} );

it('converter(1, \'km\', \'km\') should return 1', () => {
  expect(converter(1, 'km', 'km')).to.be.equal(1);
} );

it('converter(1, \'m\', \'km\') should return 0.001', () => {
  expect(converter(1, 'm', 'km')).to.be.equal(0.001);
} );

it('converter(1, \'km\', \'m\') should return 1000', () => {
  expect(converter(1, 'km', 'm')).to.be.equal(1000);
} );

it('converter(-2, \'m\', \'km\') should return null', () => {
  expect(converter(-2, 'm', 'km')).to.be.equal(null);
} );

it('converter(true, \'m\', \'km\') should return null', () => {
  expect(converter(true, 'm', 'km')).to.be.equal(null);
} );

it('converter(\'1\', \'m\', \'km\') should return null', () => {
  expect(converter('1', 'm', 'km')).to.be.equal(null);
} );
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
