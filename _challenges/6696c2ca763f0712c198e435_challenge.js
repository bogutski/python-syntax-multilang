// NAMEEN:
// NAMERU:Определить регистр, гласная или согласная буква

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `letterDetector`, которая принимает 1 параметр – строку из одной буквы.

Пример запуска функции:
```javascript
letterDetector('a') // 'Letter a is vowel and lowercase'
letterDetector('A') // 'Letter A is vowel and uppercase'
letterDetector('b') // 'Letter b is consonant and lowercase'
letterDetector('B') // 'Letter B is consonant and uppercase'
letterDetector('e') // 'Letter e is vowel and lowercase'
letterDetector('E') // 'Letter E is vowel and uppercase'
```

Как вы понимаете, функция должна возвращать строку, в которой будет указано, является ли буква гласной или согласной, а также регистр буквы.

В английском языке гласными буквами являются буквы `a, e, i, o, u`. Все остальные буквы являются согласными.

Сравнивать регистр буквы можно с помощью метода `toUpperCase()` и `toLowerCase()`.

Сравнивайте исходную букву с гласными:

```javascript
function isVowel(letter) {
 return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u';
}
```

В этом примере мы сравниваем исходную букву с гласными буквами. Если буква совпадает с одной из гласных, то функция возвращает `true`, иначе `false`.

Доработайте чтобы определялись буквы в верхнем регистре.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function letterDetector(letter) {
  // isVowel case insensitive
  const isVowel = (letter) =>
    letter.toLowerCase() === 'a' ||
    letter.toLowerCase() === 'e' ||
    letter.toLowerCase() === 'i' ||
    letter.toLowerCase() === 'o' ||
    letter.toLowerCase() === 'u';

  const isUpper = (letter) => letter === letter.toUpperCase();
  const isConsonant = (letter) => !isVowel(letter);

  if (isVowel(letter)) {
    return `Letter ${letter} is vowel and ${isUpper(letter) ? 'uppercase' : 'lowercase'}`;
  } else if (isConsonant(letter)) {
    return `Letter ${letter} is consonant and ${
      isUpper(letter) ? 'uppercase' : 'lowercase'
    }`;
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function letterDetector', () => {
  expect(letterDetector).to.be.a('function');
});

it('letterDetector("a") should return "Letter a is vowel and lowercase"', () => {
  expect(letterDetector('a')).to.be.equal('Letter a is vowel and lowercase');
});

it('letterDetector("A") should return "Letter A is vowel and uppercase"', () => {
  expect(letterDetector('A')).to.be.equal('Letter A is vowel and uppercase');
});

it('letterDetector("b") should return "Letter b is consonant and lowercase"', () => {
  expect(letterDetector('b')).to.be.equal('Letter b is consonant and lowercase');
});

it('letterDetector("B") should return "Letter B is consonant and uppercase"', () => {
  expect(letterDetector('B')).to.be.equal('Letter B is consonant and uppercase');
});

it('letterDetector("e") should return "Letter e is vowel and lowercase"', () => {
  expect(letterDetector('e')).to.be.equal('Letter e is vowel and lowercase');
});

it('letterDetector("E") should return "Letter E is vowel and uppercase"', () => {
  expect(letterDetector('E')).to.be.equal('Letter E is vowel and uppercase');
});

it('letterDetector("i") should return "Letter i is vowel and lowercase"', () => {
  expect(letterDetector('i')).to.be.equal('Letter i is vowel and lowercase');
});

it('letterDetector("I") should return "Letter I is vowel and uppercase"', () => {
  expect(letterDetector('I')).to.be.equal('Letter I is vowel and uppercase');
});

it('letterDetector("o") should return "Letter o is vowel and lowercase"', () => {
  expect(letterDetector('o')).to.be.equal('Letter o is vowel and lowercase');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
