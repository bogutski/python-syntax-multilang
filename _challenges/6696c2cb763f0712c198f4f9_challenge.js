// NAMEEN:
// NAMERU:Обновление рейтинга книги

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Вы работаете над приложением для библиотеки, и вам нужно обновить рейтинг одной из книг в списке.

Создайте функцию `updateBookRating`, которая принимает три аргумента:

* массив книг `books`,
* индекс книги `index`, которой нужно обновить рейтинг,
* новый рейтинг `newRating`.

Используйте метод `with()` для обновления рейтинга книги, гарантируя, что исходный массив остается неизменным.

Каждая книга в массиве представлена объектом с полями `title` и `rating`.

Функция должна возвращать новый массив книг с обновленным рейтингом указанной книги.


Пример запуска функции:
```javascript
const books = [
  { title: "The Hobbit", rating: 8.2 },
  { title: "1984", rating: 9.1 },
  { title: "The Great Gatsby", rating: 7.8 }
];

const updatedBooks = updateBookRating(books, 1, 9.5);
console.log(updatedBooks);
// [
//   { title: 'The Hobbit', rating: 8.2 },
//   { title: '1984', rating: 9.5 },
//   { title: 'The Great Gatsby', rating: 7.8 }
// ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function updateBookRating(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function updateBookRating(arr, i, newEl) {
  const updatedObj = {...arr[i], rating: newEl}
  return arr.with(i, updatedObj);
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.with = function(index, value){
  const newArray = this.slice();
  newArray.splice(index, 1, value);
  return newArray;
}

it('Created function updateBookRating', () => {
  expect(updateBookRating).to.be.a('function');
});

it('Function updateBookRating should include method with()', () => {
  const res = updateBookRating.toString()
  expect(res).to.include('.with(')
});

it("updateBookRating updates the rating of the second book to 9.5", () => {
  const books = [
    { title: "The Hobbit", rating: 8.2 },
    { title: "1984", rating: 9.1 },
    { title: "The Great Gatsby", rating: 7.8 }
  ];
  const updatedBooks = updateBookRating(books, 1, 9.5);
  expect(updatedBooks[1].rating).to.equal(9.5);
});

it("updateBookRating does not alter the original books array", () => {
  const books = [
    { title: "The Hobbit", rating: 8.2 },
    { title: "1984", rating: 9.1 },
    { title: "The Great Gatsby", rating: 7.8 }
  ];
  updateBookRating(books, 1, 9.5);
  expect(books[1].rating).to.equal(9.1);
});

it("updateBookRating returns a new array with the updated book", () => {
  const books = [
    { title: "The Hobbit", rating: 8.2 },
    { title: "1984", rating: 9.1 },
    { title: "The Great Gatsby", rating: 7.8 }
  ];
  const updatedBooks = updateBookRating(books, 0, 8.5);
  expect(updatedBooks[0].rating).to.not.equal(books[0].rating);
  expect(updatedBooks).to.not.equal(books);
});

it("updateBookRating correctly updates the rating when index is negative", () => {
  const books = [
    { title: "The Hobbit", rating: 8.2 },
    { title: "1984", rating: 9.1 },
    { title: "The Great Gatsby", rating: 7.8 }
  ];
  const updatedBooks = updateBookRating(books, -1, 8.0);
  expect(updatedBooks[2].rating).to.equal(8.0);
});

it("updateBookRating returns a new array and matches expected array", () => {
  const books = [
    { title: "The Hobbit", rating: 8.2 },
    { title: "1984", rating: 9.1 },
    { title: "The Great Gatsby", rating: 7.8 }
  ];
  const res = [
    { title: "The Hobbit", rating: 9.9 },
    { title: "1984", rating: 9.1 },
    { title: "The Great Gatsby", rating: 7.8 }
  ];
  const updatedBooks = updateBookRating(books, 0, 9.9);
  expect(updatedBooks).to.deep.equal(res);
});

it("updateBookRating maintains other properties of the book unchanged", () => {
  const books = [
    { title: "The Hobbit", rating: 8.2, author: "J.R.R. Tolkien" },
    { title: "1984", rating: 9.1, author: "George Orwell" },
    { title: "The Great Gatsby", rating: 7.8, author: "F. Scott Fitzgerald" }
  ];
  const updatedBooks = updateBookRating(books, 0, 8.5);
  expect(updatedBooks[0].author).to.equal("J.R.R. Tolkien");
});

it("updateBookRating returns a new array even if the new rating is the same as the old", () => {
  const books = [
    { title: "The Hobbit", rating: 8.2 },
    { title: "1984", rating: 9.1 },
    { title: "The Great Gatsby", rating: 7.8 }
  ];
  const updatedBooks = updateBookRating(books, 1, 9.1);
  expect(updatedBooks).to.not.equal(books);
  expect(updatedBooks[1].rating).to.equal(9.1);
});

it("updateBookRating allows updating a book to have no rating", () => {
  const books = [
    { title: "The Hobbit", rating: 8.2 },
    { title: "1984", rating: 9.1 },
    { title: "The Great Gatsby", rating: 7.8 }
  ];
  const updatedBooks = updateBookRating(books, 2, null);
  expect(updatedBooks[2].rating).to.equal(null);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
