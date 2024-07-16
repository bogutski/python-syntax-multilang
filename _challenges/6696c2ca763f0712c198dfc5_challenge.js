// NAMEEN:
// NAMERU:Исправьте ошибки в функции getDayOfWeek

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Нужно написать функцию `getDayOfWeek`, которая принимает день недели `day` и возвращает строку вида `'Today is day'`.

Если аргумент не задан, функция должна вернуть строку `'Today is today'`.

Исправьте ошибки в коде.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
Function dayWeek(day - 'Friday') {
  return 'Today is ' + day.
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getDayOfWeek(day = 'today') {
  return 'Today is ' + day;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getDayOfWeek', () => {
  expect(getDayOfWeek).to.be.a('function');
});

it('Function returns correct result for argument `Monday`', () => {
    expect(getDayOfWeek('Monday')).to.equal('Today is Monday');
});

it('Function returns correct result for argument `Tuesday`', () => {
    expect(getDayOfWeek('Tuesday')).to.equal('Today is Tuesday');
});

it('Function returns correct result for argument `Wednesday`', () => {
    expect(getDayOfWeek('Wednesday')).to.equal('Today is Wednesday');
});

it('Function returns correct result for argument `Thursday`', () => {
    expect(getDayOfWeek('Thursday')).to.equal('Today is Thursday');
});

it('Function returns correct result for argument `Friday`', () => {
    expect(getDayOfWeek('Friday')).to.equal('Today is Friday');
});

it('Function returns correct result for argument `Saturday`', () => {
    expect(getDayOfWeek('Saturday')).to.equal('Today is Saturday');
});

it('Function returns correct result for argument `Sunday`', () => {
    expect(getDayOfWeek('Sunday')).to.equal('Today is Sunday');
});

it('Function returns correct result without argument', () => {
    expect(getDayOfWeek()).to.equal('Today is today');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
