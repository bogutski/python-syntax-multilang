// NAMEEN:
// NAMERU:Вычисляем остаток от деления

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `remainder`, которая принимает два параметра `num1` и `num2` и возвращает строку `The remainder of 10 and 4 is 2.`

На месте `10` и `4` должны быть значения параметров, а на месте `2` – остаток от деления параметров.

Для получения остатка от деления используй оператор `%`.

Пример:
```javascript
console.log(10 % 4); // 2
console.log(10 % 3); // 1
console.log(10 % 2); // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function remainder(num1, num2) {
  return 'The remainder of ' + num1 + ' and ' + num2 + ' is ' + (num1 % num2) + '.';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function remainder', () => {
  expect(remainder).to.be.a('function');
});

it('Function returns correct result for arguments `10, 4`', () => {
  expect(remainder(10, 4)).eq('The remainder of 10 and 4 is 2.');
});

it('Function returns correct result for arguments `10, 3`', () => {
  expect(remainder(10, 3)).eq('The remainder of 10 and 3 is 1.');
});

it('Function returns correct result for arguments `10, 2`', () => {
  expect(remainder(10, 2)).eq('The remainder of 10 and 2 is 0.');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
