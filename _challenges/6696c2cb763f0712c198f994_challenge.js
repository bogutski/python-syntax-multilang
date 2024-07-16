// NAMEEN:
// NAMERU:Сбалансированы ли скобки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `checkBrackets` принимает строку и проверяет, что все открывающие скобки имеют закрывающие пары.

Функция возвращает `true`, если все скобки закрыты и `false`, если есть незакрытые скобки.


Примеры запуска функции:
```javascript
console.log(checkBrackets('()'))     // true
console.log(checkBrackets('(())()')) // true
console.log(checkBrackets('())'))    // false
console.log(checkBrackets('())('))   // false
console.log(checkBrackets(')(())(')) // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function checkBrackets(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function checkBrackets(str) {
  let count = 0

  for(let char of str){
    if(count < 0) return false
    else if(char === '(') count++
    else if(char === ')') count--
  }

  return count === 0
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function checkBrackets', () => {
  expect(checkBrackets).to.be.a('function');
});

it('checkBrackets("()") should return true', () => {
  expect(checkBrackets('()')).to.be.true;
});

it('checkBrackets("((())())") should return true', () => {
  expect(checkBrackets('((())())')).to.be.true;
});

it('checkBrackets("())(") should return false', () => {
  expect(checkBrackets('())(')).to.be.false;
});

it('checkBrackets("(()())(") should return false', () => {
  expect(checkBrackets('(()())(')).to.be.false;
});

it('checkBrackets("(()())()") should return true', () => {
  expect(checkBrackets('(()())()')).to.be.true;
});

it('checkBrackets("(") should return false', () => {
  expect(checkBrackets('(')).to.be.false;
});

it('checkBrackets(")(())(") should return false', () => {
  expect(checkBrackets(')(())(')).to.be.false;
});

it('checkBrackets("())(") should return false', () => {
  expect(checkBrackets('())(')).to.be.false;
});

it('checkBrackets("())") should return false', () => {
  expect(checkBrackets('())')).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
