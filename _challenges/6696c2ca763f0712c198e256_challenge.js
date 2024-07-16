// NAMEEN:
// NAMERU:Верно ли, что числа идут по возрастанию?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isSequence`, которая принимает 5 чисел и возвращает true, если они идут по возрастанию. В противном случае возвращает false.

Эту задачу можно решить с помощью `if`, но для тренировки попробуйте решить ее с помощью `&&`.

Примеры запуска:
```javascript
isSequence(1, 2, 3, 4, 5); // true
isSequence(1, 2, 3, 4, 4); // false
isSequence(1, 2, 3, 4, 3); // false
isSequence(10, 40, 300, 1000, 1001); // true
```

Похожий пример:
```javascript
function isSequence(n1, n2, n3)
  if (n1 < n2 && n2 < n3) {
    return true;
  }
  return false;
}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isSequence(n1, n2, n3, n4, n5) {
  if (n1 < n2 && n2 < n3 && n3 < n4 && n4 < n5) {
    return true;
  }
  return false;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isSequence', () => {
  expect(isSequence).to.be.a('function');
});

it('isSequence(1, 2, 3, 4, 5) should return true', () => {
  expect(isSequence(1, 2, 3, 4, 5)).to.be.equal(true);
});

it('isSequence(1, 2, 3, 4, 4) should return false', () => {
  expect(isSequence(1, 2, 3, 4, 4)).to.be.equal(false);
});

it('isSequence(1, 2, 3, 4, 3) should return false', () => {
  expect(isSequence(1, 2, 3, 4, 3)).to.be.equal(false);
});

it('isSequence(10, 40, 300, 1000, 1001) should return true', () => {
  expect(isSequence(10, 40, 300, 1000, 1001)).to.be.equal(true);
});

it('isSequence(10, 40, 300, 1000, 1000) should return false', () => {
  expect(isSequence(10, 40, 300, 1000, 1000)).to.be.equal(false);
});

it('isSequence(10, 40, 300, 1000, 999) should return false', () => {
  expect(isSequence(10, 40, 300, 1000, 999)).to.be.equal(false);
});

it('isSequence(10, 40, 300, 1000, 1002) should return true', () => {
  expect(isSequence(10, 40, 300, 1000, 1002)).to.be.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
