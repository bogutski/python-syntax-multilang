// NAMEEN:
// NAMERU:Проверка на строки с заглавной буквы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `areAllStringsStartWithCapital`, которая принимает массив строк и возвращает `true`, если все строки в массиве начинаются с заглавной буквы, и `false` в противном случае.


Примеры запуска функции:
```javascript
areAllStringsStartWithCapital(['Apple', 'Banana', 'Cherry']); // true
areAllStringsStartWithCapital(['apple', 'Banana', 'Cherry']); // false
areAllStringsStartWithCapital(['Apple', 'banana', 'Cherry']); // false
areAllStringsStartWithCapital(['apple', 'banana', 'cherry']); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function areAllStringsStartWithCapital(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function areAllStringsStartWithCapital(arr) {
  return arr.every(str => str[0].toUpperCase() === str[0]);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function areAllStringsStartWithCapital', () => {
  expect(areAllStringsStartWithCapital).to.be.a('function');
});

it("Function areAllStringsStartWithCapital should include every method", () => {
  const result = areAllStringsStartWithCapital.toString();
  expect(result).to.include('.every(');
});

it('areAllStringsStartWithCapital(["Apple", "Banana", "Cherry"]) should return true', function() {
  expect(areAllStringsStartWithCapital(["Apple", "Banana", "Cherry"])).to.equal(true);
});

it('areAllStringsStartWithCapital(["apple", "Banana", "Cherry"]) should return false', function() {
  expect(areAllStringsStartWithCapital(["apple", "Banana", "Cherry"])).to.equal(false);
});

it('areAllStringsStartWithCapital(["Apple", "banana", "Cherry"]) should return false', function() {
  expect(areAllStringsStartWithCapital(["Apple", "banana", "Cherry"])).to.equal(false);
});

it('areAllStringsStartWithCapital(["apple", "banana", "cherry"]) should return false', function() {
  expect(areAllStringsStartWithCapital(["apple", "banana", "cherry"])).to.equal(false);
});

it('areAllStringsStartWithCapital(["Dog", "Cat", "Elephant"]) should return true', function() {
  expect(areAllStringsStartWithCapital(["Dog", "Cat", "Elephant"])).to.equal(true);
});

it('areAllStringsStartWithCapital(["dog", "Cat", "Elephant"]) should return false', function() {
  expect(areAllStringsStartWithCapital(["dog", "Cat", "Elephant"])).to.equal(false);
});

it('areAllStringsStartWithCapital(["Hello"]) should return true', function() {
  expect(areAllStringsStartWithCapital(["Hello"])).to.equal(true);
});

it('areAllStringsStartWithCapital(["hello"]) should return false', function() {
  expect(areAllStringsStartWithCapital(["hello"])).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
