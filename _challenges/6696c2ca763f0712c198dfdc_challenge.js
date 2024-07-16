// NAMEEN:
// NAMERU:Функция, которая возвращает 2 строки. Символ переноса строки.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Если в строке добавить символ переноса строки `\n`, то можно написать несколько строк с переносом.

Попробуйте:
```javascript
const str = 'Hello\nWorld';
console.log(str);
```

Напишите функцию `twoLines`, которая принимает два параметра `str1` и `str2` и возвращает их склеенные в одну строку, где между ними будет символ переноса строки.

Очень похожий пример:
```javascript
function lines(line1, line2) {
  return line1 + '\n' + line2;
}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function twoLines(str1, str2) {
  return str1 + '\n' + str2;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function twoLines', () => {
  expect(twoLines).to.be.a('function');
});

it('Function get `Hello` and `World` and return `Hello\nWorld`', () => {
  expect(twoLines('Hello', 'World')).to.equal('Hello\nWorld');
})

it('Function get `Learn` and `JS` and return `Learn\nJS`', () => {
  expect(twoLines('Learn', 'JS')).to.equal('Learn\nJS');
})
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
