// NAMEEN:
// NAMERU: Удалить дубликаты с использованием `indexOf` и `lastIndexOf`

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `deleteDuplicates` принимает массив в качестве параметра. Массив может состоять из разных типов элементов.

Необходимо удалить все дубликаты из массива и вернуть массив без дубликатов.

Для решения этой задачи попробуйте использовать методы `indexOf` и `lastIndexOf`.

Примеры запуска функции:
```javascript
deleteDuplicates([1, 2, 3, 3, 4, 5, 5, 5, 6]);        // [1, 2, 3, 4, 5, 6]
deleteDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1]);        // [1]
deleteDuplicates(['test', 0, true, true, 1, 'test']); // [0, true, 1, 'test']
```

Подсказка решения:
* Используйте цикл `for` для перебора элементов массива
* Используйте сравнение: если индекс первого вхождения элемента в массиве не равен индексу последнего вхождения элемента в массиве,
то это значит, что элемент повторяется в массиве и его необходимо удалить c помощью метода `splice`
* Уменьшите итератор на 1, чтобы не пропустить элемент после удаления

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function deleteDuplicates(arr) {
  for(let i = 0; i < arr.length; i++){
    if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function deleteDuplicates', () => {
  expect(deleteDuplicates).to.be.a('function');
});

it('deleteDuplicates([1, 2, 3, 3, 4, 5, 5, 5, 6]) should return [1, 2, 3, 4, 5, 6]', () => {
  expect(deleteDuplicates([1, 2, 3, 3, 4, 5, 5, 5, 6])).to.deep.equal([1, 2, 3, 4, 5, 6]);
});


it('deleteDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1]) should return [1]', () => {
  expect(deleteDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1])).to.deep.equal([1]);
});

it('deleteDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
  expect(deleteDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

it('deleteDuplicates([true, true, false, false, "true", "true"]) should return [true, false, "true"]', () => {
  expect(deleteDuplicates([true, true, false, false, "true", "true"])).to.deep.equal([true, false, "true"]);
});

it('deleteDuplicates([]) should return []', () => {
  expect(deleteDuplicates([])).to.deep.equal([]);
});

it('deleteDuplicates(["", "", ""]) should return [""]', () => {
  expect(deleteDuplicates(["", "", ""])).to.deep.equal([""]);
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
