// NAMEEN:
// NAMERU:Сколько полных часов в заданном количестве минут

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `howManyHours`.

Функция принимает одно число – количество минут, возвращает количество полных часов, которые содержатся в этом количестве минут.

Примеры запуска функции:
```javascript
howManyHours(59) // 0
howManyHours(60) // 1
howManyHours(90) // 1
howManyHours(120) // 2
howManyHours(121) // 2
howManyHours(122) // 2
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function howManyHours(minutes) {
  return Math.floor(minutes / 60);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function howManyHours', () => {
  expect(howManyHours).to.be.a('function');
});

it('howManyHours(59) should return 0', () => {
  expect(howManyHours(59)).to.equal(0);
});

it('howManyHours(60) should return 1', () => {
  expect(howManyHours(60)).to.equal(1);
});

it('howManyHours(90) should return 1', () => {
  expect(howManyHours(90)).to.equal(1);
});

it('howManyHours(120) should return 2', () => {
  expect(howManyHours(120)).to.equal(2);
});

it('howManyHours(121) should return 2', () => {
  expect(howManyHours(121)).to.equal(2);
});

it('howManyHours(122) should return 2', () => {
  expect(howManyHours(122)).to.equal(2);
});

it('howManyHours(250) should return 4', () => {
  expect(howManyHours(250)).to.equal(4);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
