// NAMEEN:
// NAMERU:Умножение в объекте

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `multiObject`, которая принимает два параметра: `param1`, `param2`. Оба параметра - числа.

Функция должна возвращать объект со свойствами `param1`, `param2`, которые будут равны соответствующим аргументам и `result`.

`result` - это произведение `param1` и `param2`.

Примеры запуска функции:
```javascript
multiObject(2, 3); // { param1: 2, param2: 3, result: 6 }
multiObject(10, 10); // { param1: 10, param2: 10, result: 100 }
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function multiObject(param1, param2) {
  return {
    param1,
    param2,
    result: param1 * param2,
  };
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function multiObject', () => {
  expect(multiObject).to.be.a('function');
});

it('multiObject(2, 3) return { param1: 2, param2: 3, result: 6 }', () => {
  expect(multiObject(2, 3)).eql({ param1: 2, param2: 3, result: 6 });
});

it('multiObject(0, 0) return { param1: 0, param2: 0, result: 0 }', () => {
  expect(multiObject(0, 0)).eql({ param1: 0, param2: 0, result: 0 });
});

it('multiObject(1, 0) return { param1: 1, param2: 0, result: 0 }', () => {
  expect(multiObject(1, 0)).eql({ param1: 1, param2: 0, result: 0 });
});

it('multiObject(10, 10) return { param1: 10, param2: 10, result: 100 }', () => {
  expect(multiObject(10, 10)).eql({ param1: 10, param2: 10, result: 100 });
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
