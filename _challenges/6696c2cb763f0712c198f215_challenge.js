// NAMEEN:
// NAMERU:Разделить массив чисел на подмассивы и вернуть результат в виде объекта

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `objectOfArrays` принимает массив чисел, разбивает его на подмассивы и возвращает объект, содержащий эти подмассивы.

Функция должна создать следующие подмассивы и записать их в свойства объекта с соответствующими ключами:
* десятичные дроби
* целые числа
* отрицательные числа
* неотрицательные числа, то есть положительные числа и нули
* четные числа
* нечетные числа
* числа кратные 3

Если массив пустой, то функция должна вернуть сообщение об ошибке - `'Array is empty'`.

Пример:
Массив `[-3, -2, -0.5, -1, 0, 0.5, 1, 2, 2.25, 3]` должен быть разбит на подмассивы и записан в объект следующим образом:
```javascript
{ decimal: [-0.5, 0.5, 2.25],
  integer: [-3, -2, -1, 0, 1, 2, 3],
  negative: [-3, -2, -0.5, -1],
  nonNegative: [0, 0.5, 1, 2, 2.25, 3],
  even: [-2, 0, 2],
  odd: [-3, -1, 1, 3],
  multipleOf3: [-3, 0, 3]
}
```
Обратите внимание, что в некоторые числа входят в несколько подмассивов, например, число 0 входит в подмассивы `integer`, `nonNegative` и `multipleOf3`.
Если в массиве нет чисел, удовлетворяющих некоторым условиям, то соответствующие подмассивы могут быть пустыми.

