// NAMEEN:
// NAMERU:Определить, являются ли строки анаграммами с помощью методов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В этой задаче нужно использовать те же методы, что и в прошлой, только добавить еще проверки.

Напишите функцию `isAnagram`, которая принимает две строки и возвращает `true`, если они являются анаграммами, и `false`, если нет.

В строке могут быть пробелы, заглавные и строчные буквы.

Если одна или обе строки пустые, то функция должна вернуть строку: `'One or both strings are empty'`.


Примеры запуска функции:
```javascript
isAnagram('   elbOw', 'beloW ');     // true
isAnagram('LISTEN', 'silent     ');  // true
isAnagram('1 2 3', '  1 2 3   ');    // true
isAnagram('laptop', 'Apple');        // false
isAnagram('', '');                   // 'One or both strings are empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isAnagram(str1, str2){
  if(!str1.length || !str2.length) return 'One or both strings are empty'

  const string1 = str1.trim().toLowerCase();
  const string2 = str2.trim().toLowerCase();

  if(string1.length !== string2.length) return false;

  const s1 = string1.split('').sort().join('');
  const s2 = string2.split('').sort().join('');

  return s1 === s2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isAnagram', () => {
  expect(isAnagram).to.be.a('function');
});

it("Function isAnagram contains 'split'", () => {
  expect(isAnagram.toString()).to.contain('split');
});

it("Function isAnagram contains 'sort'", () => {
  expect(isAnagram.toString()).to.contain('sort');
});

it("Function isAnagram contains 'join'", () => {
  expect(isAnagram.toString()).to.contain('join');
});

it("isAnagram(' Elbow', 'beloW ') returns true", () => {
  expect(isAnagram(' elbow', 'below ')).to.be.true;
});

it("isAnagram(' liSTen  ', '   silEnt ') returns true", () => {
  expect(isAnagram(' listen  ', '   silent ')).to.be.true;
});

it("isAnagram('  1 2 3', '  3 2 1') returns true", () => {
  expect(isAnagram('  1 2 3', '  3 2 1')).to.be.true;
});

it("isAnagram('  1 52 3', '  3 2 1') returns false", () => {
  expect(isAnagram('  1 52 3', '  3 2 1')).to.be.false;
});

it("isAnagram(' apple', 'alpe  ') returns false", () => {
  expect(isAnagram(' apple', 'alpe  ')).to.be.false;
});

it("isAnagram('laptop', '') returns 'One or both strings are empty", () => {
  expect(isAnagram('laptop', '')).to.equal('One or both strings are empty');
});

it("isAnagram('', '') returns 'One or both strings are empty", () => {
  expect(isAnagram('', '')).to.equal('One or both strings are empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
