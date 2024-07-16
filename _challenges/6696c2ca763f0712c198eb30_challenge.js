// NAMEEN:
// NAMERU:Составить предложение из отдельных слов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `wordsToSentence`, которая принимает массив `words`, состоящий из непустых строк, и возвращает строку, составленную из элементов массива, разделенных пробелами.

Первое слово должно начинаться с заглавной буквы, а остальные слова должны быть в нижнем регистре.

В конце предложения должна быть точка.

Если массив пустой, то функция должна вернуть пустую строку.

Алгоритм решения задачи:

1. Проверить, что массив не пустой. Если пустой, то вернуть пустую строку.

2. Создать переменную `sentence` и присвоить ей начальное значение `''`.

3. Привести ПЕРВУЮ букву первого слова к верхнему регистру, а остальные буквы к нижнему регистру и добавить их в переменную `sentence`.

4. Создать цикл по всем элементам массива, начиная со второго элемента. В цикле:

- добавлять к переменной `sentence` пробел и очередное слово, приведенное к нижнему регистру.

5. Добавить в конец переменной `sentence` точку.

6. Вернуть переменную `sentence`.

Пример изменения первой буквы слова на заглавную:

```javascript
const word = 'hello';
let capitalizedWord = word[0].toUpperCase();
for (let i = 1; i < word.length; i += 1) { // начинаем с 1, чтобы не изменять первую букву
  capitalizedWord += word[i];
}
console.log(capitalizedWord);  // "Hello"
```

Теперь рассмотрим пример с массивом из двух слов - нужно привести первую букву первого слова к верхнему регистру, а остальные буквы этого слова к нижнему регистру:

```javascript
const arr = ['hELLO', 'world'];
let firstWord = arr[0][0].toUpperCase(); // первая буква первого слова в массиве
for (let i = 1; i < arr[0].length; i += 1) {
  firstWord  = firstWord + arr[0][i].toLowerCase();
}
console.log(firstWord); // "Hello"
```

Примеры вызова функции:

```javascript
wordsToSentence(['hello', 'world']); // "Hello world."
wordsToSentence(['iT, 'IS', 'GoING', 'to', 'raiN']); // "It is going to rain."
wordsToSentence(['']); // ""
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function wordsToSentence(words) {
  if (words.length === 0) {
    return '';
  }
  let sentence = words[0][0].toUpperCase();
  for (let i = 1; i < words[0].length; i += 1) {
    sentence += words[0][i].toLowerCase();
  }
  for (let i = 1; i < words.length; i += 1) {
    sentence += ' '+words[i].toLowerCase();
  }
  sentence += '.';
  return sentence;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function wordsToSentence', () => {
  expect(wordsToSentence).to.be.a('function');
});

it('wordsToSentence(["heLLo", "wORLd"]) should return "Hello world."', () => {
  expect(wordsToSentence(['heLLo', 'wORLd'])).to.be.equal('Hello world.');
});

it('wordsToSentence(["einstein", "excelled", "at", "math", "and", "physics", "from", "a", "young", "age"]) should return "Einstein excelled at math and physics from a young age."', () => {
  expect(wordsToSentence(['einstein', 'excelled', 'at', 'math', 'and', 'physics', 'from', 'a', 'young', 'age'])).to.be.equal('Einstein excelled at math and physics from a young age.');
});

it('wordsToSentence([]) should return ""', () => {
  expect(wordsToSentence([])).to.be.equal('');
});

it('wordsToSentence(["yES"]) should return "Yes."', () => {
  expect(wordsToSentence(['yES'])).to.be.equal('Yes.');
});

it('wordsToSentence(["Let", "us", "go", "to", "the", "STORE"]) should return "Let us go to the store."', () => {
  expect(wordsToSentence(['Let', 'us', 'go', 'to', 'the', 'store'])).to.be.equal('Let us go to the store.');
});

it('wordsToSentence(["iT", "IS", "GoING", "to", "raiN"]) should return "It is going to rain."', () => {
  expect(wordsToSentence(['iT', 'IS', 'GoING', 'to', 'raiN'])).to.be.equal('It is going to rain.');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
