// NAMEEN:
// NAMERU:Средний рейтинг гостиницы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `getAverageRating`, которая принимает объект `hotel` и возвращает средний рейтинг по отзывам по категориям.

Объект `hotel` имеет следующую структуру:
* `name` – название гостиницы, строка
* `cleanliness` – оценка чистоты, число
* `service` – оценка сервиса, число
* `location` – оценка расположения, число
* `value` – оценка соотношения цена/качество, число

Функция должна вернуть средний рейтинг по отзывам по категориям.

Пример запуска функции:
```javascript
const hotel = {
  name: 'Hotel 1',
  cleanliness: 4,
  service: 5,
  location: 3,
  value: 4,
};

getAverageRating(hotel); // 4
```

Сложите все оценки по категориям и разделите на количество категорий.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getAverageRating(hotel) {
  const { cleanliness, service, location, value } = hotel;

  return (cleanliness + service + location + value) / 4;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function getAverageRating', () => {
  expect(getAverageRating).to.be.a('function');
});

it('getAverageRating({ cleanliness: 4, service: 5, location: 3, value: 4 }) should return 4', () => {
  const hotel = {
    cleanliness: 4,
    service: 5,
    location: 3,
    value: 4,
  };

  expect(getAverageRating(hotel)).to.equal(4);
});

it('getAverageRating({ cleanliness: 5, service: 5, location: 5, value: 5 }) should return 5', () => {
  const hotel = {
    cleanliness: 5,
    service: 5,
    location: 5,
    value: 5,
  };

  expect(getAverageRating(hotel)).to.equal(5);
});

it('getAverageRating({ cleanliness: 1, service: 1, location: 1, value: 1 }) should return 1', () => {
  const hotel = {
    cleanliness: 1,
    service: 1,
    location: 1,
    value: 1,
  };

  expect(getAverageRating(hotel)).to.equal(1);
});

it('getAverageRating({ cleanliness: 2, service: 3, location: 1, value: 4 }) should return 2.5', () => {
  const hotel = {
    cleanliness: 2,
    service: 3,
    location: 1,
    value: 4,
  };

  expect(getAverageRating(hotel)).to.equal(2.5);
});

it('getAverageRating({ cleanliness: 3, service: 4, location: 3, value: 1 }) should return 2.75', () => {
  const hotel = {
    cleanliness: 3,
    service: 4,
    location: 3,
    value: 1,
  };

  expect(getAverageRating(hotel)).to.equal(2.75);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
