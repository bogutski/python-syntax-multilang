// NAMEEN:
// NAMERU:Посчитать количество вхождений каждого элемента в строку

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `countEachEl`, которая принимает 1 параметр - строку.

Строка состоит из произвольного количества букв/слов в нижнем или верхнем регистре.

Функция должна вернуть объект, в котором ключами будут буквы из строки, а значениями - количество их вхождений в строку.

Пример запуска функции:
```javascript
countEachEl('Anna'); // {A: 1, a: 1, n: 2}
console.log(countEachEl('DEIfied')); // {D: 1, d: 1, E: 1, e: 1, f: 1, I: 1, i: 1}
console.log(countEachEl('')); // {}
countEachEl('4 you'); // { : 1, 4: 1, o: 1, u: 1, y: 1}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countEachEl(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) obj[str[i]]++
    else obj[str[i]] = 1;
  }
  return obj;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function countEachEl', () => {
  expect(countEachEl).to.be.a('function');
});

it("countEachEl('Anna') should return {A: 1, a: 1, n: 2}", () => {
  expect(countEachEl('Anna')).to.be.deep.equal({A: 1, a: 1, n: 2});
});

it("countEachEl('DEIfied') should return {D: 1, d: 1, E: 1, e: 1, f: 1, I: 1, i: 1}", () => {
  expect(countEachEl('DEIfied')).to.be.deep.equal({D: 1, d: 1, E: 1, e: 1, f: 1, I: 1, i: 1});
});

it("countEachEl('') should return {}", () => {
  expect(countEachEl('')).to.be.deep.equal({});
});

it("countEachEl('4 you') should return { : 1, 4: 1, o: 1, u: 1, y: 1}", () => {
  expect(countEachEl('4 you')).to.be.deep.equal({' ': 1, '4': 1, o: 1, u: 1, y: 1});
});

it("countEachEl('save-vase') should return {-: 1, a: 2, e: 2, s: 2, v: 2}", () => {
  expect(countEachEl('save-vase')).to.be.deep.equal({'-': 1, a: 2, e: 2, s: 2, v: 2});
});

it("countEachEl('level') should return {e: 2, l: 2, v: 1}", () => {
  expect(countEachEl('level')).to.be.deep.equal({e: 2, l: 2, v: 1});
});

it("countEachEl('Madam') should return {a: 2, d: 1, M: 1, m: 1}", () => {
  expect(countEachEl('Madam')).to.be.deep.equal({a: 2, d: 1, M: 1, m: 1});
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
