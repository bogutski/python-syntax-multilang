// NAMEEN:
// NAMERU:Копирование массива с помощью метода slice()

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `shallowCopy`, которая принимает массив и возвращает его копию с помощью метода `slice`.

В функцию будет передан массив, в котором только примитивные значения.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function shallowCopy(array) {
  return array.slice();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function shallowCopy', () => {
  expect(shallowCopy).to.be.a('function');
});

it('shallowCopy([1, 2, 3, 4, 5]) should return [1, 2, 3, 4, 5]', () => {
  expect(shallowCopy([1, 2, 3, 4, 5])).to.deep.equal([1, 2, 3, 4, 5]);
});

it('shallowCopy([55, true, "hello"]) should return [55, true, "hello"]', () => {
  expect(shallowCopy([55, true, "hello"])).to.deep.equal([55, true, "hello"]);
});

it('shallowCopy(["a", "b", "c"]) should have slice method', () => {
  expect(shallowCopy.toString()).to.contain('slice');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
