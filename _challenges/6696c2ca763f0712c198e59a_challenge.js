// NAMEEN:
// NAMERU:Создаем секретный алгоритм шифрования чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В функцию `numberToSecret` передается строка длиной 4 символа.

Каждый символ - это число от 0 до 9.

Таблица замены для шифрования:
```
0 -> t
1 -> &
2 -> :
3 -> B
4 -> @
5 -> Q
6 -> 8
7 -> W
8 -> x
9 -> #
```

Нужно зашифровать строку, заменив каждую цифру на соответствующий символ из таблицы.

Например, если в функцию передана строка `1234`, то нужно вернуть строку `&:B@`.

Для решения задачи используйте объект в качестве таблицы соответствий.

В этом объекте ключами будут цифры, а значениями – символы.

Примеры запуска функции:
```javascript
numberToSecret('1234'); // '&:B@'
numberToSecret('0000'); // 'tttt'
numberToSecret('9900'); // '##tt'
numberToSecret('5792'); // 'QW#:'
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numberToSecret(number) {
  const table = {
    0: 't',
    1: '&',
    2: ':',
    3: 'B',
    4: '@',
    5: 'Q',
    6: '8',
    7: 'W',
    8: 'x',
    9: '#',
  };

  let result = '';
  for (let i = 0; i < number.length; i += 1) {
    result += table[number[i]];
  }

  return result;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function numberToSecret', () => {
  expect(numberToSecret).to.be.a('function');
});

it('numberToSecret("1234") return "&:B@"', () => {
  expect(numberToSecret('1234')).eql('&:B@');
});

// numberToSecret('0000'); // 'tttt'
it('numberToSecret("0000") return "tttt"', () => {
  expect(numberToSecret('0000')).eql('tttt');
});

// numberToSecret('9900'); // '##tt'
it('numberToSecret("9900") return "##tt"', () => {
  expect(numberToSecret('9900')).eql('##tt');
});

it('numberToSecret("5792") return "QW#:"', () => {
  expect(numberToSecret('5792')).eql('QW#:');
});

it('numberToSecret("1221") return "&::&"', () => {
  expect(numberToSecret('1221')).eql('&::&');
});

it('numberToSecret("9999") return "####"', () => {
  expect(numberToSecret('9999')).eql('####');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
