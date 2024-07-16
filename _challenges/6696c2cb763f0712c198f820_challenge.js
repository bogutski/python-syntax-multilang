// NAMEEN:
// NAMERU:Найти последний индекс элемента с учетом регистра

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastIndexIgnoreCase`, которая принимает массив строк и строку.

Функция должна вернуть индекс последнего вхождения строки в массиве без учета регистра.

Если строка не найдена, функция должна вернуть `-1`.


Примеры запуска функции:
```javascript
findLastIndexIgnoreCase(['Apple', 'banana', 'Mango', 'banana'], 'BANANA'); // 3
findLastIndexIgnoreCase(['Cat', 'Dog', 'Fish', 'cat'], 'CAT'); // 3
findLastIndexIgnoreCase(['hello', 'world', 'Hello'], 'HELLO'); // 2
findLastIndexIgnoreCase(['apple', 'banana', 'cherry'], 'grape'); // -1
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastIndexIgnoreCase(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastIndexIgnoreCase(arr, str) {
  const modified = arr.map(el => el.toLowerCase())
  return modified.lastIndexOf(str.toLowerCase());
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastIndexIgnoreCase', () => {
  expect(findLastIndexIgnoreCase).to.be.a('function');
});

it("Function findLastIndexIgnoreCase should include lastIndexOf method", () => {
  const result = findLastIndexIgnoreCase.toString();
  expect(result).to.include('.lastIndexOf(');
});

it('findLastIndexIgnoreCase(["Apple", "banana", "Mango", "banana"], "BANANA") should return 3', function() {
  expect(findLastIndexIgnoreCase(["Apple", "banana", "Mango", "banana"], "BANANA")).to.equal(3);
});

it('findLastIndexIgnoreCase(["Cat", "Dog", "Fish", "cat"], "CAT") should return 3', function() {
  expect(findLastIndexIgnoreCase(["Cat", "Dog", "Fish", "cat"], "CAT")).to.equal(3);
});

it('findLastIndexIgnoreCase(["hello", "world", "Hello"], "HELLO") should return 2', function() {
  expect(findLastIndexIgnoreCase(["hello", "world", "Hello"], "HELLO")).to.equal(2);
});

it('findLastIndexIgnoreCase(["apple", "banana", "cherry"], "grape") should return -1', function() {
  expect(findLastIndexIgnoreCase(["apple", "banana", "cherry"], "grape")).to.equal(-1);
});

it('findLastIndexIgnoreCase(["JavaScript", "Java", "TypeScript"], "java") should return 1', function() {
  expect(findLastIndexIgnoreCase(["JavaScript", "Java", "TypeScript"], "java")).to.equal(1);
});

it('findLastIndexIgnoreCase(["Python", "Ruby", "Perl"], "ruby") should return 1', function() {
  expect(findLastIndexIgnoreCase(["Python", "Ruby", "Perl"], "ruby")).to.equal(1);
});

it('findLastIndexIgnoreCase(["Red", "Green", "Blue", "red"], "RED") should return 3', function() {
  expect(findLastIndexIgnoreCase(["Red", "Green", "Blue", "red"], "RED")).to.equal(3);
});

it('findLastIndexIgnoreCase([], "anything") should return -1', function() {
  expect(findLastIndexIgnoreCase([], "anything")).to.equal(-1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
