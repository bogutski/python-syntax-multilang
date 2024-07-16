// NAMEEN:
// NAMERU: Самое длинное слово в массиве
/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `theLongestWord`, которая принимает массив и должна вернуть количество символов самого длинного слова в нем.

Вывод функции должен выглядеть так: `The longest word has 'wordLength' length`.

Если все слова одинакового размера, то функция должна вернуть длину первого элемент массива.

Если массив пустой, то функция должна вернуть `"No words found"`.

Примеры запуска функции:
```javascript
theLongestWord(['The', 'longest', 'word']) // 'The longest word has 7 length'
theLongestWord(['Karl', 'John', 'Hugo']) // 'The longest word has 4 length'
theLongestWord([]) // 'No words found'
```


INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function theLongestWord(arr){
  if(arr.length === 0) return "No words found";
  let wordLength = arr[0].length;
  for (let i = 0; i < arr.length; i++){
    if(wordLength < arr[i].length) {
      wordLength = arr[i].length;
    }
  }
  return `The longest word has ${wordLength} length`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('theLongestWord is a function', () => {
  expect(theLongestWord).to.be.a('function');
})
it("theLongestWord(['The', 'longest', 'word']) should return 'The longest word has 7 length'", () =>{
  expect(theLongestWord(['The', 'longest', 'word'])).equal('The longest word has 7 length');
});
it("theLongestWord(['kiwi', 'fig', 'blackberry']) should return 'The longest word has 10 length'", () =>{
  expect(theLongestWord(['kiwi', 'fig', 'blackberry'])).equal('The longest word has 10 length');
});
it("countWordsNotNumbers(['Karl', 'John', 'Hugo']) should return 'The longest word is Karl and it has 4 length'", () =>{
  expect(theLongestWord(['Karl', 'John', 'Hugo'])).equal('The longest word has 4 length');
});
it("countWordsNotNumbers([]) should return 'No words found'", () =>{
  expect(theLongestWord([])).equal('No words found');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
