// NAMEEN:
// NAMERU:Умножение от 1 до n

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `multiplication`, которая принимает число `n` и возвращает произведение чисел от `1` до `n` включительно.

В цикле `for` используйте шаг итерации `2`.

Пример цикла `for` с шагом итерации `5`:
```javascript
for (let i = 0; i <= 50; i += 5) {
  console.log(i);
}
```

Примеры запуска функции:
```javascript
multiplication(1) // 1
multiplication(5) // 15
multiplication(7) // 105
multiplication(9) // 945
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function multiplication(n) {
  let result = 1;
  for (let i = 1; i <= n; i += 2) {
    result *= i;
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function multiplication', () => {
  expect(multiplication).to.be.a('function');
});

it('multiplication(5) should return 15', () => {
  expect(multiplication(5)).to.equal(15);
});

it('multiplication(9) should return 945', () => {
  expect(multiplication(9)).to.equal(945);
});

it('multiplication(15) should return 2027025', () => {
  expect(multiplication(15)).to.equal(2027025);
});

it('multiplication(25) should return 7905853580625', () => {
  expect(multiplication(25)).to.equal(7905853580625);
});

it('multiplication(1) should return 1', () => {
  expect(multiplication(1)).to.equal(1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
