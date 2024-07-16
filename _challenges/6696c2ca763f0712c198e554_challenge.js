// NAMEEN:
// NAMERU:Сумма из объекта

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `sumFromObject`, которая принимает объект с двумя свойствами `a` и `b`.

Пример объекта, который будет передан в функцию:
```javascript
{
  a: 10,
  b: 20
}
```

Функция должна вернуть сумму свойств `a` и `b` объекта.

Пример запуска функции:
```javascript
sumFromObject({a: 10,  b: 20}) // 30
```


Похожий пример:
```javascript
function multi(obj) {
  return obj.a * obj.b;
}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumFromObject(obj) {
  return obj.a + obj.b;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function sumFromObject', () => {
  expect(sumFromObject).to.be.a('function');
});

it('sumFromObject({a: 10,  b: 20}) should return 30', () => {
  expect(sumFromObject({ a: 10, b: 20 })).to.equal(30);
});

it('sumFromObject({a: 1,  b: 2}) should return 3', () => {
  expect(sumFromObject({ a: 1, b: 2 })).to.equal(3);
});

it('sumFromObject({a: 0,  b: 0}) should return 0', () => {
  expect(sumFromObject({ a: 0, b: 0 })).to.equal(0);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
