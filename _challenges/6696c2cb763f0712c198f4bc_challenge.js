// NAMEEN:
// NAMERU:Добавление префикса к элементам массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `addPrefixToArray`, которая принимает массив строк и строковый префикс, затем использует метод `forEach` для добавления этого префикса к каждому элементу исходного массива.

Функция должна возвращать новый массив с модифицированными строками.


Пример запуска функции:
```javascript
addPrefixToArray(['John', 'Jane', 'Doe'], 'Mr. '); // [ 'Mr. John', 'Mr. Jane', 'Mr. Doe' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function addPrefixToArray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addPrefixToArray(arr, prefix) {
  let res = [];
  arr.forEach(str => res.push(prefix + str))

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function addPrefixToArray', () => {
  expect(addPrefixToArray).to.be.a('function');
});

it('Function addPrefixToArray should include method forEach()', () => {
  const res = addPrefixToArray.toString()
  expect(res).to.include('.forEach(')
});

it("addPrefixToArray(['John', 'Jane', 'Doe'], 'Mr. ') should return ['Mr. John', 'Mr. Jane', 'Mr. Doe']", () => {
  expect(addPrefixToArray(["John", "Jane", "Doe"], "Mr. ")).to.deep.equal(["Mr. John", "Mr. Jane", "Mr. Doe"]);
});

it("addPrefixToArray(['apple', 'banana', 'cherry'], 'fruit: ') should return ['fruit: apple', 'fruit: banana', 'fruit: cherry']", () => {
  expect(addPrefixToArray(["apple", "banana", "cherry"], "fruit: ")).to.deep.equal(["fruit: apple", "fruit: banana", "fruit: cherry"]);
});

it("addPrefixToArray([], 'empty: ') should return []", () => {
  expect(addPrefixToArray([], "empty: ")).to.deep.equal([]);
});

it("addPrefixToArray(['2021', '2022'], 'Year: ') should return ['Year: 2021', 'Year: 2022']", () => {
  expect(addPrefixToArray(["2021", "2022"], "Year: ")).to.deep.equal(["Year: 2021", "Year: 2022"]);
});

it("addPrefixToArray(['', ' '], 'Prefix: ') should return ['Prefix: ', 'Prefix:  ']", () => {
  expect(addPrefixToArray(['', ' '], "Prefix: ")).to.deep.equal(["Prefix: ", "Prefix:  "]);
});

it("addPrefixToArray(['quick', 'brown', 'fox'], 'The ') should return ['The quick', 'The brown', 'The fox']", () => {
  expect(addPrefixToArray(["quick", "brown", "fox"], "The ")).to.deep.equal(["The quick", "The brown", "The fox"]);
});

it("addPrefixToArray(['error', 'warning', 'info'], 'Status: ') should return ['Status: error', 'Status: warning', 'Status: info']", () => {
  expect(addPrefixToArray(["error", "warning", "info"], "Status: ")).to.deep.equal(["Status: error", "Status: warning", "Status: info"]);
});

it("addPrefixToArray(['first', 'second', 'third'], '') should return ['first', 'second', 'third']", () => {
  expect(addPrefixToArray(["first", "second", "third"], "")).to.deep.equal(["first", "second", "third"]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
