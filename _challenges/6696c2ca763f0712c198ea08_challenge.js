// NAMEEN:
// NAMERU:Что больше, n1 или n2?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `addToArray`, которая принимает два числа `n1` и `n2` и возвращает массив.

Если `n1` меньше `n2`, то функция должна вернуть массив, в котором будут числа от `n1` до `n2` включительно.

Если `n1` больше `n2`, то функция должна вернуть массив, в котором будут числа от `n2` до `n1` включительно.

Равные числа `n1` и `n2` в функцию передаваться не будут.

Примеры запуска функции:
```javascript
addToArray(0, 5) // [0, 1, 2, 3, 4, 5]
addToArray(7, 2) // [2, 3, 4, 5, 6, 7]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addToArray(n1, n2) {
  const arr = [];
  let start = n1;
  let end = n2;
  if (n1 > n2){
    start = n2;
    end = n1;
  }
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function addToArray', () => {
  expect(addToArray).to.be.a('function');
});

it('addToArray(0, 5) should return [0, 1, 2, 3, 4, 5]', () => {
  expect(addToArray(0, 5)).to.eql([0, 1, 2, 3, 4, 5]);
});

it('addToArray(-15, 5) should return [-15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]', () => {
  expect(addToArray(-15, 5)).to.eql([-15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]);
});

it('addToArray(155, 160) should return [155, 156, 157, 158, 159, 160]', () => {
  expect(addToArray(155, 160)).to.eql([155, 156, 157, 158, 159, 160]);
});

it('addToArray(125, 120) should return [120, 121, 122, 123, 124, 125]', () => {
  expect(addToArray(125, 120)).to.eql([120, 121, 122, 123, 124, 125]);
});

it('addToArray(7, 2) should return [2, 3, 4, 5, 6, 7]', () => {
  expect(addToArray(7, 2)).to.eql([2, 3, 4, 5, 6, 7]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
