// NAMEEN:
// NAMERU:Разберите слово на буквы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `specTheWord` принимает строку.
Строка состоит только из строчных букв и не содержит пробелы.

 Функция возвращает объект с 4 свойствами:

* `vowel` - строка, содержащая все гласные буквы из исходной строки
* `vowelCount` - количество гласных букв в исходной строке
* `consonant` - строка, содержащая все согласные буквы из исходной строки
* `consonantCount` - количество согласных букв в исходной строке

Пример запуска функции:
```javascript
specTheWord("hello") // {vowel: "eo", vowelCount: 2, consonant: "hll", consonantCount: 3}
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function specTheWord(str) {
  const vowels = 'aeiou'
  let vowel = "";
  let vowelCount = 0;
  let consonant = "";
  let consonantCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowel += str[i];
      vowelCount++;
    } else {
      consonant += str[i];
      consonantCount++;
    }
  }
  return {
    vowel,
    vowelCount,
    consonant,
    consonantCount
  }
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function specTheWord', () => {
  expect(specTheWord).to.be.a('function');
});

it('specTheWord("hello") returns {vowel: "eo", vowelCount: 2, consonant: "hll", consonantCount: 3}', () => {
  expect(specTheWord("hello")).to.deep.equal({vowel: "eo", vowelCount: 2, consonant: "hll", consonantCount: 3});
});

it('specTheWord("js") returns {vowel: "", vowelCount: 0, consonant: "js", consonantCount: 2}', () => {
  expect(specTheWord("js")).to.deep.equal({vowel: "", vowelCount: 0, consonant: "js", consonantCount: 2});
});

it('specTheWord("javascript") returns {vowel: "aai", vowelCount: 3, consonant: "jvscrpt", consonantCount: 7}', () => {
  expect(specTheWord("javascript")).to.deep.equal({
    vowel: "aai",
    vowelCount: 3,
    consonant: "jvscrpt",
    consonantCount: 7
  });
});

it('specTheWord("") returns {vowel: "", vowelCount: 0, consonant: "", consonantCount: 0}', () => {
  expect(specTheWord("")).to.deep.equal({vowel: "", vowelCount: 0, consonant: "", consonantCount: 0});
});

it('specTheWord("a") returns {vowel: "a", vowelCount: 1, consonant: "", consonantCount: 0}', () => {
  expect(specTheWord("a")).to.deep.equal({vowel: "a", vowelCount: 1, consonant: "", consonantCount: 0});
});

it('specTheWord("aeiou") returns {vowel: "aeiou", vowelCount: 5, consonant: "", consonantCount: 0}', () => {
  expect(specTheWord("aeiou")).to.deep.equal({vowel: "aeiou", vowelCount: 5, consonant: "", consonantCount: 0});
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
