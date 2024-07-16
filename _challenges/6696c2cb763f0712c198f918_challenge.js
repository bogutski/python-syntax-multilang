// NAMEEN:
// NAMERU:Проверка на наличие строк длиной больше 5 символов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `hasLongWords`, которая принимает массив строк и возвращает `true`, если в массиве есть хотя бы одна строка длиной больше `5` символов, и `false` в противном случае.


Примеры запуска функции:
```javascript
hasLongWords(['a', 'bb', 'ccc']); // false
hasLongWords(['cat', 'dog', 'rat']); // false
hasLongWords(['apple', 'banana', 'cherry']); // true
hasLongWords(['elephant', 'tiger', 'lion']); // true
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function hasLongWords(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function hasLongWords(arr) {
  return arr.some(str => str.length > 5);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function hasLongWords', () => {
  expect(hasLongWords).to.be.a('function');
});

it("Function hasLongWords should include some method", () => {
  const result = hasLongWords.toString();
  expect(result).to.include('.some(');
});

it('hasLongWords(["apple", "banana", "cherry"]) should return true', function() {
  expect(hasLongWords(["apple", "banana", "cherry"])).to.equal(true);
});

it('hasLongWords(["cat", "dog", "rat"]) should return false', function() {
  expect(hasLongWords(["cat", "dog", "rat"])).to.equal(false);
});

it('hasLongWords(["elephant", "tiger", "lion"]) should return true', function() {
  expect(hasLongWords(["elephant", "tiger", "lion"])).to.equal(true);
});

it('hasLongWords(["a", "bb", "ccc"]) should return false', function() {
  expect(hasLongWords(["a", "bb", "ccc"])).to.equal(false);
});

it('hasLongWords(["small", "tiny", "short"]) should return false', function() {
  expect(hasLongWords(["small", "tiny", "short"])).to.equal(false);
});

it('hasLongWords(["short", "minuscule", "brief"]) should return true', function() {
  expect(hasLongWords(["short", "minuscule", "brief"])).to.equal(true);
});

it('hasLongWords([""]) should return false', function() {
  expect(hasLongWords([""])).to.equal(false);
});

it('hasLongWords(["a", "ab", "abc", "abcd", "abcde", "abcdef"]) should return true', function() {
  expect(hasLongWords(["a", "ab", "abc", "abcd", "abcde", "abcdef"])).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
