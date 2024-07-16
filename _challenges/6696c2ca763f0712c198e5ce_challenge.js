// NAMEEN:
// NAMERU:Модифицируйте объект. Вычислите сумму свойств

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `calculateSumObject`, которая принимает объект.

В объекте есть три свойства:
* `n1` - число
* `n2` - число
* `sum` - число ноль

Пример объекта, который будет передан в функцию:
```javascript
{
  n1: 10,
  n2: 20,
  sum: 0
}
```

Функция должна вернуть объект, в котором свойство `sum` будет равно сумме свойств `n1` и `n2` объекта.

Пример запуска функции:
```javascript
calculateSumObject({n1: 10,  n2: 20, sum: 0}) // { n1: 10, n2: 20, sum: 30 }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function calculateSumObject(obj) {
  // obj = { n1: 10, n2: 20, sum: 0 }
  obj.sum = obj.n1 + obj.n2;
  return obj;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function calculateSumObject', () => {
  expect(calculateSumObject).to.be.a('function');
});

it('calculateSumObject({n1: 10,  n2: 20, sum: 0}) should return { n1: 10, n2: 20, sum: 30 }', () => {
  expect(calculateSumObject({ n1: 10, n2: 20, sum: 0 })).to.deep.equal({
    n1: 10,
    n2: 20,
    sum: 30,
  });
});

it('calculateSumObject({n1: 1,  n2: 2, sum: 0}) should return { n1: 1, n2: 2, sum: 3 }', () => {
  expect(calculateSumObject({ n1: 1, n2: 2, sum: 0 })).to.deep.equal({
    n1: 1,
    n2: 2,
    sum: 3,
  });
});

it('calculateSumObject({n1: 100,  n2: 200, sum: 0}) should return { n1: 100, n2: 200, sum: 300 }', () => {
  expect(calculateSumObject({ n1: 100, n2: 200, sum: 0 })).to.deep.equal({
    n1: 100,
    n2: 200,
    sum: 300,
  });
});

it('calculateSumObject({n1: 1000,  n2: 2000, sum: 0}) should return { n1: 1000, n2: 2000, sum: 3000 }', () => {
  expect(calculateSumObject({ n1: 1000, n2: 2000, sum: 0 })).to.deep.equal({
    n1: 1000,
    n2: 2000,
    sum: 3000,
  });
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
