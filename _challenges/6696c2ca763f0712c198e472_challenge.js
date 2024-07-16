// NAMEEN:
// NAMERU:Нарисуйте стрелу символами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `arrowArt`, которая принимает строку.

Пусть функция возьмет строку, переведет ее в верхний регистр и вернет строку, которая будет представлять собой
 стрелку, состоящую из символов `>`, `=` и строки, которую мы передали в функцию.

Пример запуска функции:
```javascript
arrowArt(''); // '>=>'
arrowArt('r'); // '>=R=>'
arrowArt('go'); // '>>==GO==>>'
arrowArt('abc'); // '>>>===ABC===>>>'
arrowArt('abcd'); // '>>>>====ABCD====>>>>'
arrowArt('pasv'); // '>>>>====PASV====>>>>'
arrowArt('coding'); // '>>>>>>======CODING======>>>>>>'
```

Каждый элемент стрелки повторяется столько раз, сколько символов в исходной строке.

Если строка пустая, то стрелка должна быть такая: `'>=>'`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function arrowArt(name) {
  const l = name.length;
  if (l === 0) return '>=>';
  return (
    '>'.repeat(l) + '='.repeat(l) + name.toUpperCase() + '='.repeat(l) + '>'.repeat(l)
  );
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function arrowArt', () => {
  expect(arrowArt).to.be.a('function');
});

it('arrowArt("") should return ">=>"', () => {
  expect(arrowArt('')).to.be.equal('>=>');
});

it('arrowArt("r") should return ">=R=>"', () => {
  expect(arrowArt('r')).to.be.equal('>=R=>');
} );

it('arrowArt("abc") should return ">>>===ABC===>>>"', () => {
  expect(arrowArt('abc')).to.be.equal('>>>===ABC===>>>');
});

it('arrowArt("abcd") should return ">>>>====ABCD====>>>>"', () => {
  expect(arrowArt('abcd')).to.be.equal('>>>>====ABCD====>>>>');
});

it('arrowArt("pasv") should return ">>>>====PASV====>>>>"', () => {
  expect(arrowArt('pasv')).to.be.equal('>>>>====PASV====>>>>');
});

it('arrowArt("coding") should return ">>>>>>======CODING======>>>>>>"', () => {
  expect(arrowArt('coding')).to.be.equal('>>>>>>======CODING======>>>>>>');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
