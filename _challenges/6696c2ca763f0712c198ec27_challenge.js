// NAMEEN:
// NAMERU:Замена символа на его индекс

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `replaceElWithIndex`, которая принимает строку и символ.

Функция должна вернуть новую строку, которая содержит все символы из исходной строки, кроме тех, что совпадают с символом, переданным вторым аргументом.

Вместо этих символов в новой строке должны быть их индексы в исходной строке.

Например, `replaceElWithIndex('abc', 'b')` должна вернуть `'a1c'`, потому что символ `b` имеет индекс `1` в строке `abc`.

Во время проверке элемента на совпадение с символом, необходимо привести элемент и символ к одному регистру.


Примеры запуска функции:
```javascript
replaceElWithIndex('Hello World', 'l'); // 'He23o Wor9d'
replaceElWithIndex('PulchrItudinous', 'i'); // 'Pulchr6tud10nous'
replaceElWithIndex('', ''); // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function replaceElWithIndex(str, el) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === el.toLowerCase()) newStr += i;
    else newStr += str[i];
  }
  return newStr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function replaceElWithIndex', () => {
  expect(replaceElWithIndex).to.be.a('function');
});

it("replaceElWithIndex('Hello World', 'l') returns 'He23o Wor9d'", () => {
  expect(replaceElWithIndex('Hello World', 'l')).to.eq('He23o Wor9d');
});

it("replaceElWithIndex('HullAballoo', 'a') returns 'Hull4b6lloo'", () => {
  expect(replaceElWithIndex('HullAballoo', 'a')).to.eq('Hull4b6lloo');
});

it("replaceElWithIndex('Bumbershoot', 'O') returns 'Bumbersh89t'", () => {
  expect(replaceElWithIndex('Bumbershoot', 'O')).to.eq('Bumbersh89t');
});

it("replaceElWithIndex('PulchrItudinous', 'i') returns 'Pulchr6tud10nous'", () => {
  expect(replaceElWithIndex('PulchrItudinous', 'i')).to.eq('Pulchr6tud10nous');
});

it("replaceElWithIndex('', '') returns ''", () => {
  expect(replaceElWithIndex('', '')).to.eq('');
});

it("replaceElWithIndex('', 'w') returns ''", () => {
  expect(replaceElWithIndex('', 'w')).to.eq('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
