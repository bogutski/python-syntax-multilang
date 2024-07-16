// NAMEEN:
// NAMERU:Проверка на анаграмму с помощью методов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
`Анаграмма` - это слово или фраза, образованные путем перестановки букв другого слова или фразы.

Мы начнем с самого легкого варианта по определению анаграммы.

В этой задаче используйте методы `split`, `sort` и `join`.


Напишите функцию `isAnagram`, которая принимает две строки.

Функция должна вернуть `true`, если первая строка является анаграммой второй строки, и `false` в противном случае.

Проверку на пробелы, пустые строки и длину строки выполнять не нужно, только проверьте, что строки являются
 анаграммой, с помощью методов.


Примеры запуска функции:
```javascript
isAnagram('elbow', 'below');   // true
isAnagram('laptop', 'toplap');   // true
isAnagram('123', '923');       // false
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
  const s1 = str1.split('').sort().join('');
  const s2 = str2.split('').sort().join('');
  return s1 === s2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isAnagram', () => {
  expect(isAnagram).to.be.a('function');
});

it("Function isAnagram contains method 'split'", () => {
  expect(isAnagram.toString()).to.contain('.split');
});

it("Function isAnagram contains method 'sort'", () => {
  expect(isAnagram.toString()).to.contain('.sort');
});

it("Function isAnagram contains method 'join'", () => {
  expect(isAnagram.toString()).to.contain('.join');
});

it("isAnagram('elbow', 'below') should return true", () => {
  expect(isAnagram('elbow', 'below')).to.be.true;
});

it("isAnagram('brush', 'shrub') should return true", () => {
  expect(isAnagram('brush', 'shrub')).to.be.true;
});

it("isAnagram('dictionary', 'indicatory') should return true", () => {
  expect(isAnagram('dictionary', 'indicatory')).to.be.true;
});

it("isAnagram('12345', '53214') should return true", () => {
  expect(isAnagram('12345', '53214')).to.be.true;
});

it("isAnagram('12345', '53715') should return false", () => {
  expect(isAnagram('12345', '53715')).to.be.false;
});

it("isAnagram('car', 'cat') should return false", () => {
  expect(isAnagram('car', 'cat')).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
