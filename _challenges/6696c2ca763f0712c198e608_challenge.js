// NAMEEN:
// NAMERU:Сумма свойств объектов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumOfTwoObjects`, которая принимает два объекта:
* `obj1` - объект, в котором могут быть свойства `a` и `b`
* `obj2` - объект, в котором могут быть свойства `a` и `b`

Функция должна вернуть число – сумма значений свойств `a` и `b` из объектов `obj1` и `obj2`.

Нужно учесть:
 * каких-то свойств: `a` или `b`, может не быть в объектах
 * значения свойств `a` и `b` могут быть не числами, а `null` или `undefined`

Пример запуска функции:
```javascript
sumOfTwoObjects({ a: null, b: 8 }, { a: 3, b: undefined }); //  11
sumOfTwoObjects({ a: 1, b: 2 }, { a: 3, b: 4 }); // 10
sumOfTwoObjects({ b: 2 }, { a: 3 }); // 5
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumOfTwoObjects(obj1, obj2) {
  let sum = 0;
  if (!!obj1.a && typeof obj1.a === 'number') sum += obj1.a;
  if (!!obj1.b && typeof obj1.b === 'number') sum += obj1.b;
  if (!!obj2.a && typeof obj2.a === 'number') sum += obj2.a;
  if (!!obj2.b && typeof obj2.b === 'number') sum += obj2.b;
  return sum;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function sumOfTwoObjects', () => {
  expect(sumOfTwoObjects).to.be.a('function');
});

it('sumOfTwoObjects({ a: 1, b: 2 }, { a: 3, b: 4 }) return 10', () => {
  expect(sumOfTwoObjects({ a: 1, b: 2 }, { a: 3, b: 4 })).eq(10);
});

it('sumOfTwoObjects({ a: null, b: 8 }, { a: 3, b: undefined }) return 11', () => {
  expect(sumOfTwoObjects({ a: null, b: 8 }, { a: 3, b: undefined })).eq(11);
});

it('sumOfTwoObjects({ a: 55, b: undefined }, { a: null, b: 5 }) return 60', () => {
  expect(sumOfTwoObjects({ a: 55, b: undefined }, { a: null, b: 5 })).to.eql(60);
});

it('sumOfTwoObjects({ b: 2 }, { a: 3 }) return 5', () => {
  expect(sumOfTwoObjects({ b: 2 }, { a: 3 })).eq(5);
});

it('sumOfTwoObjects({}, { b: 999 }) return 999 }', () => {
  expect(sumOfTwoObjects({}, { b: 999 })).to.eql(999);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
