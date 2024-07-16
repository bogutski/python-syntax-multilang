// NAMEEN:
// NAMERU:Определите, на каком этаже квартира. Последовательная нумерация.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Квартиры нумеруются последовательно по возрастанию с первого этажа.

На каждом этаже одинаковое количество квартир.

Напишите функцию `getFloor`, которая принимает два параметра: номер квартиры и количество квартир на этаже.

Параметры назовите по своему усмотрению.

Функция должна возвращать номер этажа, на котором находится квартира.

Дом не может быть больше 50 этажей.

Если квартиры с таким номером нет, функция должна возвращать строку `There is no apartment with such number`.

Примеры запуска функции:
```javascript
getFloor(1, 3) // 1
getFloor(2, 3) // 1
getFloor(4, 3) // 2

getFloor(499, 10) // 50
getFloor(500, 10) // 50
getFloor(501, 10) // There is no apartment with such number

getFloor(-1, 5) // There is no apartment with such number
getFloor(0, 5) // There is no apartment with such number
```



INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getFloor(apartmentNumber, apartmentsOnFloor) {
  const maxFloor = 50;
  const maxApartment = maxFloor * apartmentsOnFloor;
  if (apartmentNumber > maxApartment || apartmentNumber < 1) {
    return 'There is no apartment with such number';
  }
  return Math.ceil(apartmentNumber / apartmentsOnFloor);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function getFloor', () => {
  expect(getFloor).to.be.a('function');
});

it('getFloor(1, 3) should return 1', () => {
  expect(getFloor(1, 3)).to.equal(1);
});

it('getFloor(2, 3) should return 1', () => {
  expect(getFloor(2, 3)).to.equal(1);
});

it('getFloor(4, 3) should return 2', () => {
  expect(getFloor(4, 3)).to.equal(2);
});

it('getFloor(40, 4) should return 10', () => {
  expect(getFloor(40, 4)).to.equal(10);
});

it('getFloor(499, 10) should return 50', () => {
  expect(getFloor(499, 10)).to.equal(50);
});

it('getFloor(500, 10) should return 50', () => {
  expect(getFloor(500, 10)).to.equal(50);
});

it('getFloor(501, 10) should return "There is no apartment with such number"', () => {
  expect(getFloor(501, 10)).to.equal('There is no apartment with such number');
});

it('getFloor(-15, 5) should return "There is no apartment with such number"', () => {
  expect(getFloor(-15, 5)).to.equal('There is no apartment with such number');
});

it('getFloor(0, 5) should return "There is no apartment with such number"', () => {
  expect(getFloor(0, 5)).to.equal('There is no apartment with such number');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
