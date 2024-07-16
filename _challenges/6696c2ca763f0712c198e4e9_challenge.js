// NAMEEN:
// NAMERU:Проверить, что в конце строки есть точка

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isSentenceClosed`, которая принимает строку и возвращает `true`, если строка заканчивается на точку, восклицательный знак или вопросительный знак.

Не учитывайте пробелы в начале и конце строки.

Примеры:
```javascript
isSentenceClosed(' Hello. How are you?   '); // true
isSentenceClosed('Hello! How are you     '); // false
isSentenceClosed('  Hello. Ok!   '); // true
isSentenceClosed('Hello? Ok,   '); // false
isSentenceClosed(' Hello. Ok  '); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
// use trimn and lastIndexOf
function isSentenceClosed(str) {
  const s = str.trim();
  return (
    s.lastIndexOf('.') === s.length - 1 ||
    s.lastIndexOf('!') === s.length - 1 ||
    s.lastIndexOf('?') === s.length - 1
  );
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isSentenceClosed', () => {
  expect(isSentenceClosed).to.be.a('function');
});

it('isSentenceClosed(" Hello. How are you?   ") should return true', () => {
  expect(isSentenceClosed(' Hello. How are you?   ')).to.be.true;
});

it('isSentenceClosed("Hello! How are you     ") should return false', () => {
  expect(isSentenceClosed('Hello! How are you     ')).to.be.false;
});

it('isSentenceClosed("  Hello. Ok!   ") should return true', () => {
  expect(isSentenceClosed('  Hello. Ok!   ')).to.be.true;
});

it('isSentenceClosed("Hello? Ok,   ") should return false', () => {
  expect(isSentenceClosed('Hello? Ok,   ')).to.be.false;
});

it('isSentenceClosed(" Hello. Ok  ") should return false', () => {
  expect(isSentenceClosed(' Hello. Ok  ')).to.be.false;
});

it('isSentenceClosed(" Hello. Ok.  ") should return true', () => {
  expect(isSentenceClosed(' Hello. Ok.  ')).to.be.true;
});

it('isSentenceClosed(" Hello. Ok!  ") should return true', () => {
  expect(isSentenceClosed(' Hello. Ok!  ')).to.be.true;
});

it('isSentenceClosed(" Hello. Ok?  ") should return true', () => {
  expect(isSentenceClosed(' Hello. Ok?  ')).to.be.true;
});

it('isSentenceClosed(" Hello. Ok.  ") should return true', () => {
  expect(isSentenceClosed(' Hello. Ok.  ')).to.be.true;
});

it('isSentenceClosed(" Hello. Ok!  ") should return true', () => {
  expect(isSentenceClosed(' Hello. Ok!  ')).to.be.true;
});

it('isSentenceClosed(" Hello. Ok  ") should return false', () => {
  expect(isSentenceClosed(' Hello. Ok  ')).to.be.false;
});

it('isSentenceClosed(" Hello. Ok,  ") should return false', () => {
  expect(isSentenceClosed(' Hello. Ok,  ')).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
