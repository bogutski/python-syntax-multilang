// NAMEEN:
// NAMERU:Отсортировать 2 строки по длине

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sortStringsByLength`, которая принимает две строки и возвращает строку, где первая строка будет короче, а вторая длиннее.

Примеры запуска функции:
```javascript
sortStringsByLength('aaa', 'aa'); // 'aa, aaa'
sortStringsByLength('aa', 'aaa'); // 'aa, aaa'

sortStringsByLength('aaa', ''); // ', aaa'
sortStringsByLength('', 'aaa'); // ', aaa'

sortStringsByLength('aaa', 'bbb'); // 'aaa, bbb'
sortStringsByLength('bbb', 'aaa'); // 'bbb, aaa'
```

Если строки одинаковой длины, то возвращаем их в том порядке, в котором они были переданы в функцию.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortStringsByLength(str1, str2) {
  if (str1.length <= str2.length) {
    return `${str1}, ${str2}`;
  }
  return `${str2}, ${str1}`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sortStringsByLength', () => {
  expect(sortStringsByLength).to.be.a('function');
});

it('sortStringsByLength("aaa", "aa") should return "aa, aaa"', () => {
  expect(sortStringsByLength('aaa', 'aa')).to.equal('aa, aaa');
});

it('sortStringsByLength("aaa", "bbbbb") should return "aaa, bbbbb"', () => {
  expect(sortStringsByLength('aaa', 'bbbbb')).to.equal('aaa, bbbbb');
});

it('sortStringsByLength("", "qqq") should return ", qqq"', () => {
  expect(sortStringsByLength('', 'qqq')).to.equal(', qqq');
});

it('sortStringsByLength("qqq", "") should return ", qqq"', () => {
  expect(sortStringsByLength('qqq', '')).to.equal(', qqq');
});

it('sortStringsByLength("aaa", "bbb") should return "aaa, bbb"', () => {
  expect(sortStringsByLength('aaa', 'bbb')).to.equal('aaa, bbb');
});

it('sortStringsByLength("bbb", "aaa") should return "bbb, aaa"', () => {
  expect(sortStringsByLength('bbb', 'aaa')).to.equal('bbb, aaa');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
