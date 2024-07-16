// NAMEEN:
// NAMERU:Вернуть массив ключей объекта

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функция `objectKeys` принимает 1 параметр - строку.

Строка произвольной длины и содержит буквы в верхнем и/или нижнем регистре.

Функция должна вернуть массив ключей объекта, где ключи - это буквы строки.

Для решения задачи используйте метод `Object.keys()`.

Пример запуска функции:
```javascript
objectKeys('A Piece of Cake'); // ["A", " ", "P", "i", "e", "c", "o", "f", "C", "a", "k"]
objectKeys('Anna'); // ["A", "n", "a"]
objectKeys('level'); // ["l", "e", "v"]
objectKeys(''); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function objectKeys(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) obj[str[i]]++
    else obj[str[i]] = 1;
  }
  return Object.keys(obj);
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function objectKeys', () => {
  expect(objectKeys).to.be.a('function');
});

it("objectKeys('A Piece of Cake') should return ['A', ' ', 'P', 'i', 'e', 'c', 'o', 'f', 'C', 'a', 'k']", () => {
  expect(objectKeys('A Piece of Cake')).to.deep.equal(['A', ' ', 'P', 'i', 'e', 'c', 'o', 'f', 'C', 'a', 'k']);
});

it("objectKeys('Anna') should return ['A', 'n', 'a']", () => {
  expect(objectKeys('Anna')).to.deep.equal(['A', 'n', 'a']);
});

it("objectKeys('level') should return ['l', 'e', 'v']", () => {
  expect(objectKeys('level')).to.deep.equal(['l', 'e', 'v']);
});

it("objectKeys('road') should return ['r', 'o', 'a', 'd']", () => {
  expect(objectKeys('road')).to.deep.equal(['r', 'o', 'a', 'd']);
});

it("objectKeys('wheel') should return ['w', 'h', 'e', 'l']", () => {
  expect(objectKeys('wheel')).to.deep.equal(['w', 'h', 'e', 'l']);
});

it("objectKeys('12 plus 1') should return ['1', '2', ' ', 'p', 'l', 'u', 's']", () => {
  expect(objectKeys('12 plus 1')).to.deep.equal(['1', '2', ' ', 'p', 'l', 'u', 's']);
});

it("objectKeys('') should return []", () => {
  expect(objectKeys('')).to.deep.equal([]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
