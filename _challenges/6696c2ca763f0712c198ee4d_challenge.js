// NAMEEN:
// NAMERU:Поменять слова местами и добавить в массив

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `switchWordAddToArray` принимает строку содержащую разные символы. Слова в строке разделены пробелами.

Функция должна вернуть массив следующего вида:
* первый элемент массива - последнее слово в строке
* второй элемент массива - слова между первым и последним словом в строке
* третий элемент массива - первое слово в строке

Пример запуска функции:
```javascript
switchWordAddToArray("Hello world, my name is John") // ["John", "world, my name is", "Hello"]
switchWordAddToArray("hello") // ["hello", "", ""]
switchWordAddToArray("hello world") // ["world", "", "hello"]
switchWordAddToArray("") // ["", "", ""]
```
Используйте только циклы для решения этой задачи.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function switchWordAddToArray(str){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function switchWordAddToArray(str) {
  const arr = [];
  let firstWord = '';
  for(let i = 0; i < str.indexOf(' '); i++) {
    firstWord += str[i]
  }
  let lastWord = ''
  for(let i = str.lastIndexOf(' ') + 1; i < str.length; i++) {
    lastWord += str[i]
  }
  let newStr = ''
  for(let i = str.indexOf(' ') + 1; i < str.lastIndexOf(' '); i++) {
    newStr += str[i]
  }
  arr.push(lastWord, newStr, firstWord)
  return arr
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function switchWordAddToArray', () => {
  expect(switchWordAddToArray).to.be.a('function');
});

it('function switchWordAddToArrayLength do not include statement substring',() => {
  expect(switchWordAddToArray.toString().includes('substring')).to.be.equal(false);
});

it('function switchWordAddToArrayLength do not include statement split',() => {
  expect(switchWordAddToArray.toString().includes('split')).to.be.equal(false)
});

it('switchWordAddToArray("Hello world, my name is John") returns ["John", "world, my name is", "Hello"]', () => {
  expect(switchWordAddToArray("Hello world, my name is John")).to.deep.equal(["John", "world, my name is", "Hello"]);
});

it('switchWordAddToArray("phone number is 234095898723") returns ["234095898723", "number is", "phone"]', () => {
  expect(switchWordAddToArray("phone number is 234095898723")).to.deep.equal(["234095898723", "number is", "phone"]);
});

it('switchWordAddToArray("") returns ["", "", ""]', () => {
  expect(switchWordAddToArray("")).to.deep.equal(["", "", ""]);
});

it('switchWordAddToArray("Hello") returns ["Hello", "", ""]', () => {
  expect(switchWordAddToArray("Hello")).to.deep.equal(["Hello", "", ""]);
});

it('switchWordAddToArray("Hello world") returns ["world", "", "Hello"]', () => {
  expect(switchWordAddToArray("Hello world")).to.deep.equal(["world", "", "Hello"]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
