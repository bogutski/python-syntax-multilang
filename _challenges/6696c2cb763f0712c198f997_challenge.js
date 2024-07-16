// NAMEEN:
// NAMERU:Поиск стоп-слов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findStopWords`, которая принимает строку и число `n`, и возвращает массив слов, которые встречаются в строке `n` или более раз.


Примеры запуска функции:
```javascript
findStopWords('this is a test this is only a test', 2); // [ 'this', 'is', 'a', 'test' ]
findStopWords('one fish two fish red fish blue fish', 3); // [ 'fish' ]
findStopWords('the quick brown fox jumps over the lazy dog', 1); // [ 'the', 'quick', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findStopWords(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findStopWords(string, n) {
  const arr = string.split(' ');
  let result = []
  let count = 0

  for(let i = 0; i < arr.length; i++) {

    for(let j = 0; j < arr.length; j++) {
      if(arr[j] === arr[i]) count++
      if(count >= n){
        if(!result.includes(arr[i])) result.push(arr[i])
        count = 0
        break
      }
      if(j === arr.length - 1) count = 0
    }

  }

  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findStopWords', () => {
  expect(findStopWords).to.be.a('function');
});

it('findStopWords("a mouse is smaller than a dog but a dog is stronger", 2) should return [ "a", "is", "dog" ]', function() {
  expect(findStopWords('a mouse is smaller than a dog but a dog is stronger', 2)).to.deep.equal([ 'a', 'is', 'dog' ]);
});

it('findStopWords("this is a test this is only a test", 2) should return [ "this", "is", "a", "test" ]', function() {
  expect(findStopWords('this is a test this is only a test', 2)).to.deep.equal([ 'this', 'is', 'a', 'test' ]);
});

it('findStopWords("one fish two fish red fish blue fish", 2) should return [ "fish" ]', function() {
  expect(findStopWords('one fish two fish red fish blue fish', 2)).to.deep.equal([ 'fish' ]);
});

it('findStopWords("the quick brown fox jumps over the lazy dog", 1) should return [ "the", "quick", "brown", "fox", "jumps", "over", "lazy", "dog" ]', function() {
  expect(findStopWords('the quick brown fox jumps over the lazy dog', 1)).to.deep.equal([ 'the', 'quick', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog' ]);
});

it('findStopWords("repeat repeat repeat repeat", 3) should return [ "repeat" ]', function() {
  expect(findStopWords('repeat repeat repeat repeat', 3)).to.deep.equal([ 'repeat' ]);
});

it('findStopWords("hello world hello", 2) should return [ "hello" ]', function() {
  expect(findStopWords('hello world hello', 2)).to.deep.equal([ 'hello' ]);
});

it('findStopWords("hello hello world world world", 3) should return [ "world" ]', function() {
  expect(findStopWords('hello hello world world world', 3)).to.deep.equal([ 'world' ]);
});

it('findStopWords("one two three four five six", 1) should return [ "one", "two", "three", "four", "five", "six" ]', function() {
  expect(findStopWords('one two three four five six', 1)).to.deep.equal([ 'one', 'two', 'three', 'four', 'five', 'six' ]);
});

it('findStopWords("apple banana orange apple grape banana", 2) should return [ "apple", "banana" ]', function() {
  expect(findStopWords('apple banana orange apple grape banana', 2)).to.deep.equal([ 'apple', 'banana' ]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
