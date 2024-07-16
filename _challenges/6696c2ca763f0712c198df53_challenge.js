// NAMEEN:
// NAMERU:Функция возвращает адрес сайта PASV

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `getPasvWebsite`, которая возвращает строку с адресом сайта PASV: `https://pasv.us`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun here
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getPasvWebsite() {
  return 'https://pasv.us'
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getPasvWebsite', () => {
  expect(getPasvWebsite).to.be.a('function');
});

it('Function returns correct result', () => {
  expect(getPasvWebsite()).eq('https://pasv.us');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
