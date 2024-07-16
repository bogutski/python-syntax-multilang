// NAMEEN:
// NAMERU:Книжная карточка. Объекты

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Когда книга попадает в библиотеку, библиотекарь должен заполнить формуляр и определить место книги на полке.

Напишите функцию `bookSpec`, которая принимает следующие параметры:
* `firstName` - имя автора, строка
* `lastName` - фамилия автора, строка
* `title` - название книги, строка
* `genre` - жанр, строка

Функция должна вернуть объект, содержащий данные книги:
* `author` - имя и фамилия автора (`firstName lastName`),
* `title` - название книги,
* `genre` - жанр,
* `shelfIndex` - индекс места на полке, который состоит из первой буквы имени и полной фамилии в верхнем регистре.

Пример запуска функции:
```javascript
bookSpec('Joanne', 'Rowling', 'Harry Potter', 'fantasy')
// {author: 'Joanne Rowling', title: 'Harry Potter', genre: 'fantasy', shelfIndex: 'JROWLING'}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function bookSpec(firstName, lastName, title, genre) {
  return {
    author: `${firstName} ${lastName}`,
    title,
    genre,
    shelfIndex: firstName[0].toUpperCase() + lastName.toUpperCase(),
  };
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function bookSpec', () => {
  expect(bookSpec).to.be.a('function');
});

it('bookSpec(`Joanne`, `Rowling`, `Harry Potter`, `fantasy`) should return {`author`: `Joanne Rowling`, `title`: `Harry Potter`, `genre`: `fantasy`, `shelfIndex`: `JROWLING`}', () => {
  expect(bookSpec(`Joanne`, `Rowling`, `Harry Potter`, `fantasy`)).eql({
    author: `Joanne Rowling`,
    title: `Harry Potter`,
    genre: `fantasy`,
    shelfIndex: `JROWLING`,
  });
});

it('bookSpec(`Stephen`, `King`, `The Shining`, `horror`) should return {`author`: `Stephen King`, `title`: `The Shining`, `genre`: `horror`, `shelfIndex`: `SKING`}', () => {
  expect(bookSpec(`Stephen`, `King`, `The Shining`, `horror`)).eql({
    author: `Stephen King`,
    title: `The Shining`,
    genre: `horror`,
    shelfIndex: `SKING`,
  });
});

it('bookSpec(`Freida`, `McFadden`, `The Housemaid`, `novel`) should return {`author`: `Freida McFadden`, `title`: `The Housemaid`, `genre`: `novel`, `shelfIndex`: `FMCFADDEN`}', () => {
  expect(bookSpec(`Freida`, `McFadden`, `The Housemaid`, `novel`)).eql({
    author: `Freida McFadden`,
    title: `The Housemaid`,
    genre: `novel`,
    shelfIndex: `FMCFADDEN`,
  });
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
