// NAMEEN:
// NAMERU:Самая короткая строка из трех

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `shortestString`, которая принимает три строки и возвращает самую короткую из них.

При равенстве длин возвращается первая строка.

Примеры запуска функции:
```javascript
shortestString('aaa', 'aa', 'a'); // 'a'
shortestString('aaa', 'bbbb', 'c'); // 'c'
shortestString('aaa', 'qqq', 'zzz'); // 'aaa'
```

Для решения вам понадобится сравнить длину каждой строки с длиной других двух.

Используйте операторы сравнения и логические операторы.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function shortestString(str1, str2, str3) {
  if (str1.length <= str2.length && str1.length <= str3.length) {
    return str1;
  } else if (str2.length <= str1.length && str2.length <= str3.length) {
    return str2;
  }
  return str3;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function shortestString', () => {
  expect(shortestString).to.be.a('function');
});

it('shortestString("aaa", "aa", "a") should return "a"', () => {
  expect(shortestString('aaa', 'aa', 'a')).to.equal('a');
});

it('shortestString("aaa", "bbbb", "c") should return "c"', () => {
  expect(shortestString('aaa', 'bbbb', 'c')).to.equal('c');
});

it('shortestString("aaa", "qqq", "zzz") should return "aaa"', () => {
  expect(shortestString('aaa', 'qqq', 'zzz')).to.equal('aaa');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
