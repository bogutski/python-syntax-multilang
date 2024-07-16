// NAMEEN:
// NAMERU:Результат деления двух чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `div`, которая принимает 2 параметра и возвращает результат деления первого параметра на второй.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun (){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function div(a, b) {
  return a / b;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function ', () => {
  expect(div).to.be.a('function');
});

it('Function returns correct result for arguments `-100, 10', () => {
  expect(div(-100, 10)).eq(-10);
});

it('Function returns correct result for arguments `88, 4`', () => {
  expect(div(88, 4)).eq(22);
});

it('Function returns correct result for arguments `-21, -7`', () => {
  expect(div(-21, -7)).eq(3);
});

it('The function returns the correct result for arguments `20, -5`', () => {
  expect(div(20, -5)).eq(-4);
});

it('The function returns a valid result for arguments `10, 20`', () => {
  expect(div(10, 20)).eq(0.5);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
