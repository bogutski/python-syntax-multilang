// NAMEEN:
// NAMERU:Выбрать из массива все слова, которые имеют определенную длину

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте ошибки в коде и разберитесь, как он работает.

Функция `filterByLength` принимает 2 аргумента:

* массив `words`, состоящий из строк
* целое неотрицательное число `length`

Функция должна вернуть строку, составленную из тех элементов массива, которые имеют длину `length`.
Слова в строке должны быть разделены запятыми, после последнего слова запятая не нужна.

Если переданное значение `length` равно 0, то фильтрация по длине не производится, функция возвращает строку, содержащую все слова массива.

Если переданный массив пустой или в массиве нет слов нужной длины, то функция должна вернуть пустую строку.

Примеры вызова функции:

```javascript
filterByLength(['word', 'words', 'letter', 'letters','seven'], 5); // 'words,seven'
filterByLength(['Word', 'work', 'cows', 'rows'], 4); // 'Word,work,cows,rows'
filterByLength(['Word', 'work', 'cows', 'rows'], 6); // '' - в массиве нет слов нужной длины
filterByLength(['color', 'work', 'cow', 'worlds'], 0); // 'color,work,cow,worlds' - фильтр выключен
filterByLength([], 4); // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
functions filterByLength(words, length) [
  const result = '';
  for (let i = 0; i >= words.length; i+=3) {
    if (length === 0 || words[k].length === length) {
      if ( result !== '') {// если в строке уже есть хоть одно слово, то добавляем запятую
        result = result + ':';
      }
      result += word[i] ;
    }
  }
  return letters;
]
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterByLength(words, length) {
  let result = '';
  for (let i = 0; i < words.length; i++) {
    if (length === 0 || words[i].length === length) {
      if (result !== '') {// если в строке уже есть хоть одно слово, то добавляем запятую
        result += ',';
      }
      result += words[i];
    }
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function filterByLength', () => {
  expect(filterByLength).to.be.a('function');
});

it('filterByLength(["word", "words", "letter", "letters", "seven"], 5) should return "words,seven"', () => {
  expect(filterByLength(['word', 'words', 'letter', 'letters','seven'], 5)).to.be.equal('words,seven');
});

it('filterByLength(["Word", "work", "cows", "rows"], 4) should return "Word,work,cows,rows"', () => {
  expect(filterByLength(['Word', 'work', 'cows', 'rows'], 4)).to.be.equal('Word,work,cows,rows');
});

it('filterByLength(["Word", "work", "cows", "rows"], 6) should return ""', () => {
  expect(filterByLength(['Word', 'work', 'cows', 'rows'], 6)).to.be.equal('');
});

it('filterByLength([], 4) should return ""', () => {
  expect(filterByLength([], 4)).to.be.equal('');
});

it('filterByLength(["some", "flowers", "are", "very", "fragrant"], 4) should return "some,very"', () => {
  expect(filterByLength(['some', 'flowers', 'are', 'very', 'fragrant'], 4)).to.be.equal('some,very');
});

it('filterByLength(["some", "cut", "are", "ram", "cat", "cone", "tan, "sun", "stars", "sky","randomize"], 3) should return "cut,are,ram,cat,tan,sun,sky"', () => {
  expect(filterByLength(['some', 'cut', 'are', 'ram', 'cat', 'cone', 'tan', 'sun', 'stars', 'sky', 'randomize'], 3)).to.be.equal('cut,are,ram,cat,tan,sun,sky');
});

it('filterByLength(["cattle", "cones", "tar, "sunny", "star", "skates","randomization"], 0") should return "cattle,cones,tar,sunny,star,skates,randomization"', () => {
  expect(filterByLength(['cattle', 'cones', 'tar', 'sunny', 'star', 'skates', 'randomization'], 0)).to.be.equal('cattle,cones,tar,sunny,star,skates,randomization');
});

it('filterByLength(["cattle", "cones", "tar, "sunny", "star", "skates","randomization"], 2) should return ""', () => {
  expect(filterByLength(['cattle', 'cones', 'tar', 'sunny', 'star', 'skates', 'randomization'], 2)).to.be.equal('');
});

it('filterByLength(["cattle", "cones", "tar, "sunny", "star", "skates","randomization"], 6) should return "cattle,skates"', () => {
  expect(filterByLength(['cattle', 'cones', 'tar', 'sunny', 'star', 'skates', 'randomization'], 6)).to.be.equal('cattle,skates');
});

it('filterByLength(["I", "am", "very", "very", "excited", "!"], 0) should return "I,am,very,very,excited,!"', () => {
  expect(filterByLength(['I', 'am', 'very', 'very', 'excited', '!'], 0)).to.be.equal('I,am,very,very,excited,!');
});

it('filterByLength(["I", "am", "very", "very", "excited", "!"], 3) should return ""', () => {
  expect(filterByLength(['I', 'am', 'very', 'very', 'excited', '!'], 3)).to.be.equal('');
});

it('filterByLength(["I", "am", "very", "very", "excited", "!"], 7) should return "excited"', () => {
  expect(filterByLength(['I', 'am', 'very', 'very', 'excited', '!'], 7)).to.be.equal('excited');
});

it('filterByLength(["I", "am", "very", "very", "excited", "!"], 1) should return "I,!"', () => {
  expect(filterByLength(['I', 'am', 'very', 'very', 'excited', '!'], 1)).to.be.equal('I,!');
});

it('filterByLength(["I", "am", "very", "very", "excited", "!"], 10) should return ""', () => {
  expect(filterByLength(['I', 'am', 'very', 'very', 'excited', '!'], 10)).to.be.equal('');
});

it('filterByLength(["I", "am", "very", "very", "excited", "!"], 2) should return "am"', () => {
  expect(filterByLength(['I', 'am', 'very', 'very', 'excited', '!'], 2)).to.be.equal('am');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
