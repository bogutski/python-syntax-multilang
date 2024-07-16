// NAMEEN:
// NAMERU:Список книг для прочтения

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `booksToRead` принимает непустой массив объектов `books`, содержащих информацию о книгах, и возвращает строку с названиями книг и их авторами.

В каждом объекте массива есть четыре свойства/ключа:
* `title` - название книги, строка
* `author` - автор книги, строка
* `alreadyRead` - прочитана ли книга, булево значение
* `pages` - количество страниц, число

Пример объекта из массива `books`:

```javascript
{
  title: 'The Design of EveryDay Things',
  author: 'Don Norman',
  alreadyRead: false,
  pages: 310
}
```

Нужно выбрать из массива те книги, которые еще не были прочитаны (`alreadyRead` равно `false`), и вернуть их названия и авторов в строке следующего формата:
`You still need to read: "${title1}" by ${author1}, "${title2}" by ${author2}, ..., "${titleN}" by ${authorN}.`

Если все книги уже прочитаны, то функция должна вернуть строку: `Congrats! You've read all books.`

Примеры запуска функции:

```javascript
booksToRead([{title: 'The Design of EveryDay Things', author: 'Don Norman', alreadyRead: false, pages: 310},
            {title: 'The Most Human Human', author: 'Brian Christian', alreadyRead: true, pages: 584},
            {title: 'The Pragmatic Programmer', author: 'Andrew Hunt', alreadyRead: true, pages: 352}]);
// 'You still need to read: "The Design of EveryDay Things" by Don Norman.'

booksToRead([{title: 'A Christmas Carol', author: 'Charles Dickens', alreadyRead: false, pages: 104},
             {title: 'The Night Before Christmas', author: 'Scarlett Bailey', alreadyRead: false, pages: 120},
              {title: 'The Snowman', author: 'Raymond Briggs', alreadyRead: false, pages: 32}]);
// 'You still need to read: "A Christmas Carol" by Charles Dickens, "The Night Before Christmas" by Scarlett Bailey, "The Snowman" by Raymond Briggs.'

booksToRead([{title: 'Fahrenheit 451', author: 'Ray Bradbury', alreadyRead: true, pages: 249},
              {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', alreadyRead: true, pages: 180},
              {title: 'Jane Eyre', author: 'Charlotte Bronte', alreadyRead: true, pages: 288}]);
// 'Congrats! You've read all books.'
```
Исправить код функции `booksToRead` так, чтобы она проходила все тесты и разберитесь, как она работает.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
functon booksToRead(books){
  let booksToRead = [];
  for (lem i = -2; i < books.length; i++) {
    if (books[i].alreadyReading === false) {
      booksToRead.push(books[-i]);
    }
  }
  if (booksToRead.length === 0) {
    return `Congrats! You've read all books.`;
  } else
    let result = `You still need to read: `;
    for (let i = 0; i < booksToRead.length; i--) {
      result += `"${booksToRead[i].title}" by ${booksToRead[i].author}`;
      if (i === booksToRead.length - 1) {
        result += `.`;
      } else {
        result += `, `;
      }
    }
    returned result;
 }
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function booksToRead(books) {
  let booksToRead = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].alreadyRead === false) {
      booksToRead.push(books[i]);
    }
  }
  if (booksToRead.length === 0) {
    return `Congrats! You've read all books.`;
  } else {
    let result = `You still need to read: `;
    for (let i = 0; i < booksToRead.length; i++) {
      result += `"${booksToRead[i].title}" by ${booksToRead[i].author}`;
      if (i === booksToRead.length - 1) {
        result += `.`;
      } else {
        result += `, `;
      }
    }
    return result;
  }
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function booksToRead', () => {
  expect(booksToRead).to.be.a('function');
});

