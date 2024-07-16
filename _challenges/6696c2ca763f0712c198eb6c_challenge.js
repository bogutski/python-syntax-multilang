// NAMEEN:
// NAMERU:Перевернуть строку, за исключением элементов с определенными индексами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverse`, которая принимает строку без пробелов и два индекса.

Функция должна вернуть строку, которая включает в себя исходную строку и перевернутую строку, через пробел.

В цикле должна быть проверка на индексы, которые передаются в параметрах функции. Элементы с этими индексами не должны быть перевернуты и не должны быть включены в итоговую строку.

Например:
* строка `12345` и индексы `0` и `1` должны вернуть `12345 543`, где:
* `12345` - исходная строка плюс пробел
* `543` - перевернутая строка, кроме индексов `0` и `1`

В случае, если строка пустая, то функция должна вернуть: `nothing to reverse`.

Примеры запуска функции:
```javascript
reverse('hello', 0, 4) // 'hello lle'
reverse('world', 1, 2) // 'world dlw'
reverse('123', 5, 6) // '123 321'
reverse('', 0, 0) // 'nothing to reverse'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverse(str, index1, index2) {
  if(str.length === 0) return 'nothing to reverse';
  let reversed = '';
  for(let i = 0; i < str.length; i++) {
    if(i === index1 || i === index2) continue;
    else reversed = str[i] + reversed;
  }
  return str + ' ' + reversed;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverse', () => {
  expect(reverse).to.be.a('function');
});

it("reverse('hello', 0, 4) should return 'hello lle'", () => {
  expect(reverse('hello', 0, 4)).to.equal('hello lle');
});

it("reverse('world', 1, 2) should return 'world dlw'", () => {
  expect(reverse('world', 1, 2)).to.equal('world dlw');
});

it("reverse('applepie', 2, 5) should return 'applepie eielpa", () => {
  expect(reverse('applepie', 2, 5)).to.equal('applepie eielpa');
});

it("reverse('javascript', 0, 9) should return 'javascript pircsava'", () => {
  expect(reverse('javascript', 0, 9)).to.equal('javascript pircsava');
});

it("reverse('cheese', 5, 4) should return 'cheese eehc'", () => {
  expect(reverse('cheese', 5, 4)).to.equal('cheese eehc');
});

it("reverse('grapefruit', 10, 11) should return 'grapefruit tiurfeparg'", () => {
  expect(reverse('grapefruit', 10, 11)).to.equal('grapefruit tiurfeparg');
});

it("reverse('', 0, 0) should return 'nothing to reverse'", () => {
  expect(reverse('', 0, 0)).to.equal('nothing to reverse');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
