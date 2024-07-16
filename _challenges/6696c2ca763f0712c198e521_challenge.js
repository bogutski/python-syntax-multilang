// NAMEEN:
// NAMERU:Калькулятор в объекте

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `objectCalculator`, которая принимает три параметра: `number1`, `number2`, `operation`. Первые два параметра - числа, третий - строка.

`operation` может быть равен одной из четырех операций: `+`, `-`, `*`, `/`.

В зависимости от значения `operation` функция должна возвращать разные объекты:

- Если `operation` равен `+`, то функция должна возвращать объект со свойствами `number1`, `number2`, `sum`. `sum` - это сумма `number1` и `number2`.
- Если `operation` равен `-`, то функция должна возвращать объект со свойствами `number1`, `number2`, `sub`. `sub` - это разность `number1` и `number2`.
- Если `operation` равен `*`, то функция должна возвращать объект со свойствами `number1`, `number2`, `multi`. `multi` - это произведение `number1` и `number2`.
- Если `operation` равен `/`, то функция должна возвращать объект со свойствами `number1`, `number2`, `div`. `div` - это частное `number1` и `number2`.

Примеры запуска функции:
```javascript
objectCalculator(10, 20, '+'); // { number1: 10, number2: 20, sum: 30 }
objectCalculator(5, 10, '-'); // { number1: 5, number2: 10, sub: -5 }
objectCalculator(5, 10, '*'); // { number1: 5, number2: 10, multi: 50 }
objectCalculator(10, 2, '/'); // { number1: 10, number2: 2, div: 5 }
```

Для решения задачи используйте конструкцию `if` и сравнение строк с помощью оператора `===`.

Похожий пример:
```javascript
function sum(a, b, c) {
  if (c === '+') {
    return {
      a,
      b,
      sum: a + b,
    };
  }
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
function objectCalculator(number1, number2, operation) {
  if (operation === '+') {
    return {
      number1,
      number2,
      sum: number1 + number2,
    };
  }

  if (operation === '-') {
    return {
      number1,
      number2,
      sub: number1 - number2,
    };
  }

  if (operation === '*') {
    return {
      number1,
      number2,
      multi: number1 * number2,
    };
  }

  if (operation === '/') {
    return {
      number1,
      number2,
      div: number1 / number2,
    };
  }
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function objectCalculator', () => {
  expect(objectCalculator).to.be.a('function');
});

// sum
it('objectCalculator(10, 20, "+") return { number1: 10, number2: 20, sum: 30 }', () => {
  expect(objectCalculator(10, 20, '+')).eql({ number1: 10, number2: 20, sum: 30 });
});

it('objectCalculator(5, 10, "+") return { number1: 5, number2: 10, sum: 15 }', () => {
  expect(objectCalculator(5, 10, '+')).eql({ number1: 5, number2: 10, sum: 15 });
});

// sub
it('objectCalculator(10, 20, "-") return { number1: 10, number2: 20, sub: -10 }', () => {
  expect(objectCalculator(10, 20, '-')).eql({ number1: 10, number2: 20, sub: -10 });
});

it('objectCalculator(5, 10, "-") return { number1: 5, number2: 10, sub: -5 }', () => {
  expect(objectCalculator(5, 10, '-')).eql({ number1: 5, number2: 10, sub: -5 });
});

// multi
it('objectCalculator(10, 20, "*") return { number1: 10, number2: 20, multi: 200 }', () => {
  expect(objectCalculator(10, 20, '*')).eql({ number1: 10, number2: 20, multi: 200 });
});

it('objectCalculator(5, 10, "*") return { number1: 5, number2: 10, multi: 50 }', () => {
  expect(objectCalculator(5, 10, '*')).eql({ number1: 5, number2: 10, multi: 50 });
});

// div
it('objectCalculator(10, 2, "/") return { number1: 10, number2: 2, div: 5 }', () => {
  expect(objectCalculator(10, 2, '/')).eql({ number1: 10, number2: 2, div: 5 });
});

it('objectCalculator(5, 10, "/") return { number1: 5, number2: 10, div: 0.5 }', () => {
  expect(objectCalculator(5, 10, '/')).eql({ number1: 5, number2: 10, div: 0.5 });
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
