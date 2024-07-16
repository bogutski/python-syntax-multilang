// NAMEEN:
// NAMERU:Выполнение математических операций с объектом

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `numberSpec` принимает четыре параметра:
* `obj` – объект, который необходимо проверить
* `key1` – строка, ключ, который необходимо проверить
* `key2` – строка, ключ, который необходимо проверить
* `operator` – строка, которая принимает значения математических операторов `"+", "-", "*", "/"`.

Если `объект` содержит свойства `key1` и `key2`, то необходимо произвести между ними математическую операцию, которая
 указана в параметре `operator` и вернуть результат.

Результат необходимо вернуть в виде строки: `obj[key1] operator obj[key2] = result`.

Если `объект` не содержит свойство `key1`,`key2` или функция принимает `operator`, который не указан выше, то
 необходимо вернуть строку `There is no such properties in object`.

Пример запуска функции:
```javascript
numberSpec({ evenSum: 10, oddSum: 10 }, "evenSum", "oddSum", "+") // "10 + 10 = 20"
numberSpec({ maxNumber: 100, minNumber: 5 }, "maxNumber", "minNumber", "-") // "100 - 5 = 95"
numberSpec({ evenSum: 10, oddSum: 10 }, "evenSum", "oddSum", "%") // "There is no such properties in object"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numberSpec(obj, key1, key2, operator) {
  if (obj.hasOwnProperty(key1) && obj.hasOwnProperty(key2)) {
    let result;
    if (operator === '+') {
      result = obj[key1] + obj[key2];
    } else if (operator === '-') {
      result = obj[key1] - obj[key2];
    } else if (operator === '*') {
      result = obj[key1] * obj[key2];
    } else if (operator === '/') {
      result = obj[key1] / obj[key2];
    } else {
      return 'There is no such properties in object';
    }
    return `${obj[key1]} ${operator} ${obj[key2]} = ${result}`;
  }
  return 'There is no such properties in object';
}

// SOLUTIONEND

// OPENTESTSSTART
it('Created function numberSpec', () => {
  expect(numberSpec).to.be.a('function');
});

it('numberSpec({ evenSum: 10, oddSum: 10 }, "evenSum", "oddSum", "+") should return "10 + 10 = 20"', () => {
  expect(numberSpec({ evenSum: 10, oddSum: 10 }, 'evenSum', 'oddSum', '+')).to.be.equal(
    '10 + 10 = 20',
  );
});

it('numberSpec({ evenSum: 10, oddSum: 10 }, "evenSum", "oddSum", "-") should return "10 - 10 = 0"', () => {
  expect(numberSpec({ evenSum: 10, oddSum: 10 }, 'evenSum', 'oddSum', '-')).to.be.equal(
    '10 - 10 = 0',
  );
});

it('numberSpec({ evenSum: 10, oddSum: 10 }, "lastDigit", "oddSum", "*") should return "There is no such properties in object"', () => {
  expect(
    numberSpec(
      {
        evenSum: 10,
        oddSum: 10,
      },
      'lastDigit',
      'oddSum',
      '*',
    ),
  ).to.be.equal('There is no such properties in object');
});

it('numberSpec({ lastDigit: 10, quotient: 2 }, "lastDigit", "quotient", "/") should return "10 / 2 = 5"', () => {
  expect(
    numberSpec(
      {
        lastDigit: 10,
        quotient: 2,
      },
      'lastDigit',
      'quotient',
      '/',
    ),
  ).to.be.equal('10 / 2 = 5');
});

it('numberSpec({ lastDigit: 10, quotient: 2 }, "lastDigit", "quotient", "%") should return "There is no such properties in object"', () => {
  expect(
    numberSpec(
      {
        lastDigit: 10,
        quotient: 2,
      },
      'lastDigit',
      'quotient',
      '%',
    ),
  ).to.be.equal('There is no such properties in object');
});

it('numberSpec({ max: 10, min: 2 }, "lastDigit", "min", " ") should return "There is no such properties in object"', () => {
  expect(
    numberSpec(
      {
        max: 10,
        min: 2,
      },
      'lastDigit',
      'min',
      ' ',
    ),
  ).to.be.equal('There is no such properties in object');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
