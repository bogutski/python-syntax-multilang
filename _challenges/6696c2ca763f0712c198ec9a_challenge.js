// NAMEEN:
// NAMERU:Сколько гласных и согласных букв в строке? Исправьте код

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `checkStr` принимает строку `str` в качестве параметра. Строка может содержать гласные и согласные буквы в нижнем регистре.

Функция должна вернуть объект с двумя свойствами: `vowel` и `consonant`.

Значениями этих свойств должны быть числа, которые соответствуют количеству гласных и согласных букв в строке.

Исправьте ошибке в коде, чтобы он работал правильно.

Примеры запуска функции:
```javascript
checkStr('hello'); // { vowel: 2, consonant: 3 }
checkStr('world'); // { vowel: 1, consonant: 4 }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function checkStr(str) {
  let vowel;
  let consonant ;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'e' && str[i] === 'u' && str[i] === 'i' && str[i] === 'o' && str[i] === 'a') {
      vowel += 1;
    } else consonant += 1;
  }
  return {
    vowel = vowel,
    consonant = consonant
  }
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function checkStr(str) {
  let vowel = 0
  let consonant = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'e' || str[i] === 'u' || str[i] === 'i' || str[i] === 'o' || str[i] === 'a') {
      vowel += 1;
    } else consonant += 1;
  }
  return {
    vowel,
    consonant
  }
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function checkStr', () => {
  expect(checkStr).to.be.a('function');
});

it('checkStr("hello") should return { vowel: 2, consonant: 3 }', () => {
  expect(checkStr('hello')).eql({vowel: 2, consonant: 3});
});

it('checkStr("world") should return { vowel: 1, consonant: 4 }', () => {
  expect(checkStr('world')).eql({vowel: 1, consonant: 4});
});

it('checkStr("a") should return { vowel: 1, consonant: 0 }', () => {
  expect(checkStr('a')).eql({vowel: 1, consonant: 0});
});

it('checkStr("b") should return { vowel: 0, consonant: 1 }', () => {
  expect(checkStr('b')).eql({vowel: 0, consonant: 1});
});

it('checkStr("") should return { vowel: 0, consonant: 0 }', () => {
  expect(checkStr('')).eql({vowel: 0, consonant: 0});
});

it('checkStr("aeiou") should return { vowel: 5, consonant: 0 }', () => {
  expect(checkStr('aeiou')).eql({vowel: 5, consonant: 0});
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
