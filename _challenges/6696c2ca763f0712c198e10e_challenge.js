// NAMEEN:
// NAMERU:Рассчитать объем цилиндра

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `PI`, которая возвращает число 3.14.

Создайте функцию `powerOfTwo`, которая принимает число и возвращает квадрат этого числа.

Создайте функцию `cylinderVolume`, которая принимает два числа: радиус и высоту цилиндра.

Функция должна возвращать объем цилиндра, рассчитанный по формуле: `PI() * powerOfTwo(r) * h`, где

`PI()` - функция, которая возвращает число 3.14,
`powerOfTwo(r)` - функция, которая возвращает квадрат числа `r`,
`h` - высота цилиндра.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function PI() {
  return 3.14;
}

function powerOfTwo(x) {
  return x * x;
}

function cylinderVolume(r, h) {
  return PI() * powerOfTwo(r) * h;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function PI', () => {
  expect(PI).to.be.a('function');
});

it('Created function powerOfTwo', () => {
  expect(powerOfTwo).to.be.a('function');
});

it('Created function cylinderVolume', () => {
  expect(cylinderVolume).to.be.a('function');
});

it('Function PI returns correct result', () => {
  expect(PI()).eq(3.14);
});

it('Function powerOfTwo returns correct result for argument `2`', () => {
  expect(powerOfTwo(2)).eq(4);
});

it('Function powerOfTwo returns correct result for argument `3`', () => {
  expect(powerOfTwo(3)).eq(9);
});

it('Function cylinderVolume returns correct result for arguments `2, 3`', () => {
  expect(cylinderVolume(2, 3)).eq(37.68);
});

it('Function cylinderVolume returns correct result for arguments `3, 4`', () => {
  expect(cylinderVolume(3, 4)).eq(113.04);
});

it('Function cylinderVolume returns correct result for arguments `5, 6`', () => {
  expect(cylinderVolume(5, 6)).eq(471);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
