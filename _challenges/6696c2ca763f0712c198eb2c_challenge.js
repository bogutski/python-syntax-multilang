// NAMEEN:
// NAMERU:Слово из отдельных букв

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Нужно написать функцию `wordFromLetters`, которая принимает один аргумент - массив `letters`.

Каждый элемент массива - это строка, содержащая одну букву.

Нужно собрать отдельные буквы в одну строку - слово.

Функция должна возвращать полученное слово.

Примеры запуска функции:

```javascript
wordFromLetters(['H', 'e', 'l', 'l', 'o']); // 'Hello'
wordFromLetters(['c', 'a', 't']);           // 'cat'
wordFromLetters([]);                        // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
func
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function wordFromLetters(letters) {
  let word = '';
  for (let i = 0; i < letters.length; i += 1) {
    word += letters[i];
  }
  return word;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function wordFromLetters', () => {
  expect(wordFromLetters).to.be.a('function');
});

it('wordFromLetters(["H", "e", "l", "l", "o"]) Should return "Hello"', () => {
  expect(wordFromLetters(['H', 'e', 'l', 'l', 'o'])).to.equal('Hello')
});

it('wordFromLetters(["A", "l", "i", "c", "e"]) Should return "Alice"', () => {
  expect(wordFromLetters(['A', 'l', 'i', 'c', 'e'])).to.equal('Alice')
});

it('wordFromLetters(["d", "o", "g"]) Should return "dog"', () => {
  expect(wordFromLetters(['d', 'o', 'g'])).to.equal('dog')
});

it('wordFromLetters([]) Should return ""', () => {
  expect(wordFromLetters([])).to.equal('')
});

it('wordFromLetters(["C", "a", "t", "e", "r", "p", "i", "l", "l", "a", "r"]) Should return "Caterpillar"', () => {
  expect(wordFromLetters(['C', 'a', 't', 'e', 'r', 'p', 'i', 'l', 'l', 'a', 'r'])).to.equal('Caterpillar')
});

it('wordFromLetters(["I"]) Should return "I"', () => {
  expect(wordFromLetters(['I'])).to.equal('I')
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
