// NAMEEN:
// NAMERU:Проверка наличия строки в многоуровневом массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `checkStringInNestedArray`, которая принимает многоуровневый массив и строку.

Функция должна "выпрямить" массив (сделать одномерным) и привести все строки к верхнему регистру.

Затем функция должна проверить, есть ли переданная строка в массиве (также в верхнем регистре) с помощью метода `includes()`.

Функция должна вернуть объект вида: `{newArr: modified array, includes: boolean}`.


Примеры запуска функции:
```javascript
checkStringInNestedArray([["hello", "world"], ["foo", ["bar"]]], "FOO");
// { newArr: ["HELLO", "WORLD", "FOO", "BAR"], includes: true }

checkStringInNestedArray([["JavaScript", ["is", "fun"]], "Python"], "PYTHON");
// { newArr: ["JAVASCRIPT", "IS", "FUN", "PYTHON"], includes: true }

checkStringInNestedArray([["apple", "banana"], ["cherry", ["date"]]], "kiwi");
// { newArr: ["APPLE", "BANANA", "CHERRY", "DATE"], includes: false }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function checkStringInNestedArray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function checkStringInNestedArray(arr, string) {
  string = string.toUpperCase()
  const newArr = arr.flat(Infinity).map(str => str.toUpperCase())
  return {newArr, includes: newArr.includes(string)};
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function checkStringInNestedArray', () => {
  expect(checkStringInNestedArray).to.be.a('function');
});

it("Function checkStringInNestedArray should include includes method", () => {
  const result = checkStringInNestedArray.toString();
  expect(result).to.include('.includes(');
});

it('checkStringInNestedArray([["hello", "world"], ["foo", ["bar"]]], "FOO") should return {newArr: ["HELLO", "WORLD", "FOO", "BAR"], includes: true}', function() {
  expect(checkStringInNestedArray([["hello", "world"], ["foo", ["bar"]]], "FOO")).to.deep.equal({
    newArr: ["HELLO", "WORLD", "FOO", "BAR"],
    includes: true
  });
});

it('checkStringInNestedArray([["JavaScript", ["is", "fun"]], "Python"], "PYTHON") should return {newArr: ["JAVASCRIPT", "IS", "FUN", "PYTHON"], includes: true}', function() {
  expect(checkStringInNestedArray([["JavaScript", ["is", "fun"]], "Python"], "PYTHON")).to.deep.equal({
    newArr: ["JAVASCRIPT", "IS", "FUN", "PYTHON"],
    includes: true
  });
});

it('checkStringInNestedArray([["apple", "banana"], ["cherry", ["date"]]], "kiwi") should return {newArr: ["APPLE", "BANANA", "CHERRY", "DATE"], includes: false}', function() {
  expect(checkStringInNestedArray([["apple", "banana"], ["cherry", ["date"]]], "kiwi")).to.deep.equal({
    newArr: ["APPLE", "BANANA", "CHERRY", "DATE"],
    includes: false
  });
});

it('checkStringInNestedArray([[["nested", "array"], "test"], ["strings"]], "NESTED") should return {newArr: ["NESTED", "ARRAY", "TEST", "STRINGS"], includes: true}', function() {
  expect(checkStringInNestedArray([[["nested", "array"], "test"], ["strings"]], "NESTED")).to.deep.equal({
    newArr: ["NESTED", "ARRAY", "TEST", "STRINGS"],
    includes: true
  });
});

it('checkStringInNestedArray([["first", "second"], ["third", ["fourth"]]], "fifth") should return {newArr: ["FIRST", "SECOND", "THIRD", "FOURTH"], includes: false}', function() {
  expect(checkStringInNestedArray([["first", "second"], ["third", ["fourth"]]], "fifth")).to.deep.equal({
    newArr: ["FIRST", "SECOND", "THIRD", "FOURTH"],
    includes: false
  });
});

it('checkStringInNestedArray([["A", "B", ["C"]], ["D", "E"]], "C") should return {newArr: ["A", "B", "C", "D", "E"], includes: true}', function() {
  expect(checkStringInNestedArray([["A", "B", ["C"]], ["D", "E"]], "C")).to.deep.equal({
    newArr: ["A", "B", "C", "D", "E"],
    includes: true
  });
});

it('checkStringInNestedArray([["lowercase", "UPPERCASE"], ["Mixed", ["case"]]], "LOWERCASE") should return {newArr: ["LOWERCASE", "UPPERCASE", "MIXED", "CASE"], includes: true}', function() {
  expect(checkStringInNestedArray([["lowercase", "UPPERCASE"], ["Mixed", ["case"]]], "LOWERCASE")).to.deep.equal({
    newArr: ["LOWERCASE", "UPPERCASE", "MIXED", "CASE"],
    includes: true
  });
});

it('checkStringInNestedArray([["find", "the"], ["hidden", ["WORD"]]], "hidden") should return {newArr: ["FIND", "THE", "HIDDEN", "WORD"], includes: true}', function() {
  expect(checkStringInNestedArray([["find", "the"], ["hidden", ["WORD"]]], "hidden")).to.deep.equal({
    newArr: ["FIND", "THE", "HIDDEN", "WORD"],
    includes: true
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
