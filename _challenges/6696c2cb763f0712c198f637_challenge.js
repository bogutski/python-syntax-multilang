// NAMEEN:
// NAMERU:Сортировка массива строк по длине слов с игнорированием пробелов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sortStringsByLengthIgnoringSpaces`, которая принимает массив строк.

Функция должна отсортировать массив по длине строк (по убыванию), не учитывая пробелы, в начале и конце каждой строки.

Функция возвращает возвращать новый массив.


Примеры запуска функции:
```javascript
sortStringsByLengthIgnoringSpaces([' short', '   miniature', 'tiny  ', ' prolonged  ']);
// ['   miniature', ' prolonged  ', ' short', 'tiny  ']

sortStringsByLengthIgnoringSpaces(['  Hello world!  ', ' Greetings, Earthlings!   ', 'Hi', ' Salutations ']);
// [' Greetings, Earthlings!   ', '  Hello world!  ', ' Salutations ', 'Hi']

sortStringsByLengthIgnoringSpaces([' 12345 ', ' 1234', ' Hello', ' World  ']);
// [' 12345 ', ' Hello', ' World  ', ' 1234']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sortStringsByLengthIgnoringSpaces(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortStringsByLengthIgnoringSpaces(arr) {
  return arr.toSorted((a, b) => {
    const noSpaceA = a.trim()
    const noSpaceB = b.trim()

    return noSpaceB.length - noSpaceA.length
  });
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toSorted = function(compareFunction){
  const newArray = this.slice()
  if(compareFunction) return newArray.sort(compareFunction)
  else return newArray.sort()
}

it('Created function sortStringsByLengthIgnoringSpaces', () => {
  expect(sortStringsByLengthIgnoringSpaces).to.be.a('function');
});

it("sorts array of strings by length in descending order, ignoring leading and trailing spaces", () => {
  expect(sortStringsByLengthIgnoringSpaces([' short', '   miniature', 'tiny  ', ' prolonged  '])).to.deep.equal(['   miniature', ' prolonged  ', ' short', 'tiny  ']);
});

it("does not modify the original array", () => {
  const originalArray = [' short', '   miniature', 'tiny  ', ' prolonged  '];
  sortStringsByLengthIgnoringSpaces(originalArray);
  expect(originalArray).to.deep.equal([' short', '   miniature', 'tiny  ', ' prolonged  ']);
});

it("handles empty array correctly", () => {
  expect(sortStringsByLengthIgnoringSpaces([])).to.deep.equal([]);
});

it("sorts array with strings of equal length after trimming", () => {
  expect(sortStringsByLengthIgnoringSpaces(['one ', ' two', '  three', 'four  '])).to.deep.equal(['  three', 'four  ', 'one ', ' two']);
});

it("processes an array with multiple spaces correctly", () => {
  expect(sortStringsByLengthIgnoringSpaces(['  dog  ', 'cat', '  pig   ', 'owl'])).to.deep.equal(['  dog  ', 'cat', '  pig   ', 'owl']);
});

it("handles strings that become equal in length after trimming", () => {
  expect(sortStringsByLengthIgnoringSpaces(['  abc  ', ' def ', ' ghi'])).to.deep.equal(['  abc  ', ' def ', ' ghi']);
});

it("correctly sorts an array where all strings are the same length after trimming", () => {
  expect(sortStringsByLengthIgnoringSpaces(['   a   ', ' b ', ' c  '])).to.deep.equal(['   a   ', ' b ', ' c  ']);
});

it("sorts strings that include numeric characters correctly", () => {
  expect(sortStringsByLengthIgnoringSpaces(['1234', '  123  ', '12  ', '12345'])).to.deep.equal(['12345', '1234', '  123  ', '12  ']);
});

it("handles an array containing only whitespace strings", () => {
  expect(sortStringsByLengthIgnoringSpaces(['  ', ' ', '   ', '    '])).to.deep.equal(['  ', ' ', '   ', '    ']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
