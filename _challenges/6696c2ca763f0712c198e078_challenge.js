// NAMEEN:
// NAMERU:Мой любимый город

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `myFavoriteCity`, которая принимает один параметр `city` и возвращает строку `I love San Francisco!`.

Вместо `San Francisco` должно быть значение параметра `city`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function myFavoriteCity(city) {
  return 'I love ' + city + '!';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function myFavoriteCity', () => {
  expect(myFavoriteCity).to.be.a('function');
});

it('Function returns I love San Francisco!', () => {
  expect(myFavoriteCity('San Francisco')).to.equal('I love San Francisco!');
});

it('Function returns I love New York!', () => {
  expect(myFavoriteCity('New York')).to.equal('I love New York!');
});

it('Function returns I love Paris!', () => {
  expect(myFavoriteCity('Paris')).to.equal('I love Paris!');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
