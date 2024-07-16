// NAMEEN:
// NAMERU:Найти последний индекс модифицированной строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastIndexOfModifiedString`, которая принимает массив строк и слово.

Функция должна вернуть объект, содержащий массив модифицированных строк и индекс последнего элемента массива, который равен данному слову после выполнения следующих преобразований:

* Каждая строка массива модифицируется таким образом, что между всеми буквами должен быть пробел.


Примеры запуска функции:
```javascript
console.log(findLastIndexOfModifiedString(['do g', 'car  ', '  cow'], 'c a t'));
// { modifiedString: [ 'c a t', 'd o g', 'c a r', 'c o w' ], index: -1 }

console.log(findLastIndexOfModifiedString(['applepie', 'banana  split', 'cherrytart', 'blueberry pie'], 'c h e r r y t a r t'));
// {
//   modifiedString: [
//     'a p p l e p i e',
//     'b a n a n a s p l i t',
//     'c h e r r y t a r t',
//     'b l u e b e r r y p i e'
//   ],
//   index: 2
// }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastIndexOfModifiedString(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastIndexOfModifiedString(arr, word) {
  const result = []

  for(let str of arr){
    let newStr = ''

    for(let i = 0; i < str.length; i++){
      if(str[i] !== ' ' && newStr.length) newStr += ' ' + str[i]
      else if(str[i] !== ' ') newStr += str[i]
    }

    result.push(newStr)
  }

  return {modifiedString: result, index: result.lastIndexOf(word)};
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastIndexOfModifiedString', () => {
  expect(findLastIndexOfModifiedString).to.be.a('function');
});

it('findLastIndexOfModifiedString(["cat", "do  g", "car  ", "  cow"], "c a t") should return { modifiedString: [ "c a t", "d o g", "c a r", "c o w" ], index: 0 }', function() {
  expect(findLastIndexOfModifiedString(["cat", "do  g", "car  ", "  cow"], "c a t")).to.deep.equal({ modifiedString: [ "c a t", "d o g", "c a r", "c o w" ], index: 0 });
});

it('findLastIndexOfModifiedString(["applepie", "banana  split", "cherrytart", "blueberry pie"], "c h e r r y t a r t") should return correct object', function() {
  expect(findLastIndexOfModifiedString(["applepie", "banana  split", "cherrytart", "blueberry pie"], "c h e r r y t a r t")).to.deep.equal({
    modifiedString: [
      'a p p l e p i e',
      'b a n a n a s p l i t',
      'c h e r r y t a r t',
      'b l u e b e r r y p i e'
    ],
    index: 2
  });
});

it('findLastIndexOfModifiedString(["hello", "world", "hi"], "h e l l o") should return correct object', function() {
  expect(findLastIndexOfModifiedString(["hello", "world", "hi"], "h e l l o")).to.deep.equal({
    modifiedString: [ 'h e l l o', 'w o r l d', 'h i' ],
    index: 0
  });
});

it('findLastIndexOfModifiedString(["one", "two", "three"], "t w o") should return correct object', function() {
  expect(findLastIndexOfModifiedString(["one", "two", "three"], "t w o")).to.deep.equal({
    modifiedString: [ 'o n e', 't w o', 't h r e e' ],
    index: 1
  });
});

it('findLastIndexOfModifiedString(["cat", "dog", "car", "cow"], "d o g") should return correct object', function() {
  expect(findLastIndexOfModifiedString(["cat", "dog", "car", "cow"], "d o g")).to.deep.equal({
    modifiedString: [ 'c a t', 'd o g', 'c a r', 'c o w' ],
    index: 1
  });
});

it('findLastIndexOfModifiedString(["apple", "banana", "cherry"], "b a n a n a") should return correct object', function() {
  expect(findLastIndexOfModifiedString(["apple", "banana", "cherry"], "b a n a n a")).to.deep.equal({
    modifiedString: [ 'a p p l e', 'b a n a n a', 'c h e r r y' ],
    index: 1
  });
});

it('findLastIndexOfModifiedString(["apple", "banana", "cherry"], "g r a p e") should return correct object with index -1', function() {
  expect(findLastIndexOfModifiedString(["apple", "banana", "cherry"], "g r a p e")).to.deep.equal({
    modifiedString: [ 'a p p l e', 'b a n a n a', 'c h e r r y' ],
    index: -1
  });
});

it('findLastIndexOfModifiedString([], "anything") should return empty object with index -1', function() {
  expect(findLastIndexOfModifiedString([], "anything")).to.deep.equal({ modifiedString: [], index: -1 });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
