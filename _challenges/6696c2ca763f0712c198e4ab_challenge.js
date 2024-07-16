// NAMEEN:
// NAMERU:Рамка из символа доллара

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `dollarFrame`, которая принимает строку и возвращает ее в верхнем регистре и в рамке из символа доллара.

Результат должен содержать 3 строки.

Примеры запуска функции:
```javascript
dollarFrame('  hello  '); // '$$$$$$$$$/n$ HELLO $/n$$$$$$$$$'

$$$$$$$$$
$ HELLO $
$$$$$$$$$

dollarFrame('A    '); // '$$$$$/n$ A $/n$$$$$'

$$$$$
$ A $
$$$$$
```

Для переноса строки используйте символ `\n`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function dollarFrame(string) {
  const length = string.trim().length + 4;
  const line = '$'.repeat(length);
  const word = '$ ' + string.trim().toUpperCase() + ' $';
  return line + '\n' + word + '\n' + line;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function dollarFrame', () => {
  expect(dollarFrame).to.be.a('function');
});

it('dollarFrame("  hello  ") should return "$$$$$$$$$\n$ HELLO $\n$$$$$$$$$', () => {
  expect(dollarFrame('  hello  ')).to.be.equal('$$$$$$$$$\n$ HELLO $\n$$$$$$$$$');
} );

it('dollarFrame("A    ") should return "$$$$$\n$ A $\n$$$$$"', () => {
  expect(dollarFrame('A    ')).to.be.equal('$$$$$\n$ A $\n$$$$$');
} );

it('dollarFrame("  pasv ") should return "$$$$$$$$\n$ PASV $\n$$$$$$$$"', () => {
  expect(dollarFrame('  pasv ')).to.be.equal('$$$$$$$$\n$ PASV $\n$$$$$$$$');
} );
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
