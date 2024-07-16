// NAMEEN:
// NAMERU:Возведите число в указанную степень

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `power`, которая принимает 2 параметра.

Первый параметр - число, которое нужно возвести в степень.

Второй параметр - степень, в которую нужно возвести число.

Функция должна возвращать число, возведенное в указанную степень.

Примеры:
 ```javascript
power(2, 3) // 8
power(3, 2) // 9
power(3, 3) // 27
power(2, 10) // 1024
power(10, 2) // 100
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function power(n, m) {
  return n ** m;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function power', () => {
  expect(power).to.be.a('function');
});

it('Function returns correct result for arguments `2, 3`', () => {
  expect(power(2, 3)).to.equal(8);
});

it('Function returns correct result for arguments `3, 2`', () => {
  expect(power(3, 2)).to.equal(9);
});

it('Function returns correct result for arguments `3, 3`', () => {
  expect(power(3, 3)).to.equal(27);
});

it('Function returns correct result for arguments `2, 10`', () => {
  expect(power(2, 10)).to.equal(1024);
});

it('Function returns correct result for arguments `10, 2`', () => {
  expect(power(10, 2)).to.equal(100);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
