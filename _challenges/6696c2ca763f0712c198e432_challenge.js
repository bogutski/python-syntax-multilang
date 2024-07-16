// NAMEEN:
// NAMERU:Это большая или маленькая буква?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `letterDefiner`, которая принимает одну строку.

Строка содержит всегда только одну букву.

Функция должна возвращать строку `lower`, если переданная буква написана в нижнем регистре, и `upper`, если переданная буква в верхнем регистре.

Примеры запуска функции:
```javascript
letterDefiner('a') // 'lower'
letterDefiner('A') // 'upper'
letterDefiner('z') // 'lower'
letterDefiner('Z') // 'upper'
```

Для определения регистра буквы используйте методы `toLowerCase` и `toUpperCase`.

Похожий пример:
```javascript
function isUpperCase(letter) {
  return letter === letter.toUpperCase();
}
```

Переводите в верхний и нижний регистр и сравнивайте с исходной строкой.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function letterDefiner(letter) {
  if (letter === letter.toLowerCase()) {
    return 'lower';
  } else if (letter === letter.toUpperCase()) {
    return 'upper';
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function letterDefiner', () => {
  expect(letterDefiner).to.be.a('function');
});

it('letterDefiner("a") should return "lower"', () => {
  expect(letterDefiner('a')).to.equal('lower');
});

it('letterDefiner("A") should return "upper"', () => {
  expect(letterDefiner('A')).to.equal('upper');
});

it('letterDefiner("z") should return "lower"', () => {
  expect(letterDefiner('z')).to.equal('lower');
});

it('letterDefiner("Z") should return "upper"', () => {
  expect(letterDefiner('Z')).to.equal('upper');
});

it('letterDefiner("B") should return "upper"', () => {
  expect(letterDefiner('B')).to.equal('upper');
});

it('letterDefiner("b") should return "lower"', () => {
  expect(letterDefiner('b')).to.equal('lower');
});

it('letterDefiner("C") should return "upper"', () => {
  expect(letterDefiner('C')).to.equal('upper');
});

it('letterDefiner("c") should return "lower"', () => {
  expect(letterDefiner('c')).to.equal('lower');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
