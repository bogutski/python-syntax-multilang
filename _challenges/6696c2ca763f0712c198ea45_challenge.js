// NAMEEN:
// NAMERU:Массив степеней двойки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `powerOfTwo` принимает число `num` и возвращает массив, содержащий степени двойки от `2^num` до `2^0`.

Если `num` меньше `0`, функция должна вернуть пустой массив.

Пример запуска функции:
```javascript
powerOfTwo(2) // [4, 2, 1]
powerOfTwo(-1) // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function powerOfTwo(num) {
  let arr = [];
  for (let i = num; i >= 0; i--) {
    arr.push(2 ** i);
  }
  return arr
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function powerOfTwo', () => {
  expect(powerOfTwo).to.be.a('function');
});

it('powerOfTwo(0) should return [1]', () => {
  expect(powerOfTwo(0)).to.eql([1]);
});

it('powerOfTwo(2) should return [4, 2, 1]', () => {
  expect(powerOfTwo(2)).to.eql([4, 2, 1]);
});

it('powerOfTwo(3) should return [8, 4, 2, 1]', () => {
  expect(powerOfTwo(3)).to.eql([8, 4, 2, 1]);
});

it('powerOfTwo(4) should return [16, 8, 4, 2, 1]', () => {
  expect(powerOfTwo(4)).to.eql([16, 8, 4, 2, 1]);
});

it('powerOfTwo(-1) should return []', () => {
  expect(powerOfTwo(-1)).to.eql([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
