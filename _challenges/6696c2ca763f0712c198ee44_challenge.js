// NAMEEN:
// NAMERU:Поменяйте первое и последнее слово местами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `switchWords` принимает строку и меняет местами первое и последнее слово в строке.

Порядок решения:
1. Создайте переменную `index` и присвойте ей значение индекса первого пробела в строке.
2. Создайте переменную `firstWord` и присвойте ей значение пустой строки.
3. Создайте переменную `lastIndex` и присвойте ей значение индекса последнего пробела в строке.
4. Создайте переменную `lastWord` и присвойте ей значение пустой строки.
5. Создайте переменную `restOfWord` и присвойте ей значение пустой строки.
6. Создайте цикл, который перебирает символы строки от 0 до `index - 1` (включительно) и добавляет их в переменную `firstWord`.
7. Создайте цикл, который перебирает символы строки от `lastIndex + 1` до конца строки и добавляет их в переменную `lastWord`.
8. Создайте цикл, который перебирает символы строки от `index + 1` до `lastIndex -1` (включительно) и добавляет их в переменную `restOfWord`.
9. Верните `lastWord + ' ' + restOfWord + ' ' + firstWord`.

В примерах используется 3 и более слов в строке.

Пример запуска функции:
```javascript
switchWords('Hello world, my name is John') // 'John world, my name is Hello'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function switchWords(str) {
  let index = str.indexOf(' ');
  let firstWord = '';
  let lastIndex = str.lastIndexOf(' ');
  let lastWord = '';
  let restOfWord = '';
  for (let i = 0; i < index; i++) {
    firstWord += str[i];
  }
  for (let i = lastIndex + 1; i < str.length; i++) {
    lastWord += str[i];
  }
  for (let i = index + 1; i < lastIndex; i++) {
    restOfWord += str[i];
  }
  return lastWord + ' ' + restOfWord + ' ' + firstWord;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function switchWords', () => {
  expect(switchWords).to.be.a('function');
});

it('switchWords("Hello beautiful world") returns "world beautiful Hello"', () => {
  expect(switchWords('Hello beautiful world')).to.equal('world beautiful Hello');
});

it('switchWords("Hello world, my name is John") returns "John  my name is Hello"', () => {
  expect(switchWords('Hello world, my name is John')).to.equal('John world, my name is Hello');
});

it('switchWords("Wouldn\'t Harm a Fly") returns "Fly Harm a Wouldn\'t', () => {
  expect(switchWords('Wouldn\'t Harm a Fly')).to.equal('Fly Harm a Wouldn\'t');
});

it('switchWords("Tea Cup of My") returns "My Cup of Tea"', () => {
  expect(switchWords('Tea Cup of My')).to.equal('My Cup of Tea');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
