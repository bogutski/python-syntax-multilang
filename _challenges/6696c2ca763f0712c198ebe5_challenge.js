// NAMEEN:
// NAMERU:Проверка на анаграмму с использованием объекта

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В этой задаче мы попрактикуемся в написании функций, с использованием циклов и объекта.

Напишите функцию `isAnagram`, которая принимает две строки и возвращает `true`, если эти строки являются анаграммами, и `false` в противном случае.

Строки могу содержать пробелы, заглавные и строчные буквы и разную длину. Пустых строк не будет передано.

Попробуйте использовать пример с объектом, который мы рассмотрели в уроке. Методы использовать нельзя, кроме `trim`, `toLowerCase` и `toUpperCase`.


Примеры запуска функции:
```javascript
isAnagram('123', '923');                 // false
isAnagram('  eLBow ', 'bELow');          // true
isAnagram('laptop', 'toplapp');          // false
isAnagram('laptop 123', 'toplap 123');   // true
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
  const s1 = str1.trim().toLowerCase()
  const s2 = str2.trim().toLowerCase()

  if(s1.length !== s2.length) return false;

  const s2obj = {};

  for(let i = 0; i < s2.length; i++){
    const el = s2[i];
    s2obj[el] = true;
  }

  for(let i = 0; i < s1.length; i++){
    const el = s1[i]
    if(!s2obj[el]) return false;
  }
  return true;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isAnagram', () => {
  expect(isAnagram).to.be.a('function');
});

it("Function isAnagram does not contain method 'split'", () => {
  expect(isAnagram.toString()).to.not.contain('split');
});

it("Function isAnagram does not contain method 'sort'", () => {
  expect(isAnagram.toString()).to.not.contain('sort');
});

it("Function isAnagram does not contain method 'join'", () => {
  expect(isAnagram.toString()).to.not.contain('join');
});

it("isAnagram('12345', '23541') should return true", () => {
  expect(isAnagram('12345', '23541')).to.be.true;
});

it("isAnagram('12345', '231541') should return false", () => {
  expect(isAnagram('12345', '231541')).to.be.false;
});

it("isAnagram('elBow', 'belOw') should return true", () => {
  expect(isAnagram('elBow', 'belOw')).to.be.true;
});

it("isAnagram('  maN', 'Nam  ') should return true", () => {
  expect(isAnagram('  maN', 'Nam  ')).to.be.true;
});

it("isAnagram('listEn', 'Silemt') should return false", () => {
  expect(isAnagram('listEn', 'Silemt')).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
