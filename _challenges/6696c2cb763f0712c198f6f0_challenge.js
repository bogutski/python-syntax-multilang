// NAMEEN:
// NAMERU:Фильтрация мультимедийного контента по жанрам и рейтингам

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterMedia`, которая принимает массив объектов - `mediaList`, мультимедийного контента (фильмы, игры, книги), массив жанров - `genres` и объект диапазона рейтингов - `ratingRange`.

Функция должна возвращать новый массив, содержащий только те элементы, которые соответствуют одному из жанров в списке и имеют рейтинг в указанном диапазоне (включительно).


Примеры запуска функции:
```javascript
const mediaList = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { title: "The Witcher", genre: "Fantasy", rating: 9.2 },
  { title: "Revolutionary Road", genre: "Drama", rating: 7.3 },
  { title: "Black Mirror", genre: "Sci-Fi", rating: 8.5 }
];

console.log(filterMedia(mediaList, ["Sci-Fi", "Fantasy"], {min: 8, max: 9}));
// [{ title: "Inception", genre: "Sci-Fi", rating: 8.8 }, { title: "Black Mirror", genre: "Sci-Fi", rating: 8.5 }]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterMedia(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterMedia(mediaList, genres, ratingRange) {
  return mediaList.filter(({genre, rating}) => genres.includes(genre) && rating >= ratingRange.min && rating <= ratingRange.max);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function filterMedia', () => {
  expect(filterMedia).to.be.a('function');
});

it("Function filterMedia should include filter method", () => {
  const result = filterMedia.toString();
  expect(result).to.include('.filter(');
});

it("filterMedia([{title: 'Inception', genre: 'Sci-Fi', rating: 8.8}], ['Sci-Fi'], {min: 8, max: 9}) should return [{title: 'Inception', genre: 'Sci-Fi', rating: 8.8}]", () => {
  const mediaList = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8 }
  ];
  expect(filterMedia(mediaList, ["Sci-Fi"], {min: 8, max: 9})).to.deep.equal([
    { title: "Inception", genre: "Sci-Fi", rating: 8.8 }
  ]);
});

it("filterMedia([{title: 'The Witcher', genre: 'Fantasy', rating: 9.2}], ['Fantasy'], {min: 9, max: 9.5}) should return [{title: 'The Witcher', genre: 'Fantasy', rating: 9.2}]", () => {
  const mediaList = [
    { title: "The Witcher", genre: "Fantasy", rating: 9.2 }
  ];
  expect(filterMedia(mediaList, ["Fantasy"], {min: 9, max: 9.5})).to.deep.equal([
    { title: "The Witcher", genre: "Fantasy", rating: 9.2 }
  ]);
});

it("filterMedia([], ['Drama'], {min: 7, max: 8}) should return []", () => {
  expect(filterMedia([], ["Drama"], {min: 7, max: 8})).to.deep.equal([]);
});

it("filterMedia([{title: 'Revolutionary Road', genre: 'Drama', rating: 7.3}], ['Drama'], {min: 7, max: 7.5}) should return [{title: 'Revolutionary Road', genre: 'Drama', rating: 7.3}]", () => {
  const mediaList = [
    { title: "Revolutionary Road", genre: "Drama", rating: 7.3 }
  ];
  expect(filterMedia(mediaList, ["Drama"], {min: 7, max: 7.5})).to.deep.equal([
    { title: "Revolutionary Road", genre: "Drama", rating: 7.3 }
  ]);
});

it("filterMedia([{title: 'Black Mirror', genre: 'Sci-Fi', rating: 8.5}], ['Sci-Fi'], {min: 8.5, max: 9}) should return [{title: 'Black Mirror', genre: 'Sci-Fi', rating: 8.5}] as the rating matches exactly the lower bound", () => {
  const mediaList = [
    { title: "Black Mirror", genre: "Sci-Fi", rating: 8.5 }
  ];
  expect(filterMedia(mediaList, ["Sci-Fi"], {min: 8.5, max: 9})).to.deep.equal([
    { title: "Black Mirror", genre: "Sci-Fi", rating: 8.5 }
  ]);
});

it("filterMedia([{title: 'Old Movie', genre: 'Classic', rating: 8.0}], ['Classic'], {min: 8, max: 8}) should return [{title: 'Old Movie', genre: 'Classic', rating: 8.0}] as the rating matches exactly the bounds", () => {
  const mediaList = [
    { title: "Old Movie", genre: "Classic", rating: 8.0 }
  ];
  expect(filterMedia(mediaList, ["Classic"], {min: 8, max: 8})).to.deep.equal([
    { title: "Old Movie", genre: "Classic", rating: 8.0 }
  ]);
});

it("filterMedia([{title: 'New Series', genre: 'Sci-Fi', rating: 8.9}], ['Sci-Fi'], {min: 8, max: 8.9}) should return [{title: 'New Series', genre: 'Sci-Fi', rating: 8.9}] as the rating matches exactly the upper bound", () => {
  const mediaList = [
    { title: "New Series", genre: "Sci-Fi", rating: 8.9 }
  ];
  expect(filterMedia(mediaList, ["Sci-Fi"], {min: 8, max: 8.9})).to.deep.equal([
    { title: "New Series", genre: "Sci-Fi", rating: 8.9 }
  ]);
});

it("filterMedia([{title: 'Adventure Time', genre: 'Adventure', rating: 9.0}], ['Adventure'], {min: 9, max: 9.0}) should return [{title: 'Adventure Time', genre: 'Adventure', rating: 9.0}] as the rating matches exactly the upper bound", () => {
  const mediaList = [
    { title: "Adventure Time", genre: "Adventure", rating: 9.0 }
  ];
  expect(filterMedia(mediaList, ["Adventure"], {min: 9, max: 9.0})).to.deep.equal([
    { title: "Adventure Time", genre: "Adventure", rating: 9.0 }
  ]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
