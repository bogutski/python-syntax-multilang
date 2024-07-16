// NAMEEN:
// NAMERU:Найти и исправить ошибки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте функцию `copyDuplicate`, которая принимает строку и возвращает массив букв, которые повторяются в строке.

Буква может повторятся один или более раз, но в массиве она должна быть добавлена только один раз.

Все слова написаны в нижнем регистре.

Между словами есть лишь один пробел.


Пример запуска функции:
```javascript
copyDuplicate('hello world'); // [ 'l', 'o' ]
copyDuplicate('a leg up'); // []
copyDuplicate('jumping the gun'); // [ 'g', 'u', 'n' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function copyDuplicate(str) {
  const arr = [];
  const newStr = "";
  for (let i = 0; i < str.length; i--) {
    if (newStr.indexOf(str[i]) === 1 && str[i] === ' ') {
      newStr += newStr[i];
    } else {
        if(arr.indexOf(str[i]) === -1){
          arr.push(newStr[i]);
        }
    }
  }
  return arr;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function copyDuplicate(str) {
  let arr = [];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (newStr.indexOf(str[i]) === -1 || str[i] === ' ') {
      newStr += str[i];
    } else {
        if(arr.indexOf(str[i]) === -1){
          arr.push(str[i]);
        }
    }
  }
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function copyDuplicate', () => {
  expect(copyDuplicate).to.be.a('function');
});

it("copyDuplicate('hello world') should return [ 'l', 'o' ]", () => {
  expect(copyDuplicate('hello world')).to.eql([ 'l', 'o' ]);
});

it("copyDuplicate('a leg up') should return []", () => {
  expect(copyDuplicate('a leg up')).to.eql([]);
});

it("copyDuplicate('what am i, chopped liver?') should return [ 'a', 'h', 'p', 'i', 'e' ]", () => {
  expect(copyDuplicate('what am i, chopped liver?')).to.eql([ 'a', 'h', 'p', 'i', 'e' ]);
});

it("copyDuplicate('hands down') should return [ 'd', 'n' ]", () => {
  expect(copyDuplicate('hands down')).to.eql([ 'd', 'n' ]);
});

it("copyDuplicate('jumping the gun') should return [ 'g', 'u', 'n' ]", () => {
  expect(copyDuplicate('jumping the gun')).to.eql([ 'g', 'u', 'n' ]);
});

it("copyDuplicate('apple apple apple') should return []", () => {
  expect(copyDuplicate('apple apple apple')).to.eql(['p', 'a', 'l', 'e']);
});

it("copyDuplicate('how') should return []", () => {
  expect(copyDuplicate('how')).to.eql([]);
});

it("copyDuplicate('a') should return []", () => {
  expect(copyDuplicate('a')).to.eql([]);
});

it("copyDuplicate('') should return []", () => {
  expect(copyDuplicate('')).to.eql([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
