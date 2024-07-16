// NAMEEN:
// NAMERU:Автобусы для школьников

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Вместимость автобуса для школьников - 40 человек.

Напишите функцию `busForSchool`, которая принимает один параметр - количество школьников, и возвращает количество автобусов, которые нужны для перевозки школьников.

Примеры запуска функции:
```javascript
busForSchool(1) // 1
busForSchool(40) // 1
busForSchool(41) // 2
busForSchool(80) // 2
busForSchool(805) // 21
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun bus
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function busForSchool(num) {
  return Math.ceil(num / 40);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function busForSchool', () => {
  expect(busForSchool).to.be.a('function');
});

it('busForSchool(1) should return 1', () => {
  expect(busForSchool(1)).to.equal(1);
});

it('busForSchool(40) should return 1', () => {
  expect(busForSchool(40)).to.equal(1);
});

it('busForSchool(41) should return 2', () => {
  expect(busForSchool(41)).to.equal(2);
});

it('busForSchool(80) should return 2', () => {
  expect(busForSchool(80)).to.equal(2);
});

it('busForSchool(805) should return 21', () => {
  expect(busForSchool(805)).to.equal(21);
});

it('busForSchool(0) should return 0', () => {
  expect(busForSchool(0)).to.equal(0);
});

it('busForSchool(3907) should return 98', () => {
  expect(busForSchool(3907)).to.equal(98);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
