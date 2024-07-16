// NAMEEN:
// NAMERU:Поменяйте слова местами и сделайте буквы заглавными

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Фукция `switchAndCapital` принимает строку и меняет местами первое и последнее слово, а также делает буквы в этих славах заглавными.

Первое слово может отделяться пробелом, запятой, восклицательным знаком или вопросительным знаком `' ', ',', '!', '?'`.

Попробуйте решить данную задачу с помощью метода `substring`.

Примеры запуска функции:
```javascript
switchAndCapital("JS! I will learn you") // "YOU! I will learn JS"
switchAndCapital("JavaScript? I know it already") // "ALREADY? I know it JAVASCRIPT"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function switchAndCapital(str) {
  let firstWord;
  for (let i = 0; i < str.length; i++) {
    if (',!? '.includes(str[i])) {
      firstWord = str.substring(0, i);
      break;
    }
  }
  let lastWord = str.substring(str.lastIndexOf(' ') + 1);
  return lastWord.toUpperCase() + str.substring(firstWord.length, str.lastIndexOf(' ') + 1) + firstWord.toUpperCase();
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function switchAndCapital', () => {
  expect(switchAndCapital).to.be.a('function');
});

it('switchAndCapital("PASV, I like to study here") returns "HERE, I like to study PASV"', () => {
  expect(switchAndCapital('PASV, I like to study here')).to.equal('HERE, I like to study PASV');
});

it('switchAndCapital("JS! I will learn you") returns "YOU! I will learn JS"', () => {
  expect(switchAndCapital('JS! I will learn you')).to.equal('YOU! I will learn JS');
});

it('switchAndCapital("language will be my favourite JavaScript") returns "JAVASCRIPT will be my favourite LANGUAGE"', () => {
  expect(switchAndCapital('language will be my favourite JavaScript')).to.equal('JAVASCRIPT will be my favourite LANGUAGE');
});

it('switchAndCapital("professional? I am almost Student") returns "STUDENT? I am almost PROFESSIONAL"', () => {
  expect(switchAndCapital('professional? I am almost Student')).to.equal('STUDENT? I am almost PROFESSIONAL');
});

it('switchAndCapital("JavaScript? I know it already") returns "ALREADY? I know it JAVASCRIPT"', () => {
  expect(switchAndCapital('JavaScript? I know it already')).to.equal('ALREADY? I know it JAVASCRIPT');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
