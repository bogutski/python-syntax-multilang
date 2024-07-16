// NAMEEN:
// NAMERU:Среднее арифметическое четырех чисел в объекте

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `avgObject`, которая принимает четыре параметра: `param1`, `param2`, `param3`, `param4`. Все параметра - числа.

Функция должна возвращать объект со свойствами `param1`, `param2`, `param3`, `param4`, которые будут равны соответствующим аргументам и `result`

`result` - это среднее арифметическое четырех чисел.

Примеры запуска функции:
```javascript
avgObject(1, 2, 3, 4); // { param1: 1, param2: 2, param3: 3, param4: 4, result: 2.5 }
avgObject(10, 20, 30, 40); // { param1: 10, param2: 20, param3: 30, param4: 40, result: 25 }
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function avgObject(param1, param2, param3, param4) {
  return {
    param1,
    param2,
    param3,
    param4,
    result: (param1 + param2 + param3 + param4) / 4,
  };
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function avgObject', () => {
  expect(avgObject).to.be.a('function');
});

it('avgObject(1, 2, 3, 4) return { param1: 1, param2: 2, param3: 3, param4: 4, result: 2.5 }', () => {
  expect(avgObject(1, 2, 3, 4)).eql({
    param1: 1,
    param2: 2,
    param3: 3,
    param4: 4,
    result: 2.5,
  });
});

it('avgObject(10, 20, 30, 40) return { param1: 10, param2: 20, param3: 30, param4: 40, result: 25 }', () => {
  expect(avgObject(10, 20, 30, 40)).eql({
    param1: 10,
    param2: 20,
    param3: 30,
    param4: 40,
    result: 25,
  });
});

it('avgObject(0, 0, 0, 0) return { param1: 0, param2: 0, param3: 0, param4: 0, result: 0 }', () => {
  expect(avgObject(0, 0, 0, 0)).eql({
    param1: 0,
    param2: 0,
    param3: 0,
    param4: 0,
    result: 0,
  });
});

it('avgObject(1, 1, 1, 1) return { param1: 1, param2: 1, param3: 1, param4: 1, result: 1 }', () => {
  expect(avgObject(1, 1, 1, 1)).eql({
    param1: 1,
    param2: 1,
    param3: 1,
    param4: 1,
    result: 1,
  });
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
