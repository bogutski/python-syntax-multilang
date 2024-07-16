// NAMEEN:
// NAMERU:Расшифровать строку с закодированными цветами радуги

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Как мы все знаем, радуга состоит из 7 цветов. Каждый цвет имеет свой номер:
1 - красный - red
2 - оранжевый - orange
3 - желтый - yellow
4 - зеленый - green
5 - голубой - blue
6 - синий - indigo
7 - фиолетовый  - violet

Функция `colorDecoder` принимает строку, в которой закодированы цвета радуги - вместо названий цветов в строке используются их коды (порядковые номера).
Нужно расшифровать строку, заменив номера цветов на их названия, и вернуть получившуюся строку.
Для решения задачи используйте массив `rainbow`, который уже создан в коде.
Не забывайте, что нумерация в массиве начинается с 0, а порядковые номера цветов - с 1.

Примеры использования функции:
colorDecoder('1-2-3') // 'red-orange-yellow'
colorDecoder('Grass is 4. Skies are 5.') // 'Grass is green. Skies are blue.'
colorDecoder('1, 2, 3, 4, 5, 6 and 7 are the colors of the rainbow') // 'red, orange, yellow, green, blue, indigo and violet are the colors of the rainbow'
colorDecoder('1') // 'red'
colorDecoder('') // ''
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function colorDecoder(str) {
  const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  let result = '';
  // your code here
  return result;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function colorDecoder(str) {
  const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '1' && str[i] <= '7') {
      const index = +str[i] - 1;
      result += rainbow[index];
    } else {
      result += str[i];
    }
  }

  return result;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function colorDecoder', () => {
  expect(colorDecoder).to.be.a('function');
});

it('colorDecoder("1-2-3") should return "red-orange-yellow"', () => {
  expect(colorDecoder('1-2-3')).to.equal('red-orange-yellow');
});

it('colorDecoder("Grass is 4. Skies are 5.") should return "Grass is green. Skies are blue."', () => {
  expect(colorDecoder('Grass is 4. Skies are 5.')).to.equal('Grass is green. Skies are blue.');
});

it('colorDecoder("1, 2, 3, 4, 5, 6 and 7 are the colors of the rainbow") should return "red, orange, yellow, green, blue, indigo and violet are the colors of the rainbow"', () => {
  expect(colorDecoder('1, 2, 3, 4, 5, 6 and 7 are the colors of the rainbow')).to.equal('red, orange, yellow, green, blue, indigo and violet are the colors of the rainbow');
});

it('colorDecoder("6") should return "indigo"', () => {
  expect(colorDecoder('6')).to.equal('indigo');
});

it('colorDecoder("7") should return "violet"', () => {
  expect(colorDecoder('7')).to.equal('violet');
});

it('colorDecoder("") should return ""', () => {
  expect(colorDecoder('')).to.equal('');
});

it('colorDecoder("1-2-3-4-5-6-7") should return "red-orange-yellow-green-blue-indigo-violet"', () => {
  expect(colorDecoder('1-2-3-4-5-6-7')).to.equal('red-orange-yellow-green-blue-indigo-violet');
});

it('colorDecoder("1:1 2:2 3/3,4-8-9") should return "red:red orange:orange yellow/yellow,green-8-9"', () => {
  expect(colorDecoder('1:1 2:2 3/3,4-8-9')).to.equal('red:red orange:orange yellow/yellow,green-8-9');
});

it('colorDecoder("mix 3 and 5 to get 4") should return "mix yellow and blue to get green"', () => {
  expect(colorDecoder('mix 3 and 5 to get 4')).to.equal('mix yellow and blue to get green');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
