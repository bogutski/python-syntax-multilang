// NAMEEN:
// NAMERU:Исправьте ошибку в коде

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `stopCountAtEl` принимает 2 параметра: строку `str` и символ `el`.

Функция возвращает количество символов в строке `str`.

Если в строке `str` встречается символ `el` в верхнем или нижнем регистре, подсчёт прекращается.

Исправьте ошибки в коде, чтобы функция работала правильно.

Пример запуска функции:
```javascript
stopCountAtEl('ftgjkfdttfjRhKl', 'r') // 11
stopCountAtEl('rftgjkffjR', 'R') // 0
stopCountAtEl('rftgjkffjR', 'W') // 10
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function stopсountAtEl(str, el) {
  let count = 0;
  for (let i = el; i < str.length; i++) {
    if (str[i] = el.toUpperCase && str[i] = el.toLowerCase) break.el;
    count++
  }
  return str
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stopCountAtEl(str, el) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === el.toUpperCase() || str[i] === el.toLowerCase()) break;
    count++
  }
  return count
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function stopCountAtEl', () => {
  expect(stopCountAtEl).to.be.a('function');
});

it("stopCountAtEl('ftgjkfdttfjRhKl', 'r') should return 11", () => {
  expect(stopCountAtEl('ftgjkfdttfjRhKl', 'r')).to.equal(11);
});

it("stopCountAtEl('rftgjkffjR', 'R') should return 0", () => {
  expect(stopCountAtEl('rftgjkffjR', 'R')).to.equal(0);
});

it("stopCountAtEl('rftgjkffjR', 'W') should return 10", () => {
  expect(stopCountAtEl('rftgjkffjR', 'W')).to.equal(10);
});

it("stopCountAtEl('rftgjkfdttfjRhKl bgf', ' ') should return 16", () => {
  expect(stopCountAtEl('rftgjkfdttfjRhKl bgf', ' ')).to.equal(16);
});

it("stopCountAtEl('rftgjkfdttfjRhKlbgf', '') should return 19", () => {
  expect(stopCountAtEl('rftgjkfdttfjRhKlbgf', '')).to.equal(19);
});

it("stopCountAtEl('', 'T') should return 0", () => {
  expect(stopCountAtEl('', 'T')).to.equal(0);
});

it("stopCountAtEl('rtg 3 kfdhKlbgf', '3') should return 4", () => {
  expect(stopCountAtEl('rtg 3 kfdhKlbgf', '3')).to.equal(4);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
