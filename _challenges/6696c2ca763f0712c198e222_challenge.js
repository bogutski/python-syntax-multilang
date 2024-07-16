// NAMEEN:
// NAMERU:Является ли число квадратом целого числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `isSquare` принимает число `n` в качестве параметра и возвращает `true`, если число является квадратом целого числа, и `false` в противном случае.

Для определения является ли число квадратом целого числа, необходимо вычислить квадратный корень из числа и проверить является ли результат целым числом.

Если остаток от деления числа на 1 равен 0, то число целое, иначе нет.

```javascript
console.log(5 % 1); // 0
console.log(5.5 % 1); // 0.5
```

Примеры:
- функция `isSquare(4)` должна возвратить `true`, так как 4 является квадратом числа 2;
- функция `isSquare(25)` должна возвратить `true`, так как 25 является квадратом числа 5;
- функция `isSquare(26)` должна возвратить `false`, так как 26 не является квадратом целого числа.

Алгоритм решения:
1. Вычислить квадратный корень из числа `n` и сохранить результат в переменную `root`;

```javascript
const root = n ** 0.5;
```

2. Вычислить остаток от деления `root` на 1 и сохранить результат в переменную `remainder`;
```javascript
const remainder = root % 1;
```

3. Если `remainder` равен 0, то вернуть `true`, иначе вернуть `false`;
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isSquare(n) {
  const root = n ** 0.5;
  const remainder = root % 1;
  return remainder === 0;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isSquare', () => {
  expect(isSquare).to.be.a('function');
});

it('isSquare(4) should return true', () => {
  expect(isSquare(4)).to.be.true;
});

it('isSquare(25) should return true', () => {
  expect(isSquare(25)).to.be.true;
});

it('isSquare(26) should return false', () => {
  expect(isSquare(26)).to.be.false;
});

it('isSquare(0) should return true', () => {
  expect(isSquare(0)).to.be.true;
});

it('isSquare(1) should return true', () => {
  expect(isSquare(1)).to.be.true;
});

it('isSquare(2) should return false', () => {
  expect(isSquare(2)).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
