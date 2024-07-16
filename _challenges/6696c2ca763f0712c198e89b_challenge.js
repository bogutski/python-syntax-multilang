// NAMEEN:
// NAMERU:Объединение модифицированных массивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `arrayModifier`, которая принимает два параметра:
* `array1` – массив, из которого будут удалены первый и последний элементы;
* `array2` – массив, в который будут добавлены первый и последний элементы массива `array1`.

Функция должна вернуть новый массив, составленный следующим образом:
* из массива `array1` удаляются первый и последний элементы;
* уделенные элементы массива `array1` добавляются в начало и конец массива `array2` соответственно;
* создается и возвращается новый массив, состоящий из объединенных элементов измененных массивов `array1` и `array2` в указанном порядке.

Примеры запуска функции:
```javascript
arrayModifier(["cat", "dog", "bird", "fish"], [1, 2, 3]);  // ["dog", "bird", "cat", 1, 2, 3, "fish"]
arrayModifier(["First", "Second", "Third", "Fourth"], ["A", "B", "C"]);  // ["Second", "Third", "First", "A", "B", "C", "Fourth"]
```

Примечание: используйте метод `concat()`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function arrayModifier(array1, array2) {
  let array1Modified = array1;
  let array2Modified = array2;
  array2Modified.unshift(array1Modified.shift());
  array2Modified.push(array1Modified.pop());
  return array1Modified.concat(array2Modified);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function `arrayModifier`', () => {
  expect(typeof arrayModifier).eq('function');
});

it('arrayModifier([1, 2, 3, 4, 5], [6, 7, 8, 9]);  // [2, 3, 4, 1, 6, 7, 8, 9, 5]', () => {
  expect(arrayModifier([1, 2, 3, 4, 5], [6, 7, 8, 9])).deep.eq([2, 3, 4, 1, 6, 7, 8, 9, 5]);
});

it('arrayModifier(["black", "white", "red", "green", "blue"], ["yellow", "orange"]);  // ["white", "red", "green", "black", "yellow", "orange", "blue"]', () => {
  expect(arrayModifier(["black", "white", "red", "green", "blue"], ["yellow", "orange"])).deep.eq(["white", "red", "green", "black", "yellow", "orange", "blue"]);
});

it('arrayModifier(["cat", "dog", "bird", "fish", "hamster"], [1, 2, 3, 4, 5]);  // ["dog", "bird", "fish", "cat", 1, 2, 3, 4, 5, "hamster"]', () => {
  expect(arrayModifier(["cat", "dog", "bird", "fish", "hamster"], [1, 2, 3, 4, 5])).deep.eq(["dog", "bird", "fish", "cat", 1, 2, 3, 4, 5, "hamster"]);
});

it('arrayModifier(["First", "Second"], ["A", "B", "C"]);  // ["First", "A", "B", "C", "Second"]', () => {
  expect(arrayModifier(["First", "Second"], ["A", "B", "C"])).deep.eq(["First", "A", "B", "C", "Second"]);
});

it('arrayModifier(["Plus", "Minus"], []);  // ["Plus", "Minus"]', () => {
  expect(arrayModifier(["Plus", "Minus"], [])).deep.eq(["Plus", "Minus"]);
});

it('arrayModifier(["Hello", "World"], ["!"]);  // ["Hello", "!", "World"]', () => {
  expect(arrayModifier(["Hello", "World"], ["!"])).deep.eq(["Hello", "!", "World"]);
});

it('arrayModifier([1988, 1999, 2000, 2011, 2012], [2013, 2014, 2015, 2016, 2017]);  // [1999, 2000, 2011, 1988, 2013, 2014, 2015, 2016, 2017, 2012]', () => {
  expect(arrayModifier([1988, 1999, 2000, 2011, 2012], [2013, 2014, 2015, 2016, 2017])).deep.eq([1999, 2000, 2011, 1988, 2013, 2014, 2015, 2016, 2017, 2012]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
