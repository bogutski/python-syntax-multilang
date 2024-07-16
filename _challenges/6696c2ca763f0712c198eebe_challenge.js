// NAMEEN:
// NAMERU:Перевод всех цифр в слова

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `numbersAndWords`, которая принимает строку, состоящую только из цифр.

Цифры в строке могут быть разделены запятыми, пробелами или тем и другим одновременно, или разделение может отсутствовать вовсе.

Функция должна вернуть строку, в которой все цифры заменены на слова, соответствующие этим цифрам, и разделители
 должны перенестись в том же виде, что и в исходной строке.

Можно использовать массив, как в прошлой задаче.


Пример запуска функции:
```javascript
numbersAndWords('1, 2, 3') // 'one, two, three'
numbersAndWords('1 2 3 4 5') // 'one two three four five'
numbersAndWords('0,9,8,7,6') // 'zero,nine,eight,seven,six'
numbersAndWords('555') // 'fivefivefive'
numbersAndWords('') // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numbersAndWords(str){
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
it('Created function numbersAndWords', () => {
  expect(numbersAndWords).to.be.a('function');
});

it("numbersAndWords('1, 2, 3') should return 'one, two, three'", () => {
  expect(numbersAndWords('1, 2, 3')).to.equal('one, two, three');
});

it("numbersAndWords('1 2 3 4 5') should return 'one two three four five'", () => {
  expect(numbersAndWords('1 2 3 4 5')).to.equal('one two three four five');
});

it("numbersAndWords('0,9,8,7,6') should return 'zero,nine,eight,seven,six'", () => {
  expect(numbersAndWords('0,9,8,7,6')).to.equal('zero,nine,eight,seven,six');
});

it("numbersAndWords('1, 2, 3, 4, 5, 6, 7, 8, 9, 0') should return 'one, two, three, four, five, six, seven, eight, nine, zero'", () => {
  expect(numbersAndWords('1, 2, 3, 4, 5, 6, 7, 8, 9, 0')).to.equal('one, two, three, four, five, six, seven, eight, nine, zero');
});

it("numbersAndWords('55555') should return 'fivefivefivefivefive'", () => {
  expect(numbersAndWords('55555')).to.equal('fivefivefivefivefive');
});

it("numbersAndWords('') should return ''", () => {
  expect(numbersAndWords('')).to.equal('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
