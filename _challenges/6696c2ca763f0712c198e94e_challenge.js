// NAMEEN:
// NAMERU:Разделение букв на верхний и нижний регистр

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `lettersDivider`, которая принимает строку с верхним и нижним регистром букв.

Функция должна вернуть массив из двух строк. Первая строка должна содержать все буквы в нижнем регистре, а вторая - в верхнем.

Пример проверки на регистр буквы:
```javascript
let str = 'world';
console.log(str[0] === str[0].toLowerCase()); // true
```

Пример запуска функции:
```javascript
lettersDivider('HeLLOwoRLD'); // [ 'ewo', 'HLLORLD' ]
lettersDivider('www'); // [ 'www', '' ]
lettersDivider(''); // [ '', '' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function lettersDivider(string){
  let lowerCase = '';
  let upperCase = '';
  for (let i = 0; i < string.length; i++){
    if (string[i] === string[i].toLowerCase()) lowerCase += string[i];
    else upperCase += string[i];
  }
  return [lowerCase, upperCase];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function lettersDivider', () => {
  expect(lettersDivider).to.be.a('function');
});

it("lettersDivider('HelloWorld') should return ['elloorld', 'HW']", () => {
  expect(lettersDivider('HelloWorld')).to.deep.equal(['elloorld', 'HW']);
});

it("lettersDivider('hELLOwORLD') should return ['hllwrd', 'ELOWRD']", () => {
  expect(lettersDivider('hELLOwORLD')).to.deep.equal(['hw', 'ELLOORLD']);
});

it("lettersDivider('abc') should return ['abc', '']", () => {
  expect(lettersDivider('abc')).to.deep.equal(['abc', '']);
});

it("lettersDivider('QWERTYUIOP') should return ['', 'QWERTYUIOP']", () => {
  expect(lettersDivider('QWERTYUIOP')).to.deep.equal(['', 'QWERTYUIOP']);
});

it("lettersDivider('') should return ['', '']", () => {
  expect(lettersDivider('')).to.deep.equal(['', '']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
