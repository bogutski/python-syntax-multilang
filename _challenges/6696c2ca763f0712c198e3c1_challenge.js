// NAMEEN:
// NAMERU:На сколько процентов одна строка длиннее другой

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `stringLonger`, которая принимает две строки и возвращает процентное соотношение, на сколько наибольшая строка длиннее наименьшей.

Примеры запуска функции:
```javascript
stringLonger('a', 'aa'); // '100%'
stringLonger('aa', 'b'); // '100%'
stringLonger('a', 'b'); // '0%'
stringLonger('a', 'aaa'); // '200%'
stringLonger('aaaaaa', 'aa'); // '200%'
stringLonger('aa', 'aaaaaa'); // '200%'
stringLonger('aa', 'aa'); // '0%'
```

Для решения этой задачи найдите сначала длины наибольшей и наименьшей строки, а затем найдите процентное соотношение, на сколько наибольшая строка длиннее наименьшей.

Разделите длину наибольшей строки на длину наименьшей и умножьте на 100 и отнимите 100.

Обратите внимание, что возвращаемое значение должно быть строкой и заканчиваться на `%`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stringLonger(str1, str2) {
  const longer = str1.length >= str2.length ? str1.length : str2.length;
  const shorter = str1.length < str2.length ? str1.length : str2.length;

  return (longer / shorter) * 100 - 100 + '%'
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function stringLonger', () => {
  expect(stringLonger).to.be.a('function');
});

it('stringLonger("a", "aa") should return "100%"', () => {
  expect(stringLonger('a', 'aa')).to.equal('100%');
});

it('stringLonger("aa", "b") should return "100%"', () => {
  expect(stringLonger('aa', 'b')).to.equal('100%');
});

it('stringLonger("a", "b") should return "0%"', () => {
  expect(stringLonger('a', 'b')).to.equal('0%');
});

it('stringLonger("a", "aaa") should return "200%"', () => {
  expect(stringLonger('a', 'aaa')).to.equal('200%');
});

it('stringLonger("aaaaaa", "aa") should return "200%"', () => {
  expect(stringLonger('aaaaaa', 'aa')).to.equal('200%');
});

it('stringLonger("aa", "aaaaaa") should return "200%"', () => {
  expect(stringLonger('aa', 'aaaaaa')).to.equal('200%');
});

it('stringLonger("aa", "aa") should return "0%"', () => {
  expect(stringLonger('aa', 'aa')).to.equal('0%');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
