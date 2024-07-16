// NAMEEN:
// NAMERU:Какие элементы второго массива не входят в первый массив?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `whatNotIncluded` принимает два массива, состоящие из строк или чисел.

Функция должна вернуть массив элементов, которые есть во втором массиве, но не встречаются в первом.

Если один из массивов пустой, то функция должна вернуть строку "Array is empty".

Если все элементы второго массива встречаются в первом, то функция должна вернуть пустой массив.

Примеры запуска функции:
```javascript
whatNotIncluded([1, 2, 3], [1, 2, 3]) // []
whatNotIncluded([1, 2, 3], [1, 2, 3, 4]) // ["4"]
whatNotIncluded(["js", "needs", "more", "practice"], ["js", "js", "challenge"]) // ["js", "challenge"]
whatNotIncluded(["hello", "world"], ["js", "needs", "more", "practice"]) // ["js", "needs", "more", "practice"]
whatNotIncluded(["hello", "world"], []) // "Array is empty"
```

Подсказка:
Задача повторяет решение предыдущих задач, но с небольшими изменениями.
При проверке свойства объекта, если значение равно нулю, то нужно удалить свойство из объекта.

И вывести ключи объекта в массив.

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function whatNotIncluded(arr1, arr2) {
  if (!arr2.length || !arr1.length) return "Array is empty"
  const obj = {};
  for (let i = 0; i < arr2.length; i++) {
    if (!obj[arr2[i]]) obj[arr2[i]] = 1;
    else obj[arr2[i]]++;
  }

  for (let i = 0; i < arr1.length; i++) {

    if (obj[arr1[i]]) {
      obj[arr1[i]]--;
    }
    if (obj[arr1[i]] === 0) {
      delete obj[arr1[i]]
    }
  }
  return Object.keys(obj)
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function whatNotIncluded', () => {
  expect(whatNotIncluded).to.be.a('function');
});

it('whatNotIncluded([1, 2, 3], [1, 2, 3]) should return []', () => {
  expect(whatNotIncluded([1, 2, 3], [1, 2, 3])).to.deep.equal([]);
});

it('whatNotIncluded([1, 2, 3], [1, 2, 3, 4]) should return ["4"]', () => {
  expect(whatNotIncluded([1, 2, 3], [1, 2, 3, 4])).to.deep.equal(["4"]);
});

it('whatNotIncluded(["js", "needs", "more", "practice"], ["js", "js", "challenge"]) should return ["js", "challenge"]', () => {
  expect(whatNotIncluded(["js", "needs", "more", "practice"], ["js", "js", "challenge"])).to.deep.equal(["js", "challenge"]);
});

it('whatNotIncluded(["hello", "world"], ["js", "needs", "more", "practice"]) should return ["js", "needs", "more", "practice"]', () => {
  expect(whatNotIncluded(["hello", "world"], ["js", "needs", "more", "practice"])).to.deep.equal(["js", "needs", "more", "practice"]);
});

it('whatNotIncluded(["hello", "world"], []) should return "Array is empty"', () => {
  expect(whatNotIncluded(["hello", "world"], [])).to.equal("Array is empty");
});

it('whatNotIncluded([], []) should return "Array is empty"', () => {
  expect(whatNotIncluded([], [])).to.equal("Array is empty");
});

it('whatNotIncluded([10,20,30,30,30], [10,10,20,20]) should return ["10", "20"]', () => {
  expect(whatNotIncluded([10, 20, 30, 30, 30], [10, 10, 20, 20])).to.deep.equal(["10", "20"]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
