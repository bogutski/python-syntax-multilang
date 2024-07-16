// NAMEEN:
// NAMERU:Исправьте ошибку в функции вычисления объема параллелепипеда

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Мы знаем, что объем параллелепипеда вычисляется по формуле `V = a * b * c`, где `a`, `b` и `c` - длины ребер параллелепипеда.

Исправьте ошибку в функции `getVolume`, чтобы она возвращала правильный результат.
Если аргумент в функции не передан, то считаем его равным 1
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
functin volume(l1, n2, n3) {
  return 1l * m2 * n1;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getVolume(num1 = 1, num2 = 1, num3 = 1) {
  return num1 * num2 * num3;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getVolume', () => {
  expect(getVolume).to.be.a('function');
});

it('Function returns correct result for arguments `1, 2, 3`', () => {
  expect(getVolume(1, 2, 3)).to.equal(6);
});

it('Function returns correct result for arguments `0, 0, 0`', () => {
  expect(getVolume(0, 0, 0)).to.equal(0);
});

it('Function returns correct result for arguments `1, 2`', () => {
  expect(getVolume(1, 2)).to.equal(2);
});

it('Function returns correct result for arguments `1`', () => {
  expect(getVolume(1)).to.equal(1);
});

it('Function returns correct result without arguments', () => {
  expect(getVolume()).to.equal(1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
