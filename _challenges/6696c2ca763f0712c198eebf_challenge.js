// NAMEEN:
// NAMERU:Заменить телефонный номер на слова

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `phoneNumber` принимает строку с телефонным номером, который может быть записан в разных форматах.

Например:
* `(123) 456 7890`
* `(111)555-2345`
* `(0 9 8) 111 - 4567`

Функция должна вернуть строку, в которой все цифры заменены на слова и разделены дефисом.

Попытайтесь разобраться в каждой строке кода и перепишите функцию самостоятельно.

В функции не хватает одной строчки, на месте `code here...`, добавьте нужную строчку, чтобы функция работала правильно.


Пример запуска функции:
```javascript
phoneNumber('(123) 456 7890') // 'one-two-three-four-five-six-seven-eight-nine-zero'
phoneNumber('(0 9 5) 2 2 3 - 8 6 6 7') // 'zero-nine-five-two-two-three-eight-six-six-seven'
phoneNumber('9-1-1') // 'nine-one-one'
phoneNumber('') // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function phoneNumber(str){
  const arr = {'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'}
  code here...
  for(let i = 0; i < str.length; i++){
    if(str[i] !== ' ' && str[i] !== '(' && str[i] !== ')' && str[i] !== '-'){
      if(i !== str.length - 1) {
        newStr += arr[str[i]] + '-';
      } else {
        newStr += arr[str[i]];
      }
    }
  }
  return newStr;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function phoneNumber(str){
  const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let newStr = '';
  for(let i = 0; i < str.length; i++){
    if(str[i] !== ' ' && str[i] !== '(' && str[i] !== ')' && str[i] !== '-'){
      if(i !== str.length - 1) newStr += arr[str[i]] + '-';
      else newStr += arr[str[i]];
    }
  }
  return newStr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function phoneNumber', () => {
  expect(phoneNumber).to.be.a('function');
});

it("phoneNumber('(123) 456 7890') returns 'one-two-three-four-five-six-seven-eight-nine-zero'", () => {
  expect(phoneNumber('(123) 456 7890')).to.equal('one-two-three-four-five-six-seven-eight-nine-zero');
});

it("phoneNumber('(111)555-2345') returns 'one-one-one-five-five-five-two-three-four-five'", () => {
  expect(phoneNumber('(111)555-2345')).to.equal('one-one-one-five-five-five-two-three-four-five');
});

it("phoneNumber('(0 9 8) 1 2 3 - 4 5 6 7') returns 'zero-nine-eight-one-two-three-four-five-six-seven'", () => {
  expect(phoneNumber('(0 9 8) 1 2 3 - 4 5 6 7')).to.equal('zero-nine-eight-one-two-three-four-five-six-seven');
});

it("phoneNumber('9-1-1') returns 'nine-one-one'", () => {
  expect(phoneNumber('9-1-1')).to.equal('nine-one-one');
});

it("phoneNumber('') returns ''", () => {
  expect(phoneNumber('')).to.equal('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
