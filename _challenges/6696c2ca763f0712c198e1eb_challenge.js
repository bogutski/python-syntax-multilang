// NAMEEN:
// NAMERU:Меньше 10 подарков не принимаем

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
На день рождения очень капризного малыша каждый гость должен принести не менее 10 подарков.

Напишите функцию `isEnough`, которая принимает количество подарков от гостя, и возвращает `true`, если подарков достаточно, и `false`, если подарков недостаточно.

Кстати тут не обязательно использовать `if`, можно обойтись без него.

Пример с `if`:
```javascript
function isMoreThanFive(num) {
  if (num > 5) {
    return true;
  } else {
    return false;
  }
}

Результат сравнения `num > 5` будет `true` или `false`, поэтому можно сразу вернуть его:
```javascript
function isMoreThanFive(num) {
  return num > 5;
}
```

Используйте этот принцип в функции `isEnough`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isEnough(num) {
  return num >= 10;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isEnough', () => {
  expect(isEnough).to.be.a('function');
});

it('isEnough(10) should return true', () => {
  expect(isEnough(10)).to.equal(true);
});

it('isEnough(9) should return false', () => {
  expect(isEnough(9)).to.equal(false);
});

it('isEnough(0) should return false', () => {
  expect(isEnough(0)).to.equal(false);
});

it('isEnough(-1) should return false', () => {
  expect(isEnough(-1)).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
