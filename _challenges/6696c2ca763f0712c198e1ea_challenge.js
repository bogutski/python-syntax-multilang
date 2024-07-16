// NAMEEN:
// NAMERU:Подобрать пароль

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `isCorrectPassword`, которая принимает строку и возвращает `true`, если строка равна `qwert123`, и `false` в противном случае.

Для сравнения строк используйте оператор тройное равно`===` строгое равенство.

Примеры использования сравнения строк:
```javascript
const str = 'pasv';
console.log(str === 'pasv'); // true
console.log(str === 'pasv '); // false
console.log(str === 'pasv1'); // false
```

Похожая функции:
```javascript
function isLuckyNumber(num) {
  if(num === '777') return true;
  return false;
}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isCorrectPassword(password) {
  if(password === 'qwert123') return true;
  return false;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isCorrectPassword', () => {
  expect(isCorrectPassword).to.be.a('function');
});

it('isCorrectPassword("qwert123") should return true', () => {
  expect(isCorrectPassword('qwert123')).to.equal(true);
} );

it('isCorrectPassword("qwert1234") should return false', () => {
  expect(isCorrectPassword('qwert1234')).to.equal(false);
} );

it('isCorrectPassword("qwert123 ") should return false', () => {
  expect(isCorrectPassword('qwert123 ')).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