Пример запуска функции:
```javascript
objectOfArrays([-33, 432, -0.75, 0, 10, -131, 2, 12.2, 3]);
```
Результат:
```javascript
{ decimal: [-0.75, 12.2],
  integer: [-33, 432, 0, 10, -131, 2, 3],
  negative: [-33, -0.75, -131],
  nonNegative: [432, 0, 10, 2, 12.2, 3],
  even: [432, 0, 10, 2, 12.2],
  odd: [-33, -131, 3],
  multipleOf3: [-33, 432б 0, 3]
}
```
Еще один пример запуска функции:
```javascript
objectOfArrays([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
```
Результат:
```javascript
{ decimal: [],    // пустой массив, так как в исходном массиве нет десятичных дробей
  integer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  negative: [],   // пустой массив, так как в исходном массиве нет отрицательных чисел
  nonNegative: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  even: [0, 2, 4, 6, 8],
  odd: [1, 3, 5, 7, 9],
  multipleOf3: [0, 3, 6, 9]
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
function objectOfArrays(arr) {
  if (arr.length === 0) {
    return 'Array is empty';
  }
  const result = {
    decimal: [],
    integer: [],
    negative: [],
    nonNegative: [],
    even: [],
    odd: [],
    multipleOf3: []
  };

  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];

    if (item < 0) {
      result.negative.push(item);
    } else {
      result.nonNegative.push(item);
    }

    if (item % 1 !== 0) {
      result.decimal.push(item);
    } else { // integers
      result.integer.push(item);
      if (item % 2 === 0) {
        result.even.push(item);
      } else {
        result.odd.push(item);
      }
      if (item % 3 === 0) {
        result.multipleOf3.push(item);
      }
    }
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function objectOfArrays', () => {
  expect(objectOfArrays).to.be.a('function');
});

it('objectOfArrays([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) should return { decimal: [], integer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], negative: [], nonNegative: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], even: [0, 2, 4, 6, 8], odd: [1, 3, 5, 7, 9], multipleOf3: [0, 3, 6, 9] }', () => {
  expect(objectOfArrays([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).to.deep.equal({ decimal: [], integer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], negative: [], nonNegative: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], even: [0, 2, 4, 6, 8], odd: [1, 3, 5, 7, 9], multipleOf3: [0, 3, 6, 9] });
});

it('objectOfArrays([-33, 432, -0.75, 0, 10, -131, 2, 12.2, 3]) should return { decimal: [-0.75, 12.2], integer: [-33, 432, 0, 10, -131, 2, 3], negative: [-33, -0.75, -131], nonNegative: [432, 0, 10, 2, 12.2, 3], even: [432, 0, 10, 2], odd: [-33, -131, 3], multipleOf3: [-33, 432, 0, 3] }', () => {
  expect(objectOfArrays([-33, 432, -0.75, 0, 10, -131, 2, 12.2, 3])).to.deep.equal({ decimal: [-0.75, 12.2], integer: [-33, 432, 0, 10, -131, 2, 3], negative: [-33, -0.75, -131], nonNegative: [432, 0, 10, 2, 12.2, 3], even: [432, 0, 10, 2], odd: [-33, -131, 3], multipleOf3: [-33, 432, 0, 3] });
});

it('objectOfArrays([]) should return "Array is empty"', () => {
  expect(objectOfArrays([])).to.equal('Array is empty');
});

it('objectOfArrays([1.1, 2.2, 3.3]) should return { decimal: [1.1, 2.2, 3.3], integer: [], negative: [], nonNegative: [1.1, 2.2, 3.3], even: [], odd: [], multipleOf3: [] }', () => {
  expect(objectOfArrays([1.1, 2.2, 3.3])).to.deep.equal({ decimal: [1.1, 2.2, 3.3], integer: [], negative: [], nonNegative: [1.1, 2.2, 3.3], even: [], odd: [], multipleOf3: [] });
});

it('objectOfArrays([-1.01, -20.2, -303]) should return { decimal: [-1.01, -20.2], integer: [-303], negative: [-1.01, -20.2, -303], nonNegative: [], even: [], odd: [-303], multipleOf3: [-303] }', () => {
  expect(objectOfArrays([-1.01, -20.2, -303])).to.deep.equal({ decimal: [-1.01, -20.2], integer: [-303], negative: [-1.01, -20.2, -303], nonNegative: [], even: [], odd: [-303], multipleOf3: [-303] });
});

it('objectOfArrays([-1, 2, 3]) should return { decimal: [], integer: [-1, 2, 3], negative: [-1], nonNegative: [2, 3], even: [2], odd: [-1, 3], multipleOf3: [3] }', () => {
  expect(objectOfArrays([-1, 2, 3])).to.deep.equal({ decimal: [], integer: [-1, 2, 3], negative: [-1], nonNegative: [2, 3], even: [2], odd: [-1, 3], multipleOf3: [3] });
});

it('objectOfArrays([-1, -111, 201, 301, 0.01]) should return { decimal: [0.01], integer: [-1, -111, 201, 301], negative: [-1, -111], nonNegative: [201, 301, 0.01], even: [], odd: [-1, -111, 201, 301], multipleOf3: [-111, 201] }', () => {
  expect(objectOfArrays([-1, -111, 201, 301, 0.01])).to.deep.equal({ decimal: [0.01], integer: [-1, -111, 201, 301], negative: [-1, -111], nonNegative: [201, 301, 0.01], even: [], odd: [-1, -111, 201, 301], multipleOf3: [-111, 201] });
});

it('objectOfArrays([0]) should return { decimal: [], integer: [0], negative: [], nonNegative: [0], even: [0], odd: [], multipleOf3: [0] }', () => {
  expect(objectOfArrays([0])).to.deep.equal({ decimal: [], integer: [0], negative: [], nonNegative: [0], even: [0], odd: [], multipleOf3: [0] });
});

it('objectOfArrays([-0.01]) should return { decimal: [-0.01], integer: [], negative: [-0.01], nonNegative: [], even: [], odd: [], multipleOf3: [] }', () => {
  expect(objectOfArrays([-0.01])).to.deep.equal({ decimal: [-0.01], integer: [], negative: [-0.01], nonNegative: [], even: [], odd: [], multipleOf3: [] });
});

it('objectOfArrays([3]) should return { decimal: [], integer: [3], negative: [], nonNegative: [3], even: [], odd: [3], multipleOf3: [3] }', () => {
  expect(objectOfArrays([3])).to.deep.equal({ decimal: [], integer: [3], negative: [], nonNegative: [3], even: [], odd: [3], multipleOf3: [3] });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
