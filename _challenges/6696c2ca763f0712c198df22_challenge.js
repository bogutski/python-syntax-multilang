// NAMEEN:
// NAMERU:Исправьте ошибки в функции

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
По заданию должна быть сделана функция `sayHello`.

В теле функции должно быть два вывода в консоль.

В первом `console.log` пусть выводится строка 'Hello'
Во втором `console.log` пусть выводится строка 'JavaScript'

Начинающий программист сделал, но не совсем как было в задании.

Найдите и исправьте ошибки.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function () {
  console.log('Hell0');
  console.log(' java script ');
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sayHello() {
  console.log('Hello');
  console.log('JavaScript');
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sayHello', () => {
  expect(sayHello).to.be.a('function');
});

const entire = sayHello.toString();
const body = entire.slice(entire.indexOf('{') + 1, entire.lastIndexOf('}')).trim();
const strings = body.split('\n');

it('Functions contains console.log for first string', () => {
  expect(body).contains('console.log(\'Hello\')');
});

it('Functions contains console.log for second string', () => {
  expect(body).contains('console.log(\'JavaScript\')');
});

// order of console.log is important
it('Functions contains console.log in correct order', () => {
  const indexOfFirst = body.indexOf('console.log(\'Hello\')');
  const indexOfSecond = body.indexOf('console.log(\'JavaScript\')');
  const arrCurrentOrder = [indexOfFirst, indexOfSecond];
  const arrCorrectOrder = [...arrCurrentOrder].sort((a, b) => a - b);
  expect(arrCorrectOrder).eql(arrCurrentOrder);
});

it('Function contains 2 console logs', () => {
  const occurrences = body.split('console.log').length - 1;
  expect(occurrences).eq(2);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
