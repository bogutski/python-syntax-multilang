// NAMEEN:
// NAMERU:Исключить слова с пробелами. Массивы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `changeElement` принимает массив строк и строку.

Массив состоит из 5 элементов.

Необходимо найти в массиве все элементы, которые содержат пробелы, и заменить их на второй параметр функции - строку.

Функция должна возвращать измененный массив.

Используйте метод `splice` для изменения массива.

Пример запуска функции:
```javascript
changeElement(['John Smith', 'MarthaLee', 'TomMcKenzie', 'Alice New', 'Derrick Kent'], 'updateName')
 // ["updateName", "MarthaLee", "TomMcKenzie", "updateName", "updateName"]
 ```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function changeElement(arr, str) {
  if (arr[0].includes(' ')) {
    arr.splice(0, 1, str)
  }

  if (arr[1].includes(' ')) {
    arr.splice(1, 1, str)
  }

  if (arr[2].includes(' ')) {
    arr.splice(2, 1, str)
  }

  if (arr[3].includes(' ')) {
    arr.splice(3, 1, str)
  }

  if (arr[4].includes(' ')) {
    arr.splice(4, 1, str)
  }
  return arr
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function changeElement', () => {
  expect(changeElement).to.be.a('function');
});

it(`function changeElement should include 'splice'`, () => {
    expect(changeElement.toString().includes('splice')).to.equal(true);
});

it(`changeElement(['Hello world', 'hello', 'newWord', 'first step', 'hot summer'], 'changedElement') should return ["changedElement", "hello", "newWord", "changedElement", "changedElement"]`, () => {
  expect(changeElement(['Hello world', 'hello', 'newWord', 'first step', 'hot summer'], 'changedElement')).to.eql(["changedElement", "hello", "newWord", "changedElement", "changedElement"]);
});

it(`changeElement(['oneWord', 'two words, 'threeWords', 'four words', 'five words'], 'useCamelCase') should return ['oneWord', 'useCamelCase', 'threeWords', 'useCamelCase', 'useCamelCase']`, () => {
  expect(changeElement(['oneWord', 'two words', 'threeWords', 'four words', 'five words'], 'useCamelCase')).to.eql(['oneWord', 'useCamelCase', 'threeWords', 'useCamelCase', 'useCamelCase']);
});

it(`changeElement(['applePie', 'carrot pie', 'cherryPie', 'blueberry pie', 'strawberryPie'], 'modificationRequired') should return ['applePie', 'modificationRequired', 'cherryPie', 'modificationRequired', 'strawberryPie']`, () => {
  expect(changeElement(['applePie', 'carrot pie', 'cherryPie', 'blueberry pie', 'strawberryPie'], 'modificationRequired')).to.eql(['applePie', 'modificationRequired', 'cherryPie', 'modificationRequired', 'strawberryPie']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
