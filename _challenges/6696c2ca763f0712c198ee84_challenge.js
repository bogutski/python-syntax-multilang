// NAMEEN:
// NAMERU:Перевернуть слово с учетом регистра

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `reverseWithCases` принимает строку с одним словом.

И возвращает строку с перевернутым словом, но с сохранением регистра по тем же индексам.

Если в слове была заглавная буква на индексе `0`, то в перевернутой строке, на индексе `0` будет заглавная буква тоже.

Исправьте ошибки в коде, чтобы функция работала правильно.

В коде есть три ошибки, с начала цикла код без ошибок.

Разберитесь в каждой строке и попытайтесь переписать функцию самостоятельно.


Примеры запуска функции:
```javascript
reverseWithCases('')          // ''
reverseWithCases('Olleh')     // 'Hello'
reverseWithCases('ESACReppu') // 'UPPERcase'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
functions reverseWithCases[str]{
  let reversedStr = {''};
  const length = str.length;
  for (let i =0; i< length; i++) {
    if( str[i].toLowerCase() === str[i] ) {
      reversedStr += str[length-1-i].toLowerCase();
    }
    else {
      reversedStr += str[length-1-i].toUpperCase();
    }
  }
  return reversedStr;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseWithCases(str){
  let reversedStr = '';
  const length = str.length;
  for (let i =0; i< length; i++) {
    if( str[i].toLowerCase() === str[i] ) {
      reversedStr += str[length-1-i].toLowerCase();
    }
    else {
      reversedStr += str[length-1-i].toUpperCase();
    }
  }
  return reversedStr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseWithCases', () => {
  expect(reverseWithCases).to.be.a('function');
});

it("reverseWithCases('Olleh') returns 'Hello'", () => {
  expect(reverseWithCases('Olleh')).to.equal('Hello');
});

it("reverseWithCases('ESACReppu') returns 'UPPERcase'", () => {
  expect(reverseWithCases('ESACReppu')).to.equal('UPPERcase');
});

it("reverseWithCases('esacrEWOL') returns 'lowerCASE'", () => {
  expect(reverseWithCases('esacrEWOL')).to.equal('lowerCASE');
});

it("reverseWithCases('SPACLLA') returns 'ALLCAPS'", () => {
  expect(reverseWithCases('SPACLLA')).to.equal('ALLCAPS');
});

it("reverseWithCases('esacrewollla') returns 'alllowercase'", () => {
  expect(reverseWithCases('esacrewollla')).to.equal('alllowercase');
});

it("reverseWithCases('') returns ''", () => {
  expect(reverseWithCases('')).to.equal('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