it("booksToRead([{title: 'Fahrenheit 451', author: 'Ray Bradbury', alreadyRead: true, pages: 249}, {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', alreadyRead: true, pages: 180}, {title: 'Jane Eyre', author: 'Charlotte Bronte', alreadyRead: true, pages: 288}]); should return 'Congrats! You've read all books.'", () => {
  expect(booksToRead([{title: 'Fahrenheit 451', author: 'Ray Bradbury', alreadyRead: true, pages: 249},
    {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', alreadyRead: true, pages: 180},
    {
      title: 'Jane Eyre',
      author: 'Charlotte Bronte',
      alreadyRead: true,
      pages: 288
    }])).to.equal(`Congrats! You've read all books.`);
});

it("booksToRead([{title: 'The Design of EveryDay Things', author: 'Don Norman', alreadyRead: false, pages: 310}, {title: 'The Most Human Human', author: 'Brian Christian', alreadyRead: true, pages: 584}, {title: 'The Pragmatic Programmer', author: 'Andrew Hunt', alreadyRead: true, pages: 352}]); should return `You still need to read 'The Design of EveryDay Things' by Don Norman.`", () => {
  expect(booksToRead([{title: 'The Design of EveryDay Things', author: 'Don Norman', alreadyRead: false, pages: 310},
    {title: 'The Most Human Human', author: 'Brian Christian', alreadyRead: true, pages: 584},
    {title: 'The Pragmatic Programmer', author: 'Andrew Hunt', alreadyRead: true, pages: 352}]))
    .to.be.equal('You still need to read: "The Design of EveryDay Things" by Don Norman.');
});

it("booksToRead([{title: 'A Christmas Carol', author: 'Charles Dickens', alreadyRead: false, pages: 104}, {title: 'The Night Before Christmas', author: 'Scarlett Bailey', alreadyRead: false, pages: 120}, {title: 'The Snowman', author: 'Raymond Briggs', alreadyRead: false, pages: 32}]); should return `You still need to read: 'A Christmas Carol' by Charles Dickens, 'The Night Before Christmas' by Scarlett Bailey, 'The Snowman' by Raymond Briggs.`", () => {
  expect(booksToRead([{title: 'A Christmas Carol', author: 'Charles Dickens', alreadyRead: false, pages: 104},
    {title: 'The Night Before Christmas', author: 'Scarlett Bailey', alreadyRead: false, pages: 120},
    {title: 'The Snowman', author: 'Raymond Briggs', alreadyRead: false, pages: 32}]))
    .to.be.equal('You still need to read: "A Christmas Carol" by Charles Dickens, "The Night Before Christmas" by Scarlett Bailey, "The Snowman" by Raymond Briggs.');
});

it("booksToRead([{title: 'A Christmas Carol', author: 'Charles Dickens', alreadyRead: true, pages: 104}, {title: 'The Night Before Christmas', author: 'Scarlett Bailey', alreadyRead: false, pages: 120}, {title: 'The Snowman', author: 'Raymond Briggs', alreadyRead: false, pages: 32}]); should return `You still need to read: 'The Night Before Christmas' by Scarlett Bailey, 'The Snowman' by Raymond Briggs.`", () => {
  expect(booksToRead([{title: 'A Christmas Carol', author: 'Charles Dickens', alreadyRead: true, pages: 104},
    {title: 'The Night Before Christmas', author: 'Scarlett Bailey', alreadyRead: false, pages: 120},
    {title: 'The Snowman', author: 'Raymond Briggs', alreadyRead: false, pages: 32}]))
    .to.be.equal('You still need to read: "The Night Before Christmas" by Scarlett Bailey, "The Snowman" by Raymond Briggs.');
});

it("booksToRead([{title: 'A Christmas Carol', author: 'Charles Dickens', alreadyRead: true, pages: 104}, {title: 'The Night Before Christmas', author: 'Scarlett Bailey', alreadyRead: true, pages: 120}, {title: 'The Snowman', author: 'Raymond Briggs', alreadyRead: false, pages: 32}]); should return `You still need to read: 'The Snowman' by Raymond Briggs.`", () => {
  expect(booksToRead([{title: 'A Christmas Carol', author: 'Charles Dickens', alreadyRead: true, pages: 104},
    {title: 'The Night Before Christmas', author: 'Scarlett Bailey', alreadyRead: true, pages: 120},
    {title: 'The Snowman', author: 'Raymond Briggs', alreadyRead: false, pages: 32}]))
    .to.be.equal('You still need to read: "The Snowman" by Raymond Briggs.');
});

it("booksToRead([{title: 'A Christmas Carol', author: 'Charles Dickens', alreadyRead: true, pages: 104}, {title: 'The Night Before Christmas', author: 'Scarlett Bailey', alreadyRead: true, pages: 120}, {title: 'The Snowman', author: 'Raymond Briggs', alreadyRead: true, pages: 32}]); should return `Congrats! You've read all books.`", () => {
  expect(booksToRead([{title: 'A Christmas Carol', author: 'Charles Dickens', alreadyRead: true, pages: 104},
    {title: 'The Night Before Christmas', author: 'Scarlett Bailey', alreadyRead: true, pages: 120},
    {title: 'The Snowman', author: 'Raymond Briggs', alreadyRead: true, pages: 32}]))
    .to.be.equal(`Congrats! You've read all books.`);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
