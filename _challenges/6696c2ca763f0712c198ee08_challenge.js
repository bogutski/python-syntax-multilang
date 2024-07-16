// NAMEEN:
// NAMERU:Заменить все цифры в строке на заданный символ

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `replaceDigits` принимает строку и символ, и возвращает новую строку, в которой все цифры заменены на заданный символ.
`Цифрами` считаются символы от `0` до `9`. Если в строке нет цифр, то возвращается исходная строка.



Примеры запуска функции:
```javascript
replaceDigits('abc1d3efg', '*'); // 'abc*d*efg'
replaceDigits('The score is 3 to 2', '^'); // 'The score is ^ to ^'
replaceDigits('1234567890', '&'); // '&&&&&&&&&&'
replaceDigits('There are no digits', '*'); // 'There are no digits'
replaceDigits('', '*'); // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function replaceDigits(str, symbol) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      result += symbol;
    } else {
      result += str[i];
    }
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function replaceDigits', () => {
  expect(replaceDigits).to.be.a('function');
});

it('replaceDigits("abc1d3efg", "*") returns "abc*d*efg"', () => {
  expect(replaceDigits('abc1d3efg', '*')).to.equal('abc*d*efg');
});

it('replaceDigits("The score is 3 to 2", "^") returns "The score is ^ to ^"', () => {
  expect(replaceDigits('The score is 3 to 2', '^')).to.equal('The score is ^ to ^');
});

it('replaceDigits("1234567890", "&") returns "&&&&&&&&&&"', () => {
  expect(replaceDigits('1234567890', '&')).to.equal('&&&&&&&&&&');
});

it('replaceDigits("There are no digits", "*") returns "There are no digits"', () => {
  expect(replaceDigits('There are no digits', '*')).to.equal('There are no digits');
});

it('replaceDigits("", "*") returns ""', () => {
  expect(replaceDigits('', '*')).to.equal('');
});

it('replaceDigits("No. 4 Tennessee vs. No. 13 Texas", "#") returns "No. # Tennessee vs. No. ## Texas"', () => {
  expect(replaceDigits('No. 4 Tennessee vs. No. 13 Texas', '#')).to.equal('No. # Tennessee vs. No. ## Texas');
});

it('replaceDigits("Stanford (37-14)", "/") returns "Stanford (//-//)"', () => {
  expect(replaceDigits('Stanford (37-14)', '/')).to.equal('Stanford (//-//)');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
