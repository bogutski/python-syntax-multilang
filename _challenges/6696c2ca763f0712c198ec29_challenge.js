// NAMEEN:
// NAMERU:Массив со строкой и индексами элементов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `stringAndElIndexes` принимает строку и элемент.

Исправьте функцию, чтобы она возвращала массив, в котором:

* Первый элемент - это оригинальная строка, из которой удалён заданный элемент,

* Все остальные элементы - это индексы элементов, которые были удалены из оригинальной строки


Например, строка `apple` и элемент `p`, функция должна вернуть массив `['ale', 1, 2]`.

В случае пустой строки функция должна вернуть пустой массив.

В коде есть 5 ошибок. От цикла `for` до последней условия `if` - всё в порядке.

Попытайтесь разобраться и переписать код самостоятельно.


Примеры запуска функции:
```javascript
stringAndElIndexes('apple', 'a'); // ['pple', 0]
stringAndElIndexes('Hello World', 'o'); // ['Hell Wrld', 4, 7]
stringAndElIndexes('', ''); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function stringAndElIndexes(){
  arr = [];
  newString = '';
  for (let i = 0; i < string.length; i++){
    if(string[i] === el){
      arr.push(i);
    } else {
      newString += string[i];
    }
  }
  if(newString.length !==0) {
    arr.unshift(newString);
  }
  arr;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stringAndElIndexes(string, el){
  const arr = [];
  let newString = '';
  for (let i = 0; i < string.length; i++){
    if(string[i] === el)arr.push(i);
    else newString += string[i];
  }
  if(newString.length !==0) arr.unshift(newString);
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function stringAndElIndexes', () => {
  expect(stringAndElIndexes).to.be.a('function');
});

it("stringAndElIndexes('Hello World', 'o') should return ['Hell Wrld', 4, 7]", () => {
  expect(stringAndElIndexes('Hello World', 'o')).to.deep.equal(['Hell Wrld', 4, 7]);
});

it("stringAndElIndexes('Hello World', 'l') should return ['Heo Word', 2, 3, 9]", () => {
  expect(stringAndElIndexes('Hello World', 'l')).to.deep.equal(['Heo Word', 2, 3, 9]);
});

it("stringAndElIndexes('Hello World', '') should return ['Hello World']", () => {
  expect(stringAndElIndexes('Hello World', '')).to.deep.equal(['Hello World']);
});

it("stringAndElIndexes('', 'w') should return []", () => {
  expect(stringAndElIndexes('', 'w')).to.deep.equal([]);
});

it("stringAndElIndexes('', '') should return []", () => {
  expect(stringAndElIndexes('', '')).to.deep.equal([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
