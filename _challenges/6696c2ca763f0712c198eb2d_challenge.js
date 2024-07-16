// NAMEEN:
// NAMERU:Число из отдельных цифр

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Нужно получить число из отдельных цифр, хранящихся в массиве.

Напишите функцию `getNumber`, которая принимает массив `digits`.

Каждый элемент массива `digits` - это строка, содержащая одну из цифр (0, 1, 2, 3, 4, 5, 6, 7, 8, 9).

Функция должна вернуть число, полученное из цифр, записанных в массиве.

Алгоритм решения:

1. Создать строковую переменную `number` и присвоить ей начальное значение пустой строки.

2. В цикле - для каждого элемента массива `digits` - добавлять его значение - цифру - к переменной `number` (конкатенация строк).

3. Вернуть переменную `number`, предварительно преобразовав ее в число с помощью унарного оператора `+`.

Примеры запуска функции:

```javascript
getNumber(['1', '2', '3']);           // 123
getNumber(['4', '5', '6', '0', '1']); // 45601
getNumber(['0', '0', '0', '0']);      // 0
getNumber(['0', '0', '3']);           // 3
getNumber([]);                        // 0
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
functio
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getNumber(digits) {
  let number = '';
  for (let i = 0; i < digits.length; i++) {
    number += digits[i];
  }
  return +number;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function getNumber', () => {
  expect(getNumber).to.be.a('function');
});

it('getNumber(["1", "2", "3"]) should return 123', () => {
  expect(getNumber(['1', '2', '3'])).to.be.equal(123);
});

it('getNumber(["4", "5", "6", "0", "1"]) should return 45601', () => {
  expect(getNumber(['4', '5', '6', '0', '1'])).to.be.equal(45601);
});

it('getNumber(["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]) should return 0', () => {
  expect(getNumber(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'])).to.be.equal(0);
});

it('getNumber([]) should return 0', () => {
  expect(getNumber([])).to.be.equal(0);
});

it('getNumber(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]) should return 1234567890', () => {
  expect(getNumber(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])).to.be.equal(1234567890);
});

it('getNumber(["1"]) should return 1', () => {
  expect(getNumber(['1'])).to.be.equal(1);
});

it('getNumber(["0", "2", "3"]) should return 23', () => {
  expect(getNumber(['0', '2', '3'])).to.be.equal(23);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
