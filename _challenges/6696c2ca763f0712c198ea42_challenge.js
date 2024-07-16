// NAMEEN:
// NAMERU:Массив в порядке возрастания или убывания

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `makeOrder` принимает два числа `n1` и `n2`.

Функция должна вернуть массив, который содержит все числа от `n1` до `n2` включительно.

Если `n1` меньше `n2`, то функция должна вернуть массив чисел в порядке возрастания.

Если `n1` больше `n2`, то функция должна вернуть массив чисел в порядке убывания.

Примеры запуска функции:
```javascript
makeOrder(1, 5) // [1, 2, 3, 4, 5]
makeOrder(5, 1) // [5, 4, 3, 2, 1]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function makeOrder(n1, n2) {
  let arr = []
  if (n1 <= n2) {
    for (let i = n1; i <= n2; i++) {
      arr.push(i)
    }
  } else if (n1 > n2) {
    for (let i = n1; i >= n2; i--) {
      arr.push(i)
    }
  }
  return arr
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function makeOrder', () => {
  expect(makeOrder).to.be.a('function');
});

it('makeOrder(1, 5) should return [1, 2, 3, 4, 5]', () => {
  expect(makeOrder(1, 5)).to.eql([1, 2, 3, 4, 5]);
});

it('makeOrder(5, 1) should return [5, 4, 3, 2, 1]', () => {
  expect(makeOrder(5, 1)).to.eql([5, 4, 3, 2, 1]);
});

it('makeOrder(1, 1) should return [1]', () => {
  expect(makeOrder(1, 1)).to.eql([1]);
});

it('makeOrder(5, 4) should return [5, 4]', () => {
  expect(makeOrder(5, 4)).to.eql([5, 4]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
