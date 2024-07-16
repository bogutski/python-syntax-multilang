// NAMEEN:
// NAMERU:Исправьте ошибки в функции с return

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Программист писал программу.
Отвлекся на пару минут, чтобы заварить чай.
Кот запрыгнул на клавиатуру и прошелся по кнопкам.

Теперь нам надо все исправить.

Требования:

* Название функции `businessHours`
* Функция должна возвращать строку `8.00 - 11.30`
* В теле функции не должно быть вывода в консоль
* В теле функции должен быть только один `return`

Исправьте ошибки или перепишите всю функцию по требованиям.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
funcion meow }{ (
  console.log('cat was meow');
{
  rerun 'busnesрours!';
  console.log('meow');

// rerun 8,00 - 11.00
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function businessHours() {
  return '8.00 - 11.30';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function ', () => {
  expect(businessHours).to.be.a('function');
});

it('Function returns correct result', () => {
  expect(businessHours()).eq('8.00 - 11.30');
});

const entire = businessHours.toString();
const body = entire.slice(entire.indexOf('{') + 1, entire.lastIndexOf('}')).trim();
const strings = body.split('\n');

it('Functions does not contain console.log', () => {
  expect(body).not.contains('console.log');
});

it('Function contains 1 return', () => {
  const occurrences = body.split('return').length - 1;
  expect(occurrences).eq(1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
