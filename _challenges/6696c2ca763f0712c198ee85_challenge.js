// NAMEEN:
// NAMERU:Перевернуть каждое слово из строки и добавить в массив

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию reverseAndPush, которая принимает строку и возвращает массив.

Массив должен содержать перевернутые слова из строки. Слова должны остаться в таком же порядке, как и в строке.

Слова в строке всегда разделены одним пробелом.


Примеры запуска функции:
```javascript
reverseAndPush('sihT si a tset') // ['This', 'is', 'a', 'test']
reverseAndPush('123 456')        // ['321', '654']
reverseAndPush('B')              // ['B']
reverseAndPush('')               // ['']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseAndPush(str){
  const arr = []
  let chunk = '';
  for (let i = 0; i < str.length; i++){
    if(str[i] === ' '){
      arr.push(chunk)
      chunk = ''
    } else {
      chunk = str[i] + chunk
    }
  }
  arr.push(chunk)
  return arr
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseAndPush', () => {
  expect(reverseAndPush).to.be.a('function');
});

it("reverseAndPush('ba cba dcba') returns ['ab', 'abc', 'abcd']", () => {
  expect(reverseAndPush('ba cba dcba')).to.deep.equal(['ab', 'abc', 'abcd']);
});

it("reverseAndPush('eno owt eerht ruof evif') returns ['one', 'two', 'three', 'four', 'five']", () => {
  expect(reverseAndPush('eno owt eerht ruof evif')).to.deep.equal(['one', 'two', 'three', 'four', 'five']);
});

it("reverseAndPush('sihT si a tset') returns ['This', 'is', 'a', 'test']", () => {
  expect(reverseAndPush('sihT si a tset')).to.deep.equal(['This', 'is', 'a', 'test']);
});

it("reverseAndPush('123! abc@ 456#') returns ['!321', '@cba', '#654']", () => {
  expect(reverseAndPush('123! abc@ 456#')).to.deep.equal(['!321', '@cba', '#654']);
});

it("reverseAndPush('A') returns ['A']", () => {
  expect(reverseAndPush('A')).to.deep.equal(['A']);
});

it("reverseAndPush('') returns ['']", () => {
  expect(reverseAndPush('')).to.deep.equal(['']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
