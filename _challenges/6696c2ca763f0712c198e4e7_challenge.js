// NAMEEN:
// NAMERU:Подстрока повторяется в строке 2 раза

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isContainsTwice`, которая принимает строку и подстроку и возвращает `true`, если подстрока встречается в строке 2 раза.

Не чувствительна к регистру.

Примеры:
```javascript
isContainsTwice('a', 'a'); // false
isContainsTwice('aa', 'A'); // true
isContainsTwice('aAa', 'a'); // true
isContainsTwice('aAa', 'A'); // true

isContainsTwice('aAa', 'aa'); // true
isContainsTwice('aAaA', 'aa'); // true
```
Для решения задачи используйте метод `indexOf`.

Подсказка:

* Найдите подстроку в строке, начиная с позиции `0`, и запишите ее в переменную `firstIndex`.
* Если `firstIndex` равен `-1`, то подстрока не найдена, возвращаем `false`.
* Потом найдите подстроку в строке, начиная с позиции `firstIndex + 1`, и запишите ее в переменную `secondIndex`.
* Если `secondIndex` равен `-1`, то подстрока не найдена, возвращаем `false`, иначе возвращаем `true`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isContainsTwice(text, subtext) {
  const str = text.toLowerCase();
  const sub = subtext.toLowerCase();

  const firstIndex = str.indexOf(sub);
  if (firstIndex === -1) return false;

  const secondIndex = str.indexOf(sub, firstIndex + 1);
  return secondIndex !== -1;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isContainsTwice', () => {
  expect(isContainsTwice).to.be.a('function');
});

it('isContainsTwice("t", "t") should return false', () => {
  expect(isContainsTwice('t', 't')).to.be.false;
});

it('isContainsTwice("ww", "W") should return true', () => {
  expect(isContainsTwice('ww', 'W')).to.be.true;
});

it('isContainsTwice("fFf", "F") should return true', () => {
  expect(isContainsTwice('fFf', 'F')).to.be.true;
});

it('isContainsTwice("fFf", "ff") should return true', () => {
  expect(isContainsTwice('fFf', 'ff')).to.be.true;
});

it('isContainsTwice("oOoO", "oo") should return true', () => {
  expect(isContainsTwice('oOoO', 'oo')).to.be.true;
});

it('isContainsTwice("SsSs", "SS") should return true', () => {
  expect(isContainsTwice('SsSs', 'SS')).to.be.true;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
