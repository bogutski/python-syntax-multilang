// NAMEEN:
// NAMERU: Разделение строки на буквы и символы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `lettersAndSymbols`, которая принимает строку и возвращает массив из двух строк.

Первая строка содержит только буквы, вторая - только символы, включая пробелы.

Буквы могут быть в любом регистре.


Примеры запуска функции:
```javascript
lettersAndSymbols('Hello World!') // ['HelloWorld', ' !']
lettersAndSymbols('!J%a^Va') // ['JaVa', '!%^']
lettersAndSymbols('banana') // ['banana', '']
lettersAndSymbols('') // ['', '']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function lettersAndSymbols(str) {
  let letters = '';
  let symbols = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase() && str[i] === str[i].toUpperCase()) symbols += str[i];
    else letters += str[i];
  }
  return [letters, symbols];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function lettersAndSymbols', () => {
  expect(lettersAndSymbols).to.be.a('function');
});

it("lettersAndSymbols('Hello World!') returns ['HelloWorld', ' !'] ", () => {
  expect(lettersAndSymbols('Hello World!')).to.eql(['HelloWorld', ' !']);
});

it("lettersAndSymbols('!J%a^Va :S c{()} R <<>> i pT!',) returns ['JaVaScRipT', '!%^ : {()}  <<>>  !'] ", () => {
  expect(lettersAndSymbols('!J%a^Va :S c{()} R <<>> i pT!')).to.eql(['JaVaScRipT', '!%^ : {()}  <<>>  !']);
});

it("lettersAndSymbols('banana') returns ['banana', ''] ", () => {
  expect(lettersAndSymbols('banana')).to.eql(['banana', '']);
});

it("lettersAndSymbols('1_+-23 4#567 8@90') returns ['', '1_+-23 4#567 8@90'] ", () => {
  expect(lettersAndSymbols('1_+-23 4#567 8@90')).to.eql(['', '1_+-23 4#567 8@90']);
});

it("lettersAndSymbols('') returns ['', ''] ", () => {
  expect(lettersAndSymbols('')).to.eql(['', '']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
