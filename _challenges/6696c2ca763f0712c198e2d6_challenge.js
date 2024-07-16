// NAMEEN:
// NAMERU:Сколько полных килограммов в заданном количестве граммов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `howManyKilograms`, которая принимает одно число – количество граммов и возвращает количество полных килограммов, которые можно получить из этого количества граммов.

Числа могут быть целыми или дробными.

Примеры запуска функции:
```javascript

howManyKilograms(700) // 0
howManyKilograms(1000) // 1
howManyKilograms(1001) // 1
howManyKilograms(1002) // 1
howManyKilograms(10003) // 10
howManyKilograms(14555) // 14
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function howManyKilograms(grams) {
  return Math.floor(grams / 1000);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function howManyKilograms', () => {
  expect(howManyKilograms).to.be.a('function');
});

it('howManyKilograms(700) should return 0', () => {
  expect(howManyKilograms(700)).to.equal(0);
});

it('howManyKilograms(1000) should return 1', () => {
  expect(howManyKilograms(1000)).to.equal(1);
});

it('howManyKilograms(1001) should return 1', () => {
  expect(howManyKilograms(1001)).to.equal(1);
});

it('howManyKilograms(1802) should return 1', () => {
  expect(howManyKilograms(1802)).to.equal(1);
});

it('howManyKilograms(10003) should return 10', () => {
  expect(howManyKilograms(10003)).to.equal(10);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
