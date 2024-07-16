// NAMEEN:
// NAMERU:Сделайте смешную фразу, поменяв слова местами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Обычно имя при обращении выделяется в запятые или другие знаки препинания. Например, "Алиса, как дела?".

Напишите функцию `funnyPhrase`, которая принимает строку и меняет местами первое и последнее слова в строке.

Например "дела, как Алиса?".

При этом последний символ (знак препинания) должен остаться на своем месте.

Последним символом в строке всегда будет знак препинания.

А первое слово может быть отделено следующими знаками `',' '!' '?' '.'`.

Необходимо исправить ошибки в коде, проанализировать его и попробовать повторить.
В коде встречаются только синтаксические ошибки (запятые, точки с запятой, скобки и т.д.).

Задача решена только при помощи циклов и условий.

Пример запуска функции:
```javascript
funnyPhrase('Alice! where is your home?') // 'home! where is your Alice?'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function funnyPhrase(str) {
  let firstWord ;
  let lastWord ;
  let restPart;
  for (let i = 0; i < str.length; i++) {
    if (",!?.".includes(str[i]) === 'false') firstWord += str[i]
    else break;
  }
  let lastSpaceIndex = str.lastIndexOf(space);
  for (let i = lastSpaceIndex + 1; i < str.length - 1; i++)
    lastWord += str[i]

  for (let i = firstWord.length; i <= lastSpaceIndex; i++) {
    restPart += str[i]
  }
  return lastWord + restPart + firstWord + str[str.length - 1];
}

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function funnyPhrase(str) {
  let firstWord = '';
  let lastWord = '';
  let restPart = '';
  for (let i = 0; i < str.length; i++) {
    if (",!?.".includes(str[i]) === false) firstWord += str[i]
    else break;
  }
  let lastSpaceIndex = str.lastIndexOf(' ');
  for (let i = lastSpaceIndex + 1; i < str.length - 1; i++)
    lastWord += str[i]

  for (let i = firstWord.length; i <= lastSpaceIndex; i++) {
    restPart += str[i]
  }
  return lastWord + restPart + firstWord + str[str.length - 1];
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function funnyPhrase', () => {
  expect(funnyPhrase).to.be.a('function');
});

it('funnyPhrase("Alice, where your home?") returns "home, where your Alice?"', () => {
  expect(funnyPhrase('Alice, where your home?')).to.equal('home, where your Alice?');
});

it('funnyPhrase("Bob! where your car?") returns "car! where your Bob?"', () => {
  expect(funnyPhrase('Bob, where your car?')).to.equal('car, where your Bob?');
});

it('funnyPhrase("John. Where your dog?") returns "dog. Where your John?"', () => {
  expect(funnyPhrase('John, where your dog?')).to.equal('dog, where your John?');
});

it('funnyPhrase("Mary, go out of the house!") returns "house, go out of the Mary!"', () => {
  expect(funnyPhrase('Mary, go out of the house!')).to.equal('house, go out of the Mary!');
});

it('funnyPhrase("Alice? or Anna?") returns "Anna? or Alice?"', () => {
  expect(funnyPhrase('Alice? or Anna?')).to.equal('Anna? or Alice?');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
