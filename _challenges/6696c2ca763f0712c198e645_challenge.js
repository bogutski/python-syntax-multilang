// NAMEEN:
// NAMERU:Геолокация. Удаление свойства из объекта.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Датчик GPS присылает данные с координатами точки на карте.

Напишите функцию `geoLocation`, которая принимает один параметр:
* `location` – объект, содержащий информацию о точке на карте;

Объект `location` имеет следующую структуру:
* `country` – страна, строка
* `alt` - высота над уровнем моря, строка
* `lat` - широта, строка
* `lon` - долгота, строка

Функция должна вернуть объект, в котором геолокация не будет привязана к стране – удалить свойство `country` из объекта `location`.

Пример запуска функции:
```javascript
geoLocation({country: "Canada", alt: "1387.2", lat: "51.1815723", lon: "-115.5846221"})
// {alt: "1387.2", lat: "1387.2", lon: "51.1815723"}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function geoLocation(location) {
  delete location.country;
  return location;
}
// SOLUTIONEND

// OPENTESTSSTART
it(`function geoLocation(location)`, () => {
  expect(geoLocation).to.be.a('function');
});

it(`function geoLocation({country: "Russia", alt: "220", lat: "59.8266513", lon: "90.18563"}) return {alt: "220", lat: "59.8266513", lon: "90.18563"}`, () => {
  expect(
    geoLocation({ country: 'Russia', alt: '220', lat: '59.8266513', lon: '90.18563' }),
  ).eql({ alt: '220', lat: '59.8266513', lon: '90.18563' });
});

it(`function geoLocation({country: "Canada", alt: "1387.2", lat: "51.1815723", lon: "-115.5846221"}) return {alt: "1387.2", lat: "51.1815723", lon: "-115.5846221"}`, () => {
  expect(
    geoLocation({
      country: 'Canada',
      alt: '1387.2',
      lat: '51.1815723',
      lon: '-115.5846221',
    }),
  ).eql({ alt: '1387.2', lat: '51.1815723', lon: '-115.5846221' });
});

it(`function geoLocation({country: "USA", alt: "22.3", lat: "45.557515", lon: "-122.7321737"}) return {alt: "22.3", lat: "45.557515", lon: "-122.7321737"}`, () => {
  expect(
    geoLocation({ country: 'USA', alt: '22.3', lat: '45.557515', lon: '-122.7321737' }),
  ).eql({ alt: '22.3', lat: '45.557515', lon: '-122.7321737' });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
