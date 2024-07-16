// NAMEEN:
// NAMERU:Тройная вложенность объектов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `tripleNestedObject`, которая принимает один параметр: `param`. Параметр - любое значение.

Пример поможет понять что нужно сделать:

```javascript
tripleNestedObject(5); // { first: { second: { third: { param: 5 } } } }
tripleNestedObject('hello'); // { first: { second: { third: { param: 'hello' } } } }
```

Функция должна возвращать объект, в котором есть три вложенных свойства `first`, `second`, `third`. Каждое из этих свойств должно быть объектом.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function tripleNestedObject(param) {
  return {
    first: {
      second: {
        third: {
          param,
        },
      },
    },
  };
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function tripleNestedObject', () => {
  expect(tripleNestedObject).to.be.a('function');
});

it('tripleNestedObject(5) return { first: { second: { third: { param: 5 } } } }', () => {
  expect(tripleNestedObject(5)).eql({ first: { second: { third: { param: 5 } } } });
});

it('tripleNestedObject("hello") return { first: { second: { third: { param: "hello" } } } }', () => {
  expect(tripleNestedObject('hello')).eql({
    first: { second: { third: { param: 'hello' } } },
  });
});

it('tripleNestedObject(true) return { first: { second: { third: { param: true } } } }', () => {
  expect(tripleNestedObject(true)).eql({ first: { second: { third: { param: true } } } });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
