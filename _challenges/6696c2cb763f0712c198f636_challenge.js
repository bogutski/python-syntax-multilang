// NAMEEN:
// NAMERU:Нормализация и сортировка массива строк

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `normalizeAndSortStrings`, которая принимает массив строк.

Каждая строка может содержать пробелы в начале и в конце, а также использовать разный регистр букв.

Функция должна обработать каждую строку, убрав пробелы и приведя все буквы к нижнему регистру, и возвращать новый массив с отсортированными строками по убыванию.


Примеры запуска функции:
```javascript
normalizeAndSortStrings([' Apple ', 'banana ', ' Cherry', 'date']);
// ['date', 'cherry', 'banana', 'apple']

normalizeAndSortStrings([' new york', 'Los Angeles  ', '  CHICAGO', 'houston ']);
// ['new york', 'los angeles', 'houston', 'chicago']

normalizeAndSortStrings(["  mango", "Banana", "  apple ", "CHERRY "]);
// ['mango', 'cherry', 'banana', 'apple']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function normalizeAndSortStrings(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function normalizeAndSortStrings(arr) {
  return arr
      .map(el => el.trim().toLowerCase())
      .toSorted((a, b) => b.localeCompare(a));
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toSorted = function(compareFunction){
  const newArray = this.slice()
  if(compareFunction) return newArray.sort(compareFunction)
  else return newArray.sort()
}

it('Created function normalizeAndSortStrings', () => {
  expect(normalizeAndSortStrings).to.be.a('function');
});

it("normalizeAndSortStrings sorts array of strings in descending order after trimming and converting to lowercase", () => {
  expect(normalizeAndSortStrings([" Apple ", "banana ", " Cherry", "date"])).to.deep.equal(["date", "cherry", "banana", "apple"]);
});

it("normalizeAndSortStrings should not modify the original array", () => {
  const originalArray = [" Apple ", "banana ", " Cherry", "date"];
  normalizeAndSortStrings(originalArray);
  expect(originalArray).to.deep.equal([" Apple ", "banana ", " Cherry", "date"]);
});

it("normalizeAndSortStrings handles empty array correctly", () => {
  expect(normalizeAndSortStrings([])).to.deep.equal([]);
});

it("normalizeAndSortStrings correctly processes an array with mixed spaces and cases", () => {
  expect(normalizeAndSortStrings(["  hello", "HELLO ", " World", "world  "])).to.deep.equal(["world", "world", "hello", "hello"]);
});

it("normalizeAndSortStrings returns an empty string if only spaces were present", () => {
  expect(normalizeAndSortStrings([" ", "  ", "\t", "\n"])).to.deep.equal(['', '', '', '']);
});

it("normalizeAndSortStrings handles strings with non-alphanumeric characters correctly", () => {
  expect(normalizeAndSortStrings(["#hashtag", " hello!", "@mention "])).to.deep.equal(["hello!", "#hashtag", "@mention"]);
});

it("normalizeAndSortStrings processes an array of mixed-case strings uniformly", () => {
  expect(normalizeAndSortStrings(["TeSt", "tEsT", "TEST", "test"])).to.deep.equal(["test", "test", "test", "test"]);
});

it("normalizeAndSortStrings should return an array sorted in descending order for similar strings with different spacings", () => {
  expect(normalizeAndSortStrings(["test  ", " test", "  test   "])).to.deep.equal(["test", "test", "test"]);
});

it("normalizeAndSortStrings effectively trims and converts empty strings and spaces to a single empty string sorted as such", () => {
  expect(normalizeAndSortStrings(["", "  ", "    "])).to.deep.equal(["", "", ""]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
