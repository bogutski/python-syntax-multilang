// NAMEEN:
// NAMERU:Проверка на анаграмму, без использования методов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isAnagram`, которая принимает две строки и возвращает `true`, если эти строки являются анаграммами друг друга, и `false` в противном случае.

В строке могут быть заглавные и строчные буквы, а также пробелы. Пробелы не должны учитываться при проверке
 анаграммы. Пустых строк не будет.

Алгоритм решения должен быть таким:
* приводим обе строки к нижнему регистру (можно сделать на этом шаге или на следующем).
* удаляем все пробелы из обеих строк, можно использовать один цикл, если не выходит, то два, для каждой строки отдельно.
* проверяем, если длина строк не равна, то это не анаграмма.
* на этом шаге делаем проверку на элементы. Можно использовать любой, ранее пройденный, вариант решения, кроме методов:
 `split`, `sort`, `join`.


Примеры запуска функции:
```javascript
isAnagram(' 1 2 3 ', '312');       // true
isAnagram('LAPtop 12345', '   top   lap 53   412   ');   // true
isAnagram('listten', 'silent');   // false
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
  let newStr1 = '';
  let newStr2 = '';

  const length = str1.length > str2.length ? str1.length : str2.length;
  for(let i = 0; i < length; i++){
    if(str1[i] !== ' ' && str1[i] !== undefined) newStr1 += str1[i].toLowerCase();
    if(str2[i] !== ' ' && str2[i] !== undefined) newStr2 += str2[i].toLowerCase();
  }

  if(newStr1.length !== newStr2.length) return false;

  for(let i = 0; i < newStr1.length; i++){
    if(!newStr2.includes(newStr1[i])) return false;
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

it("isAnagram('1   2 3', '   3 1 2   ') returns true", () => {
  expect(isAnagram('1   2 3', '   3 1 2   ')).to.be.true;
});

it("isAnagram('1  2  3  ', '   3  5  2   ') returns false", () => {
  expect(isAnagram('1  2  3  ', '   3  5  2   ')).to.be.false;
});

it("isAnagram('12345', ' 5 4 2 3 1 ') returns true", () => {
  expect(isAnagram('12345', ' 5 4 2 3 1 ')).to.be.true;
});

it("isAnagram(' CAT ', 't a c') returns true", () => {
  expect(isAnagram(' CAT ', 't a c')).to.be.true;
});

it("isAnagram('Apple Macintosh', 'laptop machines') should return true", () => {
  expect(isAnagram('A p p l e M a c i n t o s h', 'laptop machines')).to.be.true;
});

it("isAnagram('liisten', 'silent') should return false", () => {
  expect(isAnagram('liisten', 'silent')).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
