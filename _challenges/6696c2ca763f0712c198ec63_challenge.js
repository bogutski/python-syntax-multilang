// NAMEEN:
// NAMERU:Количество вхождений первого и второго символов в строку

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Эта задача перекликается с предыдущей темой.

Напишите функцию `countFirstAndSecondEl`, которая принимает один параметр - строку.

Строка произвольной длины и может содержать в себе символы, знаки препинания и буквы в верхнем или нижнем регистре.

Функция производит подсчет количества вхождений первого и второго символов в строку и возвращает строку в формате:

`<первый символ> - <количество вхождений>, <второй символ> - <количество вхождений>`

* Если строка пустая, функция возвращает строку `Empty string`

* Если первый и второй символы совпадают, функция возвращает строку `The first and second symbols are the same`

Поиск символов в строке не должен быть чувствителен к регистру.

Пример запуска функции:
```javascript
countFirstAndSecondEl('Every cloud has a silver lining'); // 'e - 3, v - 2'
countFirstAndSecondEl(''); // 'Empty string'
countFirstAndSecondEl('Ooh, come out as something different!'); // 'The first and second symbols are the same'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countFirstAndSecondEl(str) {
  str = str.toLowerCase();
  if (str === '') return `Empty string`
  if (str[0] === str[1]) return `The first and second symbols are the same`
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[0]) count1++
    if (str[i] === str[1]) count2++
  }
  return `${str[0]} - ${count1}, ${str[1]} - ${count2}`
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function countFirstAndSecondEl', () => {
  expect(countFirstAndSecondEl).to.be.a('function');
});

it("countFirstAndSecondEl('Every cloud has a silver lining') should return 'e - 3, v - 2'", () => {
  expect(countFirstAndSecondEl('Every cloud has a silver lining')).to.be.equal('e - 3, v - 2');
});

it("countFirstAndSecondEl('') should return 'Empty string'", () => {
  expect(countFirstAndSecondEl('')).to.be.equal('Empty string');
});

it("countFirstAndSecondEl('Ooh, come out as something different!') should return 'The first and second symbols are the same'", () => {
  expect(countFirstAndSecondEl('Ooh, come out as something different!')).to.be.equal('The first and second symbols are the same');
});

it("countFirstAndSecondEl('Elephant in the Room') should return 'e - 3, l - 1'", () => {
  expect(countFirstAndSecondEl('Elephant in the Room')).to.be.equal('e - 3, l - 1');
});

it("countFirstAndSecondEl('A Little Bird Told Me') should return 'a - 1,   - 4'", () => {
  expect(countFirstAndSecondEl('A Little Bird Told Me')).to.be.equal('a - 1,   - 4');
});

it("countFirstAndSecondEl('Greased Lightning') should return 'g - 3, r - 1'", () => {
  expect(countFirstAndSecondEl('Greased Lightning')).to.be.equal('g - 3, r - 1');
});

it("countFirstAndSecondEl('UNDER YOUR NOSE') should return 'u - 2, n - 2'", () => {
  expect(countFirstAndSecondEl('UNDER YOUR NOSE')).to.be.equal('u - 2, n - 2');
});

it("countFirstAndSecondEl('I, you, we') should return 'i - 1, , - 2'", () => {
  expect(countFirstAndSecondEl('I, you, we')).to.be.equal('i - 1, , - 2');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
