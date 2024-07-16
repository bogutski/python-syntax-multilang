// NAMEEN:
// NAMERU:Конвертер футы в дюймы и наоборот

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В одном футе 12 дюймов.

Напишите функцию `convertUnits`, которая принимает три параметра:
* `value` - число,
* `from` - единица измерения `value`,
* `to` - единица измерения, в которую необходимо перевести.

Функция должна возвращать число, которое является результатом перевода `value` из `from` в `to`.

Допустимые значения для `from` и `to`: `foot` и `inch`.

Примеры запуска функции:
```javascript
convertUnits(1, 'foot', 'inch'); // 12
convertUnits(12, 'inch', 'foot'); // 1
convertUnits(10, 'foot', 'inch'); // 120
convertUnits(120, 'inch', 'foot'); // 10

convertUnits(120, 'inch', 'inch'); // 120
convertUnits(120, 'foot', 'foot'); // 120

convertUnits(120, 'inch', 'cm'); // Wrong units
convertUnits(120, 'cm', 'foot'); // Wrong units
```

Если переданы неверные значения для `from` или `to`, функция должна возвращать строку `Wrong units`.

Логика расчета очень проста: 1 фут = 12 дюймов, 1 дюйм = 1/12 фута.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function convertUnits(value, from, to) {
  if (from === 'foot' && to === 'inch') return value * 12;
  if (from === 'inch' && to === 'foot') return value / 12;
  if (from === 'foot' && to === 'foot') return value;
  if (from === 'inch' && to === 'inch') return value;
  return 'Wrong units';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function convertUnits', () => {
  expect(convertUnits).to.be.a('function');
});

it("convertUnits(1, 'foot', 'inch') should return 12", () => {
  expect(convertUnits(1, 'foot', 'inch')).to.be.equal(12);
});

it("convertUnits(12, 'inch', 'foot') should return 1", () => {
  expect(convertUnits(12, 'inch', 'foot')).to.be.equal(1);
});

it("convertUnits(10, 'foot', 'inch') should return 120", () => {
  expect(convertUnits(10, 'foot', 'inch')).to.be.equal(120);
});

it("convertUnits(120, 'inch', 'foot') should return 10", () => {
  expect(convertUnits(120, 'inch', 'foot')).to.be.equal(10);
});

it("convertUnits(120, 'inch', 'inch') should return 120", () => {
  expect(convertUnits(120, 'inch', 'inch')).to.be.equal(120);
});

it("convertUnits(120, 'foot', 'foot') should return 120", () => {
  expect(convertUnits(120, 'foot', 'foot')).to.be.equal(120);
});

it("convertUnits(120, 'inch', 'cm') should return 'Wrong units'", () => {
  expect(convertUnits(120, 'inch', 'cm')).to.be.equal('Wrong units');
});

it("convertUnits(120, 'cm', 'foot') should return 'Wrong units'", () => {
  expect(convertUnits(120, 'cm', 'foot')).to.be.equal('Wrong units');
});

it("convertUnits(120, 'cm', 'cm') should return 'Wrong units'", () => {
  expect(convertUnits(120, 'cm', 'cm')).to.be.equal('Wrong units');
});

it("convertUnits(120, 'foot', 'cm') should return 'Wrong units'", () => {
  expect(convertUnits(120, 'foot', 'cm')).to.be.equal('Wrong units');
});

it("convertUnits(120, 'cm', 'inch') should return 'Wrong units'", () => {
  expect(convertUnits(120, 'cm', 'inch')).to.be.equal('Wrong units');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
