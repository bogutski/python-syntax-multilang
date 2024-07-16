// NAMEEN:
// NAMERU:Проверка наличия строки с определенными условиями после обработки массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `hasProcessedString`, которая принимает массив строк и объект с условиями.

Условия включают два свойства: `minLength` (минимальная длина строки после обработки) и `contains` (подстрока, которая должна присутствовать в строке после обработки).

Функция должна вернуть `true`, если хотя бы одна строка после удаления всех пробелов и приведения к нижнему регистру удовлетворяет указанным условиям, и `false` в противном случае.


Примеры запуска функции:
```javascript
hasProcessedString(['foo', 'bar', 'baz'], {minLength: 3, contains: 'ba'}); // true
hasProcessedString(['foo', 'bar', 'baz'], {minLength: 4, contains: 'ba'}); // false
hasProcessedString(['Hello World', 'JavaScript', '  OpenAI   '], {minLength: 5, contains: 'openai'}); // true
hasProcessedString(['Hello World', 'JavaScript', '  OpenAI   '], {minLength: 10, contains: 'openai'}); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function hasProcessedString(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function hasProcessedString(arr, condition) {
  const noSpacesAndLowerCase = str => {
    let res = ''
    for(let char of str) {
      if(char !== ' ') res += char
    }
    return res.toLowerCase()
  }

  return arr.some(str => {
    const result = noSpacesAndLowerCase(str)
    return result.length >= condition.minLength && result.includes(condition.contains)
  });
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function hasProcessedString', () => {
  expect(hasProcessedString).to.be.a('function');
});

it('hasProcessedString(["Hello World", "JavaScript", "  OpenAI   "], {minLength: 5, contains: "openai"}) should return true', function() {
  expect(hasProcessedString(["Hello World", "JavaScript", "  OpenAI   "], {minLength: 5, contains: "openai"})).to.equal(true);
});

it('hasProcessedString(["Hello World", "JavaScript", "  OpenAI   "], {minLength: 10, contains: "openai"}) should return false', function() {
  expect(hasProcessedString(["Hello World", "JavaScript", "  OpenAI   "], {minLength: 10, contains: "openai"})).to.equal(false);
});

it('hasProcessedString(["foo", "bar", "baz"], {minLength: 3, contains: "ba"}) should return true', function() {
  expect(hasProcessedString(["foo", "bar", "baz"], {minLength: 3, contains: "ba"})).to.equal(true);
});

it('hasProcessedString(["foo", "bar", "baz"], {minLength: 4, contains: "ba"}) should return false', function() {
  expect(hasProcessedString(["foo", "bar", "baz"], {minLength: 4, contains: "ba"})).to.equal(false);
});

it('hasProcessedString([" aBc dEf ", "ghi jkl", " mnoPqRs"], {minLength: 6, contains: "def"}) should return true', function() {
  expect(hasProcessedString([" aBc dEf ", "ghi jkl", " mnoPqRs"], {minLength: 6, contains: "def"})).to.equal(true);
});

it('hasProcessedString([" aBc dEf ", "ghi jkl", " mnoPqRs"], {minLength: 10, contains: "def"}) should return false', function() {
  expect(hasProcessedString([" aBc dEf ", "ghi jkl", " mnoPqRs"], {minLength: 10, contains: "def"})).to.equal(false);
});

it('hasProcessedString(["E xampl e", "  Te ST in g", " 12 34 5"], {minLength: 5, contains: "test"}) should return true', function() {
  expect(hasProcessedString(["E xampl e", "  Te ST in g", " 12 34 5"], {minLength: 5, contains: "test"})).to.equal(true);
});

it('hasProcessedString(["Example", "  TeSTing", " 12345"], {minLength: 8, contains: "test"}) should return false', function() {
  expect(hasProcessedString(["Example", "  TeSTing", " 12345"], {minLength: 8, contains: "test"})).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
