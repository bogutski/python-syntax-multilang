// NAMEEN:
// NAMERU:Выбрать из строки все цифры и записать их в массив

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `digitsToArray` принимает строку, состоящую из различных символов, в том числе - цифр, и возвращает массив чисел, в который записаны все цифры, в том порядке, как они встречаются в строке.

В решении предыдущей задачи мы использовали функцию `isNaN()`, чтобы определить, является ли символ цифрой или нет. В этой задаче мы воспользуемся другим способом.

Создадим строковую переменную `digits`, в которую запишем все цифры от `'0'` до `'9'`.

```javascript
const digits = '0123456789';
```

Чтобы определить, является ли символ цифрой, достаточно проверить, есть ли он в этой строке. Для этого воспользуемся методом `indexOf()`. Если символ есть в строке, то метод вернет его индекс, если нет - то -1.

Не забудьте преобразовать цифру из символа в число перед добавлением ее в массив!

Примеры запуска функции:
```javascript
digitsToArray('abc123'); // [1, 2, 3]
digitsToArray('abc');    // []
digitsToArray('');       // []
```
INSTRUCTIONRUEND
 */

/*
INITIALSOLUTIONSTART
fun


INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function digitsToArray(str) {
  const digits = '0123456789';
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (digits.indexOf(char) !== -1) {
      result.push(Number(char));
    }
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function digitsToArray', () => {
  expect(digitsToArray).to.be.a('function');
});

it('digitsToArray("a bc 12 3") should return [1, 2, 3]', () => {
  expect(digitsToArray('a bc 12 3')).to.deep.equal([1, 2, 3]);
});

it('digitsToArray("a b c") should return []', () => {
  expect(digitsToArray('a b c')).to.deep.equal([]);
});

it('digitsToArray("") should return []', () => {
  expect(digitsToArray('')).to.deep.equal([]);
});

it('digitsToArray("123 45 67 89 10") should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0]', () => {
  expect(digitsToArray('123 45 67 89 10')).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0]);
});

it('digitsToArray("a") should return []', () => {
  expect(digitsToArray('a')).to.deep.equal([]);
});

it('digitsToArray("1") should return [1]', () => {
  expect(digitsToArray('1')).to.deep.equal([1]);
});

it('digitsToArray("1234567890") should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]', () => {
  expect(digitsToArray('1234567890')).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
});

it('digitsToArray(" 1 ") should return [1]', () => {
  expect(digitsToArray(' 1 ')).to.deep.equal([1]);
});

it('digitsToArray(" 1 2 3 ") should return [1, 2, 3]', () => {
  expect(digitsToArray(' 1 2 3 ')).to.deep.equal([1, 2, 3]);
});

it('digitsToArray(" 1 2 3 are digits!") should return [1, 2, 3]', () => {
  expect(digitsToArray(' 1 2 3 are digits!')).to.deep.equal([1, 2, 3]);
});

it('digitsToArray(" There are no digits in this string! ") should return []', () => {
  expect(digitsToArray(' There are no digits in this string! ')).to.deep.equal([]);
});

it('digitsToArray("1  and 2 or    3 not   4 nor 5 neither 6") should return [1, 2, 3, 4, 5, 6]', () => {
  expect(digitsToArray('1  and 2 or    3 not   4 nor 5 neither 6')).to.deep.equal([1, 2, 3, 4, 5, 6]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
