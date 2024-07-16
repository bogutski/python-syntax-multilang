// NAMEEN:
// NAMERU:Замените цифры на слова. Объект как таблица соответствий

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
На примере этой задачи вы научитесь использовать объекты в качестве таблиц соответствий.

Это пригодится в тех случаях, когда нужно заменить одно значение на другое. Например, если вам нужно заменить цифры на слова.

Пример использования объекта как таблицы соответствий:
```javascript
const numbers = {
  1: 'one',
  2: 'two',
  3: 'three',
}

const n = 1;
console.log(numbers[n]); // 'one'

const m = 3;
console.log(numbers[m]); // 'three'
```

Таким образом, если вам нужно заменить цифру на слово, то достаточно взять объект `numbers` и обратиться к нему по ключу, который равен цифре.

Нужно написать функцию `getNumberName`, которая принимает один параметр – число от нуля до десяти.

Функция должна возвращать строку, которая будет соответствовать этому числу.

Примеры запуска функции:
```javascript
getNumberName(0); // 'zero'
getNumberName(1); // 'one'
getNumberName(2); // 'two'
getNumberName(3); // 'three'
getNumberName(4); // 'four'
getNumberName(5); // 'five'
getNumberName(6); // 'six'
getNumberName(7); // 'seven'
getNumberName(8); // 'eight'
getNumberName(9); // 'nine'
getNumberName(10); // 'ten'
getNumberName(11); // 'unknown number'
```

Если в функцию передано число, которого нет в таблице соответствий, то функция должна возвращать строку `'unknown number'`.

Эту задачу можно решить с помощью `switch` или `if`, но мы предлагаем вам решить ее с помощью объекта.

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getNumberName(number) {
  const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
  };

  return numbers[number] || 'unknown number';
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function `getNumberName`', () => {
  expect(getNumberName).to.be.a('function');
});

it('getNumberName(0) return `zero`', () => {
  expect(getNumberName(0)).to.be.equal('zero');
});

it('getNumberName(1) return `one`', () => {
  expect(getNumberName(1)).to.be.equal('one');
});

it('getNumberName(2) return `two`', () => {
  expect(getNumberName(2)).to.be.equal('two');
});

it('getNumberName(3) return `three`', () => {
  expect(getNumberName(3)).to.be.equal('three');
});

it('getNumberName(4) return `four`', () => {
  expect(getNumberName(4)).to.be.equal('four');
});

it('getNumberName(5) return `five`', () => {
  expect(getNumberName(5)).to.be.equal('five');
});

it('getNumberName(6) return `six`', () => {
  expect(getNumberName(6)).to.be.equal('six');
});

it('getNumberName(7) return `seven`', () => {
  expect(getNumberName(7)).to.be.equal('seven');
});

it('getNumberName(8) return `eight`', () => {
  expect(getNumberName(8)).to.be.equal('eight');
});

it('getNumberName(9) return `nine`', () => {
  expect(getNumberName(9)).to.be.equal('nine');
});

it('getNumberName(10) return `ten`', () => {
  expect(getNumberName(10)).to.be.equal('ten');
});

it('getNumberName(11) return `unknown number`', () => {
  expect(getNumberName(11)).to.be.equal('unknown number');
});

it('getNumberName(12) return `unknown number`', () => {
  expect(getNumberName(12)).to.be.equal('unknown number');
});

it('getNumberName(130) return `unknown number`', () => {
  expect(getNumberName(130)).to.be.equal('unknown number');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
