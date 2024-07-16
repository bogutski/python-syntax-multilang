// NAMEEN:
// NAMERU:Очистить строку от повторяющихся слов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `noDuplicate` принимает строку и возвращает строку, в которой удалены все повторяющиеся слова.

Слова в строке разделены пробелами, регистр написания не учитывается.

Слова в новой строке должны быть разделены с помощью `***`.

Пример запуска функции:
```javascript
noDuplicate('start learning js js ') // 'start***learning***js'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function noDuplicate(str) {
  let result = '';
  let word = '';
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') word += str[i];

    if (str[i] === ' ' || i === str.length - 1) {
      if (word && !obj[word]) {
        obj[word] = 1;

        if (result) result += '***' + word;
        else result = word;
      }
      word = '';
    }
  }
  return result
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function noDuplicate', () => {
  expect(noDuplicate).to.be.a('function');
});

it('noDuplicate("Hello Hello") returns "Hello"', () => {
  expect(noDuplicate('Hello Hello')).to.equal('Hello');
});

it('noDuplicate("Hello ") returns "Hello"', () => {
  expect(noDuplicate('Hello ')).to.equal('Hello');
});

it('noDuplicate("start learning js js ") returns "start***learning***js"', () => {
  expect(noDuplicate('start learning js js ')).to.equal('start***learning***js');
});

it('noDuplicate("a b c d e f g g a a d c") returns "a***b***c***d***e***f***g"', () => {
  expect(noDuplicate('a b c d e f g g a a d c')).to.equal('a***b***c***d***e***f***g');
});

it('noDuplicate("  ") returns ""', () => {
  expect(noDuplicate('  ')).to.equal('');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
