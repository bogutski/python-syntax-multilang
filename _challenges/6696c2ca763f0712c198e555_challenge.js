// NAMEEN:
// NAMERU:Среднее арифметическое из объекта

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `averageFromObject`, которая принимает объект с тремя свойствами `a`, `b` и `c`.

Пример объекта, который будет передан в функцию:
```javascript
{
  a: 10,
  b: 20,
  c: 30
}
```

Функция должна вернуть среднее арифметическое свойств `a`, `b` и `c` объекта.

Пример запуска функции:
```javascript
averageFromObject({a: 10,  b: 20, c: 30}) // 20
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function averageFromObject(obj) {
  return (obj.a + obj.b + obj.c) / 3;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function averageFromObject', () => {
  expect(averageFromObject).to.be.a('function');
});

it('averageFromObject({a: 10,  b: 20, c: 30}) should return 20', () => {
  expect(averageFromObject({ a: 10, b: 20, c: 30 })).to.equal(20);
});

it('averageFromObject({a: 1,  b: 2, c: 3}) should return 2', () => {
  expect(averageFromObject({ a: 1, b: 2, c: 3 })).to.equal(2);
});

it('averageFromObject({a: 1,  b: 1, c: 1}) should return 1', () => {
  expect(averageFromObject({ a: 1, b: 1, c: 1 })).to.equal(1);
});

it('averageFromObject({a: 5,  b: 12, c: 20}) should return  12.333333333333334', () => {
  expect(averageFromObject({ a: 5, b: 12, c: 20 })).to.equal(12.333333333333334);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
