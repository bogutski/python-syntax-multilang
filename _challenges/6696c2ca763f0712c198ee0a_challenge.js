// NAMEEN:
// NAMERU:Отформатируйте предложение

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `formatSentence` принимает строку, в которой записано одно предложение.
Это предложение нужно отформатировать и вернуть полученный результат.

Нужно убедиться, что первое слово в предложении начинается с большой буквы, и предложение оканчивается точкой или другим знаком препинания.

Допустимые знаки препинания: точка, восклицательный знак, вопросительный знак.

Если предложение записано с ошибками, то нужно исправить предложение и вернуть правильный вариант.

Если первая буква в предложении не является заглавной, то нужно заменить ее на заглавную.

Если в конце предложения нет точки или другого допустимого знака препинания, то нужно добавить точку.

Если предложение записано правильно или содержит пустую строку, то нужно вернуть его без изменений.

Примеры запуска функции:
```javascript
formatSentence('hello world'); // 'Hello world.'
formatSentence('The rain has stopped and the sun is out.'); // 'The rain has stopped and the sun is out.'
formatSentence(''); // ''
```

Исправьте ошибки в коде функции `formatSentence` так, чтобы она работала правильно.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function formatSentence(sentence) {
  if (sentence === '!') return ''; // empty string

  const firstLetter = sentence[0].toLowerCase(); //capitalize first letter
  const lastLetter = sentence[sentence.length - 1]; //get last letter
  const newSentence = sentenc; //we assume that sentence is correct

  if (firstLetter !== sentence[0]) { // check if first letter is lowercase
    newSentence = firstLetter; // rewrite newSentence with capitalized first letter
    for (let i=1; i<sentence.length; i++) { //copy the rest of the sentence as it is
      newSentence += sentence;
    }
  }

  if (lastLetter !== '.' &&  lastLetter !== '!' && lastLetter !== '?' ) { // check the last letter
    newSentence = newSentence + '/';
  }

  return new;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function formatSentence(sentence) {
  if (sentence === '') return ''; // empty string

  const firstLetter = sentence[0].toUpperCase(); //capitalize first letter
  const lastLetter = sentence[sentence.length - 1]; //get last letter
  let newSentence = sentence; //we assume that sentence is correct

  if (firstLetter !== sentence[0]) { // check if first letter is lowercase
    newSentence = firstLetter; // rewrite newSentence with capitalized first letter
    for (let i=1; i<sentence.length; i++) { //copy the rest of the sentence as it is
      newSentence += sentence[i];
    }
  }

  if (lastLetter !== '.' &&  lastLetter !== '!' && lastLetter !== '?' ) { // check the last letter
    newSentence = newSentence + '.';
  }

  return newSentence;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function formatSentence', () => {
  expect(formatSentence).to.be.a('function');
});

it('Function formatSentence should not include split() method', () => {
  expect(formatSentence.toString()).to.not.include('.split(');
});

it('Function formatSentence should not include replace() method', () => {
  expect(formatSentence.toString()).to.not.include('.replace(');
});

it('Function formatSentence should not include slice() method', () => {
  expect(formatSentence.toString()).to.not.include('.slice(');
});

it('Function formatSentence should not include substring() method', () => {
  expect(formatSentence.toString()).to.not.include('.substring(');
});

it('Function formatSentence should not include substr() method', () => {
  expect(formatSentence.toString()).to.not.include('.substr(');
});

it('formatSentence("hello world") should return "Hello world."', () => {
  expect(formatSentence('hello world')).to.equal('Hello world.');
});

it('formatSentence("hello world!") should return "Hello world!"', () => {
  expect(formatSentence('hello world!')).to.equal('Hello world!');
});

it('formatSentence("What is up?") should return "What is up?"', () => {
  expect(formatSentence('What is up?')).to.equal('What is up?');
});

it('formatSentence("what is your name?") should return "What is your name?"', () => {
  expect(formatSentence('what is your name?')).to.equal('What is your name?');
});

it('formatSentence("i") should return "I."', () => {
  expect(formatSentence('i')).to.equal('I.');
});

it('formatSentence(".") should return "."', () => {
  expect(formatSentence('.')).to.equal('.');
});

it('formatSentence("The rain has stopped and the sun is out.") should return "The rain has stopped and the sun is out."', () => {
  expect(formatSentence('The rain has stopped and the sun is out.')).to.equal('The rain has stopped and the sun is out.');
});

it('formatSentence("") should return ""', () => {
  expect(formatSentence('')).to.equal('');
});

it('formatSentence("train will arrive at 12:00") should return "Train will arrive at 12:00."', () => {
  expect(formatSentence('train will arrive at 12:00')).to.equal('Train will arrive at 12:00.');
});

it('formatSentence("tom and his friend went to the cinema.") should return "Tom and his friend went to the cinema."', () => {
  expect(formatSentence('tom and his friend went to the cinema.')).to.equal('Tom and his friend went to the cinema.');
});

it('formatSentence("i am a student.") should return "I am a student."', () => {
  expect(formatSentence('i am a student.')).to.equal('I am a student.');
});

it('formatSentence("i am a student") should return "I am a student."', () => {
  expect(formatSentence('i am a student')).to.equal('I am a student.');
});

it('formatSentence("!") should return "!"', () => {
  expect(formatSentence('!')).to.equal('!');
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
