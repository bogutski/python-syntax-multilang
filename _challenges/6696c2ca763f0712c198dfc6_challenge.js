// NAMEEN:
// NAMERU:День недели и дата

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `getDayOfWeek`, которая принимает 2 параметра: день недели `day` и дату `date` в виде строки, например `'01.01.2018'`.

Функция должна вернуть строку вида `'Today is Monday, 01.01.2018'`.

Задайте параметрам значения по умолчанию в виде пустой строки.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function () {
  return
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getDayOfWeek(day = '', date = '') {
  return 'Today is ' + day + ', ' + date;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getDayOfWeek', () => {
  expect(getDayOfWeek).to.be.a('function');
});

it('Function returns correct result for arguments `Monday, 01.01.2018`', () => {
  expect(getDayOfWeek('Monday', '01.01.2018')).eq('Today is Monday, 01.01.2018');
});

it('Function returns correct result for arguments `Sunday, 31.12.2017`', () => {
  expect(getDayOfWeek('Sunday', '31.12.2017')).eq('Today is Sunday, 31.12.2017');
});

it('Function returns correct result for arguments `Friday, 13.10.2017`', () => {
  expect(getDayOfWeek('Friday', '13.10.2017')).eq('Today is Friday, 13.10.2017');
});

it('Function returns correct result for arguments `Wednesday, 31.10.2017`', () => {
  expect(getDayOfWeek('Wednesday', '31.10.2017')).eq('Today is Wednesday, 31.10.2017');
});

it('Function returns correct result for arguments `Tuesday, 15.11.2022`', () => {
  expect(getDayOfWeek('Tuesday', '15.11.2022')).eq('Today is Tuesday, 15.11.2022');
});

it('Function returns correct result for arguments `Saturday, 19.02.2022`', () => {
  expect(getDayOfWeek('Saturday', '19.02.2022')).eq('Today is Saturday, 19.02.2022');
});

it('Function returns correct result if no arguments are passed', () => {
  expect(getDayOfWeek()).eq('Today is , ');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
