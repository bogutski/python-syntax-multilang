// NAMEEN:
// NAMERU:Добавьте новое слово в строку вместо первого слова

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `addNewWord` принимает два параметра:

* `str` - строка, фраза которую надо изменить
* `newFirstWord` - строка, новое первое слово

Функция должна вернуть строку, в которой первое слово заменено на новое первое слово `newFirstWord`, при этом предудущее первое слово станет последним.

Первое слово может быть разделено с остальной частью строки пробелом, запятой, вопросительным или восклицательным знаком.

В строку `str` приходит более двух слов.

Пример запуска функции:
```javascript
addNewWord("Alice? My name is", "John"); // "John? My name is Alice"
addNewWord("strong? It makes me", "Difficult"); // "Difficult? It makes me strong"
```
Алгоритм решения:
1. создайте переменную `exceptFirstWord` и присваивайте ей значение пустой строки
2. создайте переменную `firstWord` и присваивайте ей значение пустой строки
3. создайте цикл, который перебирает все символы строки `str`
4. пока символ не является пробелом, запятой, вопросительным или восклицательным знаком, то
5. добавьте значение данного символа к переменной `firstWord`
6. сделайте цикл, который перебирает все символы строки `str` начиная с индекса, равного длине `firstWord` и
7. добавьте значение данного символа к переменной `exceptFirstWord`
8. верните строку, состоящую из `newFirstWord`, `exceptFirstWord` и `firstWord`
9. Будьте внимательны с пробелами

Используйте только циклы для решения этой задачи.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addNewWord(str, newFirstWord) {
  let exceptFirstWord = '';
  let firstWord = '';
  for (let i = 0; i < str.length; i++) {
    if (' ,!?'.includes(str[i])===false) {
      firstWord += str[i]}
    else break;
    }
  for (let j = firstWord.length; j < str.length; j++) {
      exceptFirstWord += str[j];
  }
  return newFirstWord + exceptFirstWord + ' ' + firstWord;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function addNewWord', () => {
  expect(addNewWord).to.be.a('function');
});

it('function addNewWord not includes statement substring', () => {
  expect(addNewWord.toString().includes('substring')).to.be.equal(false);
});

it('function addNewWord not includes statement slice', () => {
  expect(addNewWord.toString().includes('slice')).to.be.equal(false);
});

it('addNewWord("Alice? My name is", "John") returns "John? My name is Alice"', () => {
  expect(addNewWord('Alice? My name is', 'John')).to.be.equal('John? My name is Alice');
});

it('addNewWord("John, my name is", "Hello") returns "Hello, my name is John"', () => {
  expect(addNewWord('John, my name is', 'Hello')).to.be.equal('Hello, my name is John');
});

it('addNewWord("JavaScript? I know", "Student") returns "Student?, I know JavaScript"', () => {
  expect(addNewWord('JavaScript? I know', 'Student')).to.be.equal('Student? I know JavaScript');
});

it('addNewWord("easy will find job very", "I") returns "I will find job very easy"', () => {
  expect(addNewWord('easy will find job very', 'I')).to.be.equal('I will find job very easy');
});

it('addNewWord("strong? It makes me", "Difficult") returns "Difficult? It makes me strong"', () => {
  expect(addNewWord('strong? It makes me', 'Difficult')).to.be.equal('Difficult? It makes me strong');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
