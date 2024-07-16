// NAMEEN:
// NAMERU:Общая площадь дома по комнатам

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `totalArea`, которая принимает параметры:
* `room1` - объект с шириной и длиной первой комнаты
* `room2` - объект с шириной и длиной второй комнаты
* `room3` - объект с шириной и длиной третьей комнаты

Каждый объект комнаты имеет следующую структуру:
```js
{
  width: 5,
  length: 10
}
```

Функция должна найти общую площадь всех комнат и вернуть её.

Ответ должен быть строкой в формате:
```js
'Room 1: 50, Room 2: 100, Room 3: 150, Total: 300'
```

Пример вызова функции:
```javascript
totalArea(
  { width: 5, length: 10 },
  { width: 10, length: 10 },
  { width: 15, length: 10 }
); // 'Room 1: 50, Room 2: 100, Room 3: 150, Total: 300'
```

Если хотя бы в одной из комнат ширина или длина не является числом или меньше `1`, то функция должна вернуть строку: 'Invalid input'

Пример вызова функции с невалидными данными:
```javascript
totalArea(
  { width: 5, length: 10 },
  { width: 10, length: '10' },
  { width: 15, length: 10 }
); // 'Invalid input'

totalArea(
  { width: 5, length: -10 },
  { width: 10, length: 10 },
  { width: 0.5, length: 10 }
); // 'Invalid input'
```



INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function totalArea(room1, room2, room3) {
  if (
    typeof room1.width !== 'number' ||
    typeof room1.length !== 'number' ||
    room1.width < 1 ||
    room1.length < 1 ||
    typeof room2.width !== 'number' ||
    typeof room2.length !== 'number' ||
    room2.width < 1 ||
    room2.length < 1 ||
    typeof room3.width !== 'number' ||
    typeof room3.length !== 'number' ||
    room3.width < 1 ||
    room3.length < 1
  ) {
    return 'Invalid input';
  }

  const area =
    room1.width * room1.length + room2.width * room2.length + room3.width * room3.length;
  return (
    'Room 1: ' +
    room1.width * room1.length +
    ', Room 2: ' +
    room2.width * room2.length +
    ', Room 3: ' +
    room3.width * room3.length +
    ', Total: ' +
    area
  );
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function totalArea', () => {
  expect(totalArea).to.be.a('function');
});

it('totalArea({ width: 5, length: 10 }, { width: 10, length: 10 }, { width: 15, length: 10 }) should return "Room 1: 50, Room 2: 100, Room 3: 150, Total: 300"', () => {
  expect(
    totalArea(
      { width: 5, length: 10 },
      { width: 10, length: 10 },
      { width: 15, length: 10 },
    ),
  ).to.equal('Room 1: 50, Room 2: 100, Room 3: 150, Total: 300');
});

it('totalArea({ width: 2, length: 2 }, { width: 3, length: 3 }, { width: 4, length: 4 }) should return "Room 1: 4, Room 2: 9, Room 3: 16, Total: 29"', () => {
  expect(
    totalArea({ width: 2, length: 2 }, { width: 3, length: 3 }, { width: 4, length: 4 }),
  ).to.equal('Room 1: 4, Room 2: 9, Room 3: 16, Total: 29');
});

// invalid input
it('totalArea({ width: "5", length: "10" }, { width: "10", length: "10" }, { width: "15", length: "10" }) should return "Invalid input"', () => {
  expect(
    totalArea(
      { width: '5', length: '10' },
      { width: '10', length: '10' },
      { width: '15', length: '10' },
    ),
  ).to.equal('Invalid input');
});

it('totalArea({ width: "five", length: 10 }, { width: 10, length: "a" }, { width: 15, length: 10 }) should return "Invalid input"', () => {
  expect(
    totalArea(
      { width: 'five', length: 10 },
      { width: 10, length: 'a' },
      { width: 15, length: 10 },
    ),
  ).to.equal('Invalid input');
});

// invalid input, negative numbers
it('totalArea({ width: -5, length: 10 }, { width: 10, length: 10 }, { width: 15, length: 10 }) should return "Invalid input"', () => {
  expect(
    totalArea(
      { width: -5, length: 10 },
      { width: 10, length: 10 },
      { width: 15, length: 10 },
    ),
  ).to.equal('Invalid input');
});

it('totalArea({ width: 5, length: -10 }, { width: 10, length: 10 }, { width: 15, length: 10 }) should return "Invalid input"', () => {
  expect(
    totalArea(
      { width: 5, length: -10 },
      { width: 10, length: 10 },
      { width: 15, length: 10 },
    ),
  ).to.equal('Invalid input');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
