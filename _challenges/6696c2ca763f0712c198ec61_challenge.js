// NAMEEN:
// NAMERU:Количество вхождений элементов с конца до середины строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `countElFromEndToMiddle` принимает 1 параметр - строку.

Строка `str` произвольной длины и содержит буквы/слова в верхнем и нижнем регистре.

Функция должна вернуть объект, в котором ключами будут буквы, а значениями - количество вхождений этих букв в строку.

Подсчет производится с конца строки до середины.

Вычисление середины строки производится с округлением в меньшую сторону.

Исправьте ошибки в коде, чтобы функция работала правильно.

Пример запуска функции:
```javascript
countElFromEndToMiddle('REPAPER'); // {E: 1, P: 1, R: 1}
countElFromEndToMiddle('Yada Yada'); // {a: 2, d: 1, Y: 1}
countElFromEndToMiddle('Madam'); // {a: 1, m: 1}
countElFromEndToMiddle(''); // {}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function countElFromEndToMiddle(str){
  let middle = Math.ceil(str.length / 2);
  const obj = [];
  for (let i = str.length; i > middle; i++) {
    if (obj[str[i]]) obj[str[i]]++
    else obj[str[i]] = 1;
  }
  return obj;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countElFromEndToMiddle(str) {
  let middle = Math.floor(str.length / 2);
  const obj = {};
  for (let i = str.length - 1; i > middle; i--) {
    if (obj[str[i]]) obj[str[i]]++
    else obj[str[i]] = 1;
  }
  return obj;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function countElFromEndToMiddle', () => {
  expect(countElFromEndToMiddle).to.be.a('function');
});

it("countElFromEndToMiddle('REPAPER') should return {E: 1, P: 1, R: 1}", () => {
  expect(countElFromEndToMiddle('REPAPER')).to.deep.equal({E: 1, P: 1, R: 1});
});

it("countElFromEndToMiddle('Love Birds') should return {d: 1, i: 1, r: 1, s: 1}", () => {
  expect(countElFromEndToMiddle('Love Birds')).to.deep.equal({d: 1, i: 1, r: 1, s: 1});
});

it("countElFromEndToMiddle('Yada Yada') should return {a: 2, d: 1, Y: 1}", () => {
  expect(countElFromEndToMiddle('Yada Yada')).to.deep.equal({a: 2, d: 1, Y: 1});
});

it("countElFromEndToMiddle('Madam') should return {a: 1, m: 1}", () => {
  expect(countElFromEndToMiddle('Madam')).to.deep.equal({a: 1, m: 1});
});

it("countElFromEndToMiddle('Two Down, One to Go') should return {' ': 2, e: 1, G: 1, n: 1, o: 2, O: 1, t: 1}", () => {
  expect(countElFromEndToMiddle('Two Down, One to Go')).to.deep.equal({' ': 2, e: 1, G: 1, n: 1, o: 2, O: 1, t: 1});
});

it("countElFromEndToMiddle('4 you') should return {o: 1, u: 1}", () => {
  expect(countElFromEndToMiddle('4 you')).to.deep.equal({o: 1, u: 1});
});

it("countElFromEndToMiddle('') should return {}", () => {
  expect(countElFromEndToMiddle('')).to.deep.equal({});
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
