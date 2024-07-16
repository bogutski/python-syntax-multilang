// NAMEEN:
// NAMERU:Функция возвращает противоположное значение

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Попробуйте написать
```javascript
console.log(!true); // false
console.log(!false); // true
```

Восклицательный знак `!` перед любым значением преобразует его в `boolean` и возвращает противоположное значение.

Напишите функцию `opposite`, которая принимает одно значение и возвращает противоположное ему. Иcпользуйте `!`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function opposite(value) {
  return !value;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function opposite', () => {
  expect(opposite).to.be.a('function');
} );

it('opposite(true) should return false', () => {
  expect(opposite(true)).to.equal(false);
} );

it('opposite(false) should return true', () => {
  expect(opposite(false)).to.equal(true);
} );

it('opposite(0) should return true', () => {
  expect(opposite(0)).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
