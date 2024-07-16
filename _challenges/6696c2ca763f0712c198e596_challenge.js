// NAMEEN:
// NAMERU:Проверьте наличие свойства в объекте и верните его значение

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `hasProperty`, которая принимает параметры:
* `object` – объект, может иметь любое количество свойств;
* `propCheck` – наименование свойства, которое необходимо проверить, строка.

Если свойство `propCheck` присутствует в объекте, то функция должна возвращать значение `value`.

Если свойство `propCheck` отсутствует в объекте, то функция должна
возвращать строку `No such property: propCheck`, где:
`propCheck` - наименование свойства, которое не было найдено.

Примеры запуска функции:
```javascript
hasProperty({first: "mushroom"}, "first");  // 'mushroom'
hasProperty({cat: "meow", bird: "tweet"}, "dog");  // 'No such property: dog'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function hasProperty(object, propCheck) {
  if (propCheck in object) {
    return object[propCheck];
  }
  return `No such property: ${propCheck}`;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function `hasProperty`', () => {
  expect(hasProperty).to.be.a('function');
});

it('hasProperty({sun: "star"}, "sun")  // "star"', () => {
  expect(hasProperty({ sun: 'star' }, 'sun')).to.be.equal('star');
});

it('hasProperty({intel: "processor", gigabyte: "motherboard"}, "AMD")  // "No such property: AMD"', () => {
  expect(
    hasProperty(
      {
        intel: 'processor',
        gigabyte: 'motherboard',
      },
      'AMD',
    ),
  ).to.be.equal('No such property: AMD');
});

it('hasProperty({oak: "tree", birch: "tree", camomile: "flower"}, "camomile")  // "flower"', () => {
  expect(
    hasProperty(
      {
        oak: 'tree',
        birch: 'tree',
        camomile: 'flower',
      },
      'camomile',
    ),
  ).to.be.equal('flower');
});

it('hasProperty({albatross: "", eagle: "bird", penguin: 999}, "albatross")  // ""', () => {
  expect(
    hasProperty(
      {
        albatross: '',
        eagle: 'bird',
        penguin: 999,
      },
      'albatross',
    ),
  ).to.be.equal('');
});

it('hasProperty({123: "number", null: "null", true: "boolean"}, "123")  // "number"', () => {
  expect(
    hasProperty(
      {
        123: 'number',
        null: 'null',
        true: 'boolean',
      },
      '123',
    ),
  ).to.be.equal('number');
});

it('hasProperty({true: "boolean", false: 0}, "false")  // 0', () => {
  expect(hasProperty({ true: 'boolean', false: 0 }, 'false')).to.be.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
