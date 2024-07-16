// NAMEEN:
// NAMERU:Определим, что число четное или нечетное. Версия 2

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Обратите внимание на несколько примеров:

```javascript
console.log(2 % 2 === 0); // true
console.log(3 % 2 === 0); // false
console.log(4 % 2 === 0); // true
console.log(5 % 2 === 0); // false
console.log(6 % 2 === 0); // true
console.log(7 % 2 === 0); // false
```

Видите чередование true и false? Это значит, что если число делится на 2 без остатка, то оно четное, иначе нечетное.


Если сделать так:

```javascript
console.log(!(2 % 2 === 0)); // false
console.log(!(3 % 2 === 0)); // true
console.log(!(4 % 2 === 0)); // false
console.log(!(5 % 2 === 0)); // true
console.log(!(6 % 2 === 0)); // false
console.log(!(7 % 2 === 0)); // true
```

Мы получим ровно то же самое, но каждое сравнение будет обратным. Таким образом, мы можем использовать `!` для того, чтобы получить ровно то же самое, но с обратным результатом.

Напишите функцию `isNotEven`, которая принимает число и возвращает `false`, если число четное, и `true` если нечетное.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isNotEven(num) {
  return !(num % 2 === 0)
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isNotEven', () => {
  expect(isNotEven).to.be.a('function');
});

it('isNotEven(1) should return true', () => {
  expect(isNotEven(1)).to.equal(true);
});

it('isNotEven(2) should return false', () => {
  expect(isNotEven(2)).to.equal(false);
});

it('isNotEven(3) should return true', () => {
  expect(isNotEven(3)).to.equal(true);
});

it('isNotEven(4) should return false', () => {
  expect(isNotEven(4)).to.equal(false);
});

it('isNotEven(5) should return true', () => {
  expect(isNotEven(5)).to.equal(true);
});

it('isNotEven(-6) should return false', () => {
  expect(isNotEven(-6)).to.equal(false);
});

it('isNotEven(-7) should return true', () => {
  expect(isNotEven(-7)).to.equal(true);
});

it('isNotEven(-11) should return true', () => {
  expect(isNotEven(-11)).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
