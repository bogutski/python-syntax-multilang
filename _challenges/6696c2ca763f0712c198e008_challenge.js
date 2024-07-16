// NAMEEN:
// NAMERU:Переменные и функции. Объем шара

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Объем шара можно вычислить по формуле: `V = 4/3 * π * r^3`, где `r` - радиус шара.

`r^3` – это r в кубе.

Напишите функцию `sphereVolume`, которая принимает один параметр `radius` и возвращает объем шара с радиусом `radius`.

Переменную `PI` объявите внутри функции `sphereVolume` и присвойте ей значение `3.14`.

Для возведения в куб используйте оператор `**`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun sphere!
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sphereVolume(radius) {
  const PI = 3.14;
  return 4/3 * PI * radius ** 3;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sphereVolume', () => {
  expect(sphereVolume).to.be.a('function');
});

it('Function sphereVolume has one parameter diameter', () => {
  // function to string and then to array of arguments
  const args = sphereVolume.toString().match(/\(([^)]*)\)/)[1].split(',').map(arg => arg.trim());
  expect(args).to.be.eql(['radius']);
});

it('Function sphereVolume returns volume of sphere for radius 10', () => {
  expect(sphereVolume(10)).to.be.equal(4186.666666666667);
} );

it('Function sphereVolume returns volume of sphere for radius 20', () => {
  expect(sphereVolume(20)).to.be.equal(33493.333333333336);
} );

it('Function sphereVolume returns volume of sphere for radius 30', () => {
  expect(sphereVolume(30)).to.be.equal(113040);
} );

it('Variable PI is declared inside function sphereVolume', () => {
  expect(sphereVolume.toString().includes('const PI')).to.be.equal(true);
} );
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
