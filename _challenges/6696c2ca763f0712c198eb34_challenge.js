// NAMEEN:
// NAMERU:Выбрать из массива все слова, которые содержат заданную букву

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `filterByLetter` принимает 2 аргумента:

* массив `words`, состоящий из строк
* строку `letter`, которая может состоять из одной буквы или быть пустой.

Функция должна вернуть строку, составленную из тех элементов массива, в которых содержится буква `letter`.
Слова в строке должны быть разделены точками с запятой, после последнего слова точка с запятой не ставится.

Поиск буквы в слове должен быть независимым от регистра - приведите букву и слово к одному регистру перед сравнением.
(Слово должно быть добавлено в строку результата в том регистре, в котором оно было в массиве.)

Если переданная строка `letter` пустая, то фильтрация по букве не производится, функция возвращает все слова массива.

Если переданный массив пустой или в массиве нет слов с нужной буквой, то функция должна вернуть пустую строку.

Примеры вызова функции:

```javascript
filterByLetter(['colors', 'war', 'cast', 'worlds'], 'x'); // ''
filterByLetter(['colors', 'War', 'cast', 'worlds'], 'W'); // 'War;worlds'
filterByLetter(['colors', 'war', 'cast', 'worlds'], ''); // 'colors;war;cast;worlds' - фильтр выключен
filterByLetter([], 'z'); // ''
```

Обратите внимание на то, как работает метод `indexOf`: в случае, если его аргументом является пустая строка, он всегда возвращает `0`!
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterByLetter(words, letter) {
  let result = '';
  letter = letter.toLowerCase();
  for (let i = 0; i < words.length; i++) {
    if (letter === '' || words[i].toLowerCase().indexOf(letter) !== -1) {
      if (result !== '') {// если в строке уже есть хоть одно слово, то добавляем точку с запятой
        result = result + ';';
      }
      result += words[i]; // добавляем оригинальное слово из массива в строку результата
    }
  }
  return result;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function filterByLetter', () => {
  expect(filterByLetter).to.be.a('function');
});

it("filterByLetter(['West', 'work', 'core', 'rows', 'East'], 'w') should return 'West;work;rows'", () => {
  expect(filterByLetter(['West', 'work', 'core', 'rows', 'East'], 'w')).to.equal('West;work;rows');
});

it("filterByLetter(['West', 'work', 'core', 'rows', 'East'], 'E') should return 'West;core;East'", () => {
  expect(filterByLetter(['West', 'work', 'core', 'rows', 'East'], 'E')).to.equal('West;core;East');
});

it("filterByLetter(['West', 'work', 'core', 'rows', 'East'], 'e') should return 'West;core;East'", () => {
  expect(filterByLetter(['West', 'work', 'core', 'rows', 'East'], 'e')).to.equal('West;core;East');
});

it("filterByLetter(['West', 'work', 'core', 'rows', 'East'], 'C') should return 'core'", () => {
  expect(filterByLetter(['West', 'work', 'core', 'rows', 'East'], 'C')).to.equal('core');
});

it("filterByLetter(['West', 'work', 'core', 'rows', 'East'], 'z') should return ''", () => {
  expect(filterByLetter(['West', 'work', 'core', 'rows', 'East'], 'z')).to.equal('');
});

it("filterByLetter(['West', 'work', 'core', 'rows', 'East'], '') should return 'West;work;core;rows;East'", () => {
  expect(filterByLetter(['West', 'work', 'core', 'rows', 'East'], '')).to.equal('West;work;core;rows;East');
});

it("filterByLetter([], 'W') should return ''", () => {
  expect(filterByLetter([], 'W')).to.equal('');
});

it("filterByLetter(['123', 'Tie', 'welcoming', ' ', '', 'I am so sad'], 'w') should return 'welcoming'", () => {
  expect(filterByLetter(['123', 'Tie', 'welcoming', ' ', '', 'I am so sad'], 'w')).to.equal('welcoming');
});

it("filterByLetter(['123', 'Tie', 'welcoming', ' ', '', 'I am so sad'], 'I') should return 'Tie;welcoming;I am so sad'", () => {
  expect(filterByLetter(['123', 'Tie', 'welcoming', ' ', '', 'I am so sad'], 'I')).to.equal('Tie;welcoming;I am so sad');
});

it("filterByLetter(['123', 'Tie', 'welcoming', ' ', '', 'I am so sad'], ' ') should return ' ;I am so sad'", () => {
  expect(filterByLetter(['123', 'Tie', 'welcoming', ' ', '', 'I am so sad'], ' ')).to.equal(' ;I am so sad');
});

it("filterByLetter(['123', 'Tie', 'welcoming', ' ', '', 'I am so sad'], '') should return '123;Tie;welcoming; ;;I am so sad'", () => {
  expect(filterByLetter(['123', 'Tie', 'welcoming', ' ', '', 'I am so sad'], '')).to.equal('123;Tie;welcoming; ;;I am so sad');
});

it("filterByLetter(['123', 'Tie', 'welcoming', ' ', '', 'I am so sad'], '1') should return '123'", () => {
  expect(filterByLetter(['123', 'Tie', 'welcoming', ' ', '', 'I am so sad'], '1')).to.equal('123');
});

it("filterByLetter(['123', 'Tie', 'welcoming', ' ', '', 'I am so sad'], 'd') should return 'I am so sad'", () => {
  expect(filterByLetter(['123', 'Tie', 'welcoming', ' ', '', 'I am so sad'], 'd')).to.equal('I am so sad');
});

it("filterByLetter(['123', 'Tie', 'welcoming', ' ', '', 'I am so sad'], 'e') should return 'Tie;welcoming'", () => {
  expect(filterByLetter(['123', 'Tie', 'welcoming', ' ', '', 'I am so sad'], 'e')).to.equal('Tie;welcoming');
});

it("filterByLetter(['123', 'Tie', 'welcoming', ' ', '', 'I am so sad'], 't') should return 'Tie'", () => {
  expect(filterByLetter(['123', 'Tie', 'welcoming', ' ', '', 'I am so sad'], 't')).to.equal('Tie');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
