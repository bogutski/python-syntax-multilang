// NAMEEN:
// NAMERU:Удалить дубликаты объектов из массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Давайте рассмотрим задачу как удалить дубликаты объектов из массива.

Функция `duplicatedObjects` принимает массив объектов `arr` и возвращает массив объектов без дубликатов.

Алгоритм решения задачи:
* Создать пустой массив `result`
* Перебрать массив `arr` с помощью цикла `for`
* Создать переменную `isUnique` со значением `true`
* Перебрать массив `result` с помощью цикла `for`
* С помощью метода `JSON.stringify` переведите элементы циклов (объекты) `arr` и `result` в строку и сравните их. Если строки равны, то `isUnique` присвойте значение `false` и выйти из цикла
* Если `isUnique` равно `true`, то добавьте элемент `arr[i]` в массив `result`
* Верните массив `result`

Примеры запуска функции:
```javascript
duplicatedObjects([{name: "Alice", age: 15}, {name: "Tom", age: 15}, {name: "Alice", age: 15}]) // [{name: "Alice", age: 15}, {name: "Tom", age: 15}]

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function duplicatedObjects
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function duplicatedObjects(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;
    for (let j = 0; j < result.length; j++) {
      if (JSON.stringify(arr[i]) === JSON.stringify(result[j])) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      result.push(arr[i]);
    }

  }
  return result;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function duplicatedObjects', () => {
  expect(duplicatedObjects).to.be.a('function');
});

it('duplicateObjects([{name: "Alice", age: 15}, {name: "Tom", age: 15}, {name: "Alice", age: 15}]) should return [{name: "Alice", age: 15}, {name: "Tom", age: 15}', () => {
  expect(duplicatedObjects([{name: "Alice", age: 15}, {name: "Tom", age: 15}, {
    name: "Alice",
    age: 15
  }])).to.deep.equal([{name: "Alice", age: 15}, {name: "Tom", age: 15}]);
});

it('duplicateObjects([{name: "Alice", age: 15}, {name: "Tom", age: 15}, {name: "Alice", age: 15}, {name: "Tom", age: 15}]) should return [{name: "Alice", age: 15}, {name: "Tom", age: 15}', () => {
  expect(duplicatedObjects([{name: "Alice", age: 15}, {name: "Tom", age: 15}, {name: "Alice", age: 15}, {
    name: "Tom",
    age: 15
  }])).to.deep.equal([{name: "Alice", age: 15}, {name: "Tom", age: 15}]);
});

it('duplicateObjects([{company: "Apple", employee: 1500}, {company: "Netflix", founded: 1997}]) should return [{company: "Apple", employee: 1500}, {company: "Netflix", founded: 1997}]', () => {
  expect(duplicatedObjects([{company: "Apple", employee: 1500}, {
    company: "Netflix",
    founded: 1997
  }])).to.deep.equal([{company: "Apple", employee: 1500}, {company: "Netflix", founded: 1997}]);
});

it('duplicateObjects([{}, {}, {}]) should return [{}]', () => {
  expect(duplicatedObjects([{}, {}, {}])).to.deep.equal([{}]);
});

it('duplicateObjects([]) should return []', () => {
  expect(duplicatedObjects([])).to.deep.equal([]);
});

it('duplicateObjects([{letter: "a", class: "vowel", number: 5}, {letter: "a", class: "vowel", number: 5}, {letter: "e", class: "vowel", number: 5},]) should return [{letter: "a", class: "vowel", number: 5}, {letter: "e", class: "vowel", number: 5}]', () => {
  expect(duplicatedObjects([{letter: "a", class: "vowel", number: 5}, {
    letter: "a",
    class: "vowel",
    number: 5
  }, {letter: "e", class: "vowel", number: 5},])).to.deep.equal([{letter: "a", class: "vowel", number: 5}, {
    letter: "e",
    class: "vowel",
    number: 5
  }]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
