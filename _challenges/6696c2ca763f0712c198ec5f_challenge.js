// NAMEEN:
// NAMERU:Подсчет вхождения каждого элемента в строку от начала до середины

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `countElFromStartToMiddle`, которая принимает 1 параметр - строку.

Строка произвольной длины состоит из букв/слов в нижнем и/или верхнем регистре.

Функция должна вернуть объект, в котором ключами будут буквы, а значениями - количество вхождений этих букв.

Подсчет должен осуществляться от начала до середины строки.

Перед созданием цикла `for` найдите середину строки, округлив ее в большую сторону с использованием метода `Math.ceil()`

Пример запуска функции:
```javascript
countElFromStartToMiddle('REPAPER'); // {A: 1, E: 1, P: 1, R: 1}
countElFromStartToMiddle('Yada Yada'); // {" ": 1, a: 2, d: 1, Y: 1}
countElFromStartToMiddle('Madam'); // {a: 1, d: 1, M: 1}
countElFromStartToMiddle('w'); // {w: 1}
countElFromStartToMiddle(''); // {}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countElFromStartToMiddle(str) {
  let middle = Math.ceil(str.length / 2);
  const obj = {};
  for (let i = 0; i < middle; i++) {
    if (obj[str[i]]) obj[str[i]]++
    else obj[str[i]] = 1;
  }
  return obj;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function countElFromStartToMiddle', () => {
  expect(countElFromStartToMiddle).to.be.a('function');
});

it("countElFromStartToMiddle('REPAPER') should return {A: 1, E: 1, P: 1, R: 1}", () => {
  expect(countElFromStartToMiddle('REPAPER')).to.deep.equal({A: 1, E: 1, P: 1, R: 1});
});

it("countElFromStartToMiddle('Love Birds') should return {' ': 1, e: 1, L: 1, o: 1, v: 1}", () => {
  expect(countElFromStartToMiddle('Love Birds')).to.deep.equal({' ': 1, e: 1, L: 1, o: 1, v: 1});
});

it("countElFromStartToMiddle('Yada Yada') should return {' ': 1, a: 2, d: 1, Y: 1}", () => {
  expect(countElFromStartToMiddle('Yada Yada')).to.deep.equal({' ': 1, a: 2, d: 1, Y: 1});
});

it("countElFromStartToMiddle('Madam') should return {a: 1, d: 1, M: 1}", () => {
  expect(countElFromStartToMiddle('Madam')).to.deep.equal({a: 1, d: 1, M: 1});
});

it("countElFromStartToMiddle('Two Down, One to Go') should return {' ': 2, ',': 1, D: 1, n: 1, o: 2, T: 1, w: 2}", () => {
  expect(countElFromStartToMiddle('Two Down, One to Go')).to.deep.equal({' ': 2, ',': 1, D: 1, n: 1, o: 2, T: 1, w: 2});
});

it("countElFromStartToMiddle('4 you') should return {' ': 1, 4: 1, y: 1}", () => {
  expect(countElFromStartToMiddle('4 you')).to.deep.equal({' ': 1, 4: 1, y: 1});
});

it("countElFromStartToMiddle('') should return {}", () => {
  expect(countElFromStartToMiddle('')).to.deep.equal({});
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
