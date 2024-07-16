// NAMEEN:
// NAMERU:Посчитать сколько раз каждая цифра от 0 до 9 встречается в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `digitsCount` принимает строку `str`, состоящую из различных символов.
Функция должна возвращать массив `result`, в котором записано сколько раз каждая цифра от 0 до 9 встречается в строке.
В элементе массива с индексом ноль должно быть количество нулей в строке, в элементе массива с индексом 1 - количество единиц в строке и т.д.
Если строка пустая или в строке нет цифр, то функция должна вернуть массив из 10 нулей.

Например, в строке `"let a = 10, b = 22, c = 13"` цифра `0` встречается 1 раз, цифра `1` - 2 раза, цифра `2` - 2 раза, цифра `3` - 1 раз, а остальные цифры от `4` до `9` - 0 раз.
Функция должна вернуть массив [1, 2, 2, 1, 0, 0, 0, 0, 0, 0].

Алгоритм решения задачи:

1. Создайте массив `result` из 10 нулей, в нем будут храниться счётчики цифр. Начальные значения счетчиков - 0.
2. В цикле переберите все символы строки.
3. Если текущий символ строки `str[i]` является цифрой, то преобразуйте его в число и увеличьте соответствующий счетчик в массиве `result[Number(str[i])]` на 1.
4. Верните массив `result`.

Не забудьте, что при некоторых способах проверки символа на цифру, пробел может быть определен как цифра 0.

Примеры вызова функции:
```javascript
digitsCount("const a=10, b=123, c=592"); // [1, 2, 2, 1, 0, 1, 0, 0, 0, 1]
digitsCount("Arrow"); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
digitsCount("5 plus 6 is 11"); // [0, 2, 0, 0, 0, 1, 1, 0, 0, 0]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
func
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function digitsCount(str) {
  const result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // массив для хранения количества цифр от 0 до 9
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') { // если текущий символ строки является цифрой, то увеличиваем счетчик в массиве result
      result[Number(str[i])]++;
    }
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function digitsCount', () => {
  expect(digitsCount).to.be.a('function');
});

it('digitCount("const a=10, b=123, c=592") should return [1, 2, 2, 1, 0, 1, 0, 0, 0, 1]', () => {
  expect(digitsCount("const a=10, b=123, c=592")).to.deep.equal([1, 2, 2, 1, 0, 1, 0, 0, 0, 1]);
});

it('digitCount("To be or not to be?") should return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]', () => {
  expect(digitsCount("To be or not to be?")).to.deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
});

it('digitCount("5 plus 6 is 11") should return [0, 2, 0, 0, 0, 1, 1, 0, 0, 0]', () => {
  expect(digitsCount("5 plus 6 is 11")).to.deep.equal([0, 2, 0, 0, 0, 1, 1, 0, 0, 0]);
});

it('digitCount("1, 2, 3, 4, 5, 6, 7, 8, 9, 0") should return [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]', () => {
  expect(digitsCount("1, 2, 3, 4, 5, 6, 7, 8, 9, 0")).to.deep.equal([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
});

it('digitCount("") should return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]', () => {
  expect(digitsCount("")).to.deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
});

it('digitCount("111 222 333 444 555 666 777 888 999 000") should return [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]', () => {
  expect(digitsCount("111 222 333 444 555 666 777 888 999 000")).to.deep.equal([3, 3, 3, 3, 3, 3, 3, 3, 3, 3]);
});

it('digitCount("1 2 3 4 5 6 7 8 9 0") should return [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]', () => {
  expect(digitsCount("1 2 3 4 5 6 7 8 9 0")).to.deep.equal([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
});

it('digitCount("12 45 78 101") should return [1, 3, 1, 0, 1, 1, 0, 1, 1, 0]', () => {
  expect(digitsCount("12 45 78 101")).to.deep.equal([1, 3, 1, 0, 1, 1, 0, 1, 1, 0]);
});

it('digitCount(" if( age>=18 ) { isAdult = true;}  ") should return [0, 1, 0, 0, 0, 0, 0, 0, 1, 0]', () => {
  expect(digitsCount(" if( age>=18 ) { isAdult = true;}  ")).to.deep.equal([0, 1, 0, 0, 0, 0, 0, 0, 1, 0]);
});

it('digitCount("1") should return [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]', () => {
  expect(digitsCount("1")).to.deep.equal([0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
});

it('digitCount("2") should return [0, 0, 1, 0, 0, 0, 0, 0, 0, 0]', () => {
  expect(digitsCount("2")).to.deep.equal([0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
});

it('digitCount("33333") should return [0, 0, 0, 5, 0, 0, 0, 0, 0, 0]', () => {
  expect(digitsCount("33333")).to.deep.equal([0, 0, 0, 5, 0, 0, 0, 0, 0, 0]);
});

it('digitCount("4444444444") should return [0, 0, 0, 0, 10, 0, 0, 0, 0, 0]', () => {
  expect(digitsCount("4444444444")).to.deep.equal([0, 0, 0, 0, 10, 0, 0, 0, 0, 0]);
});

it('digitCount("0 0 0 0-0-0-0 00 000 0 0 0 0 0000: 1 22 333 4444 55555 666666 7777777 88888888 -+ 999999999% ") should return [20, 1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
  expect(digitsCount("0 0 0 0-0-0-0 00 000 0 0 0 0 0000: 1 22 333 4444 55555 666666 7777777 88888888 -+ 999999999% ")).to.deep.equal([20, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
