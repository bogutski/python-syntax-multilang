// NAMEEN:
// NAMERU:Сумма трех чисел с параметрами по умолчанию

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте и дополните код, чтобы функция `sum` принимала три числа и возвращала их сумму.

Если какое-то из чисел не указано, то оно считается равным нулю.

Примеры:
```
sum(1, 2, 3) вернет 6
sum(1, 2) вернет 3
sum(1) вернет 1
sum() вернет 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum(a, a, a){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sum(n1 = 0 , n2 = 0, n3 = 0) {
  return n1 + n2 + n3;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sum', () => {
  expect(sum).to.be.a('function');
});

it('Function returns correct result for arguments `1, 1, 1', () => {
  expect(sum(1, 1, 1)).eq(3);
});

it('Function returns correct result for arguments `1, 1`', () => {
  expect(sum(1, 1)).eq(2);
});

it('Function returns correct result for arguments `1`', () => {
  expect(sum(1)).eq(1);
});

it('The function returns the correct result without arguments', () => {
  expect(sum()).eq(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
