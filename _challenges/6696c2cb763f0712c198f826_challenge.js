// NAMEEN:
// NAMERU:Найти индексы первого и последнего вхождения буквы в каждой строке массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLetterIndices`, которая принимает массив строк и букву.

Функция должна вернуть объект, где:
 * ключами являются строки,
 * значениями — объект с индексом строки и индексами первого и последнего вхождения буквы в этой строке.

Если буква не найдена, вместо индекса будет строка: `Not found`.

Обратите внимание, ключи в объекте зависят от того сколько вхождений буквы в строке.


Примеры запуска функции:
```javascript
console.log(findLetterIndices(['apple', 'banana', 'apricot', 'blueberry'], 'a'));
// {
//   apple: { indexOfString: 0, indexOfLetter: 0 },
//   banana: { indexOfString: 1, firstIndexOfLetter: 1, lastIndexOfLetter: 5 },
//   apricot: { indexOfString: 2, indexOfLetter: 0 },
//   blueberry: { indexOfString: 3, indexOfLetter: 'Not found' }
// }

console.log(findLetterIndices(['cat', 'dog', 'car', 'cow'], 'o'));
// {
//   cat: { indexOfString: 0, indexOfLetter: 'Not found' },
//   dog: { indexOfString: 1, indexOfLetter: 1 },
//   car: { indexOfString: 2, indexOfLetter: 'Not found' },
//   cow: { indexOfString: 3, indexOfLetter: 1 }
// }

console.log(findLetterIndices(['hello', 'world', 'hi'], 'l'));
// {
//   hello: { indexOfString: 0, firstIndexOfLetter: 2, lastIndexOfLetter: 3 },
//   world: { indexOfString: 1, indexOfLetter: 3 },
//   hi: { indexOfString: 2, indexOfLetter: 'Not found' }
// }

console.log(findLetterIndices(['one', 'two', 'three'], 'z'));
// {
//   one: { indexOfString: 0, indexOfLetter: 'Not found' },
//   two: { indexOfString: 1, indexOfLetter: 'Not found' },
//   three: { indexOfString: 2, indexOfLetter: 'Not found' }
// }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLetterIndices(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLetterIndices(arr, letter) {
  let result = {}

  arr.forEach((str, i) => {
    const firstIndexOfLetter = str.indexOf(letter)
    const lastIndexOfLetter = str.lastIndexOf(letter)

    if(firstIndexOfLetter === -1) result[str] = {indexOfString: i, indexOfLetter: 'Not found'}
    else if(firstIndexOfLetter === lastIndexOfLetter) result[str] = {indexOfString: i, indexOfLetter: firstIndexOfLetter}
    else result[str] = {indexOfString: i, firstIndexOfLetter, lastIndexOfLetter}
  })

  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLetterIndices', () => {
  expect(findLetterIndices).to.be.a('function');
});

it('findLetterIndices(["apple", "banana", "apricot", "blueberry"], "a") should return correct object', function() {
  expect(findLetterIndices(["apple", "banana", "apricot", "blueberry"], "a")).to.deep.equal({
    apple: { indexOfString: 0, indexOfLetter: 0 },
    banana: { indexOfString: 1, firstIndexOfLetter: 1, lastIndexOfLetter: 5 },
    apricot: { indexOfString: 2, indexOfLetter: 0 },
    blueberry: { indexOfString: 3, indexOfLetter: 'Not found' }
  });
});

it('findLetterIndices(["cat", "dog", "car", "cow"], "o") should return correct object', function() {
  expect(findLetterIndices(["cat", "dog", "car", "cow"], "o")).to.deep.equal({
    cat: { indexOfString: 0, indexOfLetter: 'Not found' },
    dog: { indexOfString: 1, indexOfLetter: 1 },
    car: { indexOfString: 2, indexOfLetter: 'Not found' },
    cow: { indexOfString: 3, indexOfLetter: 1 }
  });
});

it('findLetterIndices(["hello", "world", "hi"], "l") should return correct object', function() {
  expect(findLetterIndices(["hello", "world", "hi"], "l")).to.deep.equal({
    hello: { indexOfString: 0, firstIndexOfLetter: 2, lastIndexOfLetter: 3 },
    world: { indexOfString: 1, indexOfLetter: 3 },
    hi: { indexOfString: 2, indexOfLetter: 'Not found' }
  });
});

it('findLetterIndices(["one", "two", "three"], "z") should return correct object', function() {
  expect(findLetterIndices(["one", "two", "three"], "z")).to.deep.equal({
    one: { indexOfString: 0, indexOfLetter: 'Not found' },
    two: { indexOfString: 1, indexOfLetter: 'Not found' },
    three: { indexOfString: 2, indexOfLetter: 'Not found' }
  });
});

it('findLetterIndices(["apple", "banana", "apricot", "blueberry"], "e") should return correct object', function() {
  expect(findLetterIndices(["apple", "banana", "apricot", "blueberry"], "e")).to.deep.equal({
    apple: { indexOfString: 0, indexOfLetter: 4 },
    banana: { indexOfString: 1, indexOfLetter: 'Not found' },
    apricot: { indexOfString: 2, indexOfLetter: 'Not found' },
    blueberry: { indexOfString: 3, firstIndexOfLetter: 3, lastIndexOfLetter: 5 }
  });
});

it('findLetterIndices(["cat", "dog", "car", "cow"], "c") should return correct object', function() {
  expect(findLetterIndices(["cat", "dog", "car", "cow"], "c")).to.deep.equal({
    cat: { indexOfString: 0, indexOfLetter: 0 },
    dog: { indexOfString: 1, indexOfLetter: 'Not found' },
    car: { indexOfString: 2, indexOfLetter: 0 },
    cow: { indexOfString: 3, indexOfLetter: 0 }
  });
});

it('findLetterIndices(["hello", "world", "hi"], "h") should return correct object', function() {
  expect(findLetterIndices(["hello", "world", "hi"], "h")).to.deep.equal({
    hello: { indexOfString: 0, indexOfLetter: 0 },
    world: { indexOfString: 1, indexOfLetter: 'Not found' },
    hi: { indexOfString: 2, indexOfLetter: 0 }
  });
});

it('findLetterIndices([], "a") should return empty object', function() {
  expect(findLetterIndices([], "a")).to.deep.equal({});
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
