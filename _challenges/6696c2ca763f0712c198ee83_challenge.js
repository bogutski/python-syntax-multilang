// NAMEEN:
// NAMERU:Перевернуть строку, кроме последнего символа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseStrExceptLast`, которая принимает строку из одного или нескольких слов.

Функция должна вернуть строку, в которой каждое слово перевернуто, но осталось на своем месте.

Последний символ оригинальной строки должен остаться на своем месте.

Если приходит пустая строка, то вернуть пустую строку.


При возникновении трудностей с задачей, попробуйте повторно решить предыдущие задачи этого урока.

Примеры запуска функции:
```javascript
reverseStrExceptLast('tsriF dnoceS drihT!') // 'First Second Third!'
reverseStrExceptLast('etirovaf roloc?')     // 'favorite color?'
reverseStrExceptLast('321 654 87#')         // '123 456 78#'
reverseStrExceptLast('')                    // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseStrExceptLast(str){
    let newStr = '';
    let chunk = '';
    for (let i = 0; i < str.length; i++){
      if(i === str.length - 1) return newStr + chunk + str[i]
      if (str[i] === ' '){
            newStr += chunk + ' ';
            chunk = '';
        } else {
            chunk = str[i] + chunk;
        }
    }
    return newStr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseStrExceptLast', () => {
  expect(reverseStrExceptLast).to.be.a('function');
});

it("reverseStrExceptLast('avaJ tpircS!') returns 'Java Script!'", () => {
  expect(reverseStrExceptLast('avaJ tpircS!')).to.equal('Java Script!');
});

it("reverseStrExceptLast('oD uoy ekil tpircSavaJ?') returns 'Do you like JavaScript?'", () => {
  expect(reverseStrExceptLast('oD uoy ekil tpircSavaJ?')).to.equal('Do you like JavaScript?');
});

it("reverseStrExceptLast('s'teL edoc!') returns 'Let's code!'", () => {
  expect(reverseStrExceptLast("s'teL edoc!")).to.equal("Let's code!");
});

it("reverseStrExceptLast('ynam ynam ynam ynam ynam ynam :sdrow)') returns 'many many many many many many words:)'", () => {
  expect(reverseStrExceptLast('ynam ynam ynam ynam ynam ynam :sdrow)')).to.equal('many many many many many many words:)');
});

it("reverseStrExceptLast('repuS#') returns 'Super#'", () => {
  expect(reverseStrExceptLast('repuS#')).to.equal('Super#');
});

it("reverseStrExceptLast('') returns ''", () => {
  expect(reverseStrExceptLast('')).to.equal('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
