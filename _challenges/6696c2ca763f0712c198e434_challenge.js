// NAMEEN:
// NAMERU:Строка из 5-ти символов. Считаем вхождение определенной буквы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `letterCount`, которая принимает 2 параметра:
* `str` - строка. Всегда будет состоять из 5-ти букв
* `letter` - искомая буква

Функция должна возвращать количество вхождений буквы `letter` в строку `str` без учета регистра.

Если второй аргумент не передан, то функция должна возвращать строку `Wrong letter`.

Примеры запуска функции:
```javascript
letterCount('Hello', 'l') // 2
letterCount('Hello', 'L') // 2
letterCount('HeLlo', 'l') // 2
letterCount('HeLlo', 'L') // 2
letterCount('Hello', 'h') // 1
letterCount('Hello', 'H') // 1
letterCount('Hello', 'e') // 1
letterCount('Hello', 'E') // 1
letterCount('Hello', 'b') // 0
```

Похожий пример:
```javascript
function isLetter(str) {
  const l = 'a'
  if (!str) {
    return 'Wrong string';
  }
  return str.toLowerCase() === l.toLowerCase();
}
```

Приведите все к одному регистру и сравнивайте.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function letterCount(str, letter) {
  if (letter === undefined) {
    return 'Wrong letter';
  }

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === letter.toLowerCase()) {
      count++;
    }
  }
  return count;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function letterCount', () => {
  expect(letterCount).to.be.a('function');
});

it('letterCount("Hello", "l") should return 2', () => {
  expect(letterCount('Hello', 'l')).to.equal(2);
});

it('letterCount("Hello", "L") should return 2', () => {
  expect(letterCount('Hello', 'L')).to.equal(2);
});

it('letterCount("HeLlo", "l") should return 2', () => {
  expect(letterCount('HeLlo', 'l')).to.equal(2);
});

it('letterCount("HeLlo", "L") should return 2', () => {
  expect(letterCount('HeLlo', 'L')).to.equal(2);
});

it('letterCount("Hello", "h") should return 1', () => {
  expect(letterCount('Hello', 'h')).to.equal(1);
});

it('letterCount("Hello", "H") should return 1', () => {
  expect(letterCount('Hello', 'H')).to.equal(1);
});

it('letterCount("Hello", "e") should return 1', () => {
  expect(letterCount('Hello', 'e')).to.equal(1);
});

it('letterCount("Hello", "E") should return 1', () => {
  expect(letterCount('Hello', 'E')).to.equal(1);
});

it('letterCount("Hello", "o") should return 1', () => {
  expect(letterCount('Hello', 'o')).to.equal(1);
});

it('letterCount("Hello", "O") should return 1', () => {
  expect(letterCount('Hello', 'O')).to.equal(1);
});

it('letterCount("Hello", "a") should return 0', () => {
  expect(letterCount('Hello', 'a')).to.equal(0);
});

it('letterCount("Hello", "A") should return 0', () => {
  expect(letterCount('Hello', 'A')).to.equal(0);
});

it('letterCount("Hello", "b") should return 0', () => {
  expect(letterCount('Hello', 'b')).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
