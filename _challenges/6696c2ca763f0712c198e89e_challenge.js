// NAMEEN:
// NAMERU:Поиск и умножение строк

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `arrayModify`, которая принимает два параметра:
* `array` - массив;
* `str` - строка для поиска.

Массив `array` может содержать любое количество строк, чисел и имеет следующую структуру (пример):
```javascript
[0, "E", "A", "F", "G", "A", "hello", 777]
```

Функция должна вернуть измененный массив `array` с добавленным в конец новым элементом.

Условия:
* Функция должна выполнять поиск строки `str` в массиве `array`;
* Если строка `str` найдена, то в конец массива `array` должна быть добавлена строка `str`, повторенная `n` раз, где `n` равно индексу первой найденной строки `str` в массиве `array`.
* Если строка `str` не найдена, то массив `array` возвращается без изменений.

Примеры запуска функции:
```javascript
arrayModify([0, "E", "A", "F", "G", "A", "hello", 777], "A");  // [0, "E", "A", "F", "G", "A", "hello", 777, "AA"]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function arrayModify(array, str) {
  const index = array.indexOf(str);
  if (index !== -1) {
    array.push(str.repeat(index));
  }
  return array;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function `arrayModify`', () => {
  expect(typeof arrayModify).eq('function');
});

it('arrayModify(["cat", "dog", "cat", "cat", "dog", "bird"], "bird");  // ["cat", "dog", "cat", "cat", "dog", "bird", "birdbirdbirdbirdbird"]', () => {
  expect(arrayModify(["cat", "dog", "cat", "cat", "dog", "bird"], "bird")).to.eql(["cat", "dog", "cat", "cat", "dog", "bird", "birdbirdbirdbirdbird"]);
});

it('arrayModify(["A", "B", "B", "A"], "A");  // ["A", "B", "B", "A", ""]', () => {
  expect(arrayModify(["A", "B", "B", "A"], "A")).to.eql(["A", "B", "B", "A", ""]);
});

it('arrayModify(["John", "Mary", "John", "John", "Mary", "Kate"], "KATE");  // ["John", "Mary", "John", "John", "Mary", "Kate"]', () => {
  expect(arrayModify(["John", "Mary", "John", "John", "Mary", "Kate"], "KATE")).to.eql(["John", "Mary", "John", "John", "Mary", "Kate"]);
});

it('arrayModify([0, 1, 0, 5, 0, 0, 1, "1"], "1");  // [0, 1, 0, 5, 0, 0, 1, "1", "1111111"]', () => {
  expect(arrayModify([0, 1, 0, 5, 0, 0, 1, "1"], "1")).to.eql([0, 1, 0, 5, 0, 0, 1, "1", "1111111"]);
});

it('arrayModify(["Alpha", "Beta", "Gamma", "Delta", "Beta"], "Beta");  // ["Alpha", "Beta", "Gamma", "Delta", "Beta", "Beta"]', () => {
  expect(arrayModify(["Alpha", "Beta", "Gamma", "Delta", "Beta"], "Beta")).to.eql(["Alpha", "Beta", "Gamma", "Delta", "Beta", "Beta"]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
