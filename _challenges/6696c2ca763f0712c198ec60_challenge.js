// NAMEEN:
// NAMERU:Посчитать количество вхождений элементов в строку с 4-го индекса строки до конца

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `countElFrom4Ind` принимает 1 параметр - строку `str`.

Строка произвольной длины и состоит из слов в верхнем или нижнем регистре, разделенных пробелами.

Функция возвращает объект, в котором ключами будут буквы, а значениями - количество вхождений этих букв.

Подсчет начинается с 4-го индекса строки и до конца.

Исправьте ошибки в коде, чтобы функция работала правильно.

Пример запуска функции:
```javascript
countElFrom4Ind('REPAPER'); // {E: 1, P: 1, R: 1}
countElFrom4Ind('Love Birds'); // {" ": 1, B: 1, d: 1, i: 1, r: 1, s: 1}
countElFrom4Ind('4 you'); // {u: 1}
countElFrom4Ind('Anna'); // 'The string is not long enough'
countElFrom4Ind('Up'); // 'The string is not long enough'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function СountElFrom4Ind(str){
  if(str.length <= 5) return 'The string is not long enough';
  const obj = {};
  for (let i = str[4]; i < str.length; i++) {
    if (obj[str[i]]) obj[str[i]]++
    else obj[str[i]] = 1;
  }
  return obj;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countElFrom4Ind(str) {
  if (str.length < 5) return 'The string is not long enough';
  const obj = {};
  for (let i = 4; i < str.length; i++) {
    if (obj[str[i]]) obj[str[i]]++
    else obj[str[i]] = 1;
  }
  return obj;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function countElFrom4Ind', () => {
  expect(countElFrom4Ind).to.be.a('function');
});

it("countElFrom4Ind('REPAPER') should return {E: 1, P: 1, R: 1}", () => {
  expect(countElFrom4Ind('REPAPER')).to.deep.equal({E: 1, P: 1, R: 1});
});

it("countElFrom4Ind('Love Birds') should return {' ': 1, B: 1, d: 1, i: 1, r: 1, s: 1}", () => {
  expect(countElFrom4Ind('Love Birds')).to.deep.equal({' ': 1, B: 1, d: 1, i: 1, r: 1, s: 1});
});

it("countElFrom4Ind('Yada Yada') should return {' ': 1, a: 2, d: 1, Y: 1}", () => {
  expect(countElFrom4Ind('Yada Yada')).to.deep.equal({' ': 1, a: 2, d: 1, Y: 1});
});

it("countElFrom4Ind('Madam') should return {m: 1}", () => {
  expect(countElFrom4Ind('Madam')).to.deep.equal({m: 1});
});

it("countElFrom4Ind('Two Down, One to Go') should return {' ': 3, ',': 1, D: 1, e: 1, G: 1, n: 2, o: 3, O: 1, t: 1, w: 1}", () => {
  expect(countElFrom4Ind('Two Down, One to Go')).to.deep.equal({
    ' ': 3,
    ',': 1,
    D: 1,
    e: 1,
    G: 1,
    n: 2,
    o: 3,
    O: 1,
    t: 1,
    w: 1
  });
});

it("countElFrom4Ind('4 you') should return {u: 1}", () => {
  expect(countElFrom4Ind('4 you')).to.deep.equal({u: 1});
});

it("countElFrom4Ind('Anna') should return 'The string is not long enough'", () => {
  expect(countElFrom4Ind('Anna')).to.equal('The string is not long enough');
});

it("countElFrom4Ind('') should return 'The string is not long enough'", () => {
  expect(countElFrom4Ind('')).to.equal('The string is not long enough');
});

it("countElFrom4Ind('Age') should return 'The string is not long enough'", () => {
  expect(countElFrom4Ind('Age')).to.equal('The string is not long enough');
});

it("countElFrom4Ind('Up') should return 'The string is not long enough'", () => {
  expect(countElFrom4Ind('Up')).to.equal('The string is not long enough');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
