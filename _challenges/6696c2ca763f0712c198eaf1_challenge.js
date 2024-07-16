// NAMEEN:
// NAMERU:Две строки в один массив

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `twoIntoOne`, которая принимает две строки и возвращает массив, состоящий из символов этих строк.

Выполните проверку на пустые строки:

* Если обе строки не пустые, то между ними должен быть пробел в массиве.
* Если одна или обе строки пустые, то пробелов в массиве быть не должно.

Подсказка: сделайте проверку на пустые строки, а затем объедините строки в одну, перед циклом.

Похожий пример проверки:
```js
let fullString;
if ( string1.length !== 0 && string2.length !== 0 ) {
  fullString = string1 + ' ' + string2;
}


Примеры запуска функции:
```js
twoIntoOne('Hello', 'World'); // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
twoIntoOne('123', ''); // ['1', '2', '3']
twoIntoOne('', ''); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function twoIntoOne(str1, str2) {
  let fullString;
  if (str1.length !== 0 && str2.length !== 0) fullString = str1 + ' ' + str2;
  else fullString = str1 + str2;
  const arr = [];
  for(let i = 0; i < fullString.length; i++){
    arr.push(fullString[i]);
  }
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function twoIntoOne', () => {
  expect(twoIntoOne).to.be.a('function');
});

it("twoIntoOne('Hello', 'World') should return ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']", () => {
  expect(twoIntoOne('Hello', 'World')).to.eql(['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']);
});

it("twoIntoOne('abc', 'def') should return ['a', 'b', 'c', ' ', 'd', 'e', 'f']", () => {
  expect(twoIntoOne('abc', 'def')).to.eql(['a', 'b', 'c', ' ', 'd', 'e', 'f']);
});

it("twoIntoOne('123', '456') should return ['1', '2', '3', ' ', '4', '5', '6']", () => {
  expect(twoIntoOne('123', '456')).to.eql(['1', '2', '3', ' ', '4', '5', '6']);
});

it("twoIntoOne('a', 'b') should return ['a', ' ', 'b']", () => {
  expect(twoIntoOne('a', 'b')).to.eql(['a', ' ', 'b']);
});

it("twoIntoOne('a', '') should return ['a']", () => {
  expect(twoIntoOne('a', '')).to.eql(['a']);
});

it("twoIntoOne('', 'b') should return ['b']", () => {
  expect(twoIntoOne('', 'b')).to.eql(['b']);
});

it("twoIntoOne('', '') should return []", () => {
  expect(twoIntoOne('', '')).to.eql([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
