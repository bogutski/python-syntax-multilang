// NAMEEN:
// NAMERU:Сколько цифр в строке?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `countDigits` принимает строку и возвращает количество цифр в строке.
Строка может включать в себя любые символы и быть произвольной длины.
Например, для строки `abc123` функция должна вернуть `3`.

Для решения задачи можно использовать преобразование символа в число с помощью функции `Number` или оператора `+` и проверку полученного значения на `isNaN`.

`isNaN()` - функция `JavaScript`, которая возвращает `true`, если переданное в нее значение не является числом, и `false`, если значение является числом.

Нужно иметь в виду, что подобная проверка не сработает для пробела, так как `Number(' ')` вернет `0`, а `isNaN(0)` вернет `false`, поэтому на пробел нужно проверять отдельно.

Пример проверки является ли символ цифрой:

```javascript
const str = '1 a 2';
for (let i = 0; i < str.length; i++) {
  const num = Number(str[i]);
  if (str[i]!==' ' && !isNaN(num)) {
    console.log(str[i]+' is a digit');
  } else {
    console.log(str[i]+' is not a digit');
  }
}
// '1 is a digit'
// '  is not a digit'
// 'a is not a digit'
// '  is not a digit'
// '2 is a digit'
```

Примеры вызова функции:

```javascript
countDigits('abc123'); // 3
countDigits('a b c'); // 0
countDigits('123'); // 3
countDigits(''); // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function c

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countDigits(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const num = Number(str[i]);
    if (str[i]!==' ' && !isNaN(num)) {
      count++;
    }
  }
  return count;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function countDigits', () => {
  expect(countDigits).to.be.a('function');
});

it('countDigits("abc123") should return 3', () => {
  expect(countDigits('abc123')).to.be.equal(3);
});

it('countDigits("abc") should return 0', () => {
  expect(countDigits('abc')).to.be.equal(0);
});

it('countDigits("One, two, three!") should return 0', () => {
  expect(countDigits('One, two, three!')).to.be.equal(0);
});

it('countDigits("123 minus 1 equals 122.") should return 7', () => {
  expect(countDigits('123 minus 1 equals 122.')).to.be.equal(7);
});

it('countDigits(" que55 query215 9e09r 78 ") should return 10', () => {
  expect(countDigits(' que55 query215 9e09r 78 ')).to.be.equal(10);
});

it('countDigits("12345") should return 5', () => {
  expect(countDigits('12345')).to.be.equal(5);
});

it('countDigits("12 34 505 607 708 809 900") should return 19', () => {
  expect(countDigits('12 34 505 607 708 809 900')).to.be.equal(19);
});

it('countDigits("1") should return 1', () => {
  expect(countDigits('1')).to.be.equal(1);
});

it('countDigits("I") should return 0', () => {
  expect(countDigits('I')).to.be.equal(0);
});

it('countDigits("") should return 0', () => {
  expect(countDigits('')).to.be.equal(0);
});

it('countDigits("12.34-56 7<8 3 % 2 = 1 9<0;") should return 13', () => {
  expect(countDigits('12.34-56 7<8 3 % 2 = 1 9<0;')).to.be.equal(13);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND