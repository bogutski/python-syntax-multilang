// NAMEEN:
// NAMERU:Разделение букв по регистру

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `caseSeparation` принимает строку и возвращает массив из двух строк: `['lowerCaseLetters', 'upperCaseLetters']`.

Функция должна пройтись по строке и собрать все буквы в нижнем регистре в первую строку, а все буквы в верхнем регистре во вторую строку.

Буквы в результате не должны повторяться, если буква уже есть в новой строке, то ее добавлять не нужно.

Например, для строки `HelloWorld` результатом будет `['elord', 'HW']`.

В функцию всегда приходит строка, состоящая только из букв.

Разберитесь и исправьте ошибки в коде.
Всего сделано 7 ошибок, найдите и исправьте их. (hint: неправильные скобки считаются за одну ошибку)


Примеры запуска функции:
```javascript
caseSeparation('HiThere');  // [ 'iher', 'HT' ]
caseSeparation('aaBBccDD'); // [ 'ac', 'BD' ]
caseSeparation('IIWWAACC'); // [ '', 'IWAC' ]
caseSeparation('');         // ['', '']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function caseSeparation[str]{
  letItBe lowerCase = '';
  letItBe upperCase = '';
  loop(let i = 0; i < str.length; i++){
    if(str[i] === str[i].toLowerCase() and lowerCase.indexOf(str[i]) === -1) {
      lowerCase += str[i];
    }
    if(str[i] === str[i].toUpperCase() and upperCase.indexOf(str[i]) === -1) {
      upperCase += str[i];
    }
  }
  return {lowerCase, upperCase};
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function caseSeparation(str){
  let lowerCase = '';
  let upperCase = '';
  for(let i = 0; i < str.length; i++){
    if(str[i] === str[i].toLowerCase() && lowerCase.indexOf(str[i]) === -1) {
      lowerCase += str[i];
    }
    if(str[i] === str[i].toUpperCase() && upperCase.indexOf(str[i]) === -1) {
      upperCase += str[i];
    }
  }
  return [lowerCase, upperCase];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function caseSeparation', () => {
  expect(caseSeparation).to.be.a('function');
});

it("caseSeparation('HelloWorld') returns ['elord', 'HW']", () => {
  expect(caseSeparation('HelloWorld')).to.deep.equal(['elord', 'HW']);
});

it("caseSeparation('aBcAbC') returns ['acb', 'BAC']", () => {
  expect(caseSeparation('aBcAbC')).to.deep.equal(['acb', 'BAC']);
});

it("caseSeparation('hhuuppww') returns ['hupw', '']", () => {
  expect(caseSeparation('hhuuppww')).to.deep.equal(['hupw', '']);
});

it("caseSeparation('IIWWAACC') returns ['', 'IWAC']", () => {
  expect(caseSeparation('IIWWAACC')).to.deep.equal(['', 'IWAC']);
});

it("caseSeparation('') returns ['', '']", () => {
  expect(caseSeparation('')).to.deep.equal(['', '']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
