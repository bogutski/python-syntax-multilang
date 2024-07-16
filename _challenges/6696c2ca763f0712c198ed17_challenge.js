// NAMEEN:
// NAMERU:Посчитать сколько четных чисел в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `countEven` должна принимать строку и возвращать количество четных чисел в этой строке.
Строка может состоять из различных символов и быть произвольной длины. Числа в строке могут быть как однозначными, так и многозначными.

#### Алгоритм решения задачи:

1. Создайте переменную `count` - счетчик четных чисел - и присвойте ей значение 0.
2. Создайте переменную - аккумулятор `acc` для хранения текущего числа и присвойте ей значение пустой строки.
3. Создайте цикл, в котором переберите все символы строки.
4. В цикле осуществляйте проверку каждого символа: если символ - цифра - он должен добавляться к аккумулятору.
5. В противном случае, если в аккумуляторе накоплено значение, оно должно быть проверено на четность, и счетчик четных чисел, если нужно, увеличен на 1, после чего аккумулятор сбрасывается - устанавливается равным пустой строке.
6. После окончания цикла нужно проверить аккумулятор, если он не пустой, то его значение должно быть проверено на четность, и счетчик четных чисел, если нужно, увеличить на 1.
7. Возвратите значение счетчика четных чисел.

Для проверки является символ цифрой или нет используйте преобразование символа в число с последующей проверкой на `NaN` и `пробел`.

Примеры запуска функции:

```javascript
countEven('12 34 56'); // 3
countEven('Order number: 135, Item# 779, Amount: 5.'); // 0
countEven('Hello, World!'); // 0
countEven(''); // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun


INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countEven(str) {
  let count = 0;
  let acc = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!isNaN(Number(char)) && char !== ' ') {
      acc += char;
    } else if (acc) {
      if (acc % 2 === 0) {
        count++;
      }
      acc = '';
    }
  }

  if (acc && acc % 2 === 0) {
      count++;
  }

  return count;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function countEven', () => {
  expect(countEven).to.be.a('function');
});

it('countEven should not contain includes()', () => {
  expect(countEven.toString()).to.not.contain('.includes(');
});

it('countEven should not contain indexOf()', () => {
  expect(countEven.toString()).to.not.contain('.indexOf(');
});

it('countEven should not contain split()', () => {
  expect(countEven.toString()).to.not.contain('.split(');
});

it('countEven("12 34 56 78 90") should return 5', () => {
  expect(countEven('12 34 56 78 90')).to.be.equal(5);
});

it('countEven("Hello, World!") should return 0', () => {
  expect(countEven('Hello, World!')).to.be.equal(0);
});

it('countEven("Order number: 1035, Item# 0779, Amount: 50.") should return 1', () => {
  expect(countEven('Order number: 1035, Item# 0779, Amount: 50.')).to.be.equal(1);
});

it('countEven("Order number: 1135, Item# 1779, Amount: 59.") should return 0', () => {
  expect(countEven('Order number: 1135, Item# 1779, Amount: 59.')).to.be.equal(0);
});

it('countEven("0") should return 1', () => {
  expect(countEven('0')).to.be.equal(1);
});

it('countEven("1") should return 0', () => {
  expect(countEven('1')).to.be.equal(0);
});

it('countEven("  2  ") should return 1', () => {
  expect(countEven('  2  ')).to.be.equal(1);
});

it('countEven(" 3 ") should return 0', () => {
  expect(countEven(' 3 ')).to.be.equal(0);
});

it('countEven("(978)-479-55-00") should return 2', () => {
  expect(countEven('(978)-479-55-00')).to.be.equal(2);
});

it('countEven("  555%7 : 1 ; 9999, 17 error @/? {333}  ") should return 0', () => {
  expect(countEven('  555%7 : 1 ; 9999, 17 error @/? {333}  ')).to.be.equal(0);
});

it('countEven("  51km 1000m 0") should return 2', () => {
  expect(countEven('  51km 1000m 0')).to.be.equal(2);
});

it('countEven("") should return 0', () => {
  expect(countEven('')).to.be.equal(0);
});

it('countEven(" ") should return 0', () => {
  expect(countEven(' ')).to.be.equal(0);
});

it('countEven("    ") should return 0', () => {
  expect(countEven('    ')).to.be.equal(0);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
