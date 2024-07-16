// NAMEEN:
// NAMERU:Какое количество кабинетов необходимо офису, чтобы разместить сотрудников?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию с именем `officeRooms`, которая принимает параметры:
- `roomSeats` – количество мест в одном кабинете
- `numberEmployees` – количество сотрудников офиса

Какое количество кабинетов достаточно, чтобы разместить сотрудников?

Функция должна возвращать наименьшее количество кабинетов, необходимое для размещения сотрудников.

Примеры:
```javascript
officeRooms(5, 9) // 2
officeRooms(5, 10) // 2
officeRooms(5, 11) // 3
officeRooms(5, 14) // 3
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function officeRooms(k, number) {
  return Math.ceil(number / k);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function officeRooms', () => {
  expect(officeRooms).to.be.a('function');
});

it('officeRooms(5, 9) should return 2', () => {
  expect(officeRooms(5, 9)).to.equal(2);
});

it('officeRooms(5, 10) should return 2', () => {
  expect(officeRooms(5, 10)).to.equal(2);
});

it('officeRooms(5, 11) should return 3', () => {
  expect(officeRooms(5, 11)).to.equal(3);
});

it('officeRooms(300, 5000) should return 17', () => {
  expect(officeRooms(300, 5000)).to.equal(17);
});

it('officeRooms(250, 5150) should return 21', () => {
  expect(officeRooms(250, 5150)).to.equal(21);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
