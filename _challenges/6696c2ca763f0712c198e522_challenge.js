// NAMEEN:
// NAMERU:Вложенные объекты с адресом

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `paramsToObject`, которая принимает четыре параметра:
* `street` - строка, название улицы
* `zip` - строка, почтовый индекс
* `lat` - число, широта
* `lng` - число, долгота

Пример запуска функции:
```javascript
paramsToObject('Market street', '94103', 37.776, -122.416);
// {
//   street: 'Market street',
//   zip: '94103',
//   location: {
//     lat: 37.776,
//     lng: -122.416,
//   }
// }
```

Как вы видите, функция возвращает объект, в котором есть свойство `location`, которое в свою очередь является объектом.

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function paramsToObject(street, zip, lat, lng) {
  return {
    street,
    zip,
    location: {
      lat,
      lng,
    },
  };
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function paramsToObject', () => {
  expect(paramsToObject).to.be.a('function');
});

it('paramsToObject("Market street", "94103", 37.776, -122.416) return { street: "Market street", zip: "94103", location: { lat: 37.776, lng: -122.416 } }', () => {
  expect(paramsToObject('Market street', '94103', 37.776, -122.416)).eql({
    street: 'Market street',
    zip: '94103',
    location: { lat: 37.776, lng: -122.416 },
  });
});

it('paramsToObject("Wall street", "94105", 37.794, -122.401) return { street: "Wall street", zip: "94105", location: { lat: 37.794, lng: -122.401 } }', () => {
  expect(paramsToObject('Wall street', '94105', 37.794, -122.401)).eql({
    street: 'Wall street',
    zip: '94105',
    location: { lat: 37.794, lng: -122.401 },
  });
});

it('paramsToObject("Broadway street", "94107", 37.798, -122.405) return { street: "Broadway street", zip: "94107", location: { lat: 37.798, lng: -122.405 } }', () => {
  expect(paramsToObject('Broadway street', '94107', 37.798, -122.405)).eql({
    street: 'Broadway street',
    zip: '94107',
    location: { lat: 37.798, lng: -122.405 },
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
