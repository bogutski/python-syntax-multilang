// NAMEEN:
// NAMERU:Проверка наличия числа в строковом представлении массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `checkNumberInStringArray`, которая принимает массив строк и число.

Функция должна преобразовать каждую строку массива, чтобы сохранить только числовые символы, и затем проверить, содержится ли число (в строковом виде) в любом элементе массива с помощью метода `includes()`.

Функция должна вернуть объект вида: `{newArr: modified array, includes: boolean}`.


Примеры запуска функции:
```javascript
console.log(checkNumberInStringArray(["abc123", "456def", "789ghi"], 123));
// { newArr: ["123", "456", "789"], includes: true }

console.log(checkNumberInStringArray(["hello42", "world", "number99"], 42));
// { newArr: ["42", "", "99"], includes: true }

console.log(checkNumberInStringArray(["one1", "two2", "three3"], 4));
// { newArr: ["1", "2", "3"], includes: false }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function checkNumberInStringArray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function checkNumberInStringArray(arr, num) {
  const onlyIntegers = string => {
    let result = ''
    for(let letter of string){
      if(Number.isInteger(+letter)) result += letter
    }
    return result
  }

  const newArr = arr.map(str => onlyIntegers(str))
  return {newArr, includes: newArr.includes(num.toString())};
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function checkNumberInStringArray', () => {
  expect(checkNumberInStringArray).to.be.a('function');
});

it("Function checkNumberInStringArray should include includes method", () => {
  const result = checkNumberInStringArray.toString();
  expect(result).to.include('.includes(');
});

it('checkNumberInStringArray(["abc123", "456def", "789ghi"], 123) should return {newArr: ["123", "456", "789"], includes: true}', function() {
  expect(checkNumberInStringArray(["abc123", "456def", "789ghi"], 123)).to.deep.equal({
    newArr: ["123", "456", "789"],
    includes: true
  });
});

it('checkNumberInStringArray(["hello42", "world", "number99"], 42) should return {newArr: ["42", "", "99"], includes: true}', function() {
  expect(checkNumberInStringArray(["hello42", "world", "number99"], 42)).to.deep.equal({
    newArr: ["42", "", "99"],
    includes: true
  });
});

it('checkNumberInStringArray(["one1", "two2", "three3"], 4) should return {newArr: ["1", "2", "3"], includes: false}', function() {
  expect(checkNumberInStringArray(["one1", "two2", "three3"], 4)).to.deep.equal({
    newArr: ["1", "2", "3"],
    includes: false
  });
});

it('checkNumberInStringArray(["apple1", "banana22", "cherry333"], 22) should return {newArr: ["1", "22", "333"], includes: true}', function() {
  expect(checkNumberInStringArray(["apple1", "banana22", "cherry333"], 22)).to.deep.equal({
    newArr: ["1", "22", "333"],
    includes: true
  });
});

it('checkNumberInStringArray(["cat123", "dog456", "bird789"], 456) should return {newArr: ["123", "456", "789"], includes: true}', function() {
  expect(checkNumberInStringArray(["cat123", "dog456", "bird789"], 456)).to.deep.equal({
    newArr: ["123", "456", "789"],
    includes: true
  });
});

it('checkNumberInStringArray(["no1", "no2", "no3"], 5) should return {newArr: ["1", "2", "3"], includes: false}', function() {
  expect(checkNumberInStringArray(["no1", "no2", "no3"], 5)).to.deep.equal({
    newArr: ["1", "2", "3"],
    includes: false
  });
});

it('checkNumberInStringArray(["item100", "item200", "item300"], 200) should return {newArr: ["100", "200", "300"], includes: true}', function() {
  expect(checkNumberInStringArray(["item100", "item200", "item300"], 200)).to.deep.equal({
    newArr: ["100", "200", "300"],
    includes: true
  });
});

it('checkNumberInStringArray(["value123", "value456", "value789"], 321) should return {newArr: ["123", "456", "789"], includes: false}', function() {
  expect(checkNumberInStringArray(["value123", "value456", "value789"], 321)).to.deep.equal({
    newArr: ["123", "456", "789"],
    includes: false
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
