// NAMEEN:
// NAMERU:Выбрать из массива слова, начинающиеся с заданной буквы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `getWordsStartingWith`, принимает массив строк `words` и строку `letter`, и возвращает строку, составленную из слов, начинающихся с буквы `letter`.

Поиск производится без учета регистра символов.

Слова в возвращаемой строке должны быть разделены пробелами. В конце строки пробела быть не должно.

Если в массиве нет слов, начинающихся с буквы `letter`, то функция должна вернуть пустую строку.

Примеры запуска функции:

```javascript
getWordsStartingWith(['Ant', 'bot', 'can', 'arrow', 'Act', 'back'], 'a'); // 'Ant arrow Act'
getWordsStartingWith(['run', 'rack', 'role'], 'b'); // ''
getWordsStartingWith(['run', 'rack', 'role'], 'R'); // 'run rack role'
getWordsStartingWith([], 'r'); // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
func
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getWordsStartingWith(words, letter) {
  let result = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase()[0] === letter.toLowerCase()) {
      result += words[i] + ' ';
    }
  }
  return result.trim();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getWordsStartingWith', () => {
  expect(getWordsStartingWith).to.be.a('function');
});

it('getWordsStartingWith(["Ant", "boot", "cannon", "arrow", "Act", "bark"], "a") should return "Ant arrow Act"', () => {
  expect(getWordsStartingWith(['Ant', 'boot', 'cannon', 'arrow', 'Act', 'bark'], 'a')).to.equal('Ant arrow Act');
});

it('getWordsStartingWith(["run", "rack", "role"], "b") should return ""', () => {
  expect(getWordsStartingWith(['run', 'rack', 'role'], 'b')).to.equal('');
});

it('getWordsStartingWith(["rabbit", "room", "root"], "R") should return "rabbit room root"', () => {
  expect(getWordsStartingWith(['rabbit', 'room', 'root'], 'R')).to.equal('rabbit room root');
});

it('getWordsStartingWith([], "r") should return ""', () => {
  expect(getWordsStartingWith([], 'r')).to.equal('');
});

it('getWordsStartingWith(["Cat", "bat", "coin", "art", "Cost", "cone"], "c") should return "Cat coin Cost cone"', () => {
  expect(getWordsStartingWith(['Cat', 'bat', 'coin', 'art', 'Cost', 'cone'], 'c')).to.equal('Cat coin Cost cone');
});

it('getWordsStartingWith([], "") should return ""', () => {
  expect(getWordsStartingWith([], '')).to.equal('');
});

it('getWordsStartingWith(["Cat", "bat", "coin"], "") should return ""', () => {
  expect(getWordsStartingWith(['Cat', 'bat', 'coin'], '')).to.equal('');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
