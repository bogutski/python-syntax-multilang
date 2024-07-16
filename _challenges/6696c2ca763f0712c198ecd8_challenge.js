// NAMEEN:
// NAMERU:Найти буквы в нижнем и верхнем регистре

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `strOfLowerAndUpperCase`, которая принимает строку.

Создайте цикл, который пройдется по строке и запишет все заглавные буквы в одну переменную, а все строчные в другую.

* Если строка пустая, то верните строку 'string is empty'
* Если в строке нет заглавных букв, то верните строку со строчными буквами
* Если в строке нет строчных букв, то верните строку с заглавными буквами
* Если в строке есть заглавные и строчные буквы, то верните строку со строчными и заглавными буквами через пробел

В функцию будут передаваться только буквы.


Пример запуска функции:
```javascript
strOfLowerAndUpperCase('lowerCASE') // 'lower CASE'
strOfLowerAndUpperCase('UPPERCASE') // 'UPPERCASE'
strOfLowerAndUpperCase('alllower') // 'alllower'
strOfLowerAndUpperCase('') // 'string is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function strOfLowerAndUpperCase(str){
    if(str.length === 0) return 'string is empty'
    let lowerCase = '';
    let upperCase = '';
    for (let i = 0; i < str.length; i++){
        if (str[i] === str[i].toLowerCase()) lowerCase += str[i]
        else upperCase += str[i]
    }
    if(lowerCase.length === 0) return upperCase
    if(upperCase.length === 0) return lowerCase
    return lowerCase + ' ' + upperCase
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function strOfLowerAndUpperCase', () => {
  expect(strOfLowerAndUpperCase).to.be.a('function');
});

it("strOfLowerAndUpperCase('lowerCASE') returns 'lower CASE'", () => {
  expect(strOfLowerAndUpperCase('lowerCASE')).to.equal('lower CASE');
});

it("strOfLowerAndUpperCase('UPPERcase') returns 'case UPPER'", () => {
  expect(strOfLowerAndUpperCase('UPPERcase')).to.equal('case UPPER');
});

it("strOfLowerAndUpperCase('ALLCAPS') returns 'ALLCAPS'", () => {
  expect(strOfLowerAndUpperCase('ALLCAPS')).to.equal('ALLCAPS');
});

it("strOfLowerAndUpperCase('alllower') returns 'alllower'", () => {
  expect(strOfLowerAndUpperCase('alllower')).to.equal('alllower');
});

it("strOfLowerAndUpperCase('mIxEdCase') returns 'mxdase IEC'", () => {
  expect(strOfLowerAndUpperCase('mIxEdCase')).to.equal('mxdase IEC');
});

it("strOfLowerAndUpperCase('') returns 'string is empty'", () => {
  expect(strOfLowerAndUpperCase('')).to.equal('string is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
