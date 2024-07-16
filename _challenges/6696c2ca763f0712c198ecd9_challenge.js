// NAMEEN:
// NAMERU:Количество строчных букв и остальных символов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `numOfLowerCase` принимает строку и возвращает количество `букв` в нижнем регистре и количество `остальных букв/символов` в строке.

Функция должна возвращать строку в формате: `Lowercase: ${count} and other symbols: ${count}`
Если строка пустая, то функция должна возвращать строку: `String is empty`

Исправьте функцию, что бы она работала правильно.

Сделано всего три ошибки, цикл и все что после него - верно.

Постарайтесь разобраться в коде и переписать его самостоятельно.


Примеры запуска функции:
```javascript
numOfLowerCase('Hello World!') // 'Lowercase: 8 and other symbols: 4'
numOfLowerCase(' 135 8!0 %^')  // 'Lowercase: 0 and other symbols: 11'
numOfLowerCase('aBcDeFgHi')    // 'Lowercase: 5 and other symbols: 4'
numOfLowerCase('ICE')          // 'Lowercase: 0 and other symbols: 3'
numOfLowerCase('')             // 'String is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function numOfLowerCase(){
  if(str.length = 0) 'String is empty';
  let count = 0;
  for (let i = 0; i < str.length; i++){
    if(str[i] === str[i].toLowerCase() && str[i] === str[i].toUpperCase()) {
      continue;
    }
    if(str[i] === str[i].toLowerCase()){
      count++;
    }
  }
  return `Lowercase: ${count} and other symbols: ${str.length - count}`;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numOfLowerCase(str){
  if(str.length === 0) return 'String is empty';
  let count = 0;
  for (let i = 0; i < str.length; i++){
    if(str[i] === str[i].toLowerCase() && str[i] === str[i].toUpperCase()) continue;
    if(str[i] === str[i].toLowerCase()) count++;
  }
  return `Lowercase: ${count} and other symbols: ${str.length - count}`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function numOfLowerCase', () => {
  expect(numOfLowerCase).to.be.a('function');
});

it("numOfLowerCase('Hello World!') returns 'Lowercase: 8 and other symbols: 4'", () => {
  expect(numOfLowerCase('Hello World!')).to.equal('Lowercase: 8 and other symbols: 4');
});

it("numOfLowerCase('aBcDeFgHiJkLmNoPqRsTuVwXyZ') returns 'Lowercase: 13 and other symbols: 13'", () => {
  expect(numOfLowerCase('aBcDeFgHiJkLmNoPqRsTuVwXyZ')).to.equal('Lowercase: 13 and other symbols: 13');
});

it("numOfLowerCase('apple') returns 'Lowercase: 5 and other symbols: 0'", () => {
  expect(numOfLowerCase('apple')).to.equal('Lowercase: 5 and other symbols: 0');
});

it("numOfLowerCase(' 135 8!0$ %^)9* &^;: %$ #@') returns 'Lowercase: 0 and other symbols: 26'", () => {
  expect(numOfLowerCase(' 135 8!0$ %^)9* &^;: %$ #@')).to.equal('Lowercase: 0 and other symbols: 26');
});

it("numOfLowerCase('') returns 'String is empty'", () => {
  expect(numOfLowerCase('')).to.equal('String is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
