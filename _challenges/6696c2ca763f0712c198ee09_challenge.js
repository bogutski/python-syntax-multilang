// NAMEEN:
// NAMERU:Исправьте текст, чтобы все предложения заканчивались точкой

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `replacePunctuation`, которая принимает строку.
Строка - произвольный текст, составленный из одного или нескольких предложений, разделенных разными знаками препинания.
Функция должна вернуть новую строку, в которой все `!` и `?` заменены на точки.

Примеры запуска функции:
```javascript
replacePunctuation('Hello! How are you?'); // 'Hello. How are you.'
replacePunctuation('Hi! What is your name again? Is it Alice? I am so sorry. How could I forget?'); // 'Hi. What is your name again. Is it Alice. I am so sorry. How could I forget.'
replacePunctuation('Hello! My name is Alice. I am 20 years old. I am a student.'); // 'Hello. My name is Alice. I am 20 years old. I am a student.'
replacePunctuation(''); // ''
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function replacePunctuation
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function replacePunctuation(text) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '!' || text[i] === '?') {
      result += '.';
    } else {
      result += text[i];
    }
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function replacePunctuation', () => {
  expect(replacePunctuation).to.be.a('function');
});

it('Function replacePunctuation should not contain replace()', () => {
  expect(replacePunctuation.toString()).to.not.include('replace(');
});

it('Function replacePunctuation should not contain replaceAll()', () => {
  expect(replacePunctuation.toString()).to.not.include('replaceAll(');
});

it('replacePunctuation("Hello! How are you?") should return "Hello. How are you."', () => {
  expect(replacePunctuation('Hello! How are you?')).to.equal('Hello. How are you.');
});

it('replacePunctuation("Hi! What is your name again? Is it John? I am so sorry. How could I forget?") should return "Hi. What is your name again. Is it John. I am so sorry. How could I forget."', () => {
  expect(replacePunctuation('Hi! What is your name again? Is it John? I am so sorry. How could I forget?')).to.equal('Hi. What is your name again. Is it John. I am so sorry. How could I forget.');
});

it('replacePunctuation("Hello! My name is John Smith. I am 23 years old. I am a student.") should return "Hello. My name is John Smith. I am 23 years old. I am a student."', () => {
  expect(replacePunctuation('Hello! My name is John Smith. I am 23 years old. I am a student.')).to.equal('Hello. My name is John Smith. I am 23 years old. I am a student.');
});

it('replacePunctuation("Hey!!! What is going on? My dear friend, I am so glad to see you!.") should return "Hey... What is going on. My dear friend, I am so glad to see you.."', () => {
  expect(replacePunctuation('Hey!!! What is going on? My dear friend, I am so glad to see you!.')).to.equal('Hey... What is going on. My dear friend, I am so glad to see you..');
});
it('replacePunctuation("") should return ""', () => {
  expect(replacePunctuation('')).to.equal('');
});

it('replacePunctuation("?!") should return ".."', () => {
  expect(replacePunctuation('?!')).to.equal('..');
});

it('replacePunctuation("Hello!?") should return "Hello.."', () => {
  expect(replacePunctuation('Hello!?')).to.equal('Hello..');
});

it('replacePunctuation("!") should return "."', () => {
  expect(replacePunctuation('!')).to.equal('.');
});

it('replacePunctuation(".") should return "."', () => {
  expect(replacePunctuation('.')).to.equal('.');
});

it('replacePunctuation(" ? ") should return " . "', () => {
  expect(replacePunctuation(' ? ')).to.equal(' . ');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
