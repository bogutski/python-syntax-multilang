// NAMEEN:
// NAMERU:Если в строке 3 пробела, то обновить строку

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `changeIf3Space` принимает строку `str`

Слова в строке разделены пробелами и может содержаться любое количество слов

Если в строке ровно 3 пробела, то возвращается строка, состоящая из первого и последнего слова, разделенных пробелом.

Если пробелов меньше или больше 3, то возвращается исходная строка.

Примеры запуска функции:
```javascript
changeIf3Space('a b c d') // 'a d'
changeIf3Space('a b c') // 'a b c'
changeIf3Space('JS is good language') // 'JS language'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function changeIf3Space(str) {
  let spaceCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      spaceCount++;
    }
  }
  if (spaceCount === 3) {
    let firstWord = '';
    let lastWord = '';
    for(let i = 0; i < str.indexOf(' '); i++) {
      firstWord += str[i];
    }
    for (let i = str.lastIndexOf(' '); i < str.length; i++) {
      lastWord += str[i]
    } return firstWord + lastWord;
  } else return str
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function changeIf3Space', () => {
  expect(changeIf3Space).to.be.a('function');
});

it('changeIf3Space("a b c d") returns "a d"', () => {
  expect(changeIf3Space('a b c d')).to.equal('a d');
});

it('changeIf3Space("a b c") returns "a b c"', () => {
  expect(changeIf3Space('a b c')).to.equal('a b c');
});

it('changeIf3Space("a b c d e") returns "a b c d e"', () => {
  expect(changeIf3Space('a b c d e')).to.equal('a b c d e');
});

it('changeIf3Space("") returns ""', () => {
  expect(changeIf3Space('')).to.equal('');
});

it('changeIf3Space("JS is good language") returns "JS language"', () => {
  expect(changeIf3Space('JS is good language')).to.equal('JS language');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
