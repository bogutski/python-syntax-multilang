// NAMEEN:
// NAMERU:Посчитай сколько страниц в книге

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `authorBook`, которая принимает два параметра-объекта:

* `author` - объект, в котором хранится информация об авторе книги,
* `book` - объект, в котором хранится информация о книге.

В объекте `author` есть три свойства:
* `name` - имя автора, строка,
* `bookTitle` - название книги, строка,
* `bookPages` - число 0.

В объекте `book` есть три свойства:
* `chapter1` - число страниц в первой главе,
* `chapter2` - число страниц во второй главе,
* `chapter3` - число страниц в третьей главе.

Функция должна посчитать число страниц в книге и вывести объект `author`,
в котором `bookPages` - число страниц в книге, равное сумме страниц во всех главах.

Пример запуска функции:
```javascript
authorBook(
  { name: 'J.R.R. Tolkien', bookTitle: 'The Lord', bookPages: 0 },
  { chapter1: 289, chapter2: 345, chapter3: 189 }
)
// { name: 'J.R.R. Tolkien',
//   bookTitle: 'The Lord',
//   bookPages: 823 }
```
Похожий пример:
```javascript
harryPotterBook(
  { name: 'J.K. Rowling', bookTitle: 'Harry Potter and Stone', bookPages: 0 },
  { chapter1: 200, chapter2: 350, chapter3: 450 }
)
// { name: 'J.K. Rowling',
//   bookTitle: 'Harry Potter and Stone',
//   bookPages: 1000 }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function authorBook(author, book) {
  author.bookPages =
    book.chapter1 + book.chapter2 + book.chapter3;
  return author;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function authorBook', () => {
  expect(authorBook).to.be.a('function');
});

it('authorBook should return object', () => {
  expect(authorBook(
    {name: 'J.R.R. Tolkien', bookTitle: 'The Lord', bookPages: 0},
    {chapter1: 289, chapter2: 345, chapter3: 189}
  )).to.be.an('object');

});

it('authorBook should return object', () => {
  expect(authorBook(
    {name: 'J.K. Rowling', bookTitle: 'Harry Potter and Stone', bookPages: 0},
    {chapter1: 200, chapter2: 350, chapter3: 450}
  )).to.be.an('object');
});

it('authorBook should return object with bookPages', () => {
  expect(authorBook(
    {name: 'S.Y. Marshak', bookTitle: 'The Cat', bookPages: 0},
    {chapter1: 2, chapter2: 3, chapter3: 18}
  )).to.have.property('bookPages');

});

it('authorBook should return object with bookPages', () => {
  expect(authorBook(
    {name: 'N.V. Gogol', bookTitle: "Dikan'ka's nights", bookPages: 0},
    {chapter1: 80, chapter2: 35, chapter3: 65}
  )).to.eql({name: 'N.V. Gogol', bookTitle: "Dikan'ka's nights", bookPages: 180});

});

it('authorBook should return object with bookPages', () => {
  expect(authorBook(
    {name: 'Y.M. Golpin', bookTitle: 'The Zoo', bookPages: 0},
    {chapter1: 29, chapter2: 45, chapter3: 16}
  )).to.eql({name: 'Y.M. Golpin', bookTitle: 'The Zoo', bookPages: 90});
});

it('authorBook should return object with bookPages', () => {
  expect(authorBook(
    {name: 'J.R. Willing', bookTitle: 'Pepa the Pig', bookPages: 0},
    {chapter1: 51, chapter2: 29, chapter3: 38}
  )).to.eql({name: 'J.R. Willing', bookTitle: 'Pepa the Pig', bookPages: 118});
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
