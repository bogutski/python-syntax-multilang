// NAMEEN:
// NAMERU:Обращение порядка слов в строках массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseWordsInArray`, которая принимает массив строк.

Функция должна обработать каждую строку таким образом, чтобы слова в строке следовали в обратном порядке, но порядок самих строк в массиве оставался неизменным.

Возвращаемый результат должен быть новым массивом с измененными строками.


Примеры запуска функции:
```javascript
reverseWordsInArray(["Hello world", "Good morning"]); // ["world Hello", "morning Good"]
reverseWordsInArray(["One two three", "Four five six"]); // ["three two One", "six five Four"]
reverseWordsInArray(["Single"]); // ["Single"]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function reverseWordsInArray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseWordsInArray(array) {
  let result = []

  array.forEach(string => {
    const element = string.split(' ').reverse().join(' ')
    result.push(element)
  })

  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseWordsInArray', () => {
  expect(reverseWordsInArray).to.be.a('function');
});

it("reverseWordsInArray(['Hello world', 'Good morning']) should return ['world Hello', 'morning Good']", () => {
  expect(reverseWordsInArray(["Hello world", "Good morning"])).to.deep.equal(["world Hello", "morning Good"]);
});

it("reverseWordsInArray(['One two three', 'Four five six']) should return ['three two One', 'six five Four']", () => {
  expect(reverseWordsInArray(["One two three", "Four five six"])).to.deep.equal(["three two One", "six five Four"]);
});

it("reverseWordsInArray(['Single']) should return ['Single']", () => {
  expect(reverseWordsInArray(["Single"])).to.deep.equal(["Single"]);
});

it("reverseWordsInArray([]) should return an empty array", () => {
  expect(reverseWordsInArray([])).to.deep.equal([]);
});

it("reverseWordsInArray(['First', 'Second Third']) should return ['First', 'Third Second']", () => {
  expect(reverseWordsInArray(['First', 'Second Third'])).to.deep.equal(['First', 'Third Second']);
});

it("reverseWordsInArray(['Another test', 'With more words']) should return ['test Another', 'words more With']", () => {
  expect(reverseWordsInArray(['Another test', 'With more words'])).to.deep.equal(['test Another', 'words more With']);
});

it("reverseWordsInArray(['Empty next', '']) should return ['next Empty', '']", () => {
  expect(reverseWordsInArray(['Empty next', ''])).to.deep.equal(['next Empty', '']);
});

it("reverseWordsInArray(['Hello', 'world!']) should return ['Hello', 'world!']", () => {
  expect(reverseWordsInArray(['Hello', 'world!'])).to.deep.equal(['Hello', 'world!']);
});

it("reverseWordsInArray(['Mixed 123 numbers', 'and symbols #!']) should return ['numbers 123 Mixed', '#! symbols and']", () => {
  expect(reverseWordsInArray(['Mixed 123 numbers', 'and symbols #!'])).to.deep.equal(['numbers 123 Mixed', '#! symbols and']);
});

it("original array should not be modified", () => {
  const array = ['1 2 3', 'a b c', 'true false'];
  reverseWordsInArray(array)
  expect(array).to.deep.equal(['1 2 3', 'a b c', 'true false']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
