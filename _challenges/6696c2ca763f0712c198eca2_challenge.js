// NAMEEN:
// NAMERU: Разбор слова на части. Исправьте код

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `wordSpec` принимает один параметр - строку.

Строка может содержать только гласные и согласные буквы в нижнем регистре.

Функция должна вернуть объект с тремя свойствами: `vowel`, `consonant` и `length`.

Свойство `vowel` содержит все гласные буквы в строке, `consonant` - все согласные, а `length` - длину строки.

Исправьте код, чтобы он работал правильно (в цикле ошибок нет), а также проанализируйте его.

Примеры запуска функции:
```javascript
wordSpec("hello") // {vowel: "eo", consonant: "hll", length: 5}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function wordSpec(str) {
  const vowels = 'aeiou';
  const length = lengthOfStr(str);
  const vowel = "";
  const consonant = "";
  for (let i = 0; i < length; i++) {
    if (vowels.includes(str[i])) {
      vowel += str[i];
    } else {
      consonant += str[i];
    }
  }
  return {
    vowel;
    consonant;
    length;
  }
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function wordSpec(str) {
  const vowels = 'aeiou'
  const length = str.length;
  let vowel = "";
  let consonant = "";
  for (let i = 0; i < length; i++) {
    if (vowels.includes(str[i])) {
      vowel += str[i];
    } else {
      consonant += str[i];
    }
  }
  return {
    vowel,
    consonant,
    length,
  }
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function wordSpec', () => {
  expect(wordSpec).to.be.a('function');
});

it('wordSpec("hello") returns {vowel: "eo", consonant: "hll", length: 5}', () => {
  expect(wordSpec("hello")).to.deep.equal({vowel: "eo", consonant: "hll", length: 5});
});

it('wordSpec("hmm") returns {vowel: "", consonant: "hmm", length: 3}', () => {
  expect(wordSpec("hmm")).to.deep.equal({vowel: "", consonant: "hmm", length: 3});
});

it('wordSpec("aeiou") returns {vowel: "aeiou", consonant: "", length: 5}', () => {
  expect(wordSpec("aeiou")).to.deep.equal({vowel: "aeiou", consonant: "", length: 5});
});

it('wordSpec("cherry") returns {vowel: "", consonant: "chrry", length: 6}', () => {
  expect(wordSpec("cherry")).to.deep.equal({vowel: "e", consonant: "chrry", length: 6});
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
