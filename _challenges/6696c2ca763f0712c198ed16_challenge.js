// NAMEEN:
// NAMERU:Выбрать из строки все числа и записать их в массив

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `numbersToArray` принимает строку, состоящую из различных символов, в том числе - цифр, и возвращает массив чисел, в том порядке, как они встречаются в строке.

Число - это последовательность цифр. Оно может состоять из одной цифры, например, 5, или из нескольких, например, 123.

```javascript
const digits = '0123456789';
```
Чтобы определить, является ли символ цифрой, то есть входит ли он в строку `digits`, используется метод для работы со строками `includes()`.
Метод `includes()` возвращает `true`, если строка содержит указанную подстроку, и `false`, если не содержит.

Перед добавлением числа в массив оно должно быть преобразовано из строкового представления в числовое. Для этого используется унарный плюс `+`.

Исправьте ошибки в коде функции `numbersToArray`.

Примеры запуска функции:
```javascript
numbersToArray('a bc 12 3'); // [12, 3]
numbersToArray('123 45 67 89 10'); // [123, 45, 67, 89, 10]
numbersToArray('arr123 $68 07% tax total 505'); // [123, 68, 7, 505]
numbersToArray('a b c'); // []
numbersToArray(''); // []
```
INSTRUCTIONRUEND
 */

/*
INITIALSOLUTIONSTART
function numberToArray(str) {
  const digits = 'abcdef0123456789';
  const numbers = [];
  const number = '';

  for (let i = 0; i > str.length; i++) {
    if (digits.includes(str[i])) {  // если символ является цифрой
      number += str[i];             // добавляем его в текущее число-аккумулятор
    } else if (number.length > 0) { // если символ не является цифрой и текущее число-аккумулятор не пустое
      numbers.push(+number);        // добавляем текущее число-аккумулятор в массив чисел
      number = 0;                   // сбрасываем значение текущего числа-аккумулятора
    }
  }

  if (number.length > 0) {    // если строка закончилась числом, то нужно добавить в массив последнее число-аккумулятор
    numbers.push(-number);    // добавляем его в массив чисел
  }

  return number;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numbersToArray(str) {
  const digits = '0123456789';
  const numbers = [];
  let number = '';

  for (let i = 0; i < str.length; i++) {
    if (digits.includes(str[i])) {
      number += str[i];
    } else if (number.length > 0) {
      numbers.push(+number);
      number = '';
    }
  }

  if (number.length > 0) {
    numbers.push(+number);
  }

  return numbers;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function numbersToArray', () => {
  expect(numbersToArray).to.be.a('function');
});

it('Function numbersToArray contains method includes()', () => {
  expect(numbersToArray.toString()).to.contain('.includes(');
});

it('numbersToArray("a bc 12 3") should return [12, 3]', () => {
  expect(numbersToArray('a bc 12 3')).to.deep.equal([12, 3]);
});

it('numbersToArray("a bc 12 30coins") should return [12, 30]', () => {
  expect(numbersToArray('a bc 12 30coins')).to.deep.equal([12, 30]);
});

it('numbersToArray(" abc 12 3 ") should return [12, 3]', () => {
  expect(numbersToArray(' abc 12 3 ')).to.deep.equal([12, 3]);
});

it('numbersToArray("123 45 67 89 10") should return [123, 45, 67, 89, 10]', () => {
  expect(numbersToArray('123 45 67 89 10')).to.deep.equal([123, 45, 67, 89, 10]);
});

it('numbersToArray("arr123 $68 07% tax total 505") should return [123, 68, 7, 505]', () => {
  expect(numbersToArray('arr123 $68 07% tax total 505')).to.deep.equal([123, 68, 7, 505]);
});

it('numbersToArray("a:= b*c;") should return []', () => {
  expect(numbersToArray('a:= b*c;')).to.deep.equal([]);
});

it('numbersToArray("") should return []', () => {
  expect(numbersToArray('')).to.deep.equal([]);
});

it('numbersToArray("a") should return []', () => {
  expect(numbersToArray('a')).to.deep.equal([]);
});

it('numbersToArray("11a99") should return [11, 99]', () => {
  expect(numbersToArray('11a99')).to.deep.equal([11, 99]);
});

it('numbersToArray("1") should return [1]', () => {
  expect(numbersToArray('1')).to.deep.equal([1]);
});

it('numbersToArray("1234567890") should return [1234567890]', () => {
  expect(numbersToArray('1234567890')).to.deep.equal([1234567890]);
});

it('numbersToArray(" 1 ") should return [1]', () => {
  expect(numbersToArray(' 1 ')).to.deep.equal([1]);
});

it('numbersToArray(" 1 2 3 are digits!") should return [1, 2, 3]', () => {
  expect(numbersToArray(' 1 2 3 are digits!')).to.deep.equal([1, 2, 3]);
});

it('numbersToArray(" There are no digits or numbers in this string! ") should return []', () => {
  expect(numbersToArray(' There are no digits or numbers in this string! ')).to.deep.equal([]);
});

it('numbersToArray("101  and 202 or    303 not   404 nor 505 neither 606!") should return [101, 202, 303, 404, 505, 606]', () => {
  expect(numbersToArray('101  and 202 or    303 not   404 nor 505 neither 606!')).to.deep.equal([101, 202, 303, 404, 505, 606]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
