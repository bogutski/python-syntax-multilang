// NAMEEN:
// NAMERU:Записать второе слово

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `secondWord`, которая принимает строку `str` и возвращает новую строку со вторым словом из `str`.

Между словами есть лишь один пробел.

Если в `str` одно слово (иными словами нет пробелов), то функция должна вернуть `'Second word was not found'`.


Пример запуска функции:
```javascript
secondWord('first'); // 'Second word was not found'
secondWord('first second'); // 'second'
secondWord('Shawn Taylor Tanya Cleo'); // 'Taylor'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function secondWord(str) {
  let newStr = '';
  const firstSpace = str.indexOf(' ') + 1;
  if(firstSpace === 0) return 'Second word was not found';
  for(let i = firstSpace; i < str.length; i++){
    if(str[i] === ' ') break;
    newStr += str[i];
  }
  return newStr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function secondWord', () => {
  expect(secondWord).to.be.a('function');
});

it("secondWord('first') should return 'Second word was not found'", () => {
  expect(secondWord('first')).to.equal('Second word was not found');
});

it("secondWord('first second') should return 'second'", () => {
  expect(secondWord('first second')).to.equal('second');
});

it("secondWord('first second third') should return 'second'", () => {
  expect(secondWord('first second third')).to.equal('second');
});

it("secondWord('Shawn Taylor Tanya, Cleo') should return 'Taylor'", () => {
  expect(secondWord('Shawn Taylor Tanya, Cleo')).to.equal('Taylor');
});

it("secondWord('') should return 'Second word was not found'", () => {
  expect(secondWord('')).to.equal('Second word was not found');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
