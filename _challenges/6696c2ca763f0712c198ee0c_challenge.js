// NAMEEN:
// NAMERU:Замените каждый второй пробел в строке на подчеркивание '_'.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `replaceEverySecondSpace` принимает строку, составленную из слов, разделенных пробелами.
В начале и в конце строки могут быть лишние пробелы, которые необходимо удалить перед обработкой строки.
В строке между словами не может быть двух пробелов подряд.

Функция должна заменить каждый второй пробел в строке на символ подчеркивания '_' и вернуть полученную строку.
В решении запрещается использовать методы `split()`, `join()` и `replace()`.

Подсказка: для решения задачи используйте цикл `for` и счетчик пробелов.
Проверяйте каждый символ строки на пробел.
Символы, не являющиеся пробелами, записывайте в результирующую строку без изменений.
Если символ - пробел, то увеличивайте счетчик пробелов на 1.
Если значение счетчика четное, то в строку записывается символ подчеркивания, иначе - пробел.

Примеры запуска функции:

```javascript
replaceEverySecondSpace('row row row your boat'); // 'row row_row your_boat'
replaceEverySecondSpace('a b c d e f g h i j k l'); // 'a b_c d_e f_g h_i j_k l'
replaceEverySecondSpace('once upon'); // 'once upon'
replaceEverySecondSpace('  once upon  '); // 'once upon'
replaceEverySecondSpace(''); // ''
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function replaceEverySecondSpace(str) {
  str = str.trim();
  let result = '';
  let spaceCounter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      spaceCounter++;
      if (spaceCounter % 2 === 0) {
        result += '_';
      } else {
        result += ' ';
      }
    } else {
      result += str[i];
    }
  }
  return result;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function replaceEverySecondSpace', () => {
  expect(replaceEverySecondSpace).to.be.a('function');
});

it('Function replaceEverySecondSpace should not include method split()', () => {
  expect(replaceEverySecondSpace.toString().includes('split(')).to.be.false;
});

it('Function replaceEverySecondSpace should not include method join()', () => {
  expect(replaceEverySecondSpace.toString().includes('join(')).to.be.false;
});

it('Function replaceEverySecondSpace should not include method replace()', () => {
  expect(replaceEverySecondSpace.toString().includes('replace(')).to.be.false;
});

it('replaceEverySecondSpace("row row row your boat") should return "row row_row your_boat"', () => {
  expect(replaceEverySecondSpace('row row row your boat')).to.equal('row row_row your_boat');
});

it('replaceEverySecondSpace("a b c d e f g h i j k l") should return "a b_c d_e f_g h_i j_k l"', () => {
  expect(replaceEverySecondSpace('a b c d e f g h i j k l')).to.equal('a b_c d_e f_g h_i j_k l');
});

it('replaceEverySecondSpace("once upon") should return "once upon"', () => {
  expect(replaceEverySecondSpace('once upon')).to.equal('once upon');
});

it('replaceEverySecondSpace("  once upon a time  ") should return "once upon_a time"', () => {
  expect(replaceEverySecondSpace('  once upon a time  ')).to.equal('once upon_a time');
});

it('replaceEverySecondSpace("one two three four five six seven eight nine ten") should return "one two_three four_five six_seven eight_nine ten"', () => {
  expect(replaceEverySecondSpace('one two three four five six seven eight nine ten')).to.equal('one two_three four_five six_seven eight_nine ten');
});

it('replaceEverySecondSpace("only") should return "only"', () => {
  expect(replaceEverySecondSpace('only')).to.equal('only');
});

it('replaceEverySecondSpace("  only  ") should return "only"', () => {
  expect(replaceEverySecondSpace('  only  ')).to.equal('only');
});

it('replaceEverySecondSpace("") should return ""', () => {
  expect(replaceEverySecondSpace('')).to.equal('');
});

it('replaceEverySecondSpace(" ") should return ""', () => {
  expect(replaceEverySecondSpace(' ')).to.equal('');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
