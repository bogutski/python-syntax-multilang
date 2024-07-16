// NAMEEN:
// NAMERU:Модифицируйте функцию деления c параметрами по умолчанию

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Модифицируйте функцию `div` так, чтобы она возвращала результат деления двух чисел, переданных в качестве аргументов, даже если второй аргумент не передан.

Примеры:
```javascript
div(10, 2) // 5
div(10) // 10
div() // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function div(num1, num2){
    retun num / num2;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function div(num1 = 0, num2 = 1) {
  return num1 / num2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function div', () => {
  expect(div).to.be.a('function');
});

it('Function returns correct result for arguments `-10, 10`', () => {
  expect(div(-10, 10)).eq(-1);
});

it('Function returns correct result for arguments `5, 8`', () => {
  expect(div(5, 8)).eq(0.625);
});

it('Function returns correct result for arguments `-20, -2`', () => {
  expect(div(-20, -2)).eq(10);
});

it('The function returns the correct result for arguments `20, 5`', () => {
  expect(div(20, 5)).eq(4);
});

it('The function returns a valid result for arguments `120, 30`', () => {
  expect(div(120, 30)).eq(4);
});

it('The function returns the correct result for argument `-9`', () => {
  expect(div(-9)).eq(-9);
});

it('The function returns the correct result for argument `3`', () => {
  expect(div(3)).eq(3);
});

it('The function returns the correct result for argument `34`', () => {
  expect(div(34)).eq(34);
});

it('The function returns the correct result for argument `-78`', () => {
  expect(div(-78)).eq(-78);
});

it('The function returns the correct result without arguments', () => {
  expect(div()).eq(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
