// NAMEEN:
// NAMERU:Сумма из двух объектов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sum`, которая принимает два объекта с двумя свойствами `a` и `b`.

В каждом объекте свойства `a` и `b` – числа.

Функция должна вернуть сумму свойств `a` и `b` обоих объектов.

Пример запуска функции:
```javascript
sum({a: 10,  b: 20}, {a: 5,  b: 8}) // 43
sum({a: -10,  b: 10}, {a: 5,  b: 8}) // 7
```

Похожий пример:
```javascript
function multi(obj1, obj2) {
  return obj1.a * obj1.b * obj2.a * obj2.b;
}

console.log(multi({a: 10,  b: 20}, {a: 5,  b: 8})); // 8000
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sum(obj1, obj2) {
  return obj1.a + obj1.b + obj2.a + obj2.b;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function sum', () => {
  expect(sum).to.be.a('function');
});

it('sum({a: 10,  b: 20}, {a: 5,  b: 8}) should return 43', () => {
  expect(sum({ a: 10, b: 20 }, { a: 5, b: 8 })).to.equal(43);
});

it('sum({a: -10,  b: 10}, {a: 5,  b: 8}) should return 13', () => {
  expect(sum({ a: -10, b: 10 }, { a: 5, b: 8 })).to.equal(13);
});

it('sum({a: 10,  b: 20}, {a: -5,  b: -8}) should return 17', () => {
  expect(sum({ a: 10, b: 20 }, { a: -5, b: -8 })).to.equal(17);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
