// NAMEEN:
// NAMERU:Сортировка строк по длине

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sortStringsByLength`, которая принимает массив строк и возвращает новый массив, содержащий те же строки, отсортированные по возрастанию длины.


Примеры запуска функции:
```javascript
sortStringsByLength(["apple", "banana", "grape", "kiwi", "orange"]);
// [ 'kiwi', 'apple', 'grape', 'banana', 'orange' ]

sortStringsByLength(["table", "office chair", "knife", "plates", "cup"]);
// [ 'cup', 'table', 'knife', 'plates', 'office chair' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sortStringsByLength(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortStringsByLength(arr) {
  return arr.slice().sort((a, b) => a.length - b.length);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sortStringsByLength', () => {
  expect(sortStringsByLength).to.be.a('function');
});

it('Function sortStringsByLength should include method sort()', () => {
  const res = sortStringsByLength.toString()
  expect(res).to.include('.sort(')
});

it('sortStringsByLength(["apple", "banana", "grape", "kiwi", "orange"]) should return ["kiwi", "apple", "grape", "banana", "orange"]', () => {
  expect(sortStringsByLength(["apple", "banana", "grape", "kiwi", "orange"])).to.deep.equal(["kiwi", "apple", "grape", "banana", "orange"]);
});

it('sortStringsByLength(["table", "office chair", "knife", "plates", "cup"]) should return ["cup", "table", "knife", "plates", "office chair"]', () => {
  expect(sortStringsByLength(["table", "office chair", "knife", "plates", "cup"])).to.deep.equal(["cup", "table", "knife", "plates", "office chair"]);
});

it('sortStringsByLength([]) should return []', () => {
  expect(sortStringsByLength([])).to.deep.equal([]);
});

it('sortStringsByLength(["word"]) should return ["word"]', () => {
  expect(sortStringsByLength(["word"])).to.deep.equal(["word"]);
});

it('sortStringsByLength(["it", "words", "to", "short"]) should return ["it", "to", "words", "short"]', () => {
  expect(sortStringsByLength(["it", "words", "to", "short"])).to.deep.equal(["it", "to", "words", "short"]);
});

it('sortStringsByLength(["one", "two", "three", "four", "five", "six"]) should return ["one", "two", "six", "four", "five", "three"]', () => {
  expect(sortStringsByLength(["one", "two", "three", "four", "five", "six"])).to.deep.equal(["one", "two", "six", "four", "five", "three"]);
});

it('sortStringsByLength(["b", "a", "c"]) should return ["b", "a", "c"] based on length', () => {
  expect(sortStringsByLength(["b", "a", "c"])).to.deep.equal(["b", "a", "c"]);
});

it('sortStringsByLength(["hello", "world!", "this", "is", "great"]) should sort by length to ["is", "this", "hello", "great", "world!"]', () => {
  expect(sortStringsByLength(["hello", "world!", "this", "is", "great"])).to.deep.equal(["is", "this", "hello", "great", "world!"]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
