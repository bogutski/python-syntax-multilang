// NAMEEN:
// NAMERU:Увеличить в 10 раз все числа кратные трем

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Числа кратные трем это числа, которые делятся на 3 без остатка.

Для проверки можно использовать оператор `%` (остаток от деления) и если он равен нулю, то число кратно трем.

Напишите функцию `multiplyByTen`, которая принимает число и возвращает его увеличенное в 10 раз, если оно кратно трем.

Иначе вернуть число без изменений.

Примеры запуска:
```javascript
multiplyByTen(3); // 30
multiplyByTen(10); // 10
multiplyByTen(0); // 0
multiplyByTen(-3); // -30
multiplyByTen(-10); // -10
multiplyByTen(-15); // -150
```

Для сравнения с нулем используйте оператор `===` (строгое равенство).
```javascript
const num = 0;
console.log(num === 0); // true
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function multiplyByTen(num) {
  return num % 3 === 0 ? num * 10 : num;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function multiplyByTen', () => {
  expect(multiplyByTen).to.be.a('function');
});

it('multiplyByTen(3) should return 30', () => {
  expect(multiplyByTen(3)).to.equal(30);
});

it('multiplyByTen(10) should return 10', () => {
  expect(multiplyByTen(10)).to.equal(10);
});

it('multiplyByTen(0) should return 0', () => {
  expect(multiplyByTen(0)).to.equal(0);
});

it('multiplyByTen(-3) should return -30', () => {
  expect(multiplyByTen(-3)).to.equal(-30);
});

it('multiplyByTen(-10) should return -10', () => {
  expect(multiplyByTen(-10)).to.equal(-10);
});

it('multiplyByTen(-15) should return -150', () => {
  expect(multiplyByTen(-15)).to.equal(-150);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
