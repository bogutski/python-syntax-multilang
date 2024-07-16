// NAMEEN:
// NAMERU:Изменение регистра букв в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseLettersCase`, которая принимает строку и возвращает массив.

В массиве должны быть буквы из строки, с противоположным регистром.

Если в строке есть пробелы, то они должны быть пропущены и не должны попасть в массив.

В строке будут переданы только буквы и пробелы.

Пример запуска функции:
```js
reverseLettersCase('a a a B B B'); // [ 'A', 'A', 'A', 'b', 'b', 'b' ]
reverseLettersCase(' AbCd EfGh '); // [ 'a', 'B', 'c', 'D', 'e', 'F', 'g', 'H' ]
reverseLettersCase(''); // []
reverseLettersCase(' '); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseLettersCase(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if(str[i] === ' ') continue;
    if (str[i] === str[i].toUpperCase()) result.push(str[i].toLowerCase());
    else result.push(str[i].toUpperCase());
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseLettersCase', () => {
  expect(reverseLettersCase).to.be.a('function');
});

it("reverseLettersCase('aaaBBB') should return ['A', 'A', 'A', 'b', 'b', 'b']", () => {
  expect(reverseLettersCase('aaaBBB')).to.eql(['A', 'A', 'A', 'b', 'b', 'b']);
});

it("reverseLettersCase('a a a B B B') should return ['A', 'A', 'A', 'b', 'b', 'b']", () => {
  expect(reverseLettersCase('a a a B B B')).to.eql(['A', 'A', 'A', 'b', 'b', 'b']);
});

it("reverseLettersCase(' AbCd EfGh ') should return ['a', 'B', 'c', 'D', 'e', 'F', 'g', 'H']", () => {
  expect(reverseLettersCase(' AbCd EfGh ')).to.eql(['a', 'B', 'c', 'D', 'e', 'F', 'g', 'H']);
});

it("reverseLettersCase('') should return []", () => {
  expect(reverseLettersCase('')).to.eql([]);
});

it("reverseLettersCase(' ') should return []", () => {
  expect(reverseLettersCase(' ')).to.eql([]);
});

it("reverseLettersCase('a a a a a') should return ['A', 'A', 'A', 'A', 'A']", () => {
  expect(reverseLettersCase('a a a a a')).to.eql(['A', 'A', 'A', 'A', 'A']);
});

it("reverseLettersCase('A A A A A') should return ['a', 'a', 'a', 'a', 'a']", () => {
  expect(reverseLettersCase('A A A A A')).to.eql(['a', 'a', 'a', 'a', 'a']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
