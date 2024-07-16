// NAMEEN:
// NAMERU:Перевод цифр в слова

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `digitsToWords`, которая принимает строку, состоящую только из цифр.

Цифры в строке могут быть разделены запятыми, пробелами или тем и другим одновременно, или разделение может отсутствовать вовсе.

Функция должна вернуть строку, в которой все цифры заменены на слова, соответствующие этим цифрам, и разделители
 должны перенестись в том же виде, что и в исходной строке.


Пример запуска функции:
```javascript
digitsToWords('1, 2, 3') // 'one, two, three'
digitsToWords('1 2 3 4 5') // 'one two three four five'
digitsToWords('0,9,8,7,6') // 'zero,nine,eight,seven,six'
digitsToWords('555') // 'fivefivefive'
digitsToWords('') // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function digitsToWords(str){
  const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let result = ''
  for(let i = 0; i < str.length; i++){
    if(str[i] === ',' || str[i] === ' '){
      result += str[i]
    }else{
      result += arr[(str[i])]
    }
  }
  return result
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function digitsToWords', () => {
  expect(digitsToWords).to.be.a('function');
});

it("digitsToWords('1, 2, 3') should return 'one, two, three'", () => {
  expect(digitsToWords('1, 2, 3')).to.equal('one, two, three');
});

it("digitsToWords('1 2 3 4 5') should return 'one two three four five'", () => {
  expect(digitsToWords('1 2 3 4 5')).to.equal('one two three four five');
});

it("digitsToWords('0,9,8,7,6') should return 'zero,nine,eight,seven,six'", () => {
  expect(digitsToWords('0,9,8,7,6')).to.equal('zero,nine,eight,seven,six');
});

it("digitsToWords('1, 2, 3, 4, 5, 6, 7, 8, 9, 0') should return 'one, two, three, four, five, six, seven, eight, nine, zero'", () => {
  expect(digitsToWords('1, 2, 3, 4, 5, 6, 7, 8, 9, 0')).to.equal('one, two, three, four, five, six, seven, eight, nine, zero');
});

it("digitsToWords('55555') should return 'fivefivefivefivefive'", () => {
  expect(digitsToWords('55555')).to.equal('fivefivefivefivefive');
});

it("digitsToWords('') should return ''", () => {
  expect(digitsToWords('')).to.equal('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
