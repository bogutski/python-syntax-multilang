// NAMEEN:
// NAMERU:Проверка на анаграмму с использованием циклов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isAnagram`, которая принимает две строки и возвращает `true`, если они являются анаграммами, и `false` в противном случае.

Строки могут быть разной длины, иметь пробелы и содержать заглавные и строчные буквы. Пустых строк не будет передано.

Попробуйте решить задачу используя только циклы. Методы: `split`, `join` и `sort` использовать нельзя.


Примеры запуска функции:
```javascript
isAnagram('123', '321'); // true
isAnagram('cat', 'act'); // true
isAnagram('12345', '012345'); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isAnagram(str1, str2) {
  const s1 = str1.trim().toLowerCase();
  const s2 = str2.trim().toLowerCase();

  if (s1.length !== s2.length) return false;

  for (let i = 0; i < s1.length; i++){
    for (let j = 0; j < s2.length; j++){
      if (s1[i] === s2[j]) break;
      else if (j === s2.length - 1) return false;
    }
  }
  return true;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isAnagram', () => {
  expect(isAnagram).to.be.a('function');
});

it("Function isAnagram should not contain 'split'", () => {
  expect(isAnagram.toString()).to.not.contain('split');
});

it("Function isAnagram should not contain 'join'", () => {
  expect(isAnagram.toString()).to.not.contain('join');
});

it("Function isAnagram should not contain 'sort'", () => {
  expect(isAnagram.toString()).to.not.contain('sort');
});

it("isAnagram('123', '312') should return true", () => {
  expect(isAnagram('123', '312')).to.be.true;
});

it("isAnagram('32145', '54326') should return false", () => {
  expect(isAnagram('32145', '54326')).to.be.false;
});

it("isAnagram('elbow', 'belowy') should return false", () => {
  expect(isAnagram('elbow', 'belowy')).to.be.false;
});

it("isAnagram('lIstEn', 'sIlEnt') should return true", () => {
  expect(isAnagram('lIstEn', 'sIlEnt')).to.be.true;
});

it("isAnagram('Astronomer', 'Moon starer') should return false", () => {
  expect(isAnagram('Astronomer', 'Moon starer')).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
