// NAMEEN:
// NAMERU:Проверка наличия строки в массиве после модификации

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `checkStringInArray`, которая принимает массив строк и строку на проверку.

Функция должна сначала удалить все пробелы и привести к нижнему регистру каждую строку в массиве, а затем проверить, есть ли совпадение со строкой на проверку (также без пробелов и в нижнем регистре).

Функция должна вернуть объект вида: `{newArr: modified array, includes: boolean}`.


Примеры запуска функции:
```javascript
checkStringInArray(["Java", "C++", "Rust"], "go"); // { newArr: ["java", "c++", "rust"], includes: false }
checkStringInArray(["Hello World", " foo ", "BaR"], " foo"); // { newArr: ["helloworld", "foo", "bar"], includes: true }
checkStringInArray(["JavaScript", "Python", " Ruby "], "java script"); // { newArr: ["javascript", "python", "ruby"], includes: true }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function checkStringInArray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function checkStringInArray(arr, string) {
  const newArr = arr.map(str => str.replaceAll(' ', '').toLowerCase())
  string = string.replaceAll(' ', '').toLowerCase()
  return {newArr, includes: newArr.includes(string)}
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function checkStringInArray', () => {
  expect(checkStringInArray).to.be.a('function');
});

it("Function checkStringInArray should include includes method", () => {
  const result = checkStringInArray.toString();
  expect(result).to.include('.includes(');
});

it('checkStringInArray(["Hello World", " foo ", "BaR"], " foo") should return {newArr: ["helloworld", "foo", "bar"], includes: true}', function() {
  expect(checkStringInArray(["Hello World", " foo ", "BaR"], " foo")).to.deep.equal({
    newArr: ["helloworld", "foo", "bar"],
    includes: true
  });
});

it('checkStringInArray(["JavaScript", "Python", " Ruby "], "java script") should return {newArr: ["javascript", "python", "ruby"], includes: true}', function() {
  expect(checkStringInArray(["JavaScript", "Python", " Ruby "], "java script")).to.deep.equal({
    newArr: ["javascript", "python", "ruby"],
    includes: true
  });
});

it('checkStringInArray(["Java", "C++", "Rust"], "go") should return {newArr: ["java", "c++", "rust"], includes: false}', function() {
  expect(checkStringInArray(["Java", "C++", "Rust"], "go")).to.deep.equal({
    newArr: ["java", "c++", "rust"],
    includes: false
  });
});

it('checkStringInArray(["  a", " B ", " c "], "a") should return {newArr: ["a", "b", "c"], includes: true}', function() {
  expect(checkStringInArray(["  a", " B ", " c "], "a")).to.deep.equal({
    newArr: ["a", "b", "c"],
    includes: true
  });
});

it('checkStringInArray(["abc", "def", "ghi"], "ABC") should return {newArr: ["abc", "def", "ghi"], includes: true}', function() {
  expect(checkStringInArray(["abc", "def", "ghi"], "ABC")).to.deep.equal({
    newArr: ["abc", "def", "ghi"],
    includes: true
  });
});

it('checkStringInArray(["One", "Two", "Three"], "Four") should return {newArr: ["one", "two", "three"], includes: false}', function() {
  expect(checkStringInArray(["One", "Two", "Three"], "Four")).to.deep.equal({
    newArr: ["one", "two", "three"],
    includes: false
  });
});

it('checkStringInArray(["apple", "banana", "grape"], "banana") should return {newArr: ["apple", "banana", "grape"], includes: true}', function() {
  expect(checkStringInArray(["apple", "banana", "grape"], "banana")).to.deep.equal({
    newArr: ["apple", "banana", "grape"],
    includes: true
  });
});

it('checkStringInArray(["Car", "Bike", "Truck"], "bus") should return {newArr: ["car", "bike", "truck"], includes: false}', function() {
  expect(checkStringInArray(["Car", "Bike", "Truck"], "bus")).to.deep.equal({
    newArr: ["car", "bike", "truck"],
    includes: false
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
