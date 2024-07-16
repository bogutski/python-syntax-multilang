// NAMEEN:
// NAMERU:Какая комната больше?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `compareRooms`, которая принимает два объекта: `room1` и `room2`.

В каждом объекте хранится информация о комнате.

В каждом объекте есть два свойства: `width` и `length`. Эти свойства хранят ширину и длину комнаты.

Например, объект `{width: 10, length: 20}` означает комнату шириной 10 футов и длиной 20 футов.

Функция должна вернуть строку, которая означает, какая комната по площади больше.

* Если первая комната больше, функция должна вернуть строку `Room 1 is bigger`.
* Если вторая комната больше, функция должна вернуть строку `Room 2 is bigger`.
* Если комнаты одинаковы по площади, функция должна вернуть строку `Rooms are equal`.

Пример запуска функции:
```javascript
compareRooms({width: 10, length: 20}, {width: 5, length: 10}) // Room 1 is bigger
compareRooms({width: 10, length: 20}, {width: 20, length: 20}) // Room 2 is bigger
compareRooms({width: 10, length: 20}, {width: 10, length: 20}) // Rooms are equal
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function compareRooms(room1, room2) {
  if (room1.width * room1.length > room2.width * room2.length) {
    return 'Room 1 is bigger';
  } else if (room1.width * room1.length < room2.width * room2.length) {
    return 'Room 2 is bigger';
  } else {
    return 'Rooms are equal';
  }
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function compareRooms', () => {
  expect(compareRooms).to.be.a('function');
});

it('compareRooms({width: 10, length: 20}, {width: 5, length: 10}) should return Room 1 is bigger', () => {
  expect(compareRooms({ width: 10, length: 20 }, { width: 5, length: 10 })).to.equal(
    'Room 1 is bigger',
  );
});

it('compareRooms({width: 10, length: 20}, {width: 20, length: 10}) should return Rooms are equal', () => {
  expect(compareRooms({ width: 10, length: 20 }, { width: 20, length: 10 })).to.equal(
    'Rooms are equal',
  );
});

it('compareRooms({width: 5, length: 30}, {width: 15, length: 10}) should return Rooms are equal', () => {
  expect(compareRooms({ width: 5, length: 30 }, { width: 15, length: 10 })).to.equal(
    'Rooms are equal',
  );
});

it('compareRooms({width: 5, length: 5}, {width: 40, length: 15}) should return Room 2 is bigger', () => {
  expect(compareRooms({ width: 5, length: 5 }, { width: 40, length: 15 })).to.equal(
    'Room 2 is bigger',
  );
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
