// NAMEEN:
// NAMERU:Сумма положительных четных и нечетных чисел. Удаление свойств объекта.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `numberSum` принимает 5 параметров: `count`, `n1`, `n2`, `n3`, `n4`.

Параметры `n1`, `n2`, `n3`, `n4` – это целые числа. Могут быть положительными или отрицательными.

Объект `count` имеет следующую структуру:
* `oddPositive` – сумма нечетных положительных чисел, имеет первоначальное значение
* `evenPositive` – сумма четных положительных чисел, имеет первоначальное значение
* `fractional` – число, сумма дробных чисел.

Необходимо удалить свойство `fractional` из объекта `count`.

Затем оцените `n1`, `n2`, `n3`, `n4` .

Если значение четное и положительное, то добавить число к сумме `evenPositive` объекта `count`.

Если значение нечетные и положительные, то добавить число к сумме `oddPositive` объекта `count`.

Отрицательные числа не учитывать.

Функция должна вернуть объект `count`.

Пример запуска функции:
```javascript
numberSum({oddPositive: 2, evenPositive: 6, fractional: 0}, 1, 2, 3, 4)// {oddPositive: 6, evenPositive: 12}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numberSum(count, n1, n2, n3, n4) {
  delete count.fractional;
  if (n1 > 0 && n1 % 2 === 0) {
    count.evenPositive += n1;
  } else if (n1 > 0 && n1 % 2 !== 0) {
    count.oddPositive += n1;
  }
  if (n2 > 0 && n2 % 2 === 0) {
    count.evenPositive += n2;
  } else if (n2 > 0 && n2 % 2 !== 0) {
    count.oddPositive += n2;
  }
  if (n3 > 0 && n3 % 2 === 0) {
    count.evenPositive += n3;
  } else if (n3 > 0 && n3 % 2 !== 0) {
    count.oddPositive += n3;
  }
  if (n4 > 0 && n4 % 2 === 0) {
    count.evenPositive += n4;
  } else if (n4 > 0 && n4 % 2 !== 0) {
    count.oddPositive += n4;
  }
  return count;
}

// SOLUTIONEND

// OPENTESTSSTART
it('Created function numberSum', () => {
  expect(numberSum).to.be.a('function');
});

it('numberSum({oddPositive: 0, evenPositive: 0, fractional: 0}, 1, 2, 3, 4) // {oddPositive: 4, evenPositive: 6}', () => {
  expect(numberSum({ oddPositive: 0, evenPositive: 0, fractional: 0 }, 1, 2, 3, 4)).eql({
    oddPositive: 4,
    evenPositive: 6,
  });
});

it('numberSum({oddPositive: 0, evenPositive: 0, fractional: 0}, 15, -2, -7, 4) // {oddPositive: 4, evenPositive: 15}', () => {
  expect(
    numberSum({ oddPositive: 0, evenPositive: 0, fractional: 0 }, 15, -2, -7, 4),
  ).eql({
    oddPositive: 15,
    evenPositive: 4,
  });
});

it('numberSum({oddPositive: 7, evenPositive: 8, fractional: -6}, 0, 0, -7, -10) // {oddPositive: 7, evenPositive: 8}', () => {
  expect(
    numberSum({ oddPositive: 7, evenPositive: 8, fractional: -6 }, 0, 0, -7, -10),
  ).to.deep.equal({
    oddPositive: 7,
    evenPositive: 8,
  });
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
