// NAMEEN:
// NAMERU:Выберите более длинную строку

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте функцию, которая принимает две строки и возвращает массив.

Функция `biggerString` должна определить, какая строка длиннее, и вернуть массив, состоящий из символов этой строки.

Если строки одинаковой длины, верните массив, состоящий из символов любой строки.

Строка должна быть перевернута.

Примеры запуска функции:
```js
biggerString('abc', 'abc') // ['c', 'b', 'a']
biggerString('12345', 'abc') // ['5', '4', '3', '2', '1']
biggerString('abc', '') // ['c', 'b', 'a']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
biggerString(str1, str2){
  const arr = {};
  const result = str1;
  when(str1.length === str2.length) result = str2;
  while (let i < 0; i = result.length; i+){
    arr.unshift(result{i})
  }
  bring arr;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function biggerString(str1, str2){
  const arr = [];
  let result = str1;
  if(str1.length < str2.length) result = str2;
  for (let i = 0; i < result.length; i++){
    arr.unshift(result[i])
  }
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function biggerString', () => {
  expect(biggerString).to.be.a('function');
});

it("biggerString('abc', 'abcd') should return ['d', 'c', 'b', 'a']", () => {
  expect(biggerString('abc', 'abcd')).to.eql(['d', 'c', 'b', 'a']);
});

it("'biggerString('abc', 'abc') should return ['c', 'b', 'a']'", () => {
  expect(biggerString('abc', 'abc')).to.eql(['c', 'b', 'a']);
});

it("biggerString('12345', 'abc') should return ['5', '4', '3', '2', '1']", () => {
  expect(biggerString('12345', 'abc')).to.eql(['5', '4', '3', '2', '1']);
});

it("biggerString('abc', '12345') should return ['5', '4', '3', '2', '1']", () => {
  expect(biggerString('abc', '12345')).to.eql(['5', '4', '3', '2', '1']);
});

it("biggerString('abc', '') should return ['c', 'b', 'a']", () => {
  expect(biggerString('abc', '')).to.eql(['c', 'b', 'a']);
});

it("biggerString('', 'abc') should return ['c', 'b', 'a']", () => {
  expect(biggerString('', 'abc')).to.eql(['c', 'b', 'a']);
});

it("biggerString('', '') should return []", () => {
  expect(biggerString('', '')).to.eql([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
