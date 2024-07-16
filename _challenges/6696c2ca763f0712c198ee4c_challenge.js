// NAMEEN:
// NAMERU:Замените первое слово на последнее при помощи циклов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `firstIsLast` принимает строку, состоящую из слов, разделенных пробелами.

Строка может содержать любое количество слов.

Поменяйте местами первое и последнее слово в строке, предварительно переведя строку в нижний регистр.

Если в строке только одно слово, то верните "nothing to switch".

Используйте только циклы для решения этой задачи.

Пример запуска функции:
```javascript
firstIsLast("JavaScript is easy") // "easy is javascript"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function firstIsLast(str) {
  if(str.includes(' ') === false) return 'nothing to switch'
  str = str.toLowerCase();
  let firstWord = ''
  const firstSpace = str.indexOf(' ');
  const lastSpace = str.lastIndexOf(' ');
  for(let i = 0; i < firstSpace; i++) {
    firstWord += str[i]
  }
  let lastWord = ''
  for(let i = lastSpace + 1; i < str.length; i++) {
    lastWord += str[i]
  }
  let newStr = ''
  for(let i = firstSpace; i <= lastSpace; i++) {
    newStr += str[i]
  }
  return lastWord + newStr + firstWord
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function firstIsLast', () => {
  expect(firstIsLast).to.be.a('function');
});

it('Function firstIsLast not include statement substring', () => {
  expect(firstIsLast.toString()).to.not.include('substring');
});

it('firstIsLast("JavaScript is easy") return "easy is javascript"', () => {
  expect(firstIsLast("JavaScript is easy")).to.equal("easy is javascript");
});

it('firstIsLast("I will get a lot of interview") return "interview will get a lot of i"', () => {
  expect(firstIsLast("I will get a lot of interview")).to.equal("interview will get a lot of i");
});

it('firstIsLast("") return "nothing to switch"', () => {
  expect(firstIsLast("")).to.equal("nothing to switch");
});

it('firstIsLast("I") return "nothing to switch"', () => {
  expect(firstIsLast("I")).to.equal("nothing to switch");
});

it('firstIsLast("I am") return "am i"', () => {
  expect(firstIsLast("I am")).to.equal("am i");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
