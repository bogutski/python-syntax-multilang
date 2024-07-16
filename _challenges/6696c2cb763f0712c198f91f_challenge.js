// NAMEEN:
// NAMERU:Проверка наличия строки с определенными символами после обработки массива строк

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `hasStringWithCharacters`, которая принимает массив строк и объект с условиями.

Условия включают два свойства:
 * `requiredChars` - массив символов, которые должны присутствовать в строке,
 * `minLength` - минимальная длина строки после удаления всех пробелов.

Функция должна вернуть `true`, если хотя бы одна строка после удаления всех пробелов удовлетворяет указанным условиям, и `false` в противном случае.


Примеры запуска функции:
```javascript
hasStringWithCharacters(['he llo', 'wo rld', 'jav a scri pt'], {requiredChars: ['a', 's'], minLength: 5}); // true
hasStringWithCharacters(['hello', 'world', 'javascript'], {requiredChars: ['x', 'y'], minLength: 5}); // false
hasStringWithCharacters([' fo o', ' bar', ' baz '], {requiredChars: ['a', 'b'], minLength: 3}); // true
hasStringWithCharacters(['qu ick', 'bro wn', 'f ox'], {requiredChars: ['z', 'q', 'i'], minLength: 4}); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function hasStringWithCharacters(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function hasStringWithCharacters(arr, target) {
  const deleteAllSpaces = str => {
    let newStr = ''
    for(let char of str){
      if(char !== ' ') newStr += char
    }
    return newStr
  }

  return arr.some(str => {
    const modified = deleteAllSpaces(str)
    return modified.length >= target.minLength && target.requiredChars.every(el => modified.includes(el))
  });
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function hasStringWithCharacters', () => {
  expect(hasStringWithCharacters).to.be.a('function');
});

it('hasStringWithCharacters(["he llo", "wo rld", "jav a scri pt"], {requiredChars: ["a", "s"], minLength: 5}) should return true', function() {
  expect(hasStringWithCharacters(["he llo", "wo rld", "jav a scri pt"], {requiredChars: ["a", "s"], minLength: 5})).to.equal(true);
});

it('hasStringWithCharacters(["hello", "world", "javascript"], {requiredChars: ["x", "y"], minLength: 5}) should return false', function() {
  expect(hasStringWithCharacters(["hello", "world", "javascript"], {requiredChars: ["x", "y"], minLength: 5})).to.equal(false);
});

it('hasStringWithCharacters([" fo o", " bar", " baz "], {requiredChars: ["a", "b"], minLength: 3}) should return true', function() {
  expect(hasStringWithCharacters([" fo o", " bar", " baz "], {requiredChars: ["a", "b"], minLength: 3})).to.equal(true);
});

it('hasStringWithCharacters(["qu ick", "bro wn", "f ox"], {requiredChars: ["z"], minLength: 4}) should return false', function() {
  expect(hasStringWithCharacters(["qu ick", "bro wn", "f ox"], {requiredChars: ["z"], minLength: 4})).to.equal(false);
});

it('hasStringWithCharacters([" a pple", " ba nana", " ch err y"], {requiredChars: ["p", "l"], minLength: 5}) should return true', function() {
  expect(hasStringWithCharacters([" a pple", " ba nana", " ch err y"], {requiredChars: ["p", "l"], minLength: 5})).to.equal(true);
});

it('hasStringWithCharacters(["gr ape", " ora nge", "p ear"], {requiredChars: ["g", "r"], minLength: 6}) should return true', function() {
  expect(hasStringWithCharacters(["gr ape", " ora nge", "p ear"], {requiredChars: ["g", "r"], minLength: 6})).to.equal(true);
});

it('hasStringWithCharacters(["ki wi", "ma ngo", "pe ach"], {requiredChars: ["m", "n"], minLength: 4}) should return true', function() {
  expect(hasStringWithCharacters(["ki wi", "ma ngo", "pe ach"], {requiredChars: ["m", "n"], minLength: 4})).to.equal(true);
});

it('hasStringWithCharacters(["wa ter", "me lo n", " st raw ber ry"], {requiredChars: ["w", "e", "y", "r"], minLength: 5}) should return true', function() {
  expect(hasStringWithCharacters(["wa ter", "me lo n", " st raw ber ry"], {requiredChars: ["w", "e", "y", "r"], minLength: 5})).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
