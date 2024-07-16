// NAMEEN:
// NAMERU:Разделение букв строки на гласные и согласные

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `splitVowelsAndConsonants`, которая принимает строку в качестве аргумента и возвращает объект с двумя свойствами: `vowels` (гласные буквы) и `consonants` (согласные буквы).

Значения этих свойств должны быть массивами, содержащими соответствующие буквы.

При добавлении букв в массив используйте метод unshift.

Обратите внимание, буквы будут в разном регистре.

Если гласных или согласных букв нет в строке, не добавляйте соответсвующее свойство в объект.


Пример запуска функции:
```javascript
splitVowelsAndConsonants('example'); // { vowels: [ 'e', 'a', 'e' ], consonants: [ 'l', 'p', 'm', 'x' ] }
splitVowelsAndConsonants('Test'); // { vowels: [ 'e' ], consonants: [ 't', 's', 'T' ] }
splitVowelsAndConsonants('eai'); // { vowels: [ 'i', 'a', 'e' ] }
splitVowelsAndConsonants(''); // {}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function splitVowelsAndConsonants(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function splitVowelsAndConsonants(word) {
  const res = {};
  const arrVowels = [];
  const arrConst = [];
  const vowels = 'euioaEUIOA';

  for(let letter of word){
    if(vowels.includes(letter)) arrVowels.unshift(letter);
    else arrConst.unshift(letter);
  }

  if(arrVowels.length) res.vowels = arrVowels;
  if(arrConst.length) res.consonants = arrConst;

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function splitVowelsAndConsonants', () => {
  expect(splitVowelsAndConsonants).to.be.a('function');
});

it("splitVowelsAndConsonants('example') should return { vowels: [ 'e', 'a', 'e' ], consonants: [ 'l', 'p', 'm', 'x' ] }", () => {
  expect(splitVowelsAndConsonants("example")).to.deep.equal({ vowels: [ 'e', 'a', 'e' ], consonants: [ 'l', 'p', 'm', 'x' ] });
});

it("splitVowelsAndConsonants('Test') should return { vowels: [ 'e' ], consonants: [ 't', 's', 'T' ] }", () => {
  expect(splitVowelsAndConsonants("Test")).to.deep.equal({ vowels: [ 'e' ], consonants: [ 't', 's', 'T' ] });
});

it("splitVowelsAndConsonants('eye') should return { vowels: [ 'e', 'e' ], consonants: [ 'y' ] }", () => {
  expect(splitVowelsAndConsonants("eye")).to.deep.equal({ vowels: [ 'e', 'e' ], consonants: [ 'y' ] });
});

it("splitVowelsAndConsonants('') should return { } for an empty string", () => {
  expect(splitVowelsAndConsonants("")).to.deep.equal({});
});

it("splitVowelsAndConsonants('bcdfghjklmnpqrstvwxyz') should return {consonants: ['z', 'y', 'x', 'w', 'v', 't', 's', 'r', 'q', 'p', 'n', 'm', 'l', 'k', 'j', 'h', 'g', 'f', 'd', 'c', 'b']}", () => {
  expect(splitVowelsAndConsonants("bcdfghjklmnpqrstvwxyz")).to.deep.equal({consonants: ['z', 'y', 'x', 'w', 'v', 't', 's', 'r', 'q', 'p', 'n', 'm', 'l', 'k', 'j', 'h', 'g', 'f', 'd', 'c', 'b']});
});

it("splitVowelsAndConsonants('AEIOUaeiou') should return {vowels: ['u', 'o', 'i', 'e', 'a', 'U', 'O', 'I', 'E', 'A']}", () => {
  expect(splitVowelsAndConsonants("AEIOUaeiou")).to.deep.equal({vowels: ['u', 'o', 'i', 'e', 'a', 'U', 'O', 'I', 'E', 'A']});
});

it("should verify that splitVowelsAndConsonants function is defined and is a function", () => {
  expect(splitVowelsAndConsonants).to.be.a('function');
});

it("splitVowelsAndConsonants('XYZxyz') should return { consonants: [ 'z', 'y', 'x', 'Z', 'Y', 'X' ] }", () => {
  expect(splitVowelsAndConsonants("XYZxyz")).to.deep.equal({ consonants: [ 'z', 'y', 'x', 'Z', 'Y', 'X' ] });
});

it("splitVowelsAndConsonants('') should return { }", () => {
  expect(splitVowelsAndConsonants("")).to.deep.equal({});
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
