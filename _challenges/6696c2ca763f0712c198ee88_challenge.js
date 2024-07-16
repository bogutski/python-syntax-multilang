// NAMEEN:
// NAMERU:Функция для дешифровки кода

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `decryptTheCode` принимает строку, в которой зашифровано слово или предложение.

Для расшифровки нужно перевернуть строку и убрать все кроме букв.

В функции есть три ошибки, которые нужно найти и исправить.

Разберитесь в коде и постарайтесь переписать его самостоятельно.


Примеры запуска функции:
```javascript
decryptTheCode('54@3$#@142e@)434lp5#p%6a$7'); // 'apple'
decryptTheCode('!y23@4k5#68s7$');             // 'sky'
decryptTheCode('');                           // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function decryptTheCode(str){
  const newStr = '';
  for(let i = str.length - 1; i >= 0; i--) {
    else if (str[i] === str[i].toLowerCase() && str[i] === str[i].toUpperCase()) {
      break;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function decryptTheCode(str){
  let newStr = '';
  for(let i = str.length - 1; i >= 0; i--) {
    if (str[i] === str[i].toLowerCase() && str[i] === str[i].toUpperCase()) {
      continue;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function decryptTheCode', () => {
  expect(decryptTheCode).to.be.a('function');
});

it("decryptTheCode('d!@l 34$ r324 o2w o2 l!l4 e5h') should return 'helloworld'", () => {
  expect(decryptTheCode('d!@l 34$ r324 o2w o2 l!l4 e5h')).to.equal('helloworld');
});

it("decryptTheCode('..!^<v$ 5536s_+a )(;p+0!@#') should return 'pasv'", () => {
  expect(decryptTheCode('..!^<v$ 5536s_+a )(;p+0!@#')).to.equal('pasv');
});

it("decryptTheCode('[w092@o$45%hS32VT*e24t.5iro>535v.aFr.57u6oY.868.sI9.78..9ta..979h#8w?') should return 'whatIsYourFavoriteTVShow'", () => {
  expect(decryptTheCode('[w092@o$45%hS32VT*e24t.5iro>535v.aFr.57u6oY.868.sI9.78..9ta..979h#8w?')).to.equal('whatIsYourFavoriteTVShow');
});

it("decryptTheCode('sd7& 5n&! $&ei5r3(^!5Fs ^Iw(oh6%4S$@ 7et75i($r 71!5ov(a#7!Fy8#M5') should return 'MyFavoriteShowIsFriends'", () => {
  expect(decryptTheCode('sd7& 5n&! $&ei5r3(^!5Fs ^Iw(oh6%4S$@ 7et75i($r 71!5ov(a#7!Fy8#M5')).to.equal('MyFavoriteShowIsFriends');
});

it("decryptTheCode('') should return ''", () => {
  expect(decryptTheCode('')).to.equal('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
