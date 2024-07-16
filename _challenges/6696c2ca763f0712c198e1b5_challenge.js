// NAMEEN:
// NAMERU:Категоризируйте товары по цене

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `productCategory`, которая принимает цену товара и возвращает категорию товара.

Если цена товара меньше 100, то возвращаем `cheap`, если от 100 до 200, то `normal`, если от 200 до 300, то `expensive`, если от 300, то `luxury`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function productCategory(price) {
  if (price < 100) {
    return 'cheap';
  } else if (price < 200) {
    return 'normal';
  } else if (price < 300) {
    return 'expensive';
  } else {
    return 'luxury';
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function productCategory', () => {
  expect(productCategory).to.be.a('function');
});

it('productCategory(99) returns cheap', () => {
  expect(productCategory(99)).to.equal('cheap');
});

it('productCategory(100) returns normal', () => {
  expect(productCategory(100)).to.equal('normal');
});

it('productCategory(200) returns expensive', () => {
  expect(productCategory(200)).to.equal('expensive');
});

it('productCategory(300) returns luxury', () => {
  expect(productCategory(300)).to.equal('luxury');
});

it('productCategory(400) returns luxury', () => {
  expect(productCategory(400)).to.equal('luxury');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
