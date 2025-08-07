// NAMEEN:Assign a famous book title to a variable.
// NAMERU:Присвойте название известной книги переменной.

/*
INSTRUCTIONENSTART
In 1865, the English mathematician Lewis Carroll wrote a famous children’s book.

Create a variable and assign the title `"Alice in Wonderland"` to it.

Use an appropriate variable name in Python following the snake_case convention. The name should reflect the concept of a book title.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В 1865 году английский математик Льюис Кэрролл написал знаменитую детскую сказку.

Создайте переменную и присвойте ей значение `"Alice in Wonderland"`.

Используйте подходящее имя переменной по правилам Python (snake_case), отражающее идею «название книги».
INSTRUCTIONRUEND
*/

/*
HINTENSTART
Use a variable name like `book_title`, and assign the string:
```python
book_title = "Alice in Wonderland"
```
HINTENEND
*/

/*
HINTRUSTART
Используйте имя переменной, например `book_title`, и присвойте ей строку:
```python
function isAllLower(str) {
  return str === str.toLowerCase();
}
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
def isAllLower(str):
    return str == str..lower()
// SOLUTIONEND

// OPENTESTSSTART

// OPENTESTSEND

// HIDDENTESTSSTART
it('Created function isAllLower', () => {
  expect(isAllLower).to.be.a('function');
});

it('isAllLower("abc") should return true', () => {
  expect(isAllLower('abc')).to.equal(true);
});

it('isAllLower("aBc") should return false', () => {
  expect(isAllLower('aBc')).to.equal(false);
});

it('isAllLower("abc123") should return true', () => {
  expect(isAllLower('abc123')).to.equal(true);
});

it('isAllLower("abc 123") should return true', () => {
  expect(isAllLower('abc 123')).to.equal(true);
});

it('isAllLower("") should return true', () => {
  expect(isAllLower('')).to.equal(true);
});
// HIDDENTESTSEND
