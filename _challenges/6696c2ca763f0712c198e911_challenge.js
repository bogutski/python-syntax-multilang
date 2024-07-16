// NAMEEN:
// NAMERU:Проверка на отрицательные числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isNegative`, которая принимает массив чисел и возвращает:

* `true`, если в массиве есть хотя бы одно отрицательное число,
* `false`, если нет.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isNegative(array){
  for(let i = 0; i < array.length; i++){
   if(array[i] < 0) return true;
  }
  return false;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isNegative', () => {
  expect(isNegative).to.be.a('function');
});

it('isNegative([1,2,3]) should return false', () => {
  expect(isNegative([1,2,3])).to.be.equal(false);
});

it('isNegative([50,-200, 300]) should return true', () => {
  expect(isNegative([50,-200, 300])).to.be.equal(true);
});

it('isNegative([1,2,3,4,5,6,7,8,9,10]) should return false', () => {
  expect(isNegative([1,2,3,4,5,6,7,8,9,10])).to.be.equal(false);
});

it('isNegative([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100]) should return true', () => {
  expect(isNegative([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100])).to.be.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
